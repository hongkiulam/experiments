<script>
  import { page } from '$app/stores';
  import Nav from '$lib/components/Nav.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Layout from '$lib/components/Layout.svelte';
  import '../app.css';

  $: isHome = $page.routeId === '';
</script>

<Layout>
  {#if isHome}
    <header />
  {:else}
    <Header />
  {/if}
  <Nav />
  <main>
    <slot />
  </main>
  <Footer home={isHome} />
</Layout>
