import StandardMemory from '../../../../lib/engine/memory/standard_memory';

import * as chai from 'chai';

describe('standard memory', (): void => {
  it('should fail to write beyond 0x3FFFFF', () => {
    const mem: StandardMemory = new StandardMemory();
    const address = 0x1000000B;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to memory beyond 0x3FFFFF.');
  });

  it('should fail to write to locations less than 0x0', () => {
    const mem: StandardMemory = new StandardMemory();
    const address = -0x4DA4404;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to negative memory locations.  That really doesn\'t make sense anyway.');
  });

  it('should read back what was written to standard memory', (): void => {
    const mem: StandardMemory = new StandardMemory();
    const address = 0x000C0000;
    const bytes = 0x87003200;

    mem.write(address, bytes);

    chai.expect(mem.read(address))
      .to.equal(bytes);
  });

  it('should fail to read from negative locations in standard memory', () => {
    const mem: StandardMemory = new StandardMemory();
    const address = -0x000C0000;

    chai.expect((): void => {
      mem.read(address);
    })
      .to.throw('Cannot read from a negative memory location.  Hah!');
  });
});
