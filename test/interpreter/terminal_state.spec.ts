import * as chai from 'chai';
import RegisterMemoryFacade from '../../../lib/engine/memory_facades/register_memory_facade';
import RegisterMemory from '../../../lib/engine/memory/register_memory';
import TerminalState from '../../../lib/interpreter/terminal_state';
import Registers from '../../../lib/lexis/registers';

describe('terminal state', () => {
  describe('readRegister', () => {
    it('should fetch the value from register memory facade', () => {
      const memory: RegisterMemory = new RegisterMemory();
      const memoryFacade: RegisterMemoryFacade = new RegisterMemoryFacade(memory);

      memoryFacade.write(Registers.RA, 0xFB);

      const terminalState: TerminalState = new TerminalState(memoryFacade);

      chai.expect(terminalState.readRegister(Registers.RA))
        .to.equal(0xFB);
    });
  });
});
