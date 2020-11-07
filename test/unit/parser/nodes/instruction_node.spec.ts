import * as chai from 'chai';
import InstructionNode from '../../../../lib/parser/nodes/instruction_node';

describe('instruction node', (): void => {
  context('getOpcode', (): void => {
    it('should return the opcode provided at initialization', (): void => {
      const node: InstructionNode = new InstructionNode('ABC', '', ['']);

      chai.expect(node.opcode)
        .to.equal('ABC');
    });
  });

  context('getAlias', (): void => {
    it('should return the alias provided at initialization', (): void => {
      const node: InstructionNode = new InstructionNode('', '@XYZ', ['']);

      chai.expect(node.alias)
        .to.equal('@XYZ');
    });
  });

  context('getOperands', (): void => {
    it('should return the operands provided at initialization', (): void => {
      const node: InstructionNode = new InstructionNode('', '', ['RC', '0x12345']);

      chai.expect(node.operands)
        .to.eql(['RC', '0x12345']);
    });
  });
});
