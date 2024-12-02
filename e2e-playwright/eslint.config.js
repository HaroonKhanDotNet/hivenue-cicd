import { defineConfig } from 'eslint';

export default defineConfig({
  extends: [
    'eslint:recommended',   // Basic ESLint recommended rules
    'standard'              // StandardJS rules
  ],
  plugins: [
    'import',               // ESLint plugin for import/export syntax
    'node',                 // ESLint plugin for Node.js-specific rules
    'promise'               // ESLint plugin for promise handling rules
  ],
  parserOptions: {
    ecmaVersion: 2021,       // Support for ECMAScript 2021 syntax
    sourceType: 'module'     // Enable ES module syntax (import/export)
  },
  rules: {
    // You can add specific custom rules here if necessary
    'no-console': 'warn',    // Example rule: Warn when using console.log()
    'semi': ['error', 'always']  // Example rule: Enforce semicolons at the end of statements
  }
});
