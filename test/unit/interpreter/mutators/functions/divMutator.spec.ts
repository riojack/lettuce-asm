import * as chai from 'chai';
import RegisterMemory from '../../../../../lib/engine/memory/register_memory';
import RegisterMemoryFacade from '../../../../../lib/engine/memory_facades/register_memory_facade';
import TerminalState from '../../../../../lib/interpreter/terminal_state';
import IParseNode from '../../../../../lib/parser/nodes/parse_node';
import InstructionNode from '../../../../../lib/parser/nodes/instruction_node';
import Opcodes from '../../../../../lib/lexis/opcodes';
import Registers from '../../../../../lib/lexis/registers';
import {MutatorFunc, MutatorLookup} from '../../../../../lib/interpreter/mutators/lookup';

describe('DIV mutator', (): void => {
  let memory: RegisterMemory;
  let memoryFacade: RegisterMemoryFacade;
  let previousState: TerminalState;

  beforeEach((): void => {
    memory = new RegisterMemory();
    memoryFacade = new RegisterMemoryFacade(memory);
    previousState = new TerminalState(memoryFacade);
  });

  context('for program "ADD RA, 0x7" followed by "DIV RA, 0x2"', (): void => {
    it('should return a terminal state with register RA set to three', (): void => {
      const addNode: IParseNode = new InstructionNode(Opcodes.ADD, '', [Registers.RA, 0x7]);
      const instructionNode: IParseNode = new InstructionNode(Opcodes.DIV, '', [Registers.RA, 0x2]);
      const addMutatorFunc: MutatorFunc = MutatorLookup[Opcodes.ADD];
      const divMutatorFunc: MutatorFunc = MutatorLookup[Opcodes.DIV];

      const firstState: TerminalState = addMutatorFunc(addNode, previousState);
      const secondState: TerminalState = divMutatorFunc(instructionNode, firstState);

      chai.expect(secondState.readRegister(Registers.RA))
        .to.equal(0x3);
    });
  });

});
