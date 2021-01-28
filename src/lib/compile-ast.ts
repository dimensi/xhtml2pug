import { Attr, Doctype, Node, Nodes, Script, Style, Tag, Text } from './models';

const wrapAttrs = (str?: string) => (str ? `(${str})` : '');

const formatAttrsForTag = (attrs: readonly Attr[]) =>
  attrs.reduce<{
    readonly className: string;
    readonly id: string;
    readonly attrs: readonly Attr[];
  }>(
    (acc, { key, value }) => {
      if (key === 'id') {
        return {
          ...acc,
          id: value,
        };
      }
      if (key === 'class') {
        return {
          ...acc,
          className: value,
        };
      }
      return {
        ...acc,
        attrs: acc.attrs.concat({ key, value }),
      };
    },
    { className: '', id: '', attrs: [] }
  );

const getFirstText = (nodes: readonly Nodes[]) => {
  const [textNode] = nodes;
  if (textNode && textNode.node === Node.Text) return textNode;
  return null;
};

const getNodesWithoutText = (nodes: readonly Nodes[]) => {
  const [textNode, ...other] = nodes;
  if (textNode && textNode.node === Node.Text) return other;
  return nodes;
};

export function compileAst(ast: readonly Nodes[]): string {
  const getIndent = (level: number, symbol = '  ') => symbol.repeat(level);

  const wrapText = (str: string, level: number) =>
    str
      ? '.\n' +
        str
          .trim()
          .split('\n')
          .map(str => getIndent(level) + str.trim())
          .join('\n')
      : '';

  const compileAttrs = (attrs: readonly Attr[]) =>
    attrs
      .map(({ key, value }) => [key, value ? `"${value}"` : null].filter(Boolean).join('='))
      .join(' ');

  const compileDoctype = (node: Doctype, level: number) =>
    `${getIndent(level)}doctype ${compileAttrs(node.attrs)}`;

  const compileText = (node: Text, level: number) =>
    node.value.includes('\n')
      ? '\n' +
        node.value
          .split('\n')
          .map(str => `${getIndent(level)}| ${str.trim()}`)
          .join('\n')
      : ' ' + node.value;
  const compileScript = (node: Script, level: number) =>
    `${getIndent(level)}script${wrapAttrs(compileAttrs(node.attrs))}${wrapText(
      node.value ?? '',
      level + 1
    )}`;

  const compileStyle = (node: Style, level: number) =>
    `${getIndent(level)}style${wrapAttrs(compileAttrs(node.attrs))}${wrapText(
      node.value ?? '',
      level + 1
    )}`;

  const compileTag = (node: Tag, level: number) => {
    const { attrs, className, id } = formatAttrsForTag(node.attrs);
    const tag = [
      getIndent(level),
      id || className && node.name === 'div' ? '' : node.name,
      id ? `#${id}` : '',
      className ? '.' + className.split(' ').join('.') : '',
      wrapAttrs(compileAttrs(attrs)),
    ]
      .filter(Boolean)
      .join('');
    const textNode = getFirstText(node.children);
    if (!textNode) return tag;
    return `${tag}${compileText(textNode, level + 1)}`;
  };

  const deepCompile = (ast: readonly Nodes[], level = 0) =>
    ast.reduce<readonly string[]>((acc, node) => {
      switch (node.node) {
        case Node.Doctype:
          return acc.concat(compileDoctype(node, level));
        case Node.Script:
          return acc.concat(compileScript(node, level));
        case Node.Style:
          return acc.concat(compileStyle(node, level));
        case Node.Text:
          return acc.concat(compileText(node, level));
        case Node.Tag:
          return acc.concat(
            compileTag(node, level),
            ...deepCompile(getNodesWithoutText(node.children), level + 1)
          );
      }
    }, []);

  return deepCompile(ast).join('\n');
}
