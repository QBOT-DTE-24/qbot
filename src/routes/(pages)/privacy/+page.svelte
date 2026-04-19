<script>
	import AppMeta from '@/components/shared/AppMeta.svelte';
	import QuteCard from '@/components/shared/QuteCard.svelte';
	import VectorySlope from '@/components/shared/VectorySlope.svelte';
</script>

<AppMeta
	title="The QBOT - Privacy & Policy"
	author="QBOT-DTE/24"
	description="Privacy and Privacy notice."
	url="https://qbot24.eu.cc"
	banner="/img/qbot-banner.png"
	keywords="qbot, qbot24, qbot dte 24, qbot-dte-24, dte24, dte, quintets, beeam, bayae, beeam/bayae, oteam, the core dump"
/>

<main class="padding">
	<section class="grid">
		<div class="s12 m3 medium-space"></div>
		<div class="s12 m6 center-align">
			<h1>Privacy and Policy</h1>
			<div class="medium-space"></div>
		</div>

		<QuteCard text="Unlike Big Tech Companies, we don't sell your data." class="s12 m4" />
		<QuteCard text="Unlike Big Tech Companies, we don't spy your data." class="s12 m4" />
		<QuteCard text="Unlike Big Tech Companies, we don't advertise and track you." class="s12 m4" />
		<QuteCard
			text="Unlike Big Tech Companies, we don't used your data for advertising"
			class="s12 m4"
		/>
		<QuteCard
			text="Unlike Big Tech Companies, we don't used your data for training AI-models"
			class="s12 m4"
		/>
		<QuteCard
			text="Unlike Big Tech Companies, we don't used your data for fradulent"
			class="s12 m4"
		/>
		<QuteCard
			text="Unlike Big Tech Companies, we just develop software for a living"
			class="s12 m4"
		/>
		<QuteCard
			text="Unlike Big Tech Companies, we don't want to put any microtransactions"
			class="s12 m4"
		/>
	</section>

	<VectorySlope />
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}

	h1 {
		font-family: Bebas Neue Regular;
	}
</style>
