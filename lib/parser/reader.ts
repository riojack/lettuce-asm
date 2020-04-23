import ParseNode from './nodes/parse_node';
import InstructionNode from './nodes/instruction_node';

interface Segment {
  token: string;
  stoppedAt: number;
}

const LF = '\n';
const WHITE_SPACE = [' ', LF, '\r', '\t'];

function getTokenMatchingUntilBySize(value: string, until: string, index: number): boolean {
  const indexPlusOne: number = index + 1;
  const untilSize = until.length;

  if (indexPlusOne >= untilSize) {
    const token: string = value.substr(indexPlusOne - untilSize, untilSize);

    return token === until;
  }

  return false;
}

function readUntil(value: string, until: string, start = 0): Segment {
  const tokens: string[] = [];
  const untilSize: number = until.length;
  let i: number = start;

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

function cleanWhitespace(value: string): string {
  return value.split('').reduce((accum: string[], current: string) => {
    if (WHITE_SPACE.includes((current))) {
      return accum;
    }
    return [...accum, current];
  }, [] as string[]).join('');
}

class Reader {
  public static parseString(program: string): ParseNode[] {
    const nodes: ParseNode[] = [];
    const programLastPosition: number = program.length - 1;

    let reachedEnd = false;
    let programLine: Segment = readUntil(program, LF);

    while (!reachedEnd) {
      const opcode: Segment = readUntil(programLine.token, ' ');
      const operandOne: Segment = readUntil(programLine.token, ',', opcode.stoppedAt + 2);
      const operandTwo: Segment = readUntil(programLine.token, '', operandOne.stoppedAt + 2);

      const node: InstructionNode = new InstructionNode(
        opcode.token,
        '',
        [operandOne.token, cleanWhitespace(operandTwo.token)]
      );

      nodes.push(node);

      if (programLine.stoppedAt === programLastPosition) {
        reachedEnd = true;
        continue;
      }

      programLine = readUntil(program, LF, programLine.stoppedAt + 2);
    }

    return nodes;
  }
}

export default Reader;
