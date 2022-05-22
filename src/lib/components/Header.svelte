<script lang='ts'>
  import { page as pageStore } from '$app/stores';
  import { ArrowLeftIcon, ArrowRightIcon, ListIcon, InfoIcon } from 'svelte-feather-icons';
  import pages from '$lib/pages';
  import { isNavOpen } from '$lib/stores/nav';

  $: page = $pageStore;
  $: currentPageIndex = pages.findIndex(p => `experiments/${p.path}` === page.routeId);
  $: currentPage = pages[currentPageIndex];
</script>

<header>
  {#if currentPage}
    <button><ArrowLeftIcon /></button>
    <button><InfoIcon size='1.4x'/></button>
    <span>{currentPage?.title || '-'}</span>
    <button on:click={() => $isNavOpen = true}><ListIcon /></button>
    <button><ArrowRightIcon /></button>
  {/if}
</header>

<style>
  header {
    padding: var(--size-2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    line-height: var(--size-5);
    display: inline-block;
  }
  header button {
    font: inherit;
    background-color: transparent;
    color: inherit;
    border: 0;
    cursor: pointer;
    line-height: var(--size-5);
    display: flex;
  }

  header * + * {
    margin-left: var(--size-3);
  }
</style>
