export enum Node {
  Doctype,
  Tag,
  Text,
  Script,
  Style,
  Comment,
}

export interface Attr {
  key: string;
  value?: string;
}

export interface Text {
  node: Node.Text;
  value: string;
}

export interface Doctype {
  node: Node.Doctype;
  attrs: Attr[];
}

export interface Script {
  node: Node.Script;
  attrs: Attr[];
  value: string;
}

export interface Style {
  node: Node.Style;
  attrs: Attr[];
  value: string;
}

export interface Comment {
  node: Node.Comment;
  value: string;
}

export interface Tag {
  node: Node.Tag;
  name: string;
  attrs: Attr[];
  children: Array<Tag | Text>;
}

export type Nodes = Text | Doctype | Script | Style | Tag | Comment;

export interface PublicOptions {
  bodyLess: boolean;
  attrComma: boolean;
  encode: boolean;
  doubleQuotes: boolean;
  inlineCSS: boolean;
  symbol: string;
  parser: "html" | "vue";
  classesAtEnd: boolean;
}

export interface ConvertOptions {
  bodyLess: boolean;
  attrSep: string;
  encode: boolean;
  doubleQuotes: boolean;
  inlineCSS: boolean;
  symbol: string;
  parser: "html" | "vue";
  classesAtEnd: boolean;
}

export interface IndentOptions {
  level: number;
  symbol: string;
}

export type CompileOptions = ConvertOptions & IndentOptions;
