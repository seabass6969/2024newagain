// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			pages: 'build',
			assets: 'build',
			fallback: "404.html",
			precompress: true,
			strict: true
		})
	}
};

export default config;
