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
					{$t('fm.home.clients.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-32' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>

		<!-- clients logos -->
		<div class="flex flex-col">
			<div
				class="grid grid-cols-2 min-[300px]:grid-cols-3 md:grid-cols-5 min-[300px]:gap-x-3 py-3 xl:px-48"
			>
				<!-- aramco -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[8%] sm:p-[5%]">
						<img
							src="/images/fm/home/clientsSection/aramco_400x200.webp"
							srcset="/images/fm/home/clientsSection/aramco_300x150.webp 768w, 
							/images/fm/home/clientsSection/aramco_400x200.webp 2000w"
							alt="a client logo"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</div>

				<!-- neom -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[20%]">
						<img
							src="/images/fm/home/clientsSection/neom_400x400.webp"
							srcset="/images/fm/home/clientsSection/neom_250x250.webp 1024w, 
							/images/fm/home/clientsSection/neom_400x400.webp 2000w"
							alt="a client logo"
							class="w-full aspect-[1/1]"
						/>
					</div>
				</div>

				<!-- sports -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[22%]">
						<img
							src="/images/fm/home/clientsSection/sports_180x180.webp"
							srcset="/images/fm/home/clientsSection/sports_120x120.webp 768w, 
							/images/fm/home/clientsSection/sports_180x180.webp 2000w"
							alt="a client logo"
							class="aspect-[1/1] w-full"
						/>
					</div>
				</div>

				<!-- Imam University -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[30%]">
						<img
							src="/images/fm/home/clientsSection/_Imam University_180x180.webp"
							srcset="/images/fm/home/clientsSection/_Imam University_120x120.webp 768w, 
							/images/fm/home/clientsSection/_Imam University_180x180.webp 2000w"
							alt="a client logo"
							class="w-full aspect-[1/1]"
						/>
					</div>
				</div>

				<!-- Satco -->
				<div class="flex flex-col items-center justify-center">
					<div class="w-full p-[15%]">
						<img
							src="/images/fm/home/clientsSection/_Satco_400x200.webp"
							srcset="/images/fm/home/clientsSection/_Satco_300x150.webp 1024w, 
							/images/fm/home/clientsSection/_Satco_400x200.webp 2000w"
							alt="a client logo"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
