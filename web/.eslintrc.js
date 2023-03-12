module.exports = {
	extends: ['@rhangai/vue-typescript'],
	ignorePatterns: ['.eslintrc.js'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	rules: {
		'guard-for-in': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-shadow': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'vue/multi-word-component-names': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: ['packages/*/tsconfig.json', 'sites/*/tsconfig.json'],
			},
		},
		'import/internal-regex': '^@(packages|sites)/',
	},
};
