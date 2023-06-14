import ParseNode from './nodes/parse_node';

interface Segment {
  token: string;
  stoppedAt: number;
}

const LF = '\n';
const WHITE_SPACE = [' ', LF, '\r', '\t'];

function hasToken(token: string, boundary: string, indexToStartFrom: number): boolean {
  const fromPlusOne: number = indexToStartFrom + 1;
  const boundarySize: number = boundary.length;

  const possibleToken: string = token.substr(fromPlusOne - boundarySize, boundarySize);

  return possibleToken === boundary;
}

function scanForToken(token: string, boundary: string, start = 0): Segment {
  const tokens: string[] = [];
  const untilSize: number = boundary.length;
  let i: number = start;

  for (; i < token.length; i++) {
    if (untilSize > 0 && hasToken(token, boundary, i)) {
      break;
    }
    tokens.push(token[i]);
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
    let programLine: Segment = scanForToken(program, LF);

    while (!reachedEnd) {
      const opcode: Segment = scanForToken(programLine.token, ' ');
      const operandOne: Segment = scanForToken(programLine.token, ',', opcode.stoppedAt + 2);
      const operandTwo: Segment = scanForToken(programLine.token, '', operandOne.stoppedAt + 2);

      const node: ParseNode = new ParseNode(
        opcode.token,
        '',
        [operandOne.token, cleanWhitespace(operandTwo.token)]
      );

      nodes.push(node);

      if (programLine.stoppedAt === programLastPosition) {
        reachedEnd = true;
        continue;
      }

      programLine = scanForToken(program, LF, programLine.stoppedAt + 2);
    }

    return nodes;
  }
}

export default Reader;
