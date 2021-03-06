import RegisterMemory from '../../../../lib/engine/memory/register_memory';

import * as chai from 'chai';

describe('register memory', (): void => {
  let mem: RegisterMemory;

  beforeEach((): void => {
    mem = new RegisterMemory();
  });

  it('should read back what was written to memory', (): void => {
    const address = 0x00000000;
    const bytes = 0x87000000;

    mem.write(address, bytes);

    chai.expect(mem.read(address))
      .to.equal(bytes);
  });

  it('should fail trying to write beyond 0x0000000A', (): void => {
    const address = 0x0000000B;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to register beyond 0x0000000A.');
  });

  it('should fail trying to write to undefined', (): void => {
    chai.expect((): void => mem.write(undefined, 0x1))
      .to.throw('Cannot write to register.  Invalid address provided.');
  });

  it('should fail trying to write a negative memory location', (): void => {
    const address = -0x0000000B;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('About to write to negative-- wait, what?');
  });

  it('should fail trying to read beyond 0x0000000A', (): void => {
    const address = 0x0000000B;

    chai.expect((): void => {
      mem.read(address);
    }).to.throw('Cannot read registers beyond 0x0000000A.');
  });

  it('should fail trying to read from undefined', (): void => {
    chai.expect((): void => {
      mem.read(undefined);
    }).to.throw('Cannot read from register.  Invalid address provided.');
  });

  it('should fail trying to read a negative memory location', (): void => {
    const address = -0x0000000B;

    chai.expect((): void => {
      mem.read(address);
    }).to.throw('Cannot read from a negative register.  That doesn\'t even make sense!');
  });
});
