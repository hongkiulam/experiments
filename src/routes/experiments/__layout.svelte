<script>
  import CenterBox from '$lib/components/CenterBox.svelte';
  import { page as pageStore } from '$app/stores';
  import pages from '$lib/pages';

  $: page = $pageStore;
  $: currentPageIndex = pages.findIndex((p) => `experiments/${p.path}` === page.routeId);
  $: currentPage = pages[currentPageIndex];
</script>

<svelte:head>
  <title>{currentPage.title}</title>
</svelte:head>
<CenterBox bordered>
  <slot />
</CenterBox>
