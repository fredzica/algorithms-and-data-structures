module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": 1, // Means warning
    "prettier/prettier": 2, // Means error
  },
};
