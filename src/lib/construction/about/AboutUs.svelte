<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
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
					{$t('cs.about.about.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-28' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>
		<!-- text -->
		<div class="px-5 sm:px-8 md:px-28 xl:px-[15%] text-justify pt-10 pb-3 space-y-5">
			<p class="text-base lg:text-lg font-light">
				{$t('cs.about.about.p1')}
			</p>
			<p class="text-base lg:text-lg font-light">
				{$t('cs.about.about.p2')}
			</p>
		</div>
	</div>
</section>
