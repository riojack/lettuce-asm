import * as chai from 'chai';
import TerminalState from '../../../../../lib/interpreter/terminal_state';
import { MutatorLookup, MutatorFunc } from '../../../../../lib/interpreter/mutators/lookup';
import Opcodes from '../../../../../lib/lexis/opcodes';
import ParseNode from '../../../../../lib/parser/nodes/parse_node';
import Registers from '../../../../../lib/lexis/registers';
import RegisterMemory from '../../../../../lib/engine/memory/register_memory';
import RegisterMemoryFacade from '../../../../../lib/engine/memory_facades/register_memory_facade';

describe('INC mutator', (): void => {
  let memory: RegisterMemory;
  let memoryFacade: RegisterMemoryFacade;
  let previousState: TerminalState;

  beforeEach((): void => {
    memory = new RegisterMemory();
    memoryFacade = new RegisterMemoryFacade(memory);
    previousState = new TerminalState(memoryFacade);
  });

  context('for program "INC RA"', (): void => {
    it('should return a terminal state with register RA incremented by one', (): void => {
      const instructionNode: ParseNode = new ParseNode(Opcodes.INC, '', [Registers.RA]);
      const incrementFunc: MutatorFunc = MutatorLookup[Opcodes.INC];

      const newState: TerminalState = incrementFunc(instructionNode, previousState);

      chai.expect(newState.readRegister(Registers.RA))
        .to.equal(0x1);
    });
  });
});
