<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

	import AboutUs from '$lib/facility-management/home/AboutUs.svelte';
	import OurServices from '$lib/facility-management/home/OurServices.svelte';
	import Departments from '$lib/facility-management/home/Departments.svelte';
	import OurClients from '$lib/facility-management/home/OurClients.svelte';
	import FmFooter from '$lib/facility-management/FMFooter.svelte';

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
						src="/images/fm/home/hero_1920x1080.webp"
						srcset="/images/fm/home/hero_560x315.webp 640w, 	 
						/images/fm/home/hero_1120x630.webp 1024w, 
						/images/fm/home/hero_1920x1080.webp 2000w"
						alt="a hero background"
						class="absolute inset-0 object-cover w-full h-full aspect-auto"
					/>
					<div class="absolute inset-0 bg-black opacity-20"></div>
					<div
						class="
						{$currentAppLang === 'en' ? 'space-y-8 font-extrabold' : 'space-y-8 md:space-y-12 font-bold'}
						absolute inset-0 flex flex-col justify-center items-center uppercase text-white text-4xl md:text-6xl xl:text-7xl"
					>
						<h1>{$t('fm.home.title.f')}</h1>
						<h1>{$t('fm.home.title.m')}</h1>
					</div>
				</div>
			</div>
		</div>

		<AboutUs />
		<OurServices />
		<Departments />
		<OurClients />
		<FmFooter {formData} />
	</div>
</div>
