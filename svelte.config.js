import adapter from '@sveltejs/adapter-static';
import pp from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: pp(),
  kit: {
    adapter: adapter(),
    prerender: { default: true }
  }
};

export default config;
