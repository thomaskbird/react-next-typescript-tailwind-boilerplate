module.exports = {
  extends: ['@mcansh/eslint-config/typescript'],
  rules: {
    '@next/next/no-html-link-for-pages': ['warn', 'src/pages'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/__tests__/**/*',
          'src/test-utils/index.tsx',
          'src/@types/jest-dom.d.ts',
          'next.config.js',
          'prettier.config.js',
          'stylelint.config.js',
          'lint-staged.config.js',
        ],
      },
    ],
    'consistent-return': 'off',
    'no-lonely-if': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
