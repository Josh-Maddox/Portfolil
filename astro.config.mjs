import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://josh-maddox.github.io',
	base: '/Portfoli',

	build: {
		format: 'file',
		inlineStylesheets: 'always',
	},

	vite: {
		server: {
			watch: {
				ignored: ['**/.vs/**'],
			},
		},
	},
});