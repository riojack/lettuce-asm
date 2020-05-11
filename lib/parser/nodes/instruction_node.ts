import ParseNode from './parse_node';

class InstructionNode implements ParseNode {
  public getOpcode: () => string;
  public getAlias: () => string;
  public getOperands: () => (string)[];

  public constructor(opcode: string, alias: string, operands: (string)[]) {
    this.getOpcode = (): string => opcode;
    this.getAlias = (): string => alias;
    this.getOperands = (): (string)[] => operands;
  }
}

export default InstructionNode;
