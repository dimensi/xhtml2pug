export enum Node {
  Doctype,
  Tag,
  Text,
  Script,
  Style,
  Comment,
}

export type Attr = {
  readonly key: string;
  readonly value?: string;
};

export type Text = {
  readonly node: Node.Text;
  readonly value: string;
};

export type Doctype = {
  readonly node: Node.Doctype;
  readonly attrs: readonly Attr[];
};

export type Script = {
  readonly node: Node.Script;
  readonly attrs: readonly Attr[];
  readonly value: string;
};

export type Style = {
  readonly node: Node.Style;
  readonly attrs: readonly Attr[];
  readonly value: string;
};

export type Comment = {
  readonly node: Node.Comment;
  readonly value: string;
};

export type Tag = {
  readonly node: Node.Tag;
  readonly name: string;
  readonly attrs: readonly Attr[];
  readonly children: ReadonlyArray<Tag | Text>;
};

export type Nodes = Text | Doctype | Script | Style | Tag | Comment;

export type PublicOptions = {
  readonly bodyLess: boolean;
  readonly attrComma: boolean;
  readonly encode: boolean;
  readonly doubleQuotes: boolean;
  readonly inlineCSS: boolean;
  readonly symbol: string;
  readonly parser: 'html' | 'vue';
  readonly classesAtEnd: boolean;
};

export type ConvertOptions = {
  readonly bodyLess: boolean;
  readonly attrSep: string;
  readonly encode: boolean;
  readonly doubleQuotes: boolean;
  readonly inlineCSS: boolean;
  readonly symbol: string;
  readonly parser: 'html' | 'vue';
  readonly classesAtEnd: boolean;
};

export type IndentOptions = {
  readonly level: number;
  readonly symbol: string;
};

export type CompileOptions = ConvertOptions & IndentOptions;
