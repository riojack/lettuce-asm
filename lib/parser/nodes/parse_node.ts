interface ParseNode {
  getOpcode(): string;
  getAlias(): string;
  getOperands(): (string|number)[];
}

export default ParseNode;
