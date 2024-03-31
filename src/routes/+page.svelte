<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	const formData = data.form;

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';

	gsap.registerPlugin(TextPlugin);

	let textElement1: HTMLElement;
	let textElement2: HTMLElement;
	let textElement3: HTMLElement;

	let isAnimating = true; // Start by assuming the animation is playing

	// Function to start all text animations
	function startTextAnimations() {
		isAnimating = true; // Hide the LocaleSwitcher

		// Define a timeline with GSAP for better control over multiple animations
		const tl = gsap.timeline({
			// onComplete: () => {
			// 	isAnimating = false; // Show the LocaleSwitcher after all animations
			// }
		});

		// Add text animations to the timeline
		tl.to(textElement1, {
			text: $t('landing.title1'),
			delay: 0.5,
			duration: 0.8
		});

		// Conditionally add the second animation if the current language is English
		if ($currentAppLang === 'en') {
			tl.to(textElement2, {
				text: $t('landing.title2'),
				duration: 0.8
			});
		}

		// Add the third animation
		tl.to(textElement3, {
			text: $t('landing.title3'),
			duration: 0.8
		});
	}

	// Watch for language changes and restart the animations
	$: if ($currentAppLang && textElement1 && textElement2 && textElement3) {
		// Clear the text content of each element
		textElement1.textContent = '';
		textElement2.textContent = '';
		textElement3.textContent = '';
		startTextAnimations();
	} else if ($currentAppLang && textElement1 && textElement3) {
		// Clear the text content of each element
		textElement1.textContent = '';
		textElement3.textContent = '';
		// Animate in the new text content for each element
		startTextAnimations();
	}

	/*
	The fadeFromBottom animations for the buttons will re-trigger every time the $currentAppLang store changes. 
	This ensures that the animations will run not just on initial page load but also when the user switches languages.
	*/
	export function fadeFromBottom(node: HTMLElement, { delay = 0 } = {}) {
		// Define a function to run the animation
		const runAnimation = () => {
			// isAnimating = true; // Hide the LocaleSwitcher

			// Set initial state
			gsap.set(node, { y: 50, autoAlpha: 0 });

			// Start the animation
			gsap.to(node, {
				y: 0, // Move to original position
				autoAlpha: 1, // Fade in
				delay, // Start animation after a delay
				duration: 0.8, // Duration of the animation
				ease: 'power1.out', // Easing function for a smooth effect
				onComplete: () => {
					isAnimating = false; // Show the LocaleSwitcher after all animations
				}
			});
		};

		// Initially run the animation
		runAnimation();

		return {
			// Return a function to re-trigger the animation
			runAnimation,

			// Optional cleanup
			destroy() {
				// Reset style if needed when the component is destroyed
				gsap.set(node, { clearProps: 'all' });
			}
		};
	}

	let fadeFromBottomActions: any[] = []; // Store references to the actions
	// When the language changes, re-trigger the button animations
	$: if ($currentAppLang) {
		fadeFromBottomActions.forEach((action) => action.runAnimation());
	}
	// Use this function in the `use` directive to capture the action reference
	function registerFadeFromBottomAction(node: HTMLElement, params = {}) {
		const action = fadeFromBottom(node, params);
		fadeFromBottomActions.push(action);
		return {
			destroy() {
				// Remove the action from the array when the node is destroyed
				fadeFromBottomActions = fadeFromBottomActions.filter((a) => a !== action);
				action.destroy();
			}
		};
	}
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
		<div
			class="relative flex flex-col items-center h-full pt-[14vh] min-[450px]:pt-[16vh] sm:pt-[12vh] md:pt-[20vh] xl:pt-[14vh]"
		>
			<!-- logo -->
			<div class="absolute top-5 md:top-8 left-8">
				<img
					src="/images/main-landing/small-white-logo_45x45.webp"
					srcset="/images/main-landing/small-white-logo_35x35.webp 768w, 
					/images/main-landing/small-white-logo_45x45.webp 2000w"
					alt="Company Logo"
					class="w-full min-w-5 max-w-8 md:min-w-8 aspect-square"
				/>
			</div>

			<!-- Language Switcher -->
			<div class="absolute top-3 md:top-5 right-8 text-white">
				{#if !isAnimating}
					<LocaleSwitcher />
				{/if}
			</div>

			<!-- title -->
			<div
				class="uppercase text-center text-white {$currentAppLang === 'en'
					? 'en-landing-title mb-14 sm:mb-14 md:mb-16 2xl:mb-16 text-[12vw] min-[500px]:text-[9vw] md:text-[7vw] lg:text-[6vw] 2xl:text-8xl'
					: 'ar-landing-title mb-12 min-[400px]:mb-20 md:mb-24 xl:mb-24 text-[11vw] min-[500px]:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[5vw] 2xl:text-7xl'}"
			>
				<div
					class=" {$currentAppLang === 'en'
						? 'pb-12 min-[400px]:pb-14 sm:pb-16 lg:pb-20 2xl:pb-5'
						: 'pb-16 min-[400px]:pb-24 sm:pb-28 md:pb-32 xl:pb-36 2xl:pb-20'} "
				>
					<!-- svelte-ignore a11y-missing-content -->
					<h1 bind:this={textElement1}></h1>
				</div>
				<div class="flex sm:block space-x-3 sm:space-x-0">
					{#if $currentAppLang === 'en'}
						<!-- svelte-ignore a11y-missing-content -->
						<h1 bind:this={textElement2} class="sm:pb-14 md:pb-16 lg:pb-20 2xl:pb-5"></h1>
					{/if}
					<!-- svelte-ignore a11y-missing-content -->
					<h1 bind:this={textElement3}></h1>
				</div>
			</div>

			<!-- Buttons -->
			<div class="grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
				<div use:registerFadeFromBottomAction={{ delay: 2.8 }}>
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
				<div use:registerFadeFromBottomAction={{ delay: 3.2 }}>
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
