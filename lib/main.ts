import { parse } from "@vue/compiler-dom";
import constructTree from "hyntax/lib/construct-tree";
import tokenize from "hyntax/lib/tokenize";

import { wrapIntoBase } from "./ast-helpers";
import { compileAst } from "./compile-ast";
import { convertHtmlAst } from "./html/convert-ast";
import type { ConvertOptions, PublicOptions } from "./models";
import { Nodes } from "./models";
import { converVueAst } from "./vue/convert-ast";

function buildHtmlAst(html: string) {
  return constructTree(tokenize(html).tokens).ast;
}

function buildVueAst(html: string) {
  return parse(html);
}

const setupDefaultOptions = ({
  attrComma = true,
  ...options
}: Partial<PublicOptions>): ConvertOptions => ({
  attrSep: attrComma ? ", " : " ",
  bodyLess: false,
  doubleQuotes: true,
  encode: true,
  inlineCSS: false,
  symbol: "  ",
  parser: "html",
  classesAtEnd: false,
  ...options,
});

export function convert(html: string, options: Partial<PublicOptions> = {}) {
  const definedOptions = setupDefaultOptions(options);

  let convertedAst: Nodes[];
  if (definedOptions.parser === "html") {
    const ast = buildHtmlAst(html);
    convertedAst = convertHtmlAst(ast);
  } else {
    const ast = buildVueAst(html);
    convertedAst = converVueAst(ast);
  }
  return compileAst(
    options.bodyLess ? convertedAst : wrapIntoBase(convertedAst),
    definedOptions
  );
}
