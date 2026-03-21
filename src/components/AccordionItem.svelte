<script lang="ts">
	import type { Snippet } from "svelte"

	const {
		title,
		children
	}: {
		title: string
		children: Snippet
	} = $props()
</script>

<details name="details" class="bg-neutral-700 rounded-lg">
	<summary class="p-2 px-4 block cursor-pointer">
		{title}
	</summary>
	<div class="p-2 px-4 bg-neutral-800 rounded-b-lg">
		{@render children()}
	</div>
</details>
