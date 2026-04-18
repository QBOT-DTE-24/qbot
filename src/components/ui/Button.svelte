<script>
	let { text, class: className, ...props } = $props();
</script>

<button class={className} {...props}>
	{text}
</button>

<style>
	button {
		background-color: var(--qbot-red);
		color: var(--qbot-white);
		font-family: Bebas Neue Regular;
		font-size: 2.4rem;
		padding: 1rem;
		border: solid var(--qbot-transparent) 4px;
		border-radius: 0;
		box-shadow: 8px 12px 0 var(--qbot-black);
	}

	button:hover {
		border: solid var(--qbot-black) 4px;
		border-radius: 0;
		color: var(--qbot-black);
	}

	button:active {
		border-radius: 0;
		box-shadow: 4px 8px 0 var(--qbot-black);
		color: var(--qbot-black);
	}
</style>
