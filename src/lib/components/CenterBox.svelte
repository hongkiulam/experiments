<script>
	export let bordered = false;
</script>

<div class="center-container">
	<div class:bordered class="box">
		<slot />
	</div>
</div>

<style>
	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.box {
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 400px;
	}
	.bordered {
		border: 2px solid var(--color-primary);
	}
</style>
