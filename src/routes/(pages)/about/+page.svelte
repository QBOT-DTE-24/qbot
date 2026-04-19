<script>
	import { goto } from '$app/navigation';
	import AppMeta from '@/components/shared/AppMeta.svelte';
	import QuteCard from '@/components/shared/QuteCard.svelte';
	import VectorySlope from '@/components/shared/VectorySlope.svelte';
	import Button from '@/components/ui/Button.svelte';
	import Brand from '@/lib/assets/images/qbot-brand.png';
</script>

<AppMeta
	title="The QBOT Project - About"
	author="QBOT-DTE/24"
	description="A page that describes and tells about us."
	url="https://qbot24.eu.cc"
	banner="/img/qbot-banner.png"
	keywords="qbot, qbot24, qbot dte 24, qbot-dte-24, dte24, dte, quintets, beeam, bayae, beeam/bayae, oteam, the core dump"
/>

<main class="padding">
	<section class="grid">
		<div id="brand-container" class="s12 m6 center-align">
			<div class="medium-space"></div>
			<center><img src={Brand} alt="brand" width={420} /></center>
			<div class="medium-space"></div>
			<h1>The independent and <br />hobbyist developer outfit.</h1>
			<p>We develop apps & games from the heart.</p>
		</div>

		<div class="s12 m6 center-align grid">
			<div class="s12">
				<h2>About us</h2>
			</div>

			<QuteCard text="The QBOT Project, QBOT-DTE/24 or simply QBOT." class="center-align s12 m6" />
			<QuteCard
				text="QBOT is an acronym that came from the group name decision of my beloved friends and classmates, Quintets, BAYAE/BEEAM, O-TEAM and The Core Dump."
				class="center-align s12 m6"
			/>
		</div>

		<div class="m6 medium-space"></div>

		<div class="s12 m6 center-align grid">
			<div class="s12">
				<h2>Our Members</h2>
			</div>
			<QuteCard text="Andrei Isaiah Macabanti (Project Manager)" class="center-align s12 m4" />
			<QuteCard text="Ma. Erica Manzan (System Analyst & QA)" class="center-align s12 m4 l4" />
			<QuteCard text="Pia Bianca Tuna (Tester & QA)" class="center-align s12 m4 l4" />
			<QuteCard text="Joebelle James Praba (UI/UX Designer)" class="center-align s12 m4 l4" />
			<QuteCard text="Archie Jordan Varon (PR)" class="center-align s12 m4 l4" />
			<QuteCard text="Marc Joseff Umiten (Programmer)" class="center-align s12 m4 l4" />
		</div>

		<div class="s12 m6 medium-space"></div>

		<div class="s12 m6 center-align grid">
			<div class="s12">
				<h2>Links</h2>
			</div>

			<div class="s12 horizontal center-align grid">
				<Button
					text="Github"
					onclick={() => (window.location = 'https://github.com/qbot-dte-24')}
					class="s12 m4"
				/>
				<Button
					text="Facebook"
					onclick={() => (window.location = 'https://facebook.com/qbot.dte24')}
					class="s12 m4"
				/>

				<Button text="Privacy & Policy" onclick={() => goto('/privacy')} class="s12 m4" />
			</div>
		</div>
	</section>

	<VectorySlope />

	<div class="medium-space"></div>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}

	section {
		align-items: flex-start;
		gap: 1rem;
	}

	h1,
	h2,
	p {
		font-family: Bebas Neue Regular;
		color: var(--qbot-red);
	}

	p {
		font-size: 1.8rem;
	}

	div > h2 {
		color: var(--qbot-black);
	}

	#brand-container {
		display: grid;
		align-content: center;
	}
</style>
