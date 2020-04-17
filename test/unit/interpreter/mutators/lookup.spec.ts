import * as chai from 'chai';
import {MutatorLookup} from '../../../../lib/interpreter/mutators/lookup';
import {addMutator} from '../../../../lib/interpreter/mutators/functions/addMutator';
import {incrementMutator} from '../../../../lib/interpreter/mutators/functions/incrementMutator';
import Opcodes from '../../../../lib/lexis/opcodes';

describe('interpreter mutators', (): void => {
  it('should support the ADD opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.ADD);
    chai.expect(MutatorLookup[Opcodes.ADD]).to.equal(addMutator);
  });

  it('should support the INC opcode', (): void => {
    chai.expect(MutatorLookup).to.include.keys(Opcodes.INC);
    chai.expect(MutatorLookup[Opcodes.INC]).to.equal(incrementMutator);
  });
});
