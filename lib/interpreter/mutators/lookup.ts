import IParseNode from "../../parser/nodes/parse_node";
import TerminalState from "../terminal_state";
import Opcodes from "../../lexis/opcodes";
import RegisterMemoryFacade from "../../engine/memory_facades/register_memory_facade";

export type MutatorFunc = ((node: IParseNode, previousState: TerminalState) => TerminalState);

const addMutator: MutatorFunc = (node: IParseNode, previousState: TerminalState): TerminalState => {
  const memory: RegisterMemoryFacade = previousState.registerMemory;
  const [register, bytes]: [string, number] = <[string, number]>node.getOperands();

  memory.write(register, bytes);

  return new TerminalState(memory);
};

export const MutatorLookup: Readonly<{ [key: string]: MutatorFunc }>
  = Object.freeze<{ [key: string]: MutatorFunc }>({
    [Opcodes.ADD]: addMutator
  });
