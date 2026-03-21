<script lang="ts">
	import Accordion from "$components/Accordion.svelte"
	import AccordionItem from "$components/AccordionItem.svelte"
	import Login from "$components/Login.svelte"

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
				class="badge fadein bg-neutral-600/50 border border-neutral-400 text-white px-3 py-1 rounded-full text-sm">
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

		<p class="text-balance pb-4 text-sm">
			{name} is run by
			<a
				href="https://hackclub.com"
				target="_blank"
				rel="noopener noreferrer">
				Hack Club,
			</a>
			a global community of high school hackers and coders.
		</p>

		<Login />
	</div>
	<div class="mx-auto max-w-150 py-8">
		<!-- disclaimer -->
		<div
			class="bg-yellow-500/40 border border-yellow-400 px-4 py-2 rounded-lg">
			<h2 class="pb-2">Disclaimer</h2>

			<blockquote class="text-xs">
				While {name} is designed to be fun, it is only a design. Some of
				this design is complete; some is not. It is not in any sense useful
				at present, because it does not exist. It may be useful in future,
				or not.
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
		<h1 class="text-3xl font-bold pt-12 pb-4 text-center">How it works</h1>

		<ol>
			<li>
				<div>
					<p class="pb-4">
						If you're not already a member of Hack Club, sign up and
						create an account on Slack. If you're already a Hack
						Club member, sign in with Slack to access the dashboard.
					</p>

					<img
						src="/dashboard.png"
						alt="Dashboard page"
						class="rounded-lg border-4 border-neutral-700 opacity-90 rotate-2" />
				</div>
			</li>

			<li>
				<div>
					<p class="pb-4">
						Once you have your idea, create a project from the
						dashboard. Next, select the type of project and input
						your project title, type, links, screenshots, and a
						short description. Your project can be an update to an
						existing experience, be part of a team effort, or be
						made partially by generative AI like the Roblox
						Assistant &ndash; as long as you declare these details
						in your project creation form.
					</p>

					<img
						src="/new.png"
						alt="New project page"
						class="rounded-lg border-4 border-neutral-700 opacity-90 -rotate-2" />
				</div>
			</li>

			<li>
				<div>
					<p>
						Now it's time to open
						<a
							href="https://create.roblox.com/docs/studio/setup"
							target="_blank"
							rel="noopener noreferrer">
							Roblox Studio
						</a>
						and start building! As you work on your project, track your
						time at regular intervals with screenshots and descriptions
						of your progress.
					</p>
					<p class="pt-4">
						There are 2 choices for how to track your progress. Pick
						whichever one works best for you, or a combination of
						both for different parts of your workflow:
					</p>

					<div class="flex w-full gap-4 pt-4">
						<div class="bg-neutral-700 rounded-lg px-4 py-2 w-1/2">
							Screen recording with
							<a
								href="https://lapse.hackclub.com"
								target="_blank"
								rel="noopener noreferrer">
								Lapse,
							</a>
							tracking time spent in Studo or in an external editor.
							The screen recording will be compressed and stored as
							a sped-up timelapse video.

							<div class="py-2">
								<img
									src="/studio.png"
									alt="Roblox Studio"
									class="border border-red-500 rounded-md" />
							</div>
						</div>
						<div class="bg-neutral-700 rounded-lg px-4 py-2 w-1/2">
							Hour recording with Hack Hour, a Slack bot to notify
							before and during a work session.

							<div class="py-2">
								<img
									src="/hack-hour.png"
									alt="Hack Hour"
									class="rounded-md" />
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<p class="pb-4">
						After developing and tracking enough time, your project
						can be marked as ready for review. This means it will be
						placed into voting against other projects. You can still
						update the project while it's in review.
					</p>
					<p>
						During this time, you can also vote on other projects to
						earn Tickets and help your fellow developers earn them
						too! Each voting match-up will give you 3 random
						projects, which you need to test, rank, and give
						feedback on.
					</p>
				</div>
			</li>
			<li>
				<div>
					<p class="pb-4">
						By now you'll have earned some Tickets from voting. If
						your project didn't do well in voting, don't worry!
						You'll still earn Tickets at a flat rate based on the
						time you spent working on your project. Head to the
						Marketplace to exchange your Tickets for prizes. The
						winnable prizes are listed below.
					</p>
				</div>
			</li>
		</ol>
	</div>

	<h1 class="text-3xl font-bold pt-12 pb-4 text-center">Available prizes</h1>

	<!--
		- Stickers
		- Robux
		- Roblox Premium
		- Hack Club-branded avatar accessories
		- Listing on a "Best projects" page
	-->

	<p>
		There's
	</p>

	<div class="grid grid-cols-2 gap-4 pt-6">
		<div class="bg-neutral-800 rounded-lg text-center">
			<h2 class="py-2">Stickers</h2>
			<img
				src="/prizes/stickers.webp"
				alt="Stickers"
				class="w-full bg-neutral-700 rounded-b-lg px-12 py-2" />
		</div>
		<div class="bg-neutral-800 rounded-lg text-center">
			<h2 class="py-2">Ad credits</h2>
			<img
				src="/prizes/stickers.webp"
				alt="Ad credits"
				class="w-full bg-neutral-700 rounded-b-lg px-12 py-2" />
		</div>
		<div class="bg-neutral-800 rounded-lg text-center">
			<h2 class="py-2">Robux & Roblox Premium</h2>
			<img
				src="/prizes/robuxpremium.png"
				alt="Robux"
				class="rounded-b-lg pt-2" />
		</div>
		<div class="bg-neutral-800 rounded-lg text-center">
			<h2 class="py-2">Virtual Hack Club merch</h2>
			<img
				src="/prizes/stickers.webp"
				alt="Virtual Hack Club merch"
				class="w-full bg-neutral-700 rounded-b-lg px-12 py-2" />
		</div>
		<div class="bg-neutral-800 rounded-lg text-center">
			<h2 class="py-2">"Best Projects" listing</h2>
			<img
				src="/prizes/stickers.webp"
				alt="Best Projects listing"
				class="w-full bg-neutral-700 rounded-b-lg px-12 py-2" />
		</div>
		<div
			class="bg-neutral-700 rounded-lg text-center grid place-items-center">
			<h2 class="py-2">and much more...</h2>
		</div>
	</div>

	<h1 class="text-3xl font-bold pt-12 pb-4 text-center">
		Frequently Asked Questions
	</h1>

	<div class="mx-auto max-w-150 pb-8">
		<Accordion class="flex flex-col gap-4">
			<AccordionItem title="Who's eligible to join?">
				The event is intended for high school students of any experience
				level. Anyone aged 13-18 is eligible to participate. You don't
				need to be experienced with Roblox development to join.
				<br />
				19 or over? Get the same prizes by
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
				<br />
				In fact there's another option available: you can make a plugin or
				development library/module to help others build experiences instead
				of a game. Perhaps a building plugin, UI library, entity framework,
				or weapon system. These have slightly different requirements, though
				are just as valid!
			</AccordionItem>

			<AccordionItem
				title="Can I use an alternative editor instead of Roblox Studio?">
				Yes, with Roblox Studio's <a
					href="https://create.roblox.com/docs/scripting/sync"
					target="_blank"
					rel="noopener noreferrer">
					Script Sync system,
				</a>
				you can use an external code editor to write your code and synchronise
				it to Roblox, though you'll still need to use Roblox Studio to build
				your game world and test your project.
			</AccordionItem>

			<AccordionItem
				title="Roblox Studio isn't available on my platform!">
				Check out <a
					href="https://vinegarhq.org/"
					target="_blank"
					rel="noopener noreferrer">
					Vinegar.
				</a>
				It's a compatibility layer to allow Roblox Studio to run on Linux.
				We've found it to be stable enough to develop and review projcets
				with.
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
				high schoolers all over the world to advance their programming skills
				and ship their projects.
				<br />
				<br />
				We think you learn best when you're building, so we provide the useful
				resources and the amazing community to help you do that. We make,
				break, learn, and share projects together. Welcome to the club!
			</AccordionItem>
		</Accordion>
	</div>

	<div class="mx-auto max-w-120 text-center py-8">
		<h2>Still have questions?</h2>

		<p class="pb-4 text-balance">
			Join our channel on the Hack Club Slack to ask questions and chat
			with other participants!
		</p>

		<Login />
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
		background: url(/back_drop.webp);
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
