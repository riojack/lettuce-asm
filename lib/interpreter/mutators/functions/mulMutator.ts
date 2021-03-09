import IParseNode from '../../../parser/nodes/parse_node';
import TerminalState from '../../terminal_state';
import { MutatorFunc } from '../lookup';

export const mulMutator: MutatorFunc = (node: IParseNode, previousState: TerminalState): TerminalState => (<TerminalState>{});
