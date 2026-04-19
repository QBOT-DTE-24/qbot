<script>
	import { goto } from '$app/navigation';
	import Button from '@/components/ui/Button.svelte';

	let { name, version, image, class: className, ...props } = $props();
</script>

<article class="appcard grid {className}" {...props}>
	<div class="s12">
		<center><img src={image} alt={name} width={256} /></center>
	</div>

	<div class="s12 left-align">
		<h2>{name}</h2>
		<div>{version}</div>
	</div>

	<div class="s12 m4 small-space"></div>
	<div class="s12 m4 small-space"></div>

	<div class="center-align s12 m4">
		<Button
			text="Get Now"
			class="appbtn"
			style="background-color: var(--qbot-white) !important; color: var(--qbot-black) !important; font-size: 2rem !important; padding: 0.3rem !important;"
			onclick={() => goto(`/projects/${name.toLowerCase()}`)}
		/>
	</div>
</article>

<style>
	article {
		background-color: var(--qbot-red);
		border-radius: 0;
		box-shadow: 8px 8px 0 var(--qbot-black);
	}

	h2,
	div {
		font-family: Bebas Neue Regular;
	}

	h2 {
		font-size: 4.6rem;
		color: var(--qbot-white);
	}

	div {
		font-size: 2.4rem;
		color: var(--qbot-black);
	}
</style>
