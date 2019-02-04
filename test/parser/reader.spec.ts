import Reader from '../../lib/parser/reader';
import IParseNode from '../../lib/parser/nodes/parse_node';
import Opcodes from '../../lib/lexis/opcodes';
import Registers from '../../lib/lexis/registers';

import * as chai from 'chai';

describe('parser/reader', () => {
  it('should parse ADD RA, 0x1 into a ADD node with a register operand and an immediate operand', () => {
    const node: IParseNode = Reader.parseString('ADD RA, 0x1')[0];

    chai.expect(node.getOpcode())
      .to.equal(Opcodes.ADD);

    chai.expect(node.getOperands())
      .to.eql([Registers.RA, 0x1]);
  });

  it('should parse SUB RA, 0x1 into a SUB node with a register operand and an immediate operand', () => {
    const node: IParseNode = Reader.parseString('SUB RA, 0x1')[0];

    chai.expect(node.getOpcode())
      .to.equal(Opcodes.SUB);

    chai.expect(node.getOperands())
      .to.eql([Registers.RA, 0x1]);
  });

  describe('CRLF multiline program', () => {
    it('should parse into into countOf(CRLF)+1 instructions', () => {
      const crlf = '\r\n';
      const program: IParseNode[] = Reader.parseString(`ADD RA, 0x1${crlf}SUB RA, 0x1`);

      chai.expect(program)
        .to.have.length(2);
    });
  });
});
