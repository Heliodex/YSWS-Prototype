<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<h1>Welcome to logged in</h1>

<form use:enhance method="post" action="/api?/logout">
	<button class="btn bg-red-500 hover:bg-red-600 active:bg-red-400 px-3 py-1.5 rounded-lg">
		<b>Log out</b>
	</button>
</form>
