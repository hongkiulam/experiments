<script>
  import { goto } from '$app/navigation';
  import { HomeIcon, ZapIcon, SunIcon, MoonIcon } from 'svelte-feather-icons';

  export let home = false;
</script>

<footer>
  {#if !home}
    <button on:click={() => goto('/')} aria-label="Home Button">
      <HomeIcon />
    </button>
  {/if}
  <button on:click={() => document.body.removeAttribute('theme')} aria-label="System Theme">
    <ZapIcon />
  </button>
  <button on:click={() => document.body.setAttribute('theme', 'light')} aria-label="Light Theme">
    <SunIcon />
  </button>
  <button on:click={() => document.body.setAttribute('theme', 'dark')} aria-label="Dark Theme">
    <MoonIcon />
  </button>
</footer>

<style>
  footer {
    padding: var(--size-2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  button + button {
    margin-left: var(--size-3);
  }
</style>
