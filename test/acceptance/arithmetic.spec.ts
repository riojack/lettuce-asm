import Interpreter from '../../lib/interpreter/interpreter';
import TerminalState from '../../lib/interpreter/terminal_state';
import { expect } from 'chai';
import Registers from '../../lib/lexis/registers';
import { TRIPLE_ADD_PROGRAM, INCREMENT_PROGRAM, INTEGRAL_DIV_AND_INC, IMPERFECT_DIVISION, SUBTRACTION_PROGRAM, MULTIPLICATION_PROGRAM, DECREMENT_PROGRAM }
  from './arithmetic.data';

describe('Arithmetic', (): void => {
  describe(`given the program\n${TRIPLE_ADD_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RA will hold a value equal to Ox3', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(TRIPLE_ADD_PROGRAM);

      const raValue: number = terminalState.readRegister(Registers.RA);

      expect(raValue)
        .to.eql(0x3);
    });
  });

  describe(`given the program\n${INCREMENT_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RA will hold a value equal to Ox15', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(INCREMENT_PROGRAM);

      const raValue: number = terminalState.readRegister(Registers.RA);

      expect(raValue)
        .to.eql(0x15);
    });
  });

  describe(`given the program\n${INTEGRAL_DIV_AND_INC}\nwhen executed...`, (): void => {
    it('then register RD will hold a value equal to 0x2', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(INTEGRAL_DIV_AND_INC);

      const rdValue: number = terminalState.readRegister(Registers.RD);

      expect(rdValue)
        .to.eql(0x2);
    });
  });

  describe(`given the program\n${IMPERFECT_DIVISION}\nwhen executed...`, (): void => {
    it('then register RB will hold the value 0x32 and ARMR will hold the value 0x1', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(IMPERFECT_DIVISION);

      const rbValue: number = terminalState.readRegister(Registers.RB);
      const armrValue: number = terminalState.readRegister(Registers.ARMR);

      expect(rbValue)
        .to.eql(0x32);

      expect(armrValue)
        .to.eql(0x1);
    });
  });

  describe(`given the program\n${SUBTRACTION_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RC will hold the value 0x1', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(SUBTRACTION_PROGRAM);

      const rcValue: number = terminalState.readRegister(Registers.RC);

      expect(rcValue)
        .to.eql(0x1);
    });
  });

  describe(`given the program\n${MULTIPLICATION_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RB will hold the value 0x11', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(MULTIPLICATION_PROGRAM);

      const rbValue: number = terminalState.readRegister(Registers.RB);

      expect(rbValue)
        .to.eql(0x11);
    });
  });

  describe(`given the program\n${DECREMENT_PROGRAM}\nwhen executed...`, (): void => {
    it('then register RA will hold a value equal to Ox14', (): void => {
      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(DECREMENT_PROGRAM);

      const raValue: number = terminalState.readRegister(Registers.RA);

      expect(raValue)
        .to.eql(0x14);
    });
  });
});
