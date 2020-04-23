interface ParseNode {
  getOpcode(): string;
  getAlias(): string;
  getOperands(): (string)[];
}

export default ParseNode;
