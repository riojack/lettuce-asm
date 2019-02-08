class RegisterMemory {
  private MAX_ADDRESS_NAME = "0x0000000A";
  private MAX_ADDRESS = parseInt(this.MAX_ADDRESS_NAME, 16);
  private memory: Uint32Array = new Uint32Array(this.MAX_ADDRESS);

  write(address: number, bytes: number): void {
    if (address > this.MAX_ADDRESS) {
      throw `Cannot write to register beyond ${this.MAX_ADDRESS_NAME}.`;
    }

    if (address < 0x0) {
      throw "About to write to negative-- wait, what?";
    }

    this.memory[address] = bytes;
  }

  read(address: number): number {
    if (address > this.MAX_ADDRESS) {
      throw `Cannot read registers beyond ${this.MAX_ADDRESS_NAME}.`;
    }

    if (address < 0x0) {
      throw "Cannot read from a negative register.  That doesn't even make sense!";
    }

    return this.memory[address];
  }
}

export default RegisterMemory;
