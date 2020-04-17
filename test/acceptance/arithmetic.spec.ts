import Interpreter from '../../lib/interpreter/interpreter';
import TerminalState from '../../lib/interpreter/terminal_state';

import * as chai from 'chai';
import Registers from '../../lib/lexis/registers';

describe('Arithmetic', (): void => {
  describe('given the program ADD RA, 0x1 repeated 3 times, when executed...', (): void => {
    it('then register RA will hold a value equal to Ox3', (): void => {
      const program = 'ADD RA, 0x1\nADD RA, 0x1\nADD RA, 0x1';

      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(program);

      const registerRaValue: number = terminalState.readRegister(Registers.RA);

      chai.expect(registerRaValue)
        .to.eql(0x3);
    });
  });

  describe('given the program ADD RA, 0x13 followed by INC RA, followed by INC RA, when executed...', () => {
    it('then register RA will hold a value equal to Ox15', (): void => {
      const program = 'ADD RA, 0x13\nINC RA\nINC RA';

      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(program);

      const registerRaValue: number = terminalState.readRegister(Registers.RA);

      chai.expect(registerRaValue)
        .to.eql(0x15);
    });
  });
});
