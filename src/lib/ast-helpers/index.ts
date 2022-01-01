import { Node, Nodes } from '../models';

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

const createTag = (name: string, children: readonly Nodes[]) =>
  ({ node: Node.Tag, name, children, attrs: [] } as Nodes);

export const wrapIntoBase = (nodes: readonly Nodes[]): readonly Nodes[] => {
  const html = findTag(nodes, 'html');
  const body = findTag(nodes, 'body');
  const head = findTag(nodes, 'head');

  if (html) return nodes;

  if (!body && head) {
    return [createTag('html', [head])];
  }

  if (body && !head) {
    return [createTag('html', [body])];
  }

  if (!html && body && head) {
    return [createTag('html', [head, body])];
  }

  return [createTag('html', [createTag('body', nodes)])];
};
