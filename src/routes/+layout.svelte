<script lang="ts">
	// import { t, locale, locales } from '$lib/i18n/translator';
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

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

	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import WindowSize from '$lib/WindowSize.svelte';
	initializeStores();

	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	import { navigating } from '$app/stores';
	import LoadingSpinner from '$lib/LoadingSpinner.svelte';
	import DrawerLinksFm from '$lib/facility-management/navigation/DrawerLinksFM.svelte';

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;
</script>

<svelte:head>
	<title>{$t('tab.title')}</title>
</svelte:head>

<Toast position="tl" />

<Drawer>
	{#if $drawerStore.id === 'facility'}
		<DrawerLinksFm />
	{/if}
</Drawer>

{#if devOrProduction}
	<!-- <WindowSize /> -->
{/if}

<div
	dir={$pageDirection}
	class="bg-secondary-50 {$currentAppLang === 'en' ? 'en-common' : 'ar-common'}"
>
	{#if $navigating}
		<LoadingSpinner />
	{:else}
		<slot />
	{/if}
</div>
