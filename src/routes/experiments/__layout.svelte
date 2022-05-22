<script>
  import CenterBox from '$lib/components/CenterBox.svelte';
  import { currentPage } from '$lib/stores/currentPage';
</script>

<svelte:head>
  <title>{$currentPage.title}</title>
</svelte:head>
<CenterBox bordered>
  <slot />
</CenterBox>
