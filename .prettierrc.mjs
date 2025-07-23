export default {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  bracketSameLine: false,
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: {
        parser: 'json',
        printWidth: 1,
        singleQuote: false
      }
    },
    {
      files: ['tsconfig.json'],
      options: {
        parser: 'json',
        printWidth: 1,
        singleQuote: false
      }
    }
  ]
};
