<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
</script>

<section>
	<div class="container mx-auto pt-12 md:pt-16 xl:pt-20">
		<div
			class="grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 md:gap-6 xl:gap-4 2xl:gap-8 mx-5 sm:mx-8 md:mx-0"
		>
			<div class="card rounded-sm bg-surface-50">
				<div class="flex flex-col h-fit p-8 sm:p-12 md:p-10 lg:p-16 xl:p-12 2xl:p-16">
					<div class="text-4xl md:text-5xl font-extrabold py-5">
						<p>01</p>
					</div>
					<div class="text-xl md:text-2xl font-semibold py-2">
						<p class="md:min-h-16">{$t('cs.facility.departments.title1')}</p>
					</div>
					<div class="my-3 h-[1px] w-full bg-surface-500"></div>
					<div class="text-base lg:text-lg font-light py-2">
						<p>
							{$t('cs.facility.departments.p1')}
						</p>
					</div>
				</div>
			</div>

			<div class="card rounded-sm bg-primary-700">
				<div class="flex flex-col h-fit p-8 sm:p-12 md:p-10 lg:p-16 xl:p-12 2xl:p-16">
					<div class="text-4xl md:text-5xl font-extrabold py-5">
						<p>02</p>
					</div>
					<div class="text-xl md:text-2xl font-semibold py-2 text-surface-50">
						<p class="md:min-h-16">{$t('cs.facility.departments.title2')}</p>
					</div>
					<div class="my-3 h-[1px] w-full bg-surface-50"></div>
					<div class="text-base lg:text-lg font-light py-2 text-surface-50">
						<p>
							{$t('cs.facility.departments.p2')}
						</p>
					</div>
				</div>
			</div>

			<div class="card rounded-sm bg-surface-50">
				<div class="flex flex-col h-fit p-8 sm:p-12 md:p-10 lg:p-16 xl:p-12 2xl:p-16">
					<div class="text-4xl md:text-5xl font-extrabold py-5">
						<p>03</p>
					</div>
					<div class="text-xl md:text-2xl font-semibold py-2">
						<p class="md:min-h-16">{$t('cs.facility.departments.title3')}</p>
					</div>
					<div class="my-3 h-[1px] w-full bg-surface-500"></div>
					<div class="text-base lg:text-lg font-light py-2">
						<p>
							{$t('cs.facility.departments.p3')}
						</p>
					</div>
				</div>
			</div>

			<div class="card rounded-sm bg-primary-700">
				<div class="flex flex-col h-fit p-8 sm:p-12 md:p-10 lg:p-16 xl:p-12 2xl:p-16">
					<div class="text-4xl md:text-5xl font-extrabold py-5">
						<p>04</p>
					</div>
					<div class="text-xl md:text-2xl font-semibold py-2 text-surface-50">
						<p class="md:min-h-16">{$t('cs.facility.departments.title4')}</p>
					</div>
					<div class="my-3 h-[1px] w-full bg-surface-50"></div>
					<div class="text-base lg:text-lg font-light py-2 text-surface-50">
						<p>
							{$t('cs.facility.departments.p4')}
						</p>
					</div>
				</div>
			</div>

			<div class="card rounded-sm bg-surface-50">
				<div class="flex flex-col h-fit p-8 sm:p-12 md:p-10 lg:p-16 xl:p-12 2xl:p-16">
					<div class="text-4xl md:text-5xl font-extrabold py-5">
						<p>05</p>
					</div>
					<div class="text-xl md:text-2xl font-semibold py-2">
						<p class="md:min-h-16">{$t('cs.facility.departments.title5')}</p>
					</div>
					<div class="my-3 h-[1px] w-full bg-surface-500"></div>
					<div class="text-base lg:text-lg font-light py-2">
						<p>
							{$t('cs.facility.departments.p5')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
