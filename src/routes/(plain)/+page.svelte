<script lang="ts">
</script>

<a href="https://hackclub.com/">
	<img
		class="absolute top-0 left-8 border-0 w-32 z-999"
		src="https://assets.hackclub.com/flag-orpheus-top.svg"
		alt="Hack Club" />
</a>

<h1>Welcome to SvelteKit</h1>

<a
	href="/login"
	class="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-3 py-1.5 rounded-lg">
	Log in with Slack
</a>

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
