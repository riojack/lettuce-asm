import RegisterMemory from '../../../lib/engine/memory/register_memory';

import * as chai from 'chai';

describe('register memory', () => {
  it('should read back what was written to memory', () => {
    const mem: RegisterMemory = new RegisterMemory();
    const address: number = 0x00000000;
    const bytes: number = 0x87000000;

    mem.write(address, bytes);

    chai.expect(mem.read(address))
      .to.equal(bytes);
  });

  it('should fail trying to write beyond 0x0000000A', () => {
    const mem: RegisterMemory = new RegisterMemory();
    const address: number = 0x0000000B;

    chai.expect(() => mem.write(address, 0x1))
      .to.throw("Cannot write to register beyond 0x0000000A.");
  });

  it('should fail trying to write a negative memory location', () => {
    const mem: RegisterMemory = new RegisterMemory();
    const address: number = -0x0000000B;

    chai.expect(() => mem.write(address, 0x1))
      .to.throw("About to write to negative-- wait, what?");
  });

  it('should fail trying to read beyond 0x0000000A', () => {
    const mem: RegisterMemory = new RegisterMemory();
    const address: number = 0x0000000B;

    chai.expect(() => mem.read(address))
      .to.throw("Cannot read registers beyond 0x0000000A.");
  });

  it('should fail trying to read a negative memory location', () => {
    const mem: RegisterMemory = new RegisterMemory();
    const address: number = -0x0000000B;

    chai.expect(() => mem.read(address))
      .to.throw("Cannot read from a negative register.  That doesn't even make sense!");
  });

});