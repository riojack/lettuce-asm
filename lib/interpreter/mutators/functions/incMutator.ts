import incMutatorFunc from '../../../parser/nodes/parse_node';
import TerminalState from '../../terminal_state';
import RegisterMemoryFacade from '../../../engine/memory_facades/register_memory_facade';
import { MutatorFunc } from '../lookup';

export const incMutator: MutatorFunc = (node: incMutatorFunc, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register]: [string] = node.operands as [string];
  const currentValueInRegister: number = memory.read(register);

  const nextValueForRegister = currentValueInRegister + 0x1;

  memory.write(register, nextValueForRegister);

  return new TerminalState(memory);
};
