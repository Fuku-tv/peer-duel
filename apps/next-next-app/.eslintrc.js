module.exports = {
  ...require('eslint-config/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
