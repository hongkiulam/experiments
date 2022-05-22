<script context="module">
	export const prerender = true;
</script>

<script>
	import { ListIcon } from 'svelte-feather-icons';
	import CenterBox from '$lib/components/CenterBox.svelte';
	import { isNavOpen } from '$lib/stores/nav';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<CenterBox>
	<div class="intro">
		<h1>A place for me to experiment with web technologies or libraries</h1>
		<button class="view-experiments-btn" on:click={() => ($isNavOpen = true)}>
			View experiments <ListIcon />
		</button>
	</div>
</CenterBox>

<style>
	.intro {
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	h1 {
		font-size: var(--font-size-4);
		font-weight: var(--font-weight-4);
		text-align: center;
	}
	.view-experiments-btn {
		all: unset;
		display: flex;
		align-items: center;
		width: fit-content;
		margin: 0 auto;
		color: var(--color-primary);
		font-size: var(--font-size-4);
		text-align: center;
		cursor: pointer;
	}
	.view-experiments-btn:hover {
		color: var(--color-accent);
	}
	.view-experiments-btn :global(svg) {
		margin-left: var(--size-2);
	}
</style>
