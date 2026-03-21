<script lang="ts">
	import "../app.css"

	let { children } = $props()
</script>

<svelte:head>
	<title>OpenBlox</title>
</svelte:head>

<main>
	{@render children()}
</main>
