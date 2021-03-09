export const TRIPLE_ADD_PROGRAM: string = [
  'ADD RA, 0x1',
  'ADD RA, 0x1',
  'ADD RA, 0x1'
].join('\n');

export const INCREMENT_PROGRAM: string = [
  'ADD RA, 0x13',
  'INC RA',
  'INC RA'
].join('\n');

export const INTEGRAL_DIV_AND_INC: string = [
  'ADD RD, 0x8',
  'DIV RD, 0x2',
  'INC RD',
  'INC RD',
  'DIV RD, 0x3'
].join('\n');

export const IMPERFECT_DIVISION: string = [
  'ADD RB, 0x64',
  'INC RB',
  'DIV RB, 0x2',
].join('\n');

export const SUBTRACTION_PROGRAM: string = [
  'INC RC',
  'INC RC',
  'INC RC',
  'SUB RC, 0x2'
].join('\n');

export const MULTIPLICATION_PROGRAM: string = [
  'INC RB',
  'INC RB',
  'MUL RB, 0x7',
  'ADD RB, 0x3'
].join('\n');

export const DECREMENT_PROGRAM: string = [
  'ADD RA, 0x16',
  'DEC RA',
  'DEC RA'
].join('\n');
