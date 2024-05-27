<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let cardRefs: any[] = [];

	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top 90%', // Start animation when the top of the card is 90% from the top of the viewport
					end: 'top 30%', // End animation when the top of the card is 30% from the top of the viewport
					// toggleActions: 'play none none reverse', // Play animation on entering and reverse on leaving
					toggleActions: 'play none none none',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5, // Animation duration
				ease: 'power3.out', // Easing function
				y: '50px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section class="pt-5 md:pt-10 xl:pt-12">
	<div
		class="container mx-auto px-5 min-[400px]:px-12 min-[480px]:px-16 min-[550px]:px-20 sm:px-3 2xl:px-0"
	>
		<div
			class="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 min-[400px]:gap-8 xl:gap-5 2xl:gap-8"
		>
			<div bind:this={cardRefs[0]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/building_140x140.webp"
							alt="a building"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p1')}
						</p>
					</div>
				</div>
			</div>

			<div bind:this={cardRefs[1]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/pepole_140x140.webp"
							alt="people"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p2')}
						</p>
					</div>
				</div>
			</div>

			<div bind:this={cardRefs[2]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/time_140x140.webp"
							alt="a building"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p3')}
						</p>
					</div>
				</div>
			</div>

			<div bind:this={cardRefs[3]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/book_140x140.webp"
							alt="a building"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p4')}
						</p>
					</div>
				</div>
			</div>

			<div bind:this={cardRefs[4]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/info_140x140.webp"
							alt="a building"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p5')}
						</p>
					</div>
				</div>
			</div>

			<div bind:this={cardRefs[5]}>
				<div
					class="card py-10 min-[400px]:py-16 lg:py-20 2xl:py-20 rounded-none shadow-none bg-surface-50
					flex items-center justify-center sm:h-72 xl:h-96"
				>
					<div class="flex flex-col items-center space-y-3 md:space-y-5 2xl:space-y-8">
						<img
							src="/images/fm/about/cube_140x140.webp"
							alt="a building"
							class="w-[80px] lg:w-[100px] 2xl:w-[120px] aspect-[1/1]"
						/>
						<p
							class="text-center text-base lg:text-lg font-light px-3 md:px-5 2xl:px-12 sm:min-h-20"
						>
							{$t('cs.about.facts.p6')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
