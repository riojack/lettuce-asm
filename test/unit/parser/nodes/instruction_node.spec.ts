import * as chai from 'chai';
import ParseNode from '../../../../lib/parser/nodes/parse_node';

describe('instruction node', (): void => {
  context('opcode', (): void => {
    it('should return the opcode provided at initialization', (): void => {
      const node: ParseNode = new ParseNode('ABC', '', ['']);

      chai.expect(node.opcode)
        .to.equal('ABC');
    });
  });

  context('alias', (): void => {
    it('should return the alias provided at initialization', (): void => {
      const node: ParseNode = new ParseNode('', '@XYZ', ['']);

      chai.expect(node.alias)
        .to.equal('@XYZ');
    });
  });

  context('operands', (): void => {
    it('should return the operands provided at initialization', (): void => {
      const node: ParseNode = new ParseNode('', '', ['RC', '0x12345']);

      chai.expect(node.operands)
        .to.eql(['RC', '0x12345']);
    });
  });
});
