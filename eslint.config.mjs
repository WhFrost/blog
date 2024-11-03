import globals from "globals";
import jsPlugin from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config} */
export default tseslint.config  (
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		ignores: ['.node_modules/', '.build/**'],
	},
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'react': reactPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin,
			'prettier': prettierPlugin
		},
	},
	{
		languageOptions: { 
			globals: globals.browser,
			...reactPlugin.configs.flat.recommended.languageOptions,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				project: ['tsconfig.json'],
			}
		}
	},
	jsPlugin.configs.recommended,
	...tseslint.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	{
		rules: {
			// ...prettierPlugin.configs.recommended.rules,
			// ...eslintConfigPrettier.rules,
			'import/prefer-default-export': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',
			'import/no-unresolved': 'off',
			'no-unused-vars': 'warn',
			'no-underscore-dangle': 'off',
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'], indent: ['error', 'tab'],
			'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
			'react/jsx-props-no-spreading': 'warn',
			'react/require-default-props': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		}
	}
);
