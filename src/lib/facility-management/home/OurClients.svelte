<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte'; // Svelte's lifecycle method

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Select all the images
		const images = document.querySelectorAll('.client-logo');

		// Loop through each image and create an animation
		images.forEach((img) => {
			gsap.fromTo(
				img,
				{ opacity: 0, y: 50, scale: 0.8 }, // Initial state
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.5,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: img,
						start: 'top 80%',
						toggleActions: 'play none none none'
					}
				}
			);
		});
	});
</script>

<section>
	<div class="container mx-auto py-12 md:py-16 xl:py-20">
		<!-- title -->
		<div class="flex flex-col items-center">
			<div class="w-fit">
				<h2
					class="text-xl lg:text-3xl xl:text-4xl font-extrabold uppercase {$currentAppLang === 'en'
						? 'pb-1'
						: 'pb-3'}"
				>
					{$t('fm.home.clients.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-32' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>

		<!-- clients logos -->
		<div class="flex flex-col">
			<div
				class=" grid grid-cols-2 min-[300px]:grid-cols-3 md:grid-cols-5 min-[300px]:gap-x-3 py-3 px-3 md:px-0 xl:px-48 pt-10"
			>
				<!-- Imam University -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[30%]">
						<img
							src="/images/fm/home/clientsSection/_Imam University_180x180.webp"
							srcset="/images/fm/home/clientsSection/_Imam University_120x120.webp 768w, 
						/images/fm/home/clientsSection/_Imam University_180x180.webp 2000w"
							alt="a client logo"
							class="client-logo w-full aspect-[1/1]"
						/>
					</div>
				</div>

				<!-- aramco -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[8%] sm:p-[5%]">
						<img
							src="/images/fm/home/clientsSection/aramco_400x200.webp"
							srcset="/images/fm/home/clientsSection/aramco_300x150.webp 768w, 
							/images/fm/home/clientsSection/aramco_400x200.webp 2000w"
							alt="a client logo"
							class="client-logo w-full aspect-[1/0.5]"
						/>
					</div>
				</div>

				<!-- sports -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[10%]">
						<img
							src="/images/fm/home/clientsSection/Sports-T_400x400.webp"
							srcset="/images/fm/home/clientsSection/Sports-T_250x250.webp 768w, 
							/images/fm/home/clientsSection/Sports-T_400x400.webp 2000w"
							alt="a client logo"
							class="client-logo aspect-[1/1] w-full"
						/>
					</div>
				</div>

				<!-- neom -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[16%]">
						<img
							src="/images/fm/home/clientsSection/Neom-T_400x400.webp"
							srcset="/images/fm/home/clientsSection/Neom-T_250x250.webp 1024w, 
						/images/fm/home/clientsSection/Neom-T_400x400.webp 2000w"
							alt="a client logo"
							class="client-logo w-full aspect-[1/1]"
						/>
					</div>
				</div>

				<!-- almajdouie -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[20%]">
						<img
							src="/images/fm/home/clientsSection/almajdouie_400x200.webp"
							srcset="/images/fm/home/clientsSection/almajdouie_300x150.webp 1024w, 
							/images/fm/home/clientsSection/almajdouie_400x200.webp 2000w"
							alt="a client logo"
							class="client-logo w-full aspect-[1/0.5]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
