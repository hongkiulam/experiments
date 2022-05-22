<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement = null;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		ctx.fillRect(0, 0, 150, 150);
		ctx.save();
		ctx.fillStyle = '#09F';
		ctx.fillRect(15, 15, 120, 120);
		ctx.save();
		ctx.fillStyle = 'white';
		ctx.globalAlpha = 0.5;
		ctx.fillRect(30, 30, 90, 90);
		ctx.restore();
		ctx.fillRect(45, 45, 60, 60);
		ctx.restore();
		ctx.fillRect(60, 60, 30, 30);
	});
</script>

<canvas bind:this={canvas} width="400" height="400" />

<style>
	canvas {
		border: 1px solid var(--color-primary);
	}
</style>
