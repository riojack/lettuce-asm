import Interpreter from '../../lib/interpreter/interpreter';
import TerminalState from '../../lib/interpreter/terminal_state';

import { expect } from 'chai';
import Registers from '../../lib/lexis/registers';

import { TRIPLE_ADD_PROGRAM, INCREMENT_PROGRAM, INTEGRAL_DIV_AND_INC, IMPERFECT_DIVISION }
  from './arithmetic.data';

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

  describe(`given the program\n${INTEGRAL_DIV_AND_INC}\nwhen executed...`, () => {
    it('then register RD will hold a value equal to 0x2', () => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(INTEGRAL_DIV_AND_INC);

      const registerRaValue: number = terminalState.readRegister(Registers.RD);

      expect(registerRaValue)
        .to.eql(0x2);
    });
  });

  describe(`given the program\n${IMPERFECT_DIVISION}\nwhen executed...`, () => {
    it('then register RB will hold the value 0x32 and ARMR will hold the value 0x1', () => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(IMPERFECT_DIVISION);

      const registerRaValue: number = terminalState.readRegister(Registers.RB);
      const registerArmrValue: number = terminalState.readRegister(Registers.ARMR);

      expect(registerRaValue)
        .to.eql(0x32);

      expect(registerArmrValue)
        .to.eql(0x1);
    });
  });
});
