import StandardMemory from '../../../../lib/engine/memory/standard_memory';

import * as chai from 'chai';

describe('standard memory', (): void => {
  let mem: StandardMemory;

  beforeEach((): void => {
    mem = new StandardMemory();
  });

  it('should fail to write beyond 0x3FFFFF', (): void => {
    const address = 0x1000000B;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to memory beyond 0x3FFFFF.');
  });

  it('should fail to write to locations less than 0x0', (): void => {
    const address = -0x4DA4404;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to negative memory locations.  That really doesn\'t make sense anyway.');
  });

  it('should read back what was written to standard memory', (): void => {
    const address = 0x000C0000;
    const bytes = 0x87003200;

    mem.write(address, bytes);

    chai.expect(mem.read(address))
      .to.equal(bytes);
  });

  it('should fail to read from negative locations in standard memory', () => {
    const address = -0x000C0000;

    chai.expect((): void => {
      mem.read(address);
    }).to.throw('Cannot read from a negative memory location.  Hah!');
  });

  it('should fail to read from locations beyond 0x3FFFFF in standard memory', () => {
    const address = 0x412345;

    chai.expect((): void => {
      mem.read(address);
    }).to.throw('Cannot read beyond 0x3FFFFF.  Really, there\'s nothing there.');
  });
});
