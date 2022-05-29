import { Preamble } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const preamble: BasicHandle = (
  node: Preamble,
  options: Options = {}
) => {
  // TODO: Add checks to preamble to not print non-command content
  return toLatex(node.children)
}
