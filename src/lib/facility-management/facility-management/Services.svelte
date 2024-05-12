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
					{$t('fm.facility.services.title')}
				</h2>
			</div>
			<div class="{$currentAppLang === 'en' ? 'w-24' : 'w-20'} h-[2px] bg-primary-700"></div>
		</div>

		<!-- service #1 -->
		<div>
			<div class="py-5 lg:py-12">
				<img
					src="/images/fm/facility-mgmt/AService_1600x480.webp"
					srcset="/images/fm/facility-mgmt/AService_800x400.webp 768w, 
          /images/fm/facility-mgmt/AService_1600x480.webp 2000w"
					alt="FACILITY MANAGEMENT, OPERATION & MAINTENANCE"
					class="w-full aspect-[1/0.5] md:aspect-[1/0.3]"
				/>
			</div>
			<div class="px-5 lg:px-0 lg:flex">
				<!-- title -->
				<div class="lg:w-1/3">
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase">
						<span class="text-primary-700 font-extrabold"
							>{$t('fm.facility.services.first.span')}</span
						>
						{$t('fm.facility.services.first.title')}
					</h3>
				</div>
				<!-- text -->
				<div class="lg:w-2/3 py-3 lg:py-0 {$currentAppLang === 'en' ? 'lg:pl-5' : 'lg:pr-5'}">
					<p class="text-base lg:text-lg font-light">{$t('fm.facility.services.first.p1')}</p>
					<ul class="list-disc list-inside text-md lg:text-base font-light space-y-2 py-2">
						<li>{$t('fm.facility.services.first.li1')}</li>
						<li>{$t('fm.facility.services.first.li2')}</li>
						<li>{$t('fm.facility.services.first.li3')}</li>
						<li>{$t('fm.facility.services.first.li4')}</li>
						<li>{$t('fm.facility.services.first.li5')}</li>
						<li>{$t('fm.facility.services.first.li6')}</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- service #2 -->
		<div class="py-5 lg:py-8">
			<div class="py-5 lg:py-12">
				<img
					src="/images/fm/facility-mgmt/BService_1600x480.webp"
					srcset="/images/fm/facility-mgmt/BService_800x400.webp 768w, 
          /images/fm/facility-mgmt/BService_1600x480.webp 2000w"
					alt="Electromechanical Sector"
					class="w-full aspect-[1/0.5] md:aspect-[1/0.3]"
				/>
			</div>
			<div class="px-5 lg:px-0 lg:flex">
				<!-- title -->
				<div class="lg:w-1/3">
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase">
						<span class="text-primary-700 font-extrabold"
							>{$t('fm.facility.services.second.span')}</span
						>
						{$t('fm.facility.services.second.title')}
					</h3>
				</div>
				<!-- text -->
				<div class="lg:w-2/3 py-3 lg:py-0 {$currentAppLang === 'en' ? 'lg:pl-5' : 'lg:pr-5'}">
					<p class="text-base lg:text-lg font-light">{$t('fm.facility.services.second.p1')}</p>
					<ul class="list-disc list-inside text-md lg:text-base font-light space-y-2 py-2">
						<li>{$t('fm.facility.services.second.li1')}</li>
						<li>{$t('fm.facility.services.second.li2')}</li>
						<li>{$t('fm.facility.services.second.li3')}</li>
						<li>{$t('fm.facility.services.second.li4')}</li>
						<li>{$t('fm.facility.services.second.li5')}</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- service #3 -->
		<div class="sm:pb-8 md:pb-12 lg:pb-16">
			<div class="py-5 lg:py-12">
				<img
					src="/images/fm/facility-mgmt/CService_1600x480.webp"
					srcset="/images/fm/facility-mgmt/CService_800x400.webp 768w, 
          /images/fm/facility-mgmt/CService_1600x480.webp 2000w"
					alt="TECHNOLOGIES IN THE MAINTENANCE SECTOR"
					class="w-full aspect-[1/0.5] md:aspect-[1/0.3]"
				/>
			</div>
			<div class="px-5 lg:px-0 lg:flex">
				<!-- title -->
				<div class="lg:w-1/3">
					<h3 class="text-lg lg:text-2xl xl:text-3xl uppercase">
						<span class="text-primary-700 font-extrabold"
							>{$t('fm.facility.services.third.span')}</span
						>
						{$t('fm.facility.services.third.title')}
					</h3>
				</div>
				<!-- text -->
				<div class="lg:w-2/3 py-3 lg:py-0 {$currentAppLang === 'en' ? 'lg:pl-5' : 'lg:pr-5'}">
					<p class="text-base lg:text-lg font-light">{$t('fm.facility.services.third.p1')}</p>
					<ul class="space-y-2 py-2 lg:py-3">
						<li>
							<h4 class="text-base lg:text-lg font-semibold">
								{$t('fm.facility.services.third.subTitle1')}
							</h4>
							<p class="text-sm lg:text-base font-light py-1 lg:py-2">
								{$t('fm.facility.services.third.subText1')}
							</p>
						</li>

						<li>
							<h4 class="text-base lg:text-lg font-semibold">
								{$t('fm.facility.services.third.subTitle2')}
							</h4>
							<p class="text-sm lg:text-base font-light py-1 lg:py-2">
								{$t('fm.facility.services.third.subText2')}
							</p>
						</li>

						<li>
							<h4 class="text-base lg:text-lg font-semibold">
								{$t('fm.facility.services.third.subTitle3')}
							</h4>
							<p class="text-sm lg:text-base font-light py-1 lg:py-2">
								{$t('fm.facility.services.third.subText3')}
							</p>
						</li>

						<li>
							<h4 class="text-base lg:text-lg font-semibold">
								{$t('fm.facility.services.third.subTitle4')}
							</h4>
							<p class="text-sm lg:text-base font-light py-1 lg:py-2">
								{$t('fm.facility.services.third.subText4')}
							</p>
						</li>

						<li>
							<h4 class="text-base lg:text-lg font-semibold">
								{$t('fm.facility.services.third.subTitle5')}
							</h4>
							<p class="text-sm lg:text-base font-light py-1 lg:py-2">
								{$t('fm.facility.services.third.subText5')}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
