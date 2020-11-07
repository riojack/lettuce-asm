import ParseNode from './parse_node';

class InstructionNode implements ParseNode {
  public readonly opcode: string;
  public readonly alias: string;
  public readonly operands: string[];

  public constructor(opcode: string, alias: string, operands: (string)[]) {
    this.opcode = opcode;
    this.alias = alias;
    this.operands = operands;
  }
}

export default InstructionNode;
