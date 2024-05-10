import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { RouteNames } from './src/assets/RouteNames';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: [...Object.keys(RouteNames)],
			},
		}),
	],
});
