<script lang="ts">
	import Accordion from "$components/Accordion.svelte"
	import AccordionItem from "$components/AccordionItem.svelte"

	const name = "OpenBlox"
</script>

<a href="https://hackclub.com/">
	<img
		id="hc"
		class="absolute top-0 left-8 border-0 w-32 z-999"
		src="https://assets.hackclub.com/flag-orpheus-top.svg"
		alt="Hack Club" />
</a>

<div id="main" class="mx-auto max-w-200 px-4 py-24">
	<div class="mx-auto max-w-120 text-center py-8">
		<div class="pb-8">
			<!-- coming soon badge -->
			<span
				class="badge fadein bg-neutral-600/50 border-1 border-neutral-400 text-white px-3 py-1 rounded-full text-sm">
				COMING SOON
			</span>

			<h1 class="floatin text-6xl pt-4 pb-2">{name}</h1>

			<div class="text-xl font-semibold pb-4">
				22 June 2026 - 16 July 2026
			</div>

			<p class="text-lg">
				Build a Roblox game in public,
				<br />
				track and share your progress,
				<br />
				and win prizes for your work!
			</p>
		</div>

		<p class="text-balance pb-2 text-sm">
			{name} is run by
			<a
				href="https://hackclub.com"
				target="_blank"
				rel="noopener noreferrer">
				Hack Club,
			</a>
			a global community of high school hackers and coders.
		</p>

		<a
			href="https://slack.hackclub.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-3 py-1.5 rounded-lg font-bold">
			Join Hack Club
		</a>
		<a
			href="/login"
			class="btn bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-600 px-3 py-1.5 rounded-lg">
			Log in with Slack
		</a>
	</div>
	<div class="mx-auto max-w-150 py-8">
		<!-- disclaimer -->
		<div
			class="bg-yellow-500/40 border border-yellow-400 px-4 py-2 rounded-lg">
			<h2 class="pb-2">Disclaimer</h2>

			<blockquote class="text-xs">
				While {name} is designed to be fun, it is only a design. Some of
				this design is complete; some is not. It is not in any sense useful
				at present, because it does not exist.
			</blockquote>

			<p class="text-sm pt-2">
				{name} is vapourware! It is not yet real and none of the information
				on this page should be taken as fact. This site is a prototype and
				demonstrates what the event could look like if it were to run.
			</p>
		</div>
	</div>

	<p>
		{name} is a
		<a
			href="https://ysws.hackclub.com"
			target="_blank"
			rel="noopener noreferrer">
			You Ship, We Ship
		</a>
		programme for you to show off your metaverse development skills. Build (or
		update an existing) Roblox experience or a development library, and submit
		it to be rated by others. Make sure to track your progress with regular updates
		and vote on other projects to earn Tickets. Then, save up your Tickets and
		exchange them for prizes in the Marketplace!
	</p>

	<div id="how">
		<h1 class="text-3xl font-bold pt-8 pb-4 text-center">How it works</h1>

		<ol>
			<li>
				<div>
					If you're not already a member of Hack Club, sign up and
					create an account on Slack. If you're already a Hack Club
					member, sign in with Slack to access the dashboard.
				</div>
			</li>

			<li>
				<div>
					Once you have your idea, create a project from the dashboard
					&ndash; select the type of project and input your project
					title, type, links, screenshots, and a short description.
					Your project can be an update to an existing experience, or
					be part of a team effort.
				</div>
			</li>

			<li>
				<div>yeah</div>
			</li>
		</ol>
	</div>

	<h1 class="text-3xl font-bold pt-8 pb-4 text-center">Available prizes</h1>

	<!-- 
		- Stickers
		- Robux
		- Roblox Premium
		- Hack Club-branded avatar accessories
		- Listing on a "Best projects" page
	-->

	<h1 class="text-3xl font-bold pt-8 pb-4 text-center">
		Frequently Asked Questions
	</h1>

	<div class="mx-auto max-w-150 pb-8">
		<Accordion class="flex flex-col gap-4">
			<AccordionItem title="Who's eligible to join?">
				The event is intended for high school students. Anyone aged
				13-18 is eligible to participate. You don't need to be
				experienced with Roblox development to join.
				<br />
				Over 19? Get the same prizes by
				<a
					href="https://pyramid.hackclub.com"
					target="_blank"
					rel="noopener noreferrer">
					referring others!
				</a>
			</AccordionItem>

			<AccordionItem title="How much does it cost to join in?">
				{name} is completely free to join and participate in. All prizes
				are provided by us. If shipping is required for a prize, we will
				cover the cost of shipping, however customs fees may apply for international
				participants.
			</AccordionItem>

			<AccordionItem
				title="I've never worked with Roblox before, can I still join?">
				Absolutely! The event is designed to accommodate all skill
				levels, from complete beginners to experienced developers. We
				encourage you to learn throughout the event. Many resources are
				available, such as online tutorials, forums, videos, Roblox's
				own <a
					href="https://create.roblox.com/"
					target="_blank"
					rel="noopener noreferrer">
					creator documentation,
				</a>
				and our own community!
			</AccordionItem>

			<AccordionItem
				title="I'm already experienced with Roblox development, is this event for me?">
				Yes! You can put as much time and effort as you want into your
				project and keep earning prizes.
				<br />
				In fact there's another option available: you can make a plugin or
				development library/module to help others build games instead of
				a game. Perhaps a building plugin, UI library, entity framework,
				or weapon system. These have slightly different requirements, but
				are just as valid!
			</AccordionItem>

			<AccordionItem title="Who runs this?">
				{name} is sponsored by
				<a
					href="https://hackclub.com"
					target="_blank"
					rel="noopener noreferrer">
					Hack Club,
				</a>
				a US-based 501(c)(3) non-profit organisation. Hack Club aims to incentivise
				high schoolers all over the world to learn to code and ship their
				projects.
			</AccordionItem>
		</Accordion>
	</div>

	<footer class="text-neutral-400 text-sm text-center pt-12">
		<a
			href="https://create.roblox.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="pb-4 flex flex-col">
			<img class="h-15" src="/RobloxBadge.svg" alt="Now on Roblox" />
		</a>

		<p>
			Made with ❤️ and
			<img class="inline w-7" src="/code.svg" alt="code" />
			by Hack Clubbers
		</p>
	</footer>
</div>

<style>
	#main {
		background: url(https://assets.create.roblox.com/12822635737186232b19e3fcde6b7bc35683df84/assets/landing/back_drop.webp);
		background-size: 50rem;
		background-position: top;
		background-repeat: no-repeat;
	}

	#how {
		background: url(/grid.svg);
		background-size: 50rem;
		background-position: top;
		background-repeat: no-repeat;
	}

	#hc:hover {
		animation: rotate 0.75s ease-in-out;
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
