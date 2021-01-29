import { constructTree, tokenize } from 'hyntax'

import { compileAst } from './compile-ast'
import { convertAst } from './convert-ast'
import { ConvertOptions } from './models'

function buildAst(html: string) {
  return constructTree(tokenize(html).tokens).ast
}

const setupDefaultOptions = (options: Partial<ConvertOptions>): ConvertOptions => ({
  attrComma: false,
  bodyLess: false,
  doubleQuotes: false,
  encode: false,
  inlineCSS: false,
  symbol: '  ',
  ...options
})

export async function convert(html: string, options?: Partial<ConvertOptions>) {
  const definedOptions = setupDefaultOptions(options)
  const ast = buildAst(html)
  const convertedAst = convertAst(ast, definedOptions)

  return compileAst(convertedAst, definedOptions)
}
