<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { t, locale, locales } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	const formData = data.form;
</script>

<div class="w-screen flex justify-center">
	<div class="relative h-screen w-[1920px]">
		<!-- background image -->
		<img
			src="/main-bg_1920x1080.webp"
			srcset="/main-bg_900x600.webp 768w, 
			/main-bg_1920x1080.webp 2000w"
			alt="Main Background"
			class="absolute inset-0 w-screen h-full object-cover aspect-[3/2] md:aspect-[16/9]"
		/>

		<!-- Dimmer overlay -->
		<div class="absolute inset-0 bg-black opacity-40"></div>

		<!-- Content container -->
		<div class="relative flex flex-col items-center h-full pt-[12vh]">
			<!-- logo -->
			<div class="absolute top-5 md:top-8 left-8">
				<img
					src="/images/main-landing/small-white-logo_45x45.webp"
					srcset="/images/main-landing/small-white-logo_35x35.webp 768w, 
					/images/main-landing/small-white-logo_45x45.webp 2000w"
					alt="Company Logo"
					class="w-full min-w-5 md:min-w-8 max-w-8 aspect-square"
				/>
			</div>

			<!-- Language Switcher -->
			<div class="absolute top-3 md:top-5 right-8 text-white">
				<LocaleSwitcher />
			</div>

			<!-- title -->
			<div
				class="uppercase text-center {$currentAppLang === 'en'
					? 'text-white en-landing-title space-y-5 mb-10 md:mb-14 2xl:mb-16 text-5xl min-[400px]:text-6xl md:text-7xl 2xl:text-8xl'
					: 'text-white ar-landing-title space-y-12 2xl:space-y-16 mb-12 md:mb-16 2xl:mb-24 text-6xl md:text-7xl lg:text-8xl 2xl:text-[100px]'}"
			>
				<h1>{$t('landing.title1')}</h1>

				{#if $currentAppLang === 'en'}
					<h1>{$t('landing.title2')}</h1>
				{/if}

				<h1>{$t('landing.title3')}</h1>
			</div>

			<!-- Buttons -->
			<div class="grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
				<div>
					<a href="/construction">
						<button
							class="bg-secondary-200 hover:bg-primary-700 text-black hover:text-white py-3 md:py-4 2xl:py-5 rounded-2xl w-60 min-[450px]:w-80 text-2xl"
						>
							<span class="uppercase text-base min-[450px]:text-xl 2xl:text-2xl"
								>{$t('landing.btn1')}</span
							>
						</button>
					</a>
				</div>

				<div>
					<a href="/facility-management">
						<button
							class="bg-secondary-200 hover:bg-primary-700 text-black hover:text-white py-3 md:py-4 2xl:py-5 rounded-2xl w-60 min-[450px]:w-80 px-2 min-[450px]:px-5 text-2xl"
						>
							<span class="uppercase text-base min-[450px]:text-xl 2xl:text-2xl"
								>{$t('landing.btn2')}</span
							>
						</button>
					</a>
				</div>
			</div>

			<!-- footer section -->
			<Footer {formData} />
		</div>
	</div>
</div>
