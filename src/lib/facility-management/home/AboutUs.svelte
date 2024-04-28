<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
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
					{$t('fm.home.about.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-28' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>
		<!-- text -->
		<div class="px-5 sm:px-8 md:px-28 xl:px-[15%] text-justify py-10 space-y-5">
			<p class="text-base lg:text-lg font-light">
				{$t('fm.home.about.p1')}
			</p>
			<p class="text-base lg:text-lg font-light">
				{$t('fm.home.about.p2')}
			</p>
			<ul class="list-none space-y-2 text-base lg:text-lg font-light">
				<li>{$t('fm.home.about.li1')}</li>
				<li>{$t('fm.home.about.li2')}</li>
				<li>{$t('fm.home.about.li3')}</li>
				<li>{$t('fm.home.about.li4')}</li>
				<li>{$t('fm.home.about.li5')}</li>
				<li>{$t('fm.home.about.li6')}</li>
			</ul>
		</div>
		<!-- read more btn -->
		<div class="flex justify-center py-2">
			<button class="btn bg-primary-700 rounded-none text-white text-base lg:text-lg py-3">
				<span>
					{$t('fm.home.about.more')}
				</span>
				<span
					><svg
						viewBox="0 0 1024 1024"
						class="icon w-3 md:w-4 h-3 md:h-4 {$currentAppLang === 'en'
							? '-rotate-90 ml-3'
							: 'rotate-90 mr-3'}"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
							fill="#FFF"
						/></svg
					>
				</span>
			</button>
		</div>
	</div>
</section>
