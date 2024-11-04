import globals from "globals";
import jsPlugin from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import i18nextPlugin from "eslint-plugin-i18next";
// import prettierPlugin from 'eslint-plugin-prettier';
// import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config} */
export default tseslint.config  (
	{
		ignores: ['node_modules/**', 'build/**'],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: { 
			globals: globals.browser,
			...reactPlugin.configs.flat.recommended.languageOptions,
			ecmaVersion: "latest",
			sourceType: "module",
			parser: tsParser,
			parserOptions: {
				project: ['tsconfig.json'],
			}
		}
	},
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'react': reactPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin,
			// 'i18next': i18nextPlugin,
			// 'prettier': prettierPlugin
		},
	},
	jsPlugin.configs.recommended,
	...tseslint.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	i18nextPlugin.configs['flat/recommended'],
	{
		rules: {
			// ...prettierPlugin.configs.recommended.rules,
			// ...eslintConfigPrettier.rules,
			'import/prefer-default-export': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',
			'import/no-unresolved': 'off',
			"@typescript-eslint/no-unused-vars": "warn",
			'no-underscore-dangle': 'off',
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'], indent: ['error', 'tab'],
			'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
			'react/jsx-props-no-spreading': 'warn',
			'react/require-default-props': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'i18next/no-literal-string': ['error']
		}
	}
);
