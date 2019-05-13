import Reader from '../../../lib/parser/reader';
import IParseNode from '../../../lib/parser/nodes/parse_node';
import Opcodes from '../../../lib/lexis/opcodes';
import Registers from '../../../lib/lexis/registers';

import * as chai from 'chai';

describe('parser/reader', (): void => {
  it('should parse ADD RA, 0x1 into a ADD node with a register operand and an immediate operand', (): void => {
    const node: IParseNode = Reader.parseString('ADD RA, 0x1')[0];

    chai.expect(node.getOpcode())
      .to.equal(Opcodes.ADD);

    chai.expect(node.getOperands())
      .to.eql([Registers.RA, 0x1]);
  });

  it('should parse SUB RA, 0x1 into a SUB node with a register operand and an immediate operand', (): void => {
    const node: IParseNode = Reader.parseString('SUB RA, 0x1')[0];

    chai.expect(node.getOpcode())
      .to.equal(Opcodes.SUB);

    chai.expect(node.getOperands())
      .to.eql([Registers.RA, 0x1]);
  });

  describe('CRLF multiline program', (): void => {
    const crlf = '\r\n';
    const twoLineProgram = `ADD RA, 0x1${crlf}SUB RA, 0x1`;

    it('should parse into countOf(CRLF)+1 instructions', (): void => {
      const program: IParseNode[] = Reader.parseString(twoLineProgram);

      chai.expect(program)
        .to.have.length(2);
    });

    it('should parse into correct nodes', (): void => {
      const program: IParseNode[] = Reader.parseString(twoLineProgram);
      const lineOne: IParseNode = program[0];
      const lineTwo: IParseNode = program[1];

      chai.expect(lineOne.getOpcode())
        .to.equal(Opcodes.ADD);

      chai.expect(lineOne.getOperands())
        .to.eql([Registers.RA, 0x1]);

      chai.expect(lineTwo.getOpcode())
        .to.equal(Opcodes.SUB);

      chai.expect(lineTwo.getOperands())
        .to.eql([Registers.RA, 0x1]);
    });
  });

  describe('LF multiline program', (): void => {
    const crlf = '\n';
    const twoLineProgram = `ADD RA, 0x1${crlf}SUB RA, 0x1`;

    it('should parse into countOf(LF)+1 instructions', (): void => {
      const program: IParseNode[] = Reader.parseString(twoLineProgram);

      chai.expect(program)
        .to.have.length(2);
    });

    it('should parse into correct nodes', (): void => {
      const program: IParseNode[] = Reader.parseString(twoLineProgram);
      const lineOne: IParseNode = program[0];
      const lineTwo: IParseNode = program[1];

      chai.expect(lineOne.getOpcode())
        .to.equal(Opcodes.ADD);

      chai.expect(lineOne.getOperands())
        .to.eql([Registers.RA, 0x1]);

      chai.expect(lineTwo.getOpcode())
        .to.equal(Opcodes.SUB);

      chai.expect(lineTwo.getOperands())
        .to.eql([Registers.RA, 0x1]);
    });
  });
});
