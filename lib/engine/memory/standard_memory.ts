class StandardMemory {
  private MAX_ADDRESS_NAME = '0x3FFFFF';
  private MAX_ADDRESS = parseInt(this.MAX_ADDRESS_NAME, 16);
  private memory: Uint32Array = new Uint32Array(this.MAX_ADDRESS);

  public write(address: number, bytes: number): void {
    if (address < 0) {
      throw 'Cannot write to negative memory locations.  That really doesn\'t make sense anyway.';
    }
    else if (address > this.MAX_ADDRESS) {
      throw `Cannot write to memory beyond ${this.MAX_ADDRESS_NAME}.`;
    }

    this.memory[address] = bytes;
  }

  public read(address: number): number {
    if (address < 0) {
      throw 'Cannot read from a negative memory location.  Hah!';
    }
    else if (address > this.MAX_ADDRESS) {
      throw `Cannot read beyond ${this.MAX_ADDRESS_NAME}.  Really, there's nothing there.`;
    }

    return this.memory[address];
  }
}

export default StandardMemory;
