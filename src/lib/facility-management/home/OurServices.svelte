<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
</script>

<section>
	<div class="container mx-auto py-2 md:py-3 xl:py-5">
		<!-- title -->
		<div class="flex flex-col items-center">
			<div class="w-fit">
				<h2
					class="text-xl lg:text-3xl xl:text-4xl font-extrabold uppercase {$currentAppLang === 'en'
						? 'pb-1'
						: 'pb-3'}"
				>
					{$t('services.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-32' : 'w-24'} h-[2px] bg-primary-700"></div>
		</div>
		<!-- content -->
		<div class="relative mt-8 sm:mt-12 mx-5 md:mx-0 h-[500px]">
			<div
				class="absolute bg-surface-500 w-[60%] md:w-[40%] lg:w-[30%] h-[60%] lg:h-[65%] xl:w-[25%] xl:h-[70%] 2xl:w-[25%] 2xl:h-[80%] top-0 left-0 z-10"
			></div>

			<div
				class="absolute w-[60%] md:w-[40%] lg:w-[30%] h-[60%] lg:h-[65%] xl:w-[25%] xl:h-[75%] 2xl:w-[25%] 2xl:h-[85%] top-5 left-8 2xl:top-8 2xl:left-10 z-30"
			>
				<img
					src="/images/fm/home/elevator_450x450.webp"
					alt="an elevator"
					class="absolute inset-0 object-cover w-full h-full aspect-auto"
				/>
			</div>

			<div class="absolute w-full top-40 xl:top-20 pl-16 2xl:pl-40 z-20">
				<div class="bg-surface-50 w-full xl:h-[380px] 2xl:h-[420px]">
					<div
						class="h-full flex flex-col justify-center pt-[80%] min-[390px]:pt-[70%] min-[420px]:pt-[60%] min-[475px]:pt-[55%]
            min-[500px]:pt-[50%] min-[575px]:pt-[45%] min-[620px]:pt-[40%] md:pt-48 lg:pt-52
            xl:pt-5 pb-8 px-5 xl:px-[200px] xl:ml-36"
					>
						<p class="text-lg lg:text-2xl font-semibold">{$t('service1.title1')}</p>
						<p class="text-lg lg:text-2xl font-semibold pt-3">{$t('service1.title2')}</p>
						<p class="text-base lg:text-lg font-light 2xl:text-justify pt-7">
							{$t('service1.text')}
						</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="relative
      {$currentAppLang === 'en'
				? 'mt-[450px] min-[370px]:mt-[400px] min-[400px]:mt-[350px] min-[430px]:mt-[300px] min-[480px]:mt-[250px] min-[550px]:mt-[200px]'
				: 'mt-[270px] min-[370px]:mt-[260px] min-[400px]:mt-[240px] min-[430px]:mt-[220px] min-[480px]:mt-[180px] min-[550px]:mt-[150px]'} 
      sm:mt-48 md:mt-32 xl:mt-12 2xl:mt-20 mx-5 md:mx-0 h-[500px]"
		>
			<div
				class="absolute bg-surface-500 w-[60%] md:w-[40%] lg:w-[30%] h-[60%] lg:h-[65%] xl:w-[25%] xl:h-[70%] 2xl:w-[25%] 2xl:h-[80%] top-0 max-md:left-0 md:right-0 z-10"
			></div>

			<div
				class="absolute w-[60%] md:w-[40%] lg:w-[30%] h-[60%] lg:h-[65%] xl:w-[25%] xl:h-[75%] 2xl:w-[25%] 2xl:h-[85%] top-5 max-md:left-8 md:right-8 2xl:top-8 2xl:right-10 z-30"
			>
				<img
					src="/images/fm/home/wind_450x450.webp"
					alt="a hero background"
					class="absolute inset-0 object-cover w-full h-full aspect-auto"
				/>
			</div>

			<div class="absolute w-full top-40 xl:top-20 pl-16 md:pl-0 md:pr-16 2xl:pr-40 z-20">
				<div class="bg-surface-50 w-full xl:h-[380px] 2xl:h-[420px]">
					<div
						class="h-full flex flex-col justify-center pt-[80%] min-[390px]:pt-[70%] min-[420px]:pt-[60%] min-[475px]:pt-[55%]
            min-[500px]:pt-[50%] min-[575px]:pt-[45%] min-[620px]:pt-[40%] md:pt-48 lg:pt-52 xl:pt-5 pb-8 px-5 xl:px-[200px] xl:mr-40"
					>
						<p class="text-lg lg:text-2xl font-semibold">{$t('service2.title1')}</p>
						<p class="text-lg lg:text-2xl font-semibold pt-3">{$t('service2.title2')}</p>
						<p class="text-base lg:text-lg font-light 2xl:text-justify pt-7">
							{$t('service2.text')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
