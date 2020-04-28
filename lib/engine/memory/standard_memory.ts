class StandardMemory {
  private MAX_ADDRESS_NAME = '0x3FFFFF';
  private MAX_ADDRESS = parseInt(this.MAX_ADDRESS_NAME, 16);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public write(address: number, bytes: number): void {
    throw `Cannot write to memory beyond ${this.MAX_ADDRESS_NAME}.`;
  }
}

export default StandardMemory;
