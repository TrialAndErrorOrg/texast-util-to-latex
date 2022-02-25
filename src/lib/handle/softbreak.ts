import { Softbreak } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const softbreak: BasicHandle = (
  node: Softbreak,
  options: Options = {}
) => {
  return `\n`
}
