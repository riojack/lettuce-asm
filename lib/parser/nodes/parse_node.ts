interface ParseNode {
  readonly opcode: string;
  readonly alias: string;
  readonly operands: string[];
}

export default ParseNode;
