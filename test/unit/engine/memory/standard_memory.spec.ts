import StandardMemory from '../../../../lib/engine/memory/standard_memory';

import * as chai from 'chai';

describe('standard memory', (): void => {
  it('should fail to write beyond 0x3FFFFF', () => {
    const mem: StandardMemory = new StandardMemory();
    const address = 0x0000000B;

    chai.expect((): void => mem.write(address, 0x1))
      .to.throw('Cannot write to memory beyond 0x3FFFFF.');
  });
});
