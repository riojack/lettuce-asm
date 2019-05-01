interface IParseNode {
  getOpcode(): string;
  getAlias(): string;
  getOperands(): (string|number)[];
}

export default IParseNode;
