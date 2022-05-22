<script lang='ts'>
import { onDestroy } from 'svelte';
import pages from '$lib/pages';
import { isNavOpen } from '$lib/stores/nav';

let closing = false;
let closingAnimationTimeout:number|null = null;

const close = () => {
  closing = true
  closingAnimationTimeout = window.setTimeout(() => {
    closing = false;
    $isNavOpen = false;
  }, 500)
}
</script>

<svelte:window on:keydown={e => {
  if ($isNavOpen && e.key === 'Escape') {
    close();
  }
}} />

{#if $isNavOpen}
  <nav class:closing>
      <ul>
        {#each pages as page}
          <li><a href="/experiments/{page.path}" on:click={close}>{page.title}</a></li>
        {/each}
      </ul>
  </nav>
  <div class="backdrop" class:closing on:click={close}></div>
{/if}

<style>

  nav {
    position: fixed;
    width: min(100%, var(--size-15));
    height: min(100%, var(--size-15));
    border: 0;
    left: 50%;
    top: 50%;
    padding: var(--size-4);
    transform: translate(-50%,-50%);
    background-color: transparent;
    z-index: 10;
    animation: scale-in 0.5s ease forwards, fade-in 0.5s ease forwards;
    overflow: hidden;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--size-10), 1fr));
    height: 100%;
    list-style: none;
    overflow: auto;
    scroll-snap-type: y proximity;
  }
  ul li {
    text-decoration: none;
    padding: var(--size-2);
    scroll-snap-align: start end;
  }

  nav a {
    text-decoration: none;
    color:var(--color-primary);
  }
  nav a:hover{
    color:var(--color-accent);
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
    backdrop-filter: blur(100px);
    background-color: rgba(0,0,0,0.05);
    animation: fade-in 0.5s ease;
  }

  nav.closing {
    animation: scale-out 0.5s ease forwards, fade-out 0.5s ease forwards;
  }
  .backdrop.closing {
    animation: fade-out 0.5s ease forwards;
  }

  @keyframes fade-in{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scale-in{
    from {
      transform: translate(-50%,-50%) scale(1.1)
    }
     to {
      transform: translate(-50%,-50%)
    }
  }

  @keyframes fade-out{
    from {
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }

  @keyframes scale-out{
    from {
      transform: translate(-50%,-50%)
    }
     to {
      transform: translate(-50%,-50%) scale(1.1)
    }
  }
</style>