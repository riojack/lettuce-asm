class ParseNode {
  private _opcode: string;
  public get opcode(): string {
    return this._opcode;
  }

  private _alias: string;
  public get alias(): string {
    return this._alias;
  }

  private _operands: string[];
  public get operands(): string[] {
    return this._operands;
  }

  public constructor(opcode: string, alias: string, operands: (string)[]) {
    this._opcode = opcode;
    this._alias = alias;
    this._operands = operands;
  }
}

export default ParseNode;
