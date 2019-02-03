import IParseNode from "./nodes/parse_node";
import InstructionNode from "./nodes/instruction_node";
import Opcodes from '../lexis/opcodes';
import Registers from '../lexis/registers';

class Reader {
  public static parseString(program: string): IParseNode {
    return new InstructionNode(Opcodes.ADD, "", [Registers.RA, 0x1]);
  };
}

export default Reader;