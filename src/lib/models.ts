export enum Node {
  Doctype,
  Tag,
  Text,
  Script,
  Style,
}

export type Attr = {
  readonly key: string;
  readonly value?: string
}

export type Text = {
  readonly node: Node.Text
  readonly value: string
};

export type Doctype = {
  readonly node: Node.Doctype
  readonly attrs: readonly Attr[]
};

export type Script = {
  readonly node: Node.Script
  readonly attrs: readonly Attr[]
  readonly value?: string;
}

export type Style = {
  readonly node: Node.Style
  readonly attrs: readonly Attr[]
  readonly value?: string;
}

export type Tag = {
  readonly node: Node.Tag
  readonly name: string;
  readonly attrs: readonly Attr[]
  readonly children: ReadonlyArray<Tag | Text>
}

export type Nodes = Text | Doctype | Script | Style | Tag
