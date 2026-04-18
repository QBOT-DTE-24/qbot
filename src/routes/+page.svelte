<script>
	import Button from '@/components/ui/Button.svelte';
	import Brand from '@/lib/assets/images/qbot-brand.png';
</script>

<main class="responsive no-padding">
	<section class="grid">
		<div id="brand-container" class="s12 center-align">
			<img src={Brand} alt="brand" width={420} />
		</div>

		<div class="s12 center-align padding">
			<h2>We made cool software projects in our free time!</h2>
		</div>

		<div class="large-space"></div>

		<div id="btn-container" class="s12 center-align">
			<Button text="Our Apps" />
			<Button text="Blogs" />
			<Button text="About Us" />
		</div>
	</section>

	<div class="medium-space"></div>

	<div
		id="chevron"
		class="absolute inset-0 bg-red-600"
		style="clip-path: polygon(0% 40%, 50% 100%, 100% 40%, 100% 100%, 0% 100%);"
	></div>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
		background-color: var(--qbot-white);
		clip-path: fill-box;
	}
	h2 {
		font-family: Bebas Neue Regular;
		font-size: 3rem;
		color: var(--qbot-red);
		text-shadow: 2px 4px 0 var(--qbot-black);
		animation-name: blink;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	#brand-container {
		display: flex;
		justify-items: center;
		padding: 2rem;
	}

	#btn-container {
		display: grid;
		gap: 2rem;
	}

	#chevron {
		z-index: -1;
	}

	@keyframes blink {
		33% {
			color: var(--qbot-red);
			text-shadow: 2px 4px 0 var(--qbot-black);
		}

		66% {
			color: var(--qbot-black);
			text-shadow: 2px 4px 0 var(--qbot-red);
		}

		99% {
			color: var(--qbot-red);
			text-shadow: 2px 4px 0 var(--qbot-black);
		}
	}
</style>
