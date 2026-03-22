import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: { $components: "./src/components" },

		experimental: {
			remoteFunctions: true,
		},
	},
	vitePlugin: { inspector: { toggleKeyCombo: "control-i" } },

	compilerOptions: {
		// These become defaults in Svelte 6
		runes: true,
		modernAst: true,

		// shorter hashes (normal hashes are svelte-{hash}). This doesn't work in development so expect a warning from vite-plugin-svelte, though works fine in production builds.
		cssHash: ({ hash, filename }) => `s${hash(filename)}`,

		experimental: {
			async: true,
		},
	},
}
