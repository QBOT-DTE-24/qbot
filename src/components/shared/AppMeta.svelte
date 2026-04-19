<script>
	import favicon from '@/lib/assets/favicon.png';

	let { title, author, description, keywords, banner, url } = $props();
</script>

<svelte:head>
	<meta name="author" content={author} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="theme-color" content="#FE2424" />

	<!-- FOR SEARCH ENGINE -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={banner} />

	<!-- OPEN GRAPH METADATA-->
	<meta property="og:site_name" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={banner} />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="640" />

	<!-- FOR TWITTER/X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={url} />

	<!-- FAVICON -->
	<link rel="icon" href={favicon} /><meta name="application-name" content="QBOT" />

	<!-- APP TITLE-->
	<title>{title}</title>
</svelte:head>
