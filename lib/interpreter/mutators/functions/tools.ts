import ParseNode from '../../../parser/nodes/parse_node';

export type OperandTuple = [string, string];

export const loadOperandsAsTuples = (node: ParseNode): [string, string] => {
  const { operands } = node;

  return operands as [string, string];
};
