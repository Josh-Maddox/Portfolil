import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://Josh-Maddox.github.io',
	base: '/Portfoli',

	build: {
		format: 'file',
	},

	vite: {
		server: {
			watch: {
				ignored: ['**/.vs/**'],
			},
		},
	},
});