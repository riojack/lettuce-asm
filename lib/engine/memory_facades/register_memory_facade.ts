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
    const addressToWriteTo: number = this.registerMemoryMap.get(register)

    this.registerMemory.write(addressToWriteTo, bytes);
  }

  read(register: string): number { return 0x0; }
}

export default RegisterMemoryFacade;
