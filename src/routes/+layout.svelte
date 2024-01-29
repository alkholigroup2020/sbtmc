<script lang="ts">
	import { t, locale, locales } from '$lib/i18n/translator';

	import { onMount } from 'svelte';
	import '../app.postcss';

	// set the theme to light all the time
	import { setModeCurrent } from '@skeletonlabs/skeleton';
	onMount(async () => {
		setModeCurrent(true);
	});

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { pageDirection } from '$lib/stores/index';
</script>

<svelte:head>
	<title>{$t('tab.title')}</title>
</svelte:head>

<div dir={$pageDirection}>
	<slot />
</div>
