import node from "@sveltejs/adapter-node";
import sveltePreprocess from "svelte-preprocess";
import mdsvexpkg from "mdsvex";
const { mdsvex } = mdsvexpkg;

const preprocess = sveltePreprocess({
  postcss: true,
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: node(),
  },
  preprocess: [mdsvex(), preprocess],
  extensions: [".svelte", ".svx"],
};

export default config;
