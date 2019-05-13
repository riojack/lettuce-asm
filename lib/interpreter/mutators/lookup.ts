import IParseNode from '../../parser/nodes/parse_node';
import TerminalState from '../terminal_state';
import Opcodes from '../../lexis/opcodes';
import * as addMutatorFunc from './functions/addMutator';

export type MutatorFunc = ((node: IParseNode, previousState: TerminalState) => TerminalState);

export const MutatorLookup: Readonly<{ [key: string]: MutatorFunc }>
  = Object.freeze<{ [key: string]: MutatorFunc }>({
    [Opcodes.ADD]: addMutatorFunc.addMutator
  });
