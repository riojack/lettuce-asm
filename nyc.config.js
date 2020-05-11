const defaultExcludes = require('@istanbuljs/schema').defaults.testExclude.exclude;

module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  all: true,
  reporter: [
    'html',
    'text'
  ],
  exclude: [
    ...defaultExcludes,
    'lib/interpreter/interpreter.ts', // Covered by acceptance
    'lib/engine/peripherals/com.ts',  // No behavior
    'lib/parser/nodes/parse_node.ts'  // Interface
  ],
  checkCoverage: true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100
}
