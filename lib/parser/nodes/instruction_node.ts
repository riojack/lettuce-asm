import ParseNode from './parse_node';

class InstructionNode implements ParseNode {
  public getOpcode = (): string => "";
  public getAlias = (): string => "";
  public getOperands = (): (string | number)[] => [];

  public constructor(opcode: string, alias: string, operands: (string | number)[]) {
    this.getOpcode = (): string => opcode;
    this.getAlias = (): string => alias;
    this.getOperands = (): (string | number)[] => operands;
  }
}

export default InstructionNode;
