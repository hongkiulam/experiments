<script lang="ts">
  import { ArrowLeftIcon, ArrowRightIcon, ListIcon, InfoIcon, XIcon } from 'svelte-feather-icons';
  import ExperimentDescription from '$lib/components/ExperimentDescription.svelte';
  import { isNavOpen } from '$lib/stores/nav';
  import { currentPage } from '$lib/stores/currentPage';
  import { goto } from '$app/navigation';

  let showDescription = false;
</script>

<header>
  {#if $currentPage}
    <button
      on:click={() => {
        $currentPage?.previousPath && goto($currentPage.previousPath);
      }}
      disabled={!$currentPage?.previousPath}><ArrowLeftIcon /></button
    >
    <button
      on:click|stopPropagation={() =>
        (showDescription = !!$currentPage?.description && !showDescription)}
      >{#if showDescription}<XIcon size="1.4x" />{:else}<InfoIcon size="1.4x" />{/if}</button
    >
    <span class="title">{$currentPage?.title || '-'}</span>
    <button on:click={() => ($isNavOpen = true)}><ListIcon /></button>
    <button
      on:click={() => {
        $currentPage?.nextPath && goto($currentPage.nextPath);
      }}
      disabled={!$currentPage?.nextPath}><ArrowRightIcon /></button
    >
  {/if}
</header>
{#if $currentPage?.description && showDescription}
  <ExperimentDescription on:close={() => (showDescription = false)} />
{/if}

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

  header button:disabled,
  header button[disabled] {
    opacity: 0.5;
    cursor: initial;
  }

  header * {
    margin: 0 var(--size-2);
  }

  @media only screen and (max-width: 400px) {
    .title {
      display: none;
    }
  }
</style>
