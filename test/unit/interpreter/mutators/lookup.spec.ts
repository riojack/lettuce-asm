import * as chai from 'chai';
import { MutatorLookup } from '../../../../lib/interpreter/mutators/lookup';
import { addMutator } from '../../../../lib/interpreter/mutators/functions/addMutator';
import { incrementMutator } from '../../../../lib/interpreter/mutators/functions/incrementMutator';
import { divMutator } from '../../../../lib/interpreter/mutators/functions/divMutator';
import { subMutator } from '../../../../lib/interpreter/mutators/functions/subMutator';
import { mulMutator } from '../../../../lib/interpreter/mutators/functions/mulMutator';
import { decMutator } from '../../../../lib/interpreter/mutators/functions/decMutator';
import Opcodes from '../../../../lib/lexis/opcodes';

describe('interpreter mutators', (): void => {
  it('should support the ADD opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.ADD);
    chai.expect(MutatorLookup[Opcodes.ADD]).to.equal(addMutator);
  });

  it('should support the SUB opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.SUB);
    chai.expect(MutatorLookup[Opcodes.SUB]).to.equal(subMutator);
  });

  it('should support the INC opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.INC);
    chai.expect(MutatorLookup[Opcodes.INC]).to.equal(incrementMutator);
  });

  it('should support the DIV opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.DIV);
    chai.expect(MutatorLookup[Opcodes.DIV]).to.equal(divMutator);
  });

  it('should support the MUL opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.MUL);
    chai.expect(MutatorLookup[Opcodes.MUL]).to.equal(mulMutator);
  });

  it('should support the DEC opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.DEC);
    chai.expect(MutatorLookup[Opcodes.DEC]).to.equal(decMutator);
  });
});
