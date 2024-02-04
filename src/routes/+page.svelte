<script type="ts">
	import Footer from '$lib/Footer.svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { t, locale, locales } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
</script>

<div class="w-screen flex justify-center">
	<div class="relative h-screen w-[1920px]">
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
			<!-- Language Switcher -->
			<div class="absolute top-8 right-8 text-white">
				<LocaleSwitcher />
			</div>
			<!-- logo -->
			<div class="absolute top-8 left-8">
				<img src="/small-white-logo.png" alt="Logo" class="mb-8 w-12" />
			</div>

			<!-- title -->
			<div
				class="uppercase text-center {$currentAppLang === 'en'
					? 'space-y-5 en-landing-title text-8xl mb-12'
					: 'space-y-16 ar-landing-title text-9xl mb-16'}"
			>
				<h1 class="text-white">
					{$t('landing.title1')}
				</h1>

				{#if $currentAppLang === 'en'}
					<h1 class="text-white">
						{$t('landing.title2')}
					</h1>
				{/if}

				<h1 class="text-white">
					{$t('landing.title3')}
				</h1>
			</div>

			<!-- Buttons -->
			<div class="md:flex mt-5">
				<a href="/construction">
					<button
						class="bg-secondary-200 hover:bg-primary-700 text-black hover:text-white py-4 rounded-lg mx-2 w-80 text-2xl"
					>
						<span class="uppercase">Construction</span>
					</button>
				</a>

				<a href="/facility-management">
					<button
						class="bg-secondary-200 hover:bg-primary-700 text-black hover:text-white py-4 rounded-lg mx-2 w-80 text-2xl"
					>
						<span class="uppercase">Facility Management</span>
					</button>
				</a>
			</div>

			<!-- footer section -->
			<!-- <div class="absolute bottom-5 w-full z-10">
				<div class="h-[200px] bg-surface-900 w-[90%] mx-auto">
				</div>
			</div> -->

			<!-- gray div -->
			<div class="absolute bottom-0 w-full h-[12%] bg-secondary-200 opacity-80 flex justify-center">
				<Footer />
			</div>
		</div>
	</div>
</div>
