import IParseNode from "./nodes/parse_node";
import InstructionNode from "./nodes/instruction_node";

function readUntil(value: string, until: string, start: number = 0): { token: string, stoppedAt: number } {
  let tokens: string[] = [];
  let i = start;

  for (; i < value.length; i++) {
    if (value[i] === until) {
      break;
    }
    tokens.push(value[i]);
  }

  return {
    token: tokens.join(''),
    stoppedAt: i
  };
}

class Reader {
  public static parseString(program: string): IParseNode {
    const opcode = readUntil(program, ' ');
    const operandOne = readUntil(program, ',', opcode.stoppedAt + 1);
    const operandTwo = readUntil(program, '', operandOne.stoppedAt + 1);

    return new InstructionNode(
      opcode.token,
      "",
      [operandOne.token, parseInt(operandTwo.token)]);
  };
}

export default Reader;