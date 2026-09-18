import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://Josh-Maddox.github.io',
	base: '/Portfoli',

	vite: {
		server: {
			watch: {
				ignored: ['**/.vs/**'],
			},
		},
	},
});