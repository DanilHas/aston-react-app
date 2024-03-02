module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-shadow": 'off',
    "curly": ["error", "all"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/prefer-default-export": 'off',
    "no-unused-expressions": "error",
    "import/no-extraneous-dependencies" : "off"
  },
};
