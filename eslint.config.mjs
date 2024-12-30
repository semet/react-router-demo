import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'
import tsEslintParser from '@typescript-eslint/parser'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '.react-router'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      importPlugin.flatConfigs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks
    },

    languageOptions: {
      parser: tsEslintParser
    },
    settings: {
      'import/internal-regex': '^@/',
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'no-console': 'error',
      'no-empty-pattern': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '../*',
                '../',
                '..',
                '@/apis/*/*',
                '@/configs/*/*',
                '@/components/*/*',
                '@/contexts/*/*',
                '@/data/*/*',
                '@/factories/*/*',
                '@/features/*/*',
                '@/hooks/*/*',
                '@/layouts/*/*',
                '@/libs/*/*',
                '@/schemas/*/*',
                '@/types/*/*',
                '@/utils/*/**'
              ]
            }
          ]
        }
      ],
      'linebreak-style': ['error', 'unix'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '\\.(png|svg|jpg|jpeg|gif|webp|ico|bmp|tiff|mp4|mp3|woff|woff2|eot|ttf|otf)$'
          ]
        }
      ]
    }
  }
)
