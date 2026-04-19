<script>
	import AppMeta from '@/components/shared/AppMeta.svelte';
	import Button from '@/components/ui/Button.svelte';

	let { data } = $props();
</script>

<AppMeta
	title={data.item.title}
	author="QBOT-DTE/24"
	description={data.item.description}
	url="https://qbot24.eu.cc"
	banner="/img/qbot-banner.png"
	keywords="qbot, qbot24, qbot dte 24, qbot-dte-24, dte24, dte, quintets, beeam, bayae, beeam/bayae, oteam, the core dump"
/>

<main class="padding">
	<section id="app-details" class="grid">
		<div id="cover-container" class="s12 m2">
			<center>
				<img src={data.item.banner} alt={data.item.name} width={360} />
			</center>
		</div>

		<div id="appinfo-container" class="s12 m5">
			<h1>{data.item.title}</h1>
			<div>{data.item.version}</div>
			<div class="medium-space"></div>
			<p>{data.item.description}</p>
		</div>

		<div class="s12 m5 left-align grid">
			{#each data.item.launchLinks as platform}
				<Button
					text={platform.text}
					onclick={() => (window.location = platform.url)}
					class="s12 m6"
				/>
			{/each}
		</div>
	</section>

	<section id="app-screenshots" class="grid">
		<div class="s12 medium-space"></div>
		<div class="s12">
			<h2>Screenshots</h2>
		</div>

		<div class="s12 horizontal scroll">
			{#each data.item.screenshots as screenshot}
				<img src={screenshot} alt={screenshot} width={128} />
			{/each}
		</div>
	</section>

	<div class="ss-wrapper"></div>
</main>

<style>
	section {
		align-items: flex-start;
	}

	h1,
	h2,
	div,
	p {
		font-family: Bebas Neue;
	}

	h1 {
		color: var(--qbot-red);
	}

	h2,
	div {
		color: var(--qbot-black);
	}

	div {
		font-size: 2.4rem;
	}

	p {
		font-size: 1.8rem;
	}

	div > img:hover {
		border: solid var(--qbot-red) 5px;
		box-shadow: -5px -5px 0 var(--qbot-black) 5px 4px 0 var(--qbot-black);
	}

	.ss-wrapper {
	}
</style>
