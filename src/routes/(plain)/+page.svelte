<script lang="ts">
	import Accordion from "$components/Accordion.svelte"
	import AccordionItem from "$components/AccordionItem.svelte"
</script>

<a href="https://hackclub.com/">
	<img
		class="absolute top-0 left-8 border-0 w-32 z-999"
		src="https://assets.hackclub.com/flag-orpheus-top.svg"
		alt="Hack Club" />
</a>

<div class="mx-auto max-w-250 px-4 py-16">
	<div class="text-center py-4">
		<div class="pb-4">
			<h1 class="text-5xl pb-2">OpenBlox</h1>
			<span>
				Build a Roblox game in public,
				<br />
				track and share your progress,
				<br />
				and win prizes for your work!
			</span>
		</div>

		<a
			href="/login"
			class="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-3 py-1.5 rounded-lg">
			Log in with Slack
		</a>
	</div>

	<Accordion class="flex flex-col gap-2">
			<AccordionItem title="test">
				test
			</AccordionItem>
	</Accordion>
</div>

<style>
	img:hover {
		animation: rotate 1s ease-in-out;
		animation-iteration-count: 2;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-3deg) translate(2px, -3px);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>
