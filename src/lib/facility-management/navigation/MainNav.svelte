<script lang="ts">
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { AppBar, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { currentAppLang } from '$lib/stores';
	import { t, locale, locales } from '$lib/i18n/translator';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	// : DrawerSettings
	const drawerSettings: DrawerSettings = {
		id: 'facility',
		bgDrawer: 'bg-secondary-200-700-token',
		width: 'w-4/6',
		rounded: 'rounded-xl'
		// bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		// padding: 'p-4',
	};
</script>

<div dir="ltr">
	<AppBar
		background="bg-surface-500"
		padding="p-5"
		shadow="shadow-xl"
		gridColumns="grid-flow-col"
		slotDefault="place-self-center"
		slotTrail="place-content-end"
	>
		<svelte:fragment slot="lead">
			<!-- logo -->
			<div class="max-md:hidden">
				<img
					src="/images/main-landing/small-white-logo_45x45.webp"
					srcset="/images/main-landing/small-white-logo_35x35.webp 768w, 
					/images/main-landing/small-white-logo_45x45.webp 2000w"
					alt="Company Logo"
					class="w-full min-w-5 max-w-8 md:min-w-8 aspect-square xl:mx-5"
				/>
			</div>

			<!-- hamburger btn -->
			<button
				on:click={() => {
					drawerStore.open(drawerSettings);
				}}
				class="md:hidden mt-1"
				aria-label="a button to open the side drawer"
			>
				<span>
					<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="Menu / Hamburger_LG">
							<path
								id="Vector"
								d="M3 17H21M3 12H21M3 7H21"
								stroke="#d3d3d3"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
					</svg>
				</span>
			</button>
		</svelte:fragment>
		<!-- nav links -->
		<div class="text-white max-md:hidden flex" dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
			<AppRailAnchor href="/facility-management" title="home">
				<span
					class="text-xs md:text-sm lg:text-lg 2xl:text-xl font-extralight mx-3 lg:mx-8 {$page.url
						.pathname === '/facility-management'
						? 'border-b-2 border-primary-500'
						: ''}">{$t('nav.home')}</span
				>
			</AppRailAnchor>
			<AppRailAnchor href="/facility-management/about-us" title="about-us">
				<span
					class="text-xs md:text-sm lg:text-lg 2xl:text-xl font-extralight mx-3 lg:mx-8
				{$page.url.pathname === '/facility-management/about-us' ? 'border-b-2 border-primary-500' : ''}
				
				">{$t('nav.about')}</span
				>
			</AppRailAnchor>
			<AppRailAnchor href="/facility-management/construction" title="construction">
				<span
					class="text-xs md:text-sm lg:text-lg 2xl:text-xl font-extralight mx-3 lg:mx-8 {$page.url
						.pathname === '/facility-management/construction'
						? 'border-b-2 border-primary-500'
						: ''}">{$t('nav.construction')}</span
				>
			</AppRailAnchor>
			<AppRailAnchor href="/facility-management/projects" title="projects">
				<span
					class="text-xs md:text-sm lg:text-lg 2xl:text-xl font-extralight mx-3 lg:mx-8 {$page.url
						.pathname === '/facility-management/projects'
						? 'border-b-2 border-primary-500'
						: ''}">{$t('nav.projects')}</span
				>
			</AppRailAnchor>
			<AppRailAnchor href="/facility-management/contact-us" title="contact-us">
				<span
					class="text-xs md:text-sm lg:text-lg 2xl:text-xl font-extralight mx-3 lg:mx-8 {$page.url
						.pathname === '/facility-management/contact-us'
						? 'border-b-2 border-primary-500'
						: ''}">{$t('nav.contact')}</span
				>
			</AppRailAnchor>
		</div>
		<svelte:fragment slot="trail">
			<div class="text-white">
				<LocaleSwitcher />
			</div>
		</svelte:fragment>
	</AppBar>
</div>
