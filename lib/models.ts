export const Node = {
  Doctype: 0,
  Tag: 1,
  Text: 2,
  Script: 3,
  Style: 4,
  Comment: 5,
} as const;

export interface Attr {
  key: string;
  value?: string;
}

export interface Text {
  node: typeof Node.Text;
  value: string;
}

export interface Doctype {
  node: typeof Node.Doctype;
  attrs: Attr[];
}

export interface Script {
  node: typeof Node.Script;
  attrs: Attr[];
  value: string;
}

export interface Style {
  node: typeof Node.Style;
  attrs: Attr[];
  value: string;
}

export interface Comment {
  node: typeof Node.Comment;
  value: string;
}

export interface Tag {
  node: typeof Node.Tag;
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
