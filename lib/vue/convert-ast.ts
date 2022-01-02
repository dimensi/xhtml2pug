import type {
  AttributeNode,
  CommentNode,
  DirectiveNode,
  InterpolationNode,
  PlainElementNode,
  RootNode,
  TemplateChildNode,
  TextNode,
} from "@vue/compiler-dom";
import { parse } from "@vue/compiler-dom";

import type { Attr, Comment, Nodes, Script, Style, Tag, Text } from "../models";
import { Node } from "../models";

const NodeTypes = {
  ELEMENT: 1,
  TEXT: 2,
  COMMENT: 3,
  ATTRIBUTE: 6,
  INTERPOLATION: 5,
};

const isElement = (child: TemplateChildNode): child is PlainElementNode =>
  child.type === NodeTypes.ELEMENT;
const isText = (child: TemplateChildNode): child is TextNode =>
  child.type === NodeTypes.TEXT;
const isComment = (child: TemplateChildNode): child is CommentNode =>
  child.type === NodeTypes.COMMENT;
const isAttr = (attr: AttributeNode | DirectiveNode): attr is AttributeNode =>
  attr.type === NodeTypes.ATTRIBUTE;
const isInterpolation = (
  child: TemplateChildNode
): child is InterpolationNode => child.type === NodeTypes.INTERPOLATION;

export const parseAttrs = (
  attrs: Array<AttributeNode | DirectiveNode>
): Attr[] =>
  attrs.map((attr) => {
    if (isAttr(attr)) {
      return { key: attr.name, value: attr.value?.content };
    }

    return { key: attr.loc.source };
  });

export const parseText = (child: TextNode): Text => ({
  node: Node.Text,
  value: child.content.trim(),
});
export const parseComment = (child: CommentNode): Comment => ({
  node: Node.Comment,
  value: child.content.trim(),
});
export const parseTag = (
  child: PlainElementNode,
  children: Array<Tag | Text>
): Tag => ({
  node: Node.Tag,
  name: child.tag,
  attrs: parseAttrs(child.props),
  children,
});

const parseScript = (child: PlainElementNode): Script => ({
  node: Node.Script,
  attrs: parseAttrs(child.props),
  value: child.children
    .map((el) => (el as TextNode).content)
    .join("\n")
    .trim(),
});

const parseStyle = (child: PlainElementNode): Style => ({
  node: Node.Style,
  attrs: parseAttrs(child.props),
  value: child.children
    .map((el) => (el as TextNode).content)
    .join("\n")
    .trim(),
});

const parseInterpolation = (child: InterpolationNode): Text => ({
  node: Node.Text,
  value: child.loc.source,
});

export function converVueAst(ast: RootNode): Nodes[] {
  const deepConvert = (children: TemplateChildNode[]): Nodes[] =>
    children.reduce<Nodes[]>((acc, child) => {
      if (isText(child)) {
        return acc.concat(parseText(child));
      }

      if (isInterpolation(child)) {
        return acc.concat(parseInterpolation(child));
      }

      if (isComment(child)) {
        return acc.concat(parseComment(child));
      }

      if (isElement(child) && child.tag === "script") {
        return acc.concat(parseScript(child));
      }

      if (isElement(child) && child.tag === "style") {
        return acc.concat(parseStyle(child));
      }

      /* istanbul ignore else */
      if (isElement(child)) {
        const children = deepConvert(child.children);
        return acc.concat(parseTag(child, children as Array<Tag | Text>));
      }

      console.error(child);
      return acc;
    }, []);

  return deepConvert(ast.children);
}

export function buildVueAst(html: string) {
  return converVueAst(parse(html));
}
