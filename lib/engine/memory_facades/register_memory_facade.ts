import Registers from "../../lexis/registers";
import RegisterMemory from "../memory/register_memory";

class RegisterMemoryFacade {
  private registerMemory: RegisterMemory;
  private registerMemoryMap: Map<string, number>;

  constructor(regMemory: RegisterMemory) {
    this.registerMemory = regMemory;

    this.registerMemoryMap = Object.keys(Registers)
      .reduce((pv: Map<string, number>, cv: string, ci: number) => {
        pv.set(cv, ci);
        return pv;
      }, new Map<string, number>());
  }

  write(register: string, bytes: number): void {
    if (!this.registerMemoryMap.has(register)) {
      throw `"${register}" is not a valid register.`;
    }
    const addressToWriteTo: number = this.registerMemoryMap.get(register)

    this.registerMemory.write(addressToWriteTo, bytes);
  }

  read(register: string): number {
    const addressToReadFrom: number = this.registerMemoryMap.get(register)

    return this.registerMemory.read(addressToReadFrom);
  }
}

export default RegisterMemoryFacade;
