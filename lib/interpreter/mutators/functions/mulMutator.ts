import RegisterMemoryFacade from '../../../engine/memory_facades/register_memory_facade';
import ParseNode from '../../../parser/nodes/parse_node';
import TerminalState from '../../terminal_state';
import { MutatorFunc } from '../lookup';
import { OperandTuple, loadOperandsAsTuples } from './tools';

export const mulMutator: MutatorFunc = (node: ParseNode, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register, bytes]: OperandTuple = loadOperandsAsTuples(node);
  const currentValueInRegister: number = memory.read(register);
  const bytesAsHex: number = parseInt(bytes, 16);

  const nextValueForRegister = currentValueInRegister * bytesAsHex;

  memory.write(register, nextValueForRegister);

  return new TerminalState(memory);
};
