const WARN = 'warn';
const ERROR = 'error';
const OFF = 'off';

module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		es6: true,
		node: true
	},
	parserOptions: {
		'ecmaVersion': 'latest',
	},
	ignorePatterns: ["build/"],
	overrides: [
		{
			plugins: ['json'],
			files: ['*.json'],
			extends: ['eslint:recommended', 'plugin:json/recommended']
		}
	],
	rules: {
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{ overrides: { constructors: 'no-public' } }
		],
		'@typescript-eslint/consistent-type-assertions': [WARN, { assertionStyle: 'as' }],
		'@typescript-eslint/no-var-requires': OFF,
		"@typescript-eslint/no-unused-vars": [ERROR, { "argsIgnorePattern": "^_" }],
		"@typescript-eslint/no-explicit-any": ERROR,
	}
}