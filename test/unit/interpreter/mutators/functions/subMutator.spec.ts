import * as chai from 'chai';
import RegisterMemory from '../../../../../lib/engine/memory/register_memory';
import RegisterMemoryFacade from '../../../../../lib/engine/memory_facades/register_memory_facade';
import TerminalState from '../../../../../lib/interpreter/terminal_state';
import Opcodes from '../../../../../lib/lexis/opcodes';
import Registers from '../../../../../lib/lexis/registers';
import {MutatorLookup, MutatorFunc} from '../../../../../lib/interpreter/mutators/lookup';
import IParseNode from '../../../../../lib/parser/nodes/parse_node';
import InstructionNode from '../../../../../lib/parser/nodes/instruction_node';

describe('SUB mutator', (): void => {
  let memory: RegisterMemory;
  let memoryFacade: RegisterMemoryFacade;
  let previousState: TerminalState;

  beforeEach((): void => {
    memory = new RegisterMemory();
    memoryFacade = new RegisterMemoryFacade(memory);
    memoryFacade.write(Registers.RE, 0xA);
    previousState = new TerminalState(memoryFacade);
  });

  context('for program "SUB RE, 0x1"', (): void => {
    it('should return a terminal state with register RE set to 0x9', (): void => {
      const instructionNode: IParseNode = new InstructionNode(Opcodes.SUB, '', [Registers.RE, '0x1']);
      const subMutatorFunc: MutatorFunc = MutatorLookup[Opcodes.SUB];

      const newState: TerminalState = subMutatorFunc(instructionNode, previousState);

      chai.expect(newState.readRegister(Registers.RE))
        .to.equal(0x9);
    });
  });
});
