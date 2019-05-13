import * as chai from 'chai';
import { MutatorLookup } from '../../../../lib/interpreter/mutators/lookup';
import { addMutator } from '../../../../lib/interpreter/mutators/functions/addMutator';
import Opcodes from '../../../../lib/lexis/opcodes';

describe('interpreter mutators', () => {
  it('should support the ADD opcode', () => {
    chai.expect(MutatorLookup).to.have.key(Opcodes.ADD);
    chai.expect(MutatorLookup[Opcodes.ADD]).to.equal(addMutator);
  });
});
