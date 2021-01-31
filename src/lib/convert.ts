import constructTree from 'hyntax/lib/construct-tree';
import tokenize from 'hyntax/lib/tokenize';

import { compileAst } from './compile-ast';
import { convertAst } from './convert-ast';
import { ConvertOptions, PublicOptions } from './models';

function buildAst(html: string) {
  return constructTree(tokenize(html).tokens).ast;
}

const setupDefaultOptions = ({
  attrComma = true,
  ...options
}: Partial<PublicOptions>): ConvertOptions => ({
  attrSep: attrComma ? ', ' : ' ',
  bodyLess: false,
  doubleQuotes: true,
  encode: true,
  inlineCSS: false,
  symbol: '  ',
  ...options,
});

export function convert(html: string, options: Partial<PublicOptions> = {}) {
  const definedOptions = setupDefaultOptions(options);
  const ast = buildAst(html);
  const convertedAst = convertAst(ast, definedOptions);

  return compileAst(convertedAst, definedOptions);
}
