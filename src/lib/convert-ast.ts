import { TreeConstructor } from 'hyntax';

import { Comment, ConvertOptions, Doctype, Node, Nodes, Script, Style, Tag, Text } from './models';

import AnyNode = TreeConstructor.AnyNode;
import CommentNode = TreeConstructor.CommentNode;
import DoctypeNode = TreeConstructor.DoctypeNode;
import DocumentNode = TreeConstructor.DocumentNode;
import ScriptNode = TreeConstructor.ScriptNode;
import StyleNode = TreeConstructor.StyleNode;
import TagAttribute = TreeConstructor.TagAttribute;
import TagNode = TreeConstructor.TagNode;
import TextNode = TreeConstructor.TextNode;

const isTag = (child: AnyNode): child is TagNode => child.nodeType === 'tag';
const isDoctype = (child: AnyNode): child is DoctypeNode => child.nodeType === 'doctype';
const isText = (child: AnyNode): child is TextNode => child.nodeType === 'text';
const isComment = (child: AnyNode): child is CommentNode => child.nodeType === 'comment';
const isScript = (child: AnyNode): child is ScriptNode => child.nodeType === 'script';
const isStyle = (child: AnyNode): child is StyleNode => child.nodeType === 'style';

const parseAttrs = (attrs: readonly TagAttribute[] = []) =>
  attrs.map(attr => {
    if (!attr.key) {
      return { key: attr.value.content };
    }
    return { key: attr.key.content, value: attr.value?.content };
  });

const parseText = (child: TextNode): Text | null =>
  child.content.value.content.trim()
    ? {
        node: Node.Text,
        value: child.content.value.content,
      }
    : null;

const parseComment = (child: CommentNode): Comment => ({
  node: Node.Comment,
  value: child.content.value.content,
});

const parseDoctype = (child: DoctypeNode): Doctype => ({
  node: Node.Doctype,
  attrs: parseAttrs(child.content.attributes as any),
});

const parseScript = (child: ScriptNode): Script => ({
  node: Node.Script,
  attrs: parseAttrs(child.content.attributes),
  value: child.content.value?.content ?? '',
});

const parseStyle = (child: StyleNode): Style => ({
  node: Node.Style,
  attrs: parseAttrs(child.content.attributes),
  value: child.content.value?.content ?? '',
});

const parseTag = (child: TagNode, children: ReadonlyArray<Tag | Text>): Tag => ({
  node: Node.Tag,
  attrs: parseAttrs(child.content.attributes),
  name: child.content.name,
  children,
});

const findTag = (nodes: readonly Nodes[], tagName: string) => {
  return nodes.find(node => {
    if (node.node === Node.Tag && node.name === tagName) {
      return node;
    }

    if (node.node === Node.Tag && node.children) {
      return findTag(node.children, tagName);
    }

    return undefined;
  });
};

const wrapIntoTag = (nodes: readonly Nodes[], tagName: string) => {
  const tag = findTag(nodes, tagName);
  if (!tag) {
    return [{ node: Node.Tag, name: tagName, children: nodes, attrs: [] }] as readonly Nodes[];
  }
  return nodes;
};

export function convertAst(ast: DocumentNode, { bodyLess }: ConvertOptions): readonly Nodes[] {
  const deepConvert = (children: readonly AnyNode[]) =>
    children.reduce<readonly Nodes[]>((acc, child) => {
      if (isText(child)) {
        const textNode = parseText(child);
        return textNode ? acc.concat(textNode) : acc;
      }

      if (isComment(child)) {
        return acc.concat(parseComment(child));
      }

      if (isDoctype(child)) {
        return acc.concat(parseDoctype(child));
      }

      if (isScript(child)) {
        return acc.concat(parseScript(child));
      }

      if (isStyle(child)) {
        return acc.concat(parseStyle(child));
      }

      if (isTag(child)) {
        return acc.concat(parseTag(child, deepConvert(child.content.children ?? [])));
      }
      return acc;
    }, []);

  const nodes = deepConvert(ast.content.children);
  return bodyLess ? nodes : wrapIntoTag(wrapIntoTag(nodes, 'body'), 'html');
}
