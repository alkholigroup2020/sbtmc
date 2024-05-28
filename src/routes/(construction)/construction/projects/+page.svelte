<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte';
	import CsFooter from '$lib/construction/CSFooter.svelte';

	import type { PageData } from './$types';
	import ProjectsIntro from '$lib/facility-management/projects/ProjectsIntro.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let projects: any = [];
	let allProjectYears: string[] = [];
	let isLoading = true; // Add a loading state
	let selectedYear = 'All';
	let selectedCategory = 'All';

	const getProjectsData = async () => {
		try {
			const response = await fetch('/api/cs-projects/');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const projectsData = await response.json();
			// Assuming the structure of the received data is as expected
			projects = projectsData.constructionProjects.data;

			// Use a Set to ensure each year is added only once
			const yearsSet = new Set<string>();
			projects.forEach((project: { attributes: { projectYear: any } }) => {
				const year = project.attributes.projectYear;
				yearsSet.add(year);
			});

			// Convert Set back to array for easier use in Svelte components
			allProjectYears = Array.from(yearsSet);

			// Sort the years array from the oldest to the newest
			allProjectYears.sort((a, b) => parseInt(a) - parseInt(b));

			isLoading = false; // Set loading to false once data is fetched
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(async () => {
		await getProjectsData();

		// Select all the images
		const images = document.querySelectorAll('.project');

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

	$: filteredProjects = projects.filter(
		(project: { attributes: { projectYear: string; projectCategory: string } }) => {
			return (
				(selectedYear === 'All' || project.attributes.projectYear === selectedYear) &&
				(selectedCategory === 'All' || project.attributes.projectCategory === selectedCategory)
			);
		}
	);

	export let data: PageData;
	const formData = data.form;
</script>

<div class="flex justify-center">
	<div class="w-full max-w-[1920px]">
		<div class="relative">
			<!-- <div class="absolute inset-0 h-[300px] bg-surface-500"></div> -->
			<div>
				<!-- Hero image container -->
				<div class="relative overflow-hidden h-[300px] md:h-[400px] xl:h-[480px]">
					<img
						src="/images/fm/projects/projects_1920x1080.webp"
						srcset="/images/fm/projects/projects_560x315.webp 640w, 	 
						/images/fm/projects/projects_1120x630.webp 1024w, 
						/images/fm/projects/projects_1920x1080.webp 2000w"
						alt="a hero background"
						class="absolute inset-0 object-cover object-bottom w-full h-full aspect-auto"
					/>
					<div
						class="absolute inset-0 text-white flex flex-col justify-center container mx-auto px-3 sm:px-0"
					>
						<p
							class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-2 md:mb-3 2xl:mb-4 sm:w-4/5 xl:w-2/3 2xl:w-1/2"
						>
							<span class="leading-relaxed">
								{$t('fm.projects.heading')}
							</span>
						</p>
						<div class="w-1/4 md:w-1/5 2xl:w-32 h-[2px] bg-primary-700"></div>
					</div>

					<!-- <div class="absolute inset-0 bg-black opacity-20"></div> -->
				</div>
			</div>
		</div>

		{#if isLoading}
			<div class="flex justify-center items-center h-96">
				<ProgressRadial
					stroke={50}
					meter="stroke-primary-700"
					track="stroke-primary-700/30"
					strokeLinecap="butt"
				/>
			</div>
		{:else}
			<!-- selectors -->
			<div
				class="max-[450px]:space-y-3 min-[450px]:flex container mx-auto justify-center py-5 2xl:py-16"
			>
				<div class="min-[450px]:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 mx-3">
					<select bind:value={selectedYear} class="customSelect">
						<option value="All">{$t('fm.projects.options.all')}</option>
						{#each allProjectYears as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
				</div>

				<div class="min-[450px]:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 mx-3">
					<select bind:value={selectedCategory} class="customSelect">
						<option value="All">{$t('fm.projects.options.all')}</option>
						{#each projects as project}
							<option value={project.attributes.projectCategory}>
								{#if project.attributes.projectCategory == 'education'}
									{$t('fm.projects.options.education')}
								{:else if project.attributes.projectCategory == 'construction'}
									{$t('fm.projects.options.construction')}
								{/if}
							</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- projects -->
			<div
				class="grid min-[350px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-12 container mx-auto px-3 md:px-0"
			>
				{#each filteredProjects as project}
					<div
						class="card bg-[#f6f6f9] hover:bg-primary-700 hover:p-1 hover:text-white rounded-none project"
					>
						<div>
							<img
								src={`https://cms.buildingtek.com${project.attributes.projectImage_600x360.data.attributes.url}`}
								alt="screenshot from a project"
								class="aspect-[1/0.6]"
							/>
						</div>
						<div class="py-3 sm:py-5 text-center space-y-2 sm:space-y-3">
							<div>
								<p class="text-sm sm:text-base md:text-lg xl:text-xl font-semibold">
									{project.attributes.projectYear}
								</p>
							</div>

							<div>
								{#if $currentAppLang === 'en'}
									<p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
										{project.attributes.projectTitle}
									</p>
								{:else}
									<p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
										{project.attributes.localizations.data[0].attributes.projectTitle}
									</p>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<div class="h-[200px]"></div>

		<CsFooter {formData} />
	</div>
</div>

<style>
	.customSelect {
		width: 100%;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		background-color: rgb(var(--color-surface-50));
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color) !important;
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
			var(--tw-ring-color) !important;
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
		border-width: var(--theme-border-base);
		border-color: rgb(var(--color-surface-300));
	}

	.customSelect {
		border-radius: var(--theme-rounded-container);
	}

	.customSelect {
		padding: 0.5rem; /* 8px */
		padding-right: 2rem; /* 32px */
	}

	.customSelect option {
		cursor: pointer;
		padding-left: 1rem; /* 16px */
		padding-right: 1rem; /* 16px */
		padding-top: 0.5rem; /* 8px */
		padding-bottom: 0.5rem; /* 8px */
		background-color: rgb(var(--color-surface-50));
		border-radius: var(--theme-rounded-base);
	}
</style>
