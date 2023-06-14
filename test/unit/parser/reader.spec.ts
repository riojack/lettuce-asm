import Reader from '../../../lib/parser/reader';
import Opcodes from '../../../lib/lexis/opcodes';
import Registers from '../../../lib/lexis/registers';
import ParseNode from '../../../lib/parser/nodes/parse_node';

import * as chai from 'chai';

describe('parser', (): void => {
  it('should parse ADD RA, 0x1 into a ADD node with a register operand and an immediate operand', (): void => {
    const node: ParseNode = Reader.parseString('ADD RA, 0x1')[0];

    chai.expect(node.opcode)
      .to.equal(Opcodes.ADD);

    chai.expect(node.operands)
      .to.eql([Registers.RA, '0x1']);
  });

  it('should parse SUB RA, 0x1 into a SUB node with a register operand and an immediate operand', (): void => {
    const node: ParseNode = Reader.parseString('SUB RA, 0x1')[0];

    chai.expect(node.opcode)
      .to.equal(Opcodes.SUB);

    chai.expect(node.operands)
      .to.eql([Registers.RA, '0x1']);
  });

  describe('CRLF multiline program', (): void => {
    const crlf = '\r\n';
    const twoLineProgram = `ADD RA, 0x1${crlf}SUB RA, 0x1`;

    it('should parse into countOf(CRLF)+1 instructions', (): void => {
      const program: ParseNode[] = Reader.parseString(twoLineProgram);

      chai.expect(program)
        .to.have.length(2);
    });

    it('should parse into correct nodes', (): void => {
      const program: ParseNode[] = Reader.parseString(twoLineProgram);
      const lineOne: ParseNode = program[0];
      const lineTwo: ParseNode = program[1];

      chai.expect(lineOne.opcode)
        .to.equal(Opcodes.ADD);

      chai.expect(lineOne.operands)
        .to.eql([Registers.RA, '0x1']);

      chai.expect(lineTwo.opcode)
        .to.equal(Opcodes.SUB);

      chai.expect(lineTwo.operands)
        .to.eql([Registers.RA, '0x1']);
    });
  });

  describe('LF multiline program', (): void => {
    const crlf = '\n';
    const twoLineProgram = `ADD RA, 0x1${crlf}SUB RA, 0x1`;

    it('should parse into countOf(LF)+1 instructions', (): void => {
      const program: ParseNode[] = Reader.parseString(twoLineProgram);

      chai.expect(program)
        .to.have.length(2);
    });

    it('should parse into correct nodes', (): void => {
      const program: ParseNode[] = Reader.parseString(twoLineProgram);
      const lineOne: ParseNode = program[0];
      const lineTwo: ParseNode = program[1];

      chai.expect(lineOne.opcode)
        .to.equal(Opcodes.ADD);

      chai.expect(lineOne.operands)
        .to.eql([Registers.RA, '0x1']);

      chai.expect(lineTwo.opcode)
        .to.equal(Opcodes.SUB);

      chai.expect(lineTwo.operands)
        .to.eql([Registers.RA, '0x1']);
    });
  });
});
