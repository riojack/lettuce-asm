class RegisterMemory {
  private memory: Uint32Array = new Uint32Array(11);

  write(address: number, bytes: number): void {
    this.memory[address] = bytes;
  }
  read(address: number): number {
    return this.memory[address];
  }
}

export default RegisterMemory;