<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

	import { onMount } from 'svelte'; // Svelte's lifecycle method

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Select all the images
		const images = document.querySelectorAll('.iso-logo');

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
	<div class="pt-12 md:pt-16 xl:pt-20 pb-6 md:pb-8 xl:pb-10">
		<!-- title -->
		<div class="flex flex-col items-center pb-8 md:pb-12 xl:pb-16">
			<div class="w-fit">
				<h2
					class="text-xl lg:text-3xl xl:text-4xl font-extrabold uppercase {$currentAppLang === 'en'
						? 'pb-1'
						: 'pb-3'}"
				>
					{$t('fm.about.iso.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-48' : 'w-28'} h-[2px] bg-primary-700"></div>
		</div>
		<!-- logos -->
		<div
			class="grid grid-cols-1 min-[320px]:grid-cols-2 min-[500px]:grid-cols-3 xl:grid-cols-5
      px-12 min-[320px]:px-5 min-[500px]:px-10 sm:px-20 md:px-28 lg:px-40 xl:px-8 2xl:px-0 2xl:container mx-auto
      gap-8 min-[500px]:gap-5 md:gap-12 xl:gap-8 2xl:gap-16"
		>
			<div>
				<img
					src="/images/fm/about/isoSection/BV_Certification_ISO_300x150.webp"
					srcset="/images/fm/about/isoSection/BV_Certification_ISO_200x100.webp 768w, 
          /images/fm/about/isoSection/BV_Certification_ISO_300x150.webp 2000w"
					alt="iso logo"
					class="w-full aspect-[1/0.5] py-2 iso-logo"
				/>
			</div>

			<div>
				<img
					src="/images/fm/about/isoSection/bicsc_300x150.webp"
					srcset="/images/fm/about/isoSection/bicsc_200x100.webp 768w, 
          /images/fm/about/isoSection/bicsc_300x150.webp 2000w"
					alt="iso logo"
					class="w-full aspect-[1/0.5] py-2 iso-logo"
				/>
			</div>

			<div>
				<img
					src="/images/fm/about/isoSection/UKAS_300x150.webp"
					srcset="/images/fm/about/isoSection/UKAS_200x100.webp 768w, 
          /images/fm/about/isoSection/UKAS_300x150.webp 2000w"
					alt="iso logo"
					class="w-full aspect-[1/0.5] iso-logo"
				/>
			</div>

			<div>
				<img
					src="/images/fm/about/isoSection/BV_Certification_ISO14001_300x150.webp"
					srcset="/images/fm/about/isoSection/BV_Certification_ISO14001_200x100.webp 768w, 
          /images/fm/about/isoSection/BV_Certification_ISO14001_300x150.webp 2000w"
					alt="iso logo"
					class="w-full aspect-[1/0.5] py-2 iso-logo"
				/>
			</div>

			<div>
				<img
					src="/images/fm/about/isoSection/BV_Cert_ISO_300x150.webp"
					srcset="/images/fm/about/isoSection/BV_Cert_ISO_200x100.webp 768w, 
          /images/fm/about/isoSection/BV_Cert_ISO_300x150.webp 2000w"
					alt="iso logo"
					class="w-full aspect-[1/0.5] py-2 iso-logo"
				/>
			</div>
		</div>
	</div>
</section>
