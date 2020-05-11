import * as chai from 'chai';
import InstructionNode from '../../../../lib/parser/nodes/instruction_node';

describe('instruction node', (): void => {
  context('getOpcode', (): void => {
    it('should return the opcode provided at initialization', (): void => {
      const node: InstructionNode = new InstructionNode('ABC', '', ['']);

      chai.expect(node.getOpcode())
        .to.equal('ABC');
    });
  });

  context('getAlias', (): void => {
    it('should return the alias provided at initialization', (): void => {
      const node: InstructionNode = new InstructionNode('', '@XYZ', ['']);

      chai.expect(node.getAlias())
        .to.equal('@XYZ');
    });
  });
});
