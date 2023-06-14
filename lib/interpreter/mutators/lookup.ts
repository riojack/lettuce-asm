import ParseNode from '../../parser/nodes/parse_node';
import TerminalState from '../terminal_state';
import Opcodes from '../../lexis/opcodes';
import * as addMutatorFunc from './functions/addMutator';
import * as subMutatorFunc from './functions/subMutator';
import * as incMutatorFunc from './functions/incMutator';
import * as divMutatorFunc from './functions/divMutator';
import * as mulMutatorFunc from './functions/mulMutator';
import * as decMutatorFunc from './functions/decMutator';

export type MutatorFunc = ((node: ParseNode, previousState: TerminalState) => TerminalState);

export const MutatorLookup: Readonly<{ [key: string]: MutatorFunc }> = Object.freeze<{ [key: string]: MutatorFunc }>({
  [Opcodes.ADD]: addMutatorFunc.addMutator,
  [Opcodes.SUB]: subMutatorFunc.subMutator,
  [Opcodes.INC]: incMutatorFunc.incMutator,
  [Opcodes.DIV]: divMutatorFunc.divMutator,
  [Opcodes.MUL]: mulMutatorFunc.mulMutator,
  [Opcodes.DEC]: decMutatorFunc.decMutator
});
