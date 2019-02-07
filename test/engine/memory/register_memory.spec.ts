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
});