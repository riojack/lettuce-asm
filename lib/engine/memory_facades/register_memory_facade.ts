import Registers from "../../lexis/registers";
import RegisterMemory from "../memory/register_memory";

class RegisterMemoryFacade {
  private registerMemory: RegisterMemory;
  private registerMemoryMap: Map<string, number>;

  public constructor(regMemory: RegisterMemory) {
    this.registerMemory = regMemory;

    this.registerMemoryMap = Object.keys(Registers)
      .reduce((pv: Map<string, number>, cv: string, ci: number): Map<string, number> => {
        pv.set(cv, ci);
        return pv;
      }, new Map<string, number>());
  }

  public write(register: string, bytes: number): void {
    if (!this.registerMemoryMap.has(register)) {
      throw `"${register}" is not a valid register to write to.`;
    }
    const addressToWriteTo: number = this.registerMemoryMap.get(register)

    this.registerMemory.write(addressToWriteTo, bytes);
  }

  public read(register: string): number {
    if (!this.registerMemoryMap.has(register)) {
      throw `"${register}" is not a valid register to read from.`;
    }
    const addressToReadFrom: number = this.registerMemoryMap.get(register)

    return this.registerMemory.read(addressToReadFrom);
  }
}

export default RegisterMemoryFacade;
