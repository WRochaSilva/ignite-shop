module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "@rocketseat/eslint-config/react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/self-closing-comp": "error",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": "off",
    /** 'react/prop-types': 'off'
    Desativa o aviso relacionado à definição de tipos das props dos componentes do React usando PropTypes.
    Esta regra é desativada quando se está usando TypeScript, já que o TypeScript fornece um sistema de tipos 
    mais forte e estático.
    */
    "react/prop-types": "off",
    /**Regras de acessibilidade
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
     */
    "react/no-unknown-property": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
  ignorePatterns: ["node_modules"],
};
