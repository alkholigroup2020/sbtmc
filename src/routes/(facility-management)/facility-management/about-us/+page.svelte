<script lang="ts">
	import FmFooter from '$lib/facility-management/FMFooter.svelte';
	import AboutUs from '$lib/facility-management/about/AboutUs.svelte';
	import FactsAboutUs from '$lib/facility-management/about/FactsAboutUs.svelte';
	import IsoLogos from '$lib/facility-management/about/ISOLogos.svelte';
	import OurClients from '$lib/facility-management/about/OurClients.svelte';
	import VisionAndMission from '$lib/facility-management/about/VisionAndMission.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
	const formData = data.form;
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
						class="absolute inset-0 object-cover object-top w-full h-full aspect-auto"
					/>
					<div class="absolute inset-0 bg-black opacity-20"></div>
				</div>
			</div>
		</div>

		<AboutUs />
		<FactsAboutUs />

		<!-- image of two engineers -->
		<div class="py-5 md:py-14 container mx-auto">
			<img
				src="/images/fm/about/two-engineers_1600x400.webp"
				srcset="/images/fm/about/two-engineers_800x400.webp 768w, 
				/images/fm/about/two-engineers_1600x400.webp 2000w"
				alt="two working engineers"
				class="w-full aspect-[1/0.5] md:aspect-[1/0.25]"
			/>
		</div>
		<div class="-mt-28">
			<VisionAndMission />
		</div>

		<IsoLogos />
		<!-- <div class="w-full h-[100px]"></div> -->

		<OurClients />

		<FmFooter {formData} />
	</div>
</div>
