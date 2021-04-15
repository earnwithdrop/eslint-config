module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jest',
    '@drop-engineering/eslint-plugin-drop',
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    find: true,
    render: true,
    getRenderer: true,
    press: true,
    getStore: true,
    getStoreWithEntities: true,
    getCurrentRoute: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '~': '../src',
          assets: '../assets',
          tests: '../__tests__',
          storybook: '../storybook',
          storybooks: '../storybook',
        },
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/member-delimiter-style': 0,
    'no-console': [
      2,
      {
        allow: [
          'warn',
          'debug',
          'error',
          'groupCollapsed',
          'groupEnd',
          'ignoreWarnings',
          'disableYellowBox',
        ],
      },
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'eol-last': 2,
    'no-multiple-empty-lines': 2,
    'no-unused-vars': 2,
    'no-var': 2,
    'no-fallthrough': 0,
    'object-curly-spacing': [2, 'always'],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
    strict: 0,
    'space-before-blocks': [2, 'always'],
    curly: [2, 'all'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'jsx-quotes': [2, 'prefer-double'],
    '@drop-engineering/drop/selector-naming-convention': 2,
    '@drop-engineering/drop/explicit-boolean-in-jsx-conditionals': 2,
    '@drop-engineering/drop/jest-return-expect-saga': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-undef': 2,
    'react/jsx-closing-bracket-location': [
      2,
      { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned' },
    ],
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          '/^navigationOptions$/',
          'static-methods',
          'lifecycle',
          'render',
          'everything-else',
        ],
      },
    ],
    'react/prefer-stateless-function': 2,
    'react/prefer-es6-class': 2,
    'react/no-string-refs': 2,
    'react/no-is-mounted': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/react-in-jsx-scope': 2,
    'no-constant-condition': 2,
    'array-callback-return': 2,
    'arrow-body-style': 2,
    'react/jsx-curly-brace-presence': 1,
    'react/no-access-state-in-setstate': 1,
    'max-classes-per-file': 1,
    'class-methods-use-this': 0,
    'consistent-return': 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'func-names': 2,
    'global-require': 2,
    'guard-for-in': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'no-restricted-imports': ['warn', { patterns: ['../*'] }],
    'no-mixed-operators': 0,
    'no-restricted-globals': 0,
    'no-return-assign': 0,
    'no-shadow': 1,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'generator-star-spacing': 0,
    'import/default': 2,
    'import/extensions': 0,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'new-cap': 0,
    'no-alert': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-throw-literal': 0,
    'prefer-spread': 0,
    'react/default-props-match-prop-types': 1,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 1,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 1,
    'react/require-default-props': 1,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-wrap-multilines': 0,
    'lines-between-class-members': 0,
    'no-useless-catch': 1,
    'spaced-comment': 0,
    'wrap-iife': 0,
    'no-else-return': 0,
    camelcase: 0,
    indent: 0,
    radix: 0,
  },
  overrides: [
    // {
    //   files: ['__e2e__/**/*.js', '__tests__/**/*.js', 'storybook/**/*.js'],
    // },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
}
