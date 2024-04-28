<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let departElement: HTMLDivElement;

	const breakpoints: any = {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1536
	};

	let dimensions = { width: 0, height: 0 };
	let currentBreakpoint = '';
	let activeSlide: string;

	let updateDimensions = () => {
		dimensions.width = window.innerWidth;
		dimensions.height = window.innerHeight;

		for (let breakpoint in breakpoints) {
			if (window.innerWidth >= breakpoints[breakpoint]) {
				currentBreakpoint = breakpoint;
			}
		}

		if (currentBreakpoint === '2xl') {
			activeSlide = '02';
		} else {
			activeSlide = '01';
		}
	};

	onMount(() => {
		window.addEventListener('resize', updateDimensions);
		updateDimensions();
	});

	function multiColumnLeft(): void {
		const childWidth = departElement.children[0].getBoundingClientRect().width;
		if (departElement.scrollLeft <= 0) {
			gsap.to(departElement, {
				scrollLeft: departElement.scrollWidth - childWidth,
				duration: 0.2, // Animation duration in seconds
				ease: 'back.inOut' // Smoothing animation
			});
			// Active slide adjustments
			if (currentBreakpoint === '2xl') {
				activeSlide = '04';
			} else if (currentBreakpoint === 'lg' || currentBreakpoint === 'xl') {
				activeSlide = '04';
			} else {
				activeSlide = '05';
			}
		} else {
			gsap.to(departElement, {
				scrollLeft: `-= ${childWidth}`,
				duration: 0.2,
				ease: 'back.inOut'
			});
			// Active slide adjustments
			if (currentBreakpoint === '2xl') {
				if (activeSlide === '04') {
					activeSlide = '03';
				} else if (activeSlide === '03') {
					activeSlide = '02';
				}
			} else if (currentBreakpoint === 'lg' || currentBreakpoint === 'xl') {
				if (activeSlide === '04') {
					activeSlide = '03';
				} else if (activeSlide === '03') {
					activeSlide = '02';
				} else if (activeSlide === '02') {
					activeSlide = '01';
				}
			} else {
				if (activeSlide === '01') {
					activeSlide = '05';
				} else if (activeSlide === '05') {
					activeSlide = '04';
				} else if (activeSlide === '04') {
					activeSlide = '03';
				} else if (activeSlide === '03') {
					activeSlide = '02';
				} else if (activeSlide === '02') {
					activeSlide = '01';
				}
			}
		}
	}

	function multiColumnRight(): void {
		const childWidth = departElement.children[0].getBoundingClientRect().width;

		if (
			departElement.scrollLeft >=
			departElement.scrollWidth - departElement.clientWidth - childWidth
		) {
			gsap.to(departElement, {
				scrollLeft: 0,
				duration: 0.2,
				ease: 'back.inOut'
			});
			// Active slide adjustments
			if (currentBreakpoint === '2xl') {
				activeSlide = '02';
			} else {
				activeSlide = '01';
			}
		} else {
			gsap.to(departElement, {
				scrollLeft: `+= ${childWidth}`,
				duration: 0.2,
				ease: 'back.inOut'
			});
			// Active slide adjustments
			if (currentBreakpoint === '2xl') {
				if (activeSlide === '02') {
					activeSlide = '03';
				} else if (activeSlide === '03') {
					activeSlide = '04';
				}
			} else {
				if (activeSlide === '01') {
					activeSlide = '02';
				} else if (activeSlide === '02') {
					activeSlide = '03';
				} else if (activeSlide === '03') {
					activeSlide = '04';
				} else if (activeSlide === '04') {
					activeSlide = '05';
				}
			}
		}
	}

	function handleDivClick(number: string) {
		activeSlide = number;
	}

	interface Department {
		number: string;
		title: string;
		text: string;
	}

	let departments: Department[] = [];
	// Reactively update departments whenever currentAppLang changes
	$: {
		departments = [
			{
				number: '01',
				title: $t('fm.home.department1.title'),
				text: $t('fm.home.department1.text')
			},
			{
				number: '02',
				title: $t('fm.home.department2.title'),
				text: $t('fm.home.department2.text')
			},
			{
				number: '03',
				title: $t('fm.home.department3.title'),
				text: $t('fm.home.department3.text')
			},
			{
				number: '04',
				title: $t('fm.home.department4.title'),
				text: $t('fm.home.department4.text')
			},
			{
				number: '05',
				title: $t('fm.home.department5.title'),
				text: $t('fm.home.department5.text')
			}
		];
	}
</script>

<section
	dir="ltr"
	class="mt-[500px] min-[350px]:mt-[450px] min-[370px]:mt-[400px] min-[420px]:mt-[350px]
	min-[475px]:mt-[250px] min-[560px]:mt-[200px] md:mt-32 xl:mt-0"
>
	<div class="container mx-auto pt-12 md:pt-16 xl:pt-20">
		<!-- title -->
		<div class="flex flex-col items-center">
			<div class="w-fit">
				<h2
					class="text-xl lg:text-3xl xl:text-4xl font-extrabold uppercase {$currentAppLang === 'en'
						? 'pb-1'
						: 'pb-3'}"
				>
					{$t('fm.home.departments.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-44' : 'w-36'} h-[2px] bg-primary-700"></div>
		</div>

		<!-- content -->
		<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center my-12">
			<!-- Button: Left -->
			<button type="button" on:click={multiColumnLeft}>
				<span>
					<svg
						viewBox="0 0 1024 1024"
						class="icon w-5 md:w-7 h-5 md:h-7 rotate-90 mr-3"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
							fill="#bf1120"
						/></svg
					>
				</span>
			</button>

			<!-- Carousel -->
			<div
				bind:this={departElement}
				class="snap-x snap-mandatory scroll-smooth flex items-center gap-2 pb-5 overflow-x-hidden cursor-pointer"
				style="scroll-snap-type: x mandatory;"
			>
				{#each departments as department}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						on:click={() => {
							handleDivClick(department.number);
						}}
						class="flex flex-col shrink-0 w-full lg:w-1/2 2xl:w-[33%] snap-start p-5 sm:p-8 md:p-12 h-fit
						{activeSlide === department.number
							? 'bg-primary-700 text-surface-50 m-2 rounded-lg shadow-lg shadow-surface-400'
							: 'bg-surface-50'}
						"
					>
						<div
							class="text-4xl md:text-5xl font-extrabold py-5 {activeSlide === department.number
								? 'text-secondary-900'
								: 'text-primary-700'}
						"
						>
							<p>{department.number}</p>
						</div>
						<div class="text-large font-semibold py-2 xl:h-14">
							<p>{department.title}</p>
						</div>
						{#if activeSlide === department.number}
							<div class="my-3 h-[1px] w-full bg-white"></div>
							<div class="py-2">
								<p>{department.text}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Button-Right -->
			<button type="button" on:click={multiColumnRight}>
				<span>
					<svg
						viewBox="0 0 1024 1024"
						class="icon w-5 md:w-7 h-5 md:h-7 -rotate-90 ml-3"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
							fill="#bf1120"
						/></svg
					>
				</span>
			</button>
		</div>
	</div>
</section>
