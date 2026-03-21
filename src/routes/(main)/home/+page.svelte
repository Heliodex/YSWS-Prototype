<script lang="ts">
	import { enhance } from "$app/forms"

	const name = "OpenBlox"
</script>

<div id="main" class="mx-auto max-w-200 px-4 py-8">
	<h1 class="text-2xl">Dashboard</h1>

	<p class="pb-8">
		Welcome to your {name} dashboard! This page is under construction...
	</p>

	<h2>Projects</h2>

	<div class="grid gap-4 grid-cols-3 py-4">
		<div class="bg-neutral-700/50 border border-neutral-500 rounded-lg">
			<img
				src="https://placehold.co/300x150"
				alt="Screenshot"
				class="rounded-t-lg" />
			<div class="p-4">
				<h3 class="text-xl font-bold">Placeholder 1</h3>
				<p class="text-sm">A cool Roblox game.</p>
			</div>
		</div>

		<div class="bg-neutral-700/50 border border-neutral-500 rounded-lg">
			<img
				src="https://placehold.co/300x150"
				alt="Screenshot"
				class="rounded-t-lg" />
			<div class="p-4">
				<h3 class="text-xl font-bold">Placeholder 2</h3>
				<p class="text-sm">Another cool Roblox game.</p>
			</div>
		</div>

		<a
			href="/new"
			class="btn bg-neutral-700/50 hover:bg-neutral-800/50 active:bg-neutral-600/50 border-2 border-neutral-500 rounded-lg border-dashed grid place-items-center">
			<div class="p-4 text-center">
				<h3 class="text-xl font-bold">New Project</h3>
				<p class="text-sm">Click to create a new project!</p>
			</div>
		</a>
	</div>

	<form use:enhance method="post" action="/api?/logout" class="pt-4">
		<button
			class="btn bg-red-500 hover:bg-red-600 active:bg-red-400 px-3 py-1.5 rounded-lg">
			<b>Log out</b>
		</button>
	</form>
</div>
