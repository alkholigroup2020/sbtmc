<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const fadeBlocks = document.querySelectorAll('.fade-block');
		fadeBlocks.forEach((block) => {
			gsap.fromTo(
				block,
				{
					opacity: 1
				},
				{
					opacity: 0,
					delay: gsap.utils.random(0, 0.8, 0.1), // Random delay for each block
					duration: 0.5,
					ease: 'power2.inOut',
					scrollTrigger: {
						trigger: block,
						start: 'top 90%',
						end: 'bottom top',
						toggleActions: 'play none none none'
					}
				}
			);
		});
	});
</script>

<section>
	<div class="container mx-auto pt-12 md:pt-16 xl:pt-20">
		<!-- title -->
		<div class="flex flex-col items-center">
			<div class="w-fit">
				<h2
					class="text-xl lg:text-3xl xl:text-4xl font-extrabold uppercase {$currentAppLang === 'en'
						? 'pb-1'
						: 'pb-3'}"
				>
					{$t('cs.facility.services.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-24' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>

		<!-- service #1 -->
		<div>
			<!-- Container for the image and the overlay  -->
			<div class="relative container mx-auto py-5 lg:py-12">
				<img
					src="/images/cs/Asset 3_1600x480.webp"
					srcset="/images/cs/Asset 3_800x400.webp 768w, 
									/images/cs/Asset 3_1600x480.webp 2000w"
					alt="Windmill"
					class="w-full aspect-[1/0.5] md:aspect-[1/0.3]"
				/>

				<!-- Overlay grid -->
				<div class="grid-overlay absolute inset-0">
					{#each Array(200) as _, i (i)}
						<div class="fade-block" style="opacity: 0;"></div>
					{/each}
				</div>
			</div>
			<div class="px-5 md:px-0 lg:flex">
				<!-- title -->
				<div class="lg:w-1/2 2xl:w-2/5">
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase">
						{$t('cs.facility.services.first.title1')}
					</h3>
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase text-primary-700">
						{$t('cs.facility.services.first.title2')}
					</h3>
				</div>

				<!-- text -->
				<div
					class="lg:w-1/2 2xl:w-3/5 py-3 lg:py-0 {$currentAppLang === 'en' ? 'lg:pl-5' : 'lg:pr-5'}"
				>
					<p class="text-base lg:text-lg font-light">{$t('cs.facility.services.first.p1')}</p>
				</div>
			</div>
		</div>

		<!-- service #2 -->
		<div class="py-5 lg:py-8 2xl:py-12">
			<!-- Container for the image and the overlay  -->
			<div class="relative container mx-auto py-5 lg:py-12">
				<img
					src="/images/cs/Asset 2_1600x480.webp"
					srcset="/images/cs/Asset 2_800x400.webp 768w, 
									/images/cs/Asset 2_1600x480.webp 2000w"
					alt="ELEVATOR AND ESCALATOR SYSTEMS"
					class="w-full aspect-[1/0.5] md:aspect-[1/0.3]"
				/>
				<!-- Overlay grid -->
				<div class="grid-overlay absolute inset-0">
					{#each Array(200) as _, i (i)}
						<div class="fade-block" style="opacity: 0;"></div>
					{/each}
				</div>
			</div>

			<div class="px-5 md:px-0 lg:flex">
				<!-- title -->
				<div class="lg:w-1/2 2xl:w-2/5">
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase">
						{$t('cs.facility.services.second.title1')}
					</h3>
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase text-primary-700">
						{$t('cs.facility.services.second.title2')}
					</h3>
				</div>
				<!-- text -->
				<div
					class="lg:w-1/2 2xl:w-3/5 py-3 lg:py-0 {$currentAppLang === 'en' ? 'lg:pl-5' : 'lg:pr-5'}"
				>
					<p class="text-base lg:text-lg font-light">{$t('cs.facility.services.second.p1')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.grid-overlay {
		display: grid;
		/* Adjust the number of columns based on your preference */
		grid-template-columns: repeat(20, 1fr);
		/* Adjust the number of rows based on your preference */
		grid-template-rows: repeat(10, 1fr);
		height: 100%;
	}
	.fade-block {
		background-color: #e4e4e4;
		width: 100%;
		height: 100%;
		transition: opacity 0s ease-in-out;
	}
</style>
