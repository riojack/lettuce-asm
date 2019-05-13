import * as chai from 'chai';
import TerminalState from '../../../../../lib/interpreter/terminal_state';
import { MutatorLookup, MutatorFunc } from '../../../../../lib/interpreter/mutators/lookup';
import Opcodes from '../../../../../lib/lexis/opcodes';
import IParseNode from '../../../../../lib/parser/nodes/parse_node';
import InstructionNode from '../../../../../lib/parser/nodes/instruction_node';
import Registers from '../../../../../lib/lexis/registers';
import RegisterMemory from '../../../../../lib/engine/memory/register_memory';
import RegisterMemoryFacade from '../../../../../lib/engine/memory_facades/register_memory_facade';

describe('ADD mutator', () => {
  let memory: RegisterMemory;
  let memoryFacade: RegisterMemoryFacade;
  let previousState: TerminalState;

  beforeEach(() => {
    memory = new RegisterMemory();
    memoryFacade = new RegisterMemoryFacade(memory);
    previousState = new TerminalState(memoryFacade);
  });

  context('for program "ADD RA, 0x1"', () => {
    it('should return a terminal state with register RA set to one', () => {
      const instructionNode: IParseNode = new InstructionNode(Opcodes.ADD, "", [Registers.RA, 0x1]);
      const addMutatorFunc: MutatorFunc = MutatorLookup[Opcodes.ADD];

      const newState: TerminalState = addMutatorFunc(instructionNode, previousState);

      chai.expect(newState.readRegister(Registers.RA))
        .to.equal(0x1);
    });
  });

  context('for program "ADD RA, 0x1" followed by program "ADD RA, 0x4"', () => {
    it('should return a terminal state with register RA set to 0x5', () => {
      const addOneNode: IParseNode = new InstructionNode(Opcodes.ADD, "", [Registers.RA, 0x1]);
      const addFourNode: IParseNode = new InstructionNode(Opcodes.ADD, "", [Registers.RA, 0x4]);

      const addMutatorFunc: MutatorFunc = MutatorLookup[Opcodes.ADD];

      const firstNewState: TerminalState = addMutatorFunc(addOneNode, previousState);
      const secondNewState: TerminalState = addMutatorFunc(addFourNode, firstNewState);


      chai.expect(secondNewState.readRegister(Registers.RA))
        .to.equal(0x5);
    });
  });
});
