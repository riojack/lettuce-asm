class RegisterMemory {
  private MAX_ADDRESS_NAME = '0x0000000A';
  private MAX_ADDRESS = parseInt(this.MAX_ADDRESS_NAME, 16);
  private memory: Uint32Array = new Uint32Array(this.MAX_ADDRESS);

  public write(address: number | undefined, bytes: number): void {
    if (address === undefined) {
      throw 'Cannot write to register.  Invalid address provided.';
    }

    if (address > this.MAX_ADDRESS) {
      throw `Cannot write to register beyond ${this.MAX_ADDRESS_NAME}.`;
    }

    if (address < 0x0) {
      throw 'About to write to negative-- wait, what?';
    }

    const safeAddress: number = 0 + address;

    this.memory[safeAddress] = bytes;
  }

  public read(address: number | undefined): number {
    if (address === undefined) {
      throw 'Cannot read from register.  Invalid address provided.';
    }

    if (address > this.MAX_ADDRESS) {
      throw `Cannot read registers beyond ${this.MAX_ADDRESS_NAME}.`;
    }

    if (address < 0x0) {
      throw 'Cannot read from a negative register.  That doesn\'t even make sense!';
    }

    const safeAddress: number = 0 + address;

    return this.memory[safeAddress];
  }
}

export default RegisterMemory;
