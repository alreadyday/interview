module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: ['airbnb', 'react-app', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // TODO: enable after all prop-types are fixed
    'react/prop-types': 'warn',
    'no-shadow': 'off',


    // disable airbnb rules
    'react/jsx-filename-extension': [0],
    // disable airbnb rules
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    // allow object default export for import/no-anonymous-default-export rule
    // for locale resources
    'import/no-anonymous-default-export': [
      'warn',
      {
        'allowObject': true,
      },
    ],
    // react 17 dont need to import
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 'off',
    // airbnb setup
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    // sync airbnb setup with prettier
    'no-unused-vars': ['warn', {
      ignoreRestSiblings: true,
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['draft'],
    }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      rules: {

        // in case you need to create component for tests
        'react/prop-types': 'off',

        // make sure devDependencies are allowed for test files
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true,
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'prettier'],
      extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
};
