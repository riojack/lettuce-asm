import Interpreter from "../../lib/interpreter/interpreter";
import TerminalState from "../../lib/interpreter/terminal_state";

import * as chai from 'chai';
import Registers from "../../lib/lexis/registers";

describe('Arithmetic', () => {
  describe('given the program ADD RA, 0x1 repeated 3 times, when executed...', () => {
    it('then register RA will hold a value equal to Ox3', () => {
      const program: string = 'ADD RA, 0x1\nADD RA, 0x1\nADD RA, 0x1';

      const interpreter: Interpreter = new Interpreter();
      const terminalState: TerminalState = interpreter.execute(program);

      const registerRaValue: number = terminalState.readRegister(Registers.RA);

      chai.expect(registerRaValue)
        .to.eql(0x3);
    });
  });
});
