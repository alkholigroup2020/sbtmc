<script lang="ts">
	import AboutUs from '$lib/facility-management/about/AboutUs.svelte';
	import FactsAboutUs from '$lib/facility-management/about/FactsAboutUs.svelte';
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
</script>

<div class="flex justify-center">
	<div class="w-full max-w-[1920px]">
		<div class="relative">
			<div class="absolute inset-0 h-[300px] bg-surface-500"></div>
			<div class="container mx-auto">
				<!-- Hero image container -->
				<div class="relative overflow-hidden h-[400px] md:h-[550px] xl:h-[700px]">
					<img
						src="/images/fm/about/fm-about-hero_1920x1080.webp"
						srcset="/images/fm/about/fm-about-hero_560x315.webp 640w, 	 
						/images/fm/about/fm-about-hero_1120x630.webp 1024w, 
						/images/fm/about/fm-about-hero_1920x1080.webp 2000w"
						alt="a hero background"
						class="absolute inset-0 object-cover w-full h-full aspect-auto"
					/>
					<div class="absolute inset-0 bg-black opacity-30"></div>
				</div>
			</div>
		</div>

		<AboutUs />
		<FactsAboutUs />

		<div class="w-full h-[300px]"></div>
	</div>
</div>
