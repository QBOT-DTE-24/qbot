<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import '@/lib';

	import QColor from '@/components/globals/QColor.svelte';
	import QFont from '@/components/globals/QFont.svelte';
	import QCore from '@/components/globals/QCore.svelte';

	let { children } = $props();
</script>

{@render children()}

<QCore />
<QColor />
<QFont />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }))}>{locale}</a>
	{/each}
</div>
