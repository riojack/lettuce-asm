import Reader from '../../lib/parser/reader';
import IParseNode from '../../lib/parser/nodes/parse_node';
import Opcodes from '../../lib/lexis/opcodes';
import Registers from '../../lib/lexis/registers';

import * as chai from 'chai';

describe('parser/reader', () => {
  it('should parse ADD RA, 0x1 into a ADD node with a register operand and an immediate operand', () => {
    let node: IParseNode = Reader.parseString('ADD RA, 0x1');

    chai.expect(node.getOpcode())
      .to.equal(Opcodes.ADD);

    chai.expect(node.getOperands())
      .to.eql([Registers.RA, 0x1]);
  });
});