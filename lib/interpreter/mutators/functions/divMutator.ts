import {MutatorFunc} from '../lookup';
import ParseNode from '../../../parser/nodes/parse_node';
import TerminalState from '../../terminal_state';
import RegisterMemoryFacade from '../../../engine/memory_facades/register_memory_facade';
import Registers from '../../../lexis/registers';
import {loadOperandsAsTuples, OperandTuple} from './tools';

export const divMutator: MutatorFunc = (node: ParseNode, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register, bytes]: OperandTuple = loadOperandsAsTuples(node);
  const currentValueInRegister: number = memory.read(register);
  const bytesAsHex: number = parseInt(bytes, 16);

  const nextValueForRegister = ~~(currentValueInRegister / bytesAsHex);
  const nextValueForArmrRegister = currentValueInRegister % bytesAsHex;

  memory.write(register, nextValueForRegister);
  memory.write(Registers.ARMR, nextValueForArmrRegister);

  return new TerminalState(memory);
};
