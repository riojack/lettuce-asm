class RegisterMemory {
  private MAX_ADDRESS_NAME = "0x0000000A";
  private MAX_ADDRESS = parseInt(this.MAX_ADDRESS_NAME, 16);
  private memory: Uint32Array = new Uint32Array(this.MAX_ADDRESS);

  write(address: number, bytes: number): void {
    if (address > this.MAX_ADDRESS) {
      throw `Cannot write to register beyond ${this.MAX_ADDRESS_NAME}.`;
    }
    this.memory[address] = bytes;
  }

  read(address: number): number {
    return this.memory[address];
  }
}

export default RegisterMemory;