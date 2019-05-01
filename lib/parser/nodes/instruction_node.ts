import IParseNode from './parse_node';

class InstructionNode implements IParseNode {
  public getOpcode = (): string => "";
  public getAlias = (): string => "";
  public getOperands = (): (string | number)[] => [];

  constructor(opcode: string, alias: string, operands: (string | number)[]) {
    this.getOpcode = () => opcode;
    this.getAlias = () => alias;
    this.getOperands = () => operands;
  }
}

export default InstructionNode;
