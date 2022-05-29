import { alignmentTab } from './alignment-tab'
import { command } from './command'
import { commandArg } from './command-arg'
import { comment } from './comment'
import { displayMath } from './display-math'
import { environment } from './environment'
import { group } from './group'
import { inlineMath } from './inline-math'
import { text } from './text'
import { document } from './document'
import { mathContainer } from './math-container'
import { paragraph } from './paragraph'
import { mathCharacter } from './math-character'
import { linebreak } from './linebreak'
import { root } from './root'
import { preamble } from './preamble'
import { listItem } from './listItem'
import { tableRow } from './table-row'
import { tableCell } from './table-cell'
import { script } from './script'

export const handle = {
  alignmentTab,
  command,
  commandArg,
  comment,
  document,
  displayMath,
  mathContainer,
  paragraph,
  mathCharacter,
  linebreak,
  root,
  preamble,
  environment,
  sub: script,
  super: script,
  group,
  text,
  listItem,
  tableRow,
  tableCell,
}
