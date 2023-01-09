module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	plugins: ['eslint-plugin-import-helpers', 'prettier', 'react'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 0,
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always', // new line between groups
				groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
};
