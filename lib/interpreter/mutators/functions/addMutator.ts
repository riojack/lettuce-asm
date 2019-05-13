import IParseNode from "../../../parser/nodes/parse_node";
import TerminalState from "../../terminal_state";
import RegisterMemoryFacade from "../../../engine/memory_facades/register_memory_facade";
import { MutatorFunc } from "../lookup";

export const addMutator: MutatorFunc = (node: IParseNode, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register, bytes]: [string, number] = node.getOperands() as [string, number];
  const currentValueInRegister: number = memory.read(register);

  const nextValueForRegister = currentValueInRegister + bytes;

  memory.write(register, nextValueForRegister);

  return new TerminalState(memory);
};
