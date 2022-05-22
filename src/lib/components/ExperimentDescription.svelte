<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { currentPage } from '$lib/stores/currentPage';
  const dispatch = createEventDispatcher();
  let aside;
</script>

<svelte:window
  on:click={(e) => {
    if (e.target !== aside) {
      dispatch('close');
    }
  }}
/>
<aside bind:this={aside}>{$currentPage?.description}</aside>

<style>
  aside {
    position: fixed;
    bottom: var(--size-9);
    left: calc((100% - min(400px, 100%)) / 2);
    width: 100%;
    max-width: 400px;
    background: var(--color-bg);
    padding: var(--size-4);
    border: 2px solid var(--color-primary);
  }
</style>
