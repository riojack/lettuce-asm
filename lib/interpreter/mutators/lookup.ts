import IParseNode from '../../parser/nodes/parse_node';
import TerminalState from '../terminal_state';
import Opcodes from '../../lexis/opcodes';
import * as addMutatorFunc from './functions/addMutator';
import * as subMutatorFunc from './functions/subMutator';
import * as incrementMutatorFunc from './functions/incrementMutator';
import * as divMutatorFunc from './functions/divMutator';
import * as mulMutatorFunc from './functions/mulMutator';

export type MutatorFunc = ((node: IParseNode, previousState: TerminalState) => TerminalState);

export const MutatorLookup: Readonly<{ [key: string]: MutatorFunc }> = Object.freeze<{ [key: string]: MutatorFunc }>({
  [Opcodes.ADD]: addMutatorFunc.addMutator,
  [Opcodes.SUB]: subMutatorFunc.subMutator,
  [Opcodes.INC]: incrementMutatorFunc.incrementMutator,
  [Opcodes.DIV]: divMutatorFunc.divMutator,
  [Opcodes.MUL]: mulMutatorFunc.mulMutator
});
