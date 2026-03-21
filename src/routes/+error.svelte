<script lang="ts">
	import { page } from "$app/state"

	const status = page.status
</script>

<div class="w-full px-4 py-24 text-center">
	<h1 class="text-2xl">Error {status}</h1>

	<a href="/">Go home?</a>
</div>
