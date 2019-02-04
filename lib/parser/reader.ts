import IParseNode from "./nodes/parse_node";
import InstructionNode from "./nodes/instruction_node";

const CRLF: string = '\r\n';

function getTokenMatchingUntilBySize(value: string, until: string, index: number): boolean {
  const indexPlusOne: number = index + 1;
  const untilSize = until.length;

  if (indexPlusOne >= untilSize) {
    const token: string = value.substr(indexPlusOne - untilSize, untilSize);

    return token === until;
  }

  return false;
}

function readUntil(value: string, until: string, start: number = 0): { token: string, stoppedAt: number } {
  const tokens: string[] = [];
  const untilSize: number = until.length;
  let i = start;

  for (; i < value.length; i++) {
    if (untilSize > 0 && getTokenMatchingUntilBySize(value, until, i)) {
      break;
    }
    tokens.push(value[i]);
  }

  return {
    token: tokens.join(''),
    stoppedAt: i - 1
  };
}

class Reader {
  public static parseString(program: string): IParseNode[] {
    const nodes: IParseNode[] = [];
    const programLastPosition: number = program.length - 1;

    let reachedEnd: boolean = false;
    let programLine = readUntil(program, CRLF);

    while (!reachedEnd) {
      const opcode = readUntil(programLine.token, ' ');
      const operandOne = readUntil(programLine.token, ',', opcode.stoppedAt + 2);
      const operandTwo = readUntil(programLine.token, '', operandOne.stoppedAt + 2);

      const node: InstructionNode = new InstructionNode(
        opcode.token,
        "",
        [operandOne.token, parseInt(operandTwo.token)]
      );

      nodes.push(node);

      if (programLine.stoppedAt === programLastPosition) {
        reachedEnd = true;
        continue;
      }

      programLine = readUntil(program, CRLF, programLine.stoppedAt + 2);
    }

    return nodes;
  }
}

export default Reader;
