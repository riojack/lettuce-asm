class Opcodes {
  // Data definitions
  public static readonly FI: string = 'FI';
  public static readonly CS: string = 'CS';
  // Arithmetic
  public static readonly ADD: string = 'ADD';
  public static readonly INC: string = 'INC';
  public static readonly SUB: string = 'SUB';
  public static readonly DEC: string = 'DEC';
  public static readonly MUL: string = 'MUL';
  public static readonly DIV: string = 'DIV';
  // Reads and Writes
  public static readonly MOV: string = 'MOV';
  public static readonly LDB: string = 'LDB';
  public static readonly LSH: string = 'LSH';
  public static readonly RSH: string = 'RSH';
}

export default Opcodes;
