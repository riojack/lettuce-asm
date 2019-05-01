import TerminalState from "./terminal_state";
import Reader from "../parser/reader";
import IParseNode from "../parser/nodes/parse_node";
import RegisterMemory from "../engine/memory/register_memory";
import RegisterMemoryFacade from "../engine/memory_facades/register_memory_facade";
import { MutatorLookup, MutatorFunc } from "./mutators/lookup";

class Interpreter {
  public execute(program: string): TerminalState {
    let state: TerminalState = new TerminalState(
      new RegisterMemoryFacade(
        new RegisterMemory()
      )
    );

    const root: IParseNode[] = Reader.parseString(program);

    root.forEach((node: IParseNode) => {
      const opcode: string = node.getOpcode();

      const opcodeFunc: MutatorFunc = MutatorLookup[opcode];

      state = opcodeFunc(node, state);
    });

    return state;
  }
}

export default Interpreter;
