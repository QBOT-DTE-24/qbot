<script>
	let { text, class: className, ...props } = $props();
</script>

<div class={className} {...props}>
	<article>
		<p>{text}</p>
	</article>
</div>

<style>
	p {
		font-family: Bebas Neue Regular;
		font-size: 24px;
		color: var(--qbot-white);
	}

	div > article {
		border: solid var(--qbot-white) 5px;
		border-radius: 0;
		box-shadow:
			-5px -5px 0 var(--qbot-black),
			5px 5px 0 var(--qbot-black);
		background-color: var(--qbot-red);
	}

	div > article > p {
		word-break: break-all;
		text-wrap-mode: wrap;
	}
</style>
