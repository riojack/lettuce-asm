import RegisterMemoryFacade from "../../../../lib/engine/memory_facades/register_memory_facade";
import RegisterMemory from "../../../../lib/engine/memory/register_memory";

import * as chai from 'chai';

describe('register memory facade', (): void => {
  const testParameters: { register: string; expectedAddress: number }[] = [
    { register: 'RA', expectedAddress: 0x00000000 },
    { register: 'RB', expectedAddress: 0x00000001 },
    { register: 'RC', expectedAddress: 0x00000002 },
    { register: 'RD', expectedAddress: 0x00000003 },
    { register: 'RE', expectedAddress: 0x00000004 },
    { register: 'RF', expectedAddress: 0x00000005 },
    { register: 'RG', expectedAddress: 0x00000006 },
    { register: 'RH', expectedAddress: 0x00000007 },
    { register: 'AR', expectedAddress: 0x00000008 }
  ];

  testParameters.forEach((parameters: { register: string; expectedAddress: number }): void => {
    it(`should write register ${parameters.register} to address ${parameters.expectedAddress}`, (): void => {
      const memory: RegisterMemory = new RegisterMemory();
      const facade: RegisterMemoryFacade = new RegisterMemoryFacade(memory);

      facade.write(parameters.register, 0xb00);

      chai.expect(memory.read(parameters.expectedAddress))
        .to.eql(0xb00);
    });
  });

  it('should throw an exception if writing to a register that does not exist', (): void => {
    const invalidRegister = "XY";
    const facade: RegisterMemoryFacade = new RegisterMemoryFacade(new RegisterMemory());

    chai.expect((): void => facade.write(invalidRegister, 0xb00))
      .to.throw(`"${invalidRegister}" is not a valid register to write to.`);
  });

  testParameters.forEach((parameters: { register: string; expectedAddress: number }): void => {
    it(`should read register ${parameters.register} from address ${parameters.expectedAddress}`, (): void => {
      const memory: RegisterMemory = new RegisterMemory();
      memory.write(parameters.expectedAddress, 0xb02);

      const facade: RegisterMemoryFacade = new RegisterMemoryFacade(memory);

      chai.expect(facade.read(parameters.register))
        .to.eql(0xb02);
    });
  });

  it('should throw an exception if reading from a register that does not exist', (): void => {
    const invalidRegister = "XY";
    const facade: RegisterMemoryFacade = new RegisterMemoryFacade(new RegisterMemory());

    chai.expect((): void => {
      facade.read(invalidRegister);
    }).to.throw(`"${invalidRegister}" is not a valid register to read from.`);
  });
});
