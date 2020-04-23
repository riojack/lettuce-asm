import IParseNode from '../../../parser/nodes/parse_node';

export type OperandTuple = [string, string];
export const loadOperandsAsTuples = (node: IParseNode): [string, string] => node.getOperands() as [string, string];
