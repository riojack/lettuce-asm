export const TRIPLE_ADD_PROGRAM = [
  'ADD RA, 0x1',
  'ADD RA, 0x1',
  'ADD RA, 0x1'
].join('\n');

export const INCREMENT_PROGRAM = [
  'ADD RA, 0x13',
  'INC RA',
  'INC RA'
].join('\n');

export const INTEGRAL_DIV_AND_INC = [
  'ADD RD, 0x8',
  'DIV RD, 0x2',
  'INC RD',
  'INC RD',
  'DIV RD, 0x3'
].join('\n');

export const IMPERFECT_DIVISION = [
  'ADD RB, 0x64',
  'INC RB',
  'DIV RB, 0x2',
].join('\n');
