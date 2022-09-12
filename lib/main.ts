import { wrapIntoBase } from "./ast-helpers";
import { compileAst } from "./compile-ast";
import { buildHtmlAst } from "./html/convert-ast";
import type { ConvertOptions, PublicOptions } from "./models";
import { buildVueAst } from "./vue/convert-ast";

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
  keepClassAttr: false,
  ...options,
});

export function convert(html: string, options: Partial<PublicOptions> = {}) {
  const definedOptions = setupDefaultOptions(options);

  const convertedAst =
    definedOptions.parser === "html" ? buildHtmlAst(html) : buildVueAst(html);

  return compileAst(
    options.bodyLess ? convertedAst : wrapIntoBase(convertedAst),
    definedOptions
  );
}
