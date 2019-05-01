import RegisterMemoryFacade from "../engine/memory_facades/register_memory_facade";

class TerminalState {
  private registerMemory: RegisterMemoryFacade;

  constructor(regMemory: RegisterMemoryFacade) {
    this.registerMemory = regMemory;
  }

  public readRegister(register: string): number {
    return this.registerMemory.read(register);
  }
}

export default TerminalState;
