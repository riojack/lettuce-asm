import {MutatorFunc} from '../lookup';
import IParseNode from '../../../parser/nodes/parse_node';
import TerminalState from '../../terminal_state';

export const divMutator: MutatorFunc = (node: IParseNode, previousState: TerminalState): TerminalState => {
  return null;
};
