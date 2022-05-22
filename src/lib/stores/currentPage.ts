import { page as pageStore } from '$app/stores';
import pages from '$lib/pages';
import { derived } from 'svelte/store';

export const currentPage = derived(pageStore, (page) => {
  const currentPageIndex = pages.findIndex((p) => `experiments/${p.path}` === page.routeId);
  const currentPage = currentPageIndex !== undefined && pages[currentPageIndex];
  if (currentPage) {
    return {
      ...currentPage,
      index: currentPageIndex
    };
  }
  return undefined;
});
