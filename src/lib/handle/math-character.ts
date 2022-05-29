import { MathCharacter } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const mathCharacter: BasicHandle = (
  node: MathCharacter,
  options: Options = {}
) => {
  return node.value
}
