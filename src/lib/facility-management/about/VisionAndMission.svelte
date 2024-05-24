<script lang="ts">
	import { t } from '$lib/i18n/translator';
</script>

<section class="bg-surface-500 pt-24 md:pt-16 lg:pt-12 text-white">
	<div class="container mx-auto px-3 py-5 lg:py-10 xl:py-12 2xl:py-20">
		<div class="md:flex 2xl:px-32">
			<div class="md:w-1/2 min-[400px]:px-12 min-[550px]:px-16 md:px-8 xl:px-24 2xl:px-12 py-5">
				<div class="flex flex-col items-center">
					<img
						src="/images/fm/about/circle_300x300.webp"
						srcset="
            /images/fm/about/circle_200x200.webp 1280w,
            /images/fm/about/circle_300x300.webp 2000w
            "
						class="aspect-[1/1] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36"
						alt="our mission"
					/>
					<p class="text-xl lg:text-3xl xl:text-4xl font-semibold uppercase py-5 xl:pt-8 xl:pb-3">
						{$t('fm.about.mission.title')}
					</p>
					<p class="text-center text-base lg:text-lg font-light py-3 xl:py-5 leading-10">
						<span class="leading-9">
							{$t('fm.about.mission.text')}
						</span>
					</p>
				</div>
			</div>

			<div class="md:w-1/2 min-[400px]:px-12 min-[550px]:px-16 md:px-8 xl:px-24 2xl:px-12 py-5">
				<div class="flex flex-col items-center">
					<img
						src="/images/fm/about/idea_300x300.webp"
						srcset="
            /images/fm/about/idea_200x200.webp 1280w,
            /images/fm/about/idea_300x300.webp 2000w
            "
						class="aspect-[1/1] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36"
						alt="our vision"
					/>
					<p class="text-xl lg:text-3xl xl:text-4xl font-semibold uppercase py-5 xl:pt-8 xl:pb-3">
						{$t('fm.about.vision.title')}
					</p>
					<p class="text-center text-base lg:text-lg font-light py-3 xl:py-5">
						<span class="leading-9">
							{$t('fm.about.vision.text')}
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
