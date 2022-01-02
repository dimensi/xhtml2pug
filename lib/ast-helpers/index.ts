import { Node, Nodes, Tag } from "../models";

const findTag = (nodes: Nodes[], tagName: string): Tag | undefined => {
  return nodes.find((node) => {
    if (node.node === Node.Tag && node.name === tagName) {
      return node;
    }

    if (node.node === Node.Tag && node.children) {
      return findTag(node.children, tagName);
    }
    return undefined
  }) as Tag | undefined
};

const createTag = (name: string, children: Nodes[]) =>
  ({ node: Node.Tag, name, children, attrs: [] } as Nodes);

export const wrapIntoBase = (nodes: Nodes[]): Nodes[] => {
  const html = findTag(nodes, "html");
  const body = findTag(nodes, "body");
  const head = findTag(nodes, "head");

  if (html) return nodes;

  if (!body && head) {
    return [createTag("html", [head])];
  }

  if (body && !head) {
    return [createTag("html", [body])];
  }

  if (!html && body && head) {
    return [createTag("html", [head, body])];
  }

  return [createTag("html", [createTag("body", nodes)])];
};
