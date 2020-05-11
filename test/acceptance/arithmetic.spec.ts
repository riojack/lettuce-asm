import Interpreter from '../../lib/interpreter/interpreter';
import TerminalState from '../../lib/interpreter/terminal_state';

import { expect } from 'chai';
import Registers from '../../lib/lexis/registers';

import { TRIPLE_ADD_PROGRAM, INCREMENT_PROGRAM } from './arithmetic.data';

describe('Arithmetic', (): void => {
  describe(`given the program\n${TRIPLE_ADD_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RA will hold a value equal to Ox3', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(TRIPLE_ADD_PROGRAM);

      const registerRaValue: number = terminalState.readRegister(Registers.RA);

      expect(registerRaValue)
        .to.eql(0x3);
    });
  });

  describe(`given the program\n${INCREMENT_PROGRAM}\nwhen executed...`, () => {
    it('then register RA will hold a value equal to Ox15', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(INCREMENT_PROGRAM);

      const registerRaValue: number = terminalState.readRegister(Registers.RA);

      expect(registerRaValue)
        .to.eql(0x15);
    });
  });
});
