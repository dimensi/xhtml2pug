import { constructTree, tokenize } from 'hyntax'

import { compileAst } from './compile-ast'
import { convertAst } from './convert-ast'

function buildAst(html: string) {
  return constructTree(tokenize(html).tokens).ast
}

export async function convert(html: string) {
  const ast = buildAst(html)
  const convertedAst = convertAst(ast)

  return compileAst(convertedAst)
}
