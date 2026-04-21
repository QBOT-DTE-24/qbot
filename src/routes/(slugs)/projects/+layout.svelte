<script>
	import { goto } from '$app/navigation';
	import Button from '@/components/ui/Button.svelte';
	import Brand from '@/lib/assets/images/qbot-brand.png';

	let { children } = $props();
</script>

<nav class="appbar top">
	<div class="min">
		<a href="/">
			<img src={Brand} alt="brand" width={240} />
		</a>
	</div>

	<div class="max right-align">
		<Button text="Back" onclick={() => goto('/projects')} />
	</div>
</nav>

{@render children()}

<style>
	.appbar {
		position: sticky;
		border: solid var(--qbot-red) 5px;
		margin: 1rem;
		padding: 1rem;
		box-shadow: -5px -5px 0 var(--qbot-black) 5px 5px 0 var(--qbot-black);
		background-color: var(--qbot-white);
		height: auto;
	}

	div > img {
		object-fit: cover;
	}
</style>
