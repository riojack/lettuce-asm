import TerminalState from '../../terminal_state';
import { MutatorFunc } from '../lookup';
import IParseNode from '../../../parser/nodes/parse_node';
import RegisterMemoryFacade from '../../../engine/memory_facades/register_memory_facade';

export const decMutator: MutatorFunc = (node: IParseNode, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register]: [string] = node.operands as [string];
  const currentValueInRegister: number = memory.read(register);

  const nextValueForRegister = currentValueInRegister - 0x1;

  memory.write(register, nextValueForRegister);

  return new TerminalState(memory);
};
