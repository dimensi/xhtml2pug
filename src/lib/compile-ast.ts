import {
  Attr,
  ConvertOptions,
  Doctype,
  Node,
  Nodes,
  Script,
  Style,
  Tag,
  Text
} from './models'

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

type IndentOptions = {
  readonly level: number;
  readonly symbol: string;
};

const getIndent = ({ level, symbol }: IndentOptions) => symbol.repeat(level);

const wrapText = (str: string, options) =>
  str
    ? '.\n' +
      str
        .trim()
        .split('\n')
        .map(str => getIndent(options) + str.trim())
        .join('\n')
    : '';

const compileAttrs = (attrs: readonly Attr[]) =>
  attrs
    .map(({ key, value }) => [key, value ? `"${value}"` : null].filter(Boolean).join('='))
    .join(' ');

const compileDoctype = (node: Doctype, options: IndentOptions) =>
  `${getIndent(options)}doctype ${compileAttrs(node.attrs)}`;

const compileText = (node: Text, options: IndentOptions) =>
  node.value.includes('\n')
    ? '\n' +
      node.value
        .split('\n')
        .map(str => `${getIndent(options)}| ${str.trim()}`)
        .join('\n')
    : ' ' + node.value;

const compileScript = (node: Script, options: IndentOptions) =>
  `${getIndent(options)}script${wrapAttrs(compileAttrs(node.attrs))}${wrapText(
    node.value ?? '',
    { ...options, level: options.level + 1 }
  )}`;

const compileStyle = (node: Style, options: IndentOptions) =>
  `${getIndent(options)}style${wrapAttrs(compileAttrs(node.attrs))}${wrapText(
    node.value ?? '',
    { ...options, level: options.level + 1 }
  )}`;

const compileTag = (node: Tag, options: IndentOptions) => {
  const { attrs, className, id } = formatAttrsForTag(node.attrs);
  const tag = [
    getIndent(options),
    id || (className && node.name === 'div') ? '' : node.name,
    id ? `#${id}` : '',
    className ? '.' + className.split(' ').join('.') : '',
    wrapAttrs(compileAttrs(attrs)),
  ]
    .filter(Boolean)
    .join('');
  const textNode = getFirstText(node.children);
  if (!textNode) return tag;
  return `${tag}${compileText(textNode, { ...options, level: options.level + 1 })}`;
};

export function compileAst(ast: readonly Nodes[], { symbol }: ConvertOptions): string {

  const deepCompile = (ast: readonly Nodes[], level = 0) =>
    ast.reduce<readonly string[]>((acc, node) => {
      switch (node.node) {
        case Node.Doctype:
          return acc.concat(compileDoctype(node, { level, symbol }));
        case Node.Script:
          return acc.concat(compileScript(node, { level, symbol }));
        case Node.Style:
          return acc.concat(compileStyle(node, { level, symbol }));
        case Node.Text:
          return acc.concat(compileText(node, { level, symbol }));
        case Node.Tag:
          return acc.concat(
            compileTag(node, { level, symbol }),
            ...deepCompile(getNodesWithoutText(node.children), level + 1)
          );
      }
    }, []);

  return deepCompile(ast).join('\n');
}
