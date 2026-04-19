<script>
	import AppCard from '@/components/shared/AppCard.svelte';
	import AppMeta from '@/components/shared/AppMeta.svelte';
	import { items } from '@/types/app';
</script>

<AppMeta
	title="The QBOT Project - Our Apps"
	author="QBOT-DTE/24"
	description="Collection and apps developed by our team. Download and Use our app right now!"
	url="https://qbot24.eu.cc"
	banner="/img/qbot-banner.png"
	keywords="qbot, qbot24, qbot dte 24, qbot-dte-24, dte24, dte, quintets, beeam, bayae, beeam/bayae, oteam, the corde dump"
/>

<main class="padding">
	<section class="grid">
		{#each items as item}
			<AppCard name={item.name} version={item.version} image={item.banner} class="s12 m3" />
		{/each}
	</section>
</main>
