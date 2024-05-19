<script lang="ts">
	import { currentAppLang } from '$lib/stores';
	import { t } from '$lib/i18n/translator';

	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	import { superForm } from 'sveltekit-superforms/client';

	import ContactIntro from '$lib/facility-management/contact-us/ContactIntro.svelte';
	import ContactForm from '$lib/facility-management/contact-us/ContactForm.svelte';
	import Location from '$lib/facility-management/contact-us/Location.svelte';

	export let data;
	const formData = data.form; // footer form data
	const contactUsForm = data.theContactUsForm; // contact-us form data

	const { form, errors, constraints, enhance } = superForm(formData, {
		resetForm: true,
		onUpdate: (U) => {
			if (U.form.data.someThingWrong) {
				const errorMSG: ToastSettings = {
					message: 'Sorry, something went wrong!',
					hideDismiss: true,
					timeout: 3000,
					background: 'variant-filled-error',
					classes: 'text-white text-2xl'
				};
				toastStore.trigger(errorMSG);
			} else {
				const successMSG: ToastSettings = {
					// message: $t('landing.footer.successMSG'),
					message: 'Thank You!',
					hideDismiss: true,
					timeout: 3000,
					background: 'variant-filled-success',
					classes: 'text-white text-2xl'
				};
				toastStore.trigger(successMSG);
			}
		}
	});
</script>

<div class="flex justify-center">
	<div class="w-full max-w-[1920px]">
		<div class="relative">
			<!-- <div class="absolute inset-0 h-[300px] bg-surface-500"></div> -->
			<div>
				<!-- Hero image container -->
				<div class="relative overflow-hidden h-[300px] md:h-[400px] xl:h-[480px]">
					<img
						src="/images/fm/contact-us/contact-us_1920x1080.webp"
						srcset="/images/fm/contact-us/contact-us_560x315.webp 640w, 	 
						/images/fm/contact-us/contact-us_1120x630.webp 1024w, 
						/images/fm/contact-us/contact-us_1920x1080.webp 2000w"
						alt="a hero background"
						class="absolute inset-0 object-cover object-center w-full h-full aspect-auto"
					/>
					<div
						class="absolute inset-0 text-white flex flex-col justify-end container mx-auto px-3 sm:px-0"
					>
						<p
							class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-1 sm:w-4/5 xl:w-2/3 2xl:w-1/2"
						>
							<span class="leading-relaxed">
								{$t('fm.contact-us.heading')}
							</span>
						</p>
						<div class="w-1/6 md:w-16 lg:w-28 2xl:w-32 h-[2px] bg-primary-700"></div>
						<div class="h-16 w-full"></div>
					</div>

					<!-- <div class="absolute inset-0 bg-black opacity-20"></div> -->
				</div>
			</div>
		</div>

		<ContactIntro />

		<ContactForm {contactUsForm} />

		<Location />

		<div class="w-full h-[80px]"></div>

		<!-- footer section -->
		<section class="mt-[250px]">
			<div class="relative">
				<div
					class="absolute bottom-0 w-full h-0 sm:h-44 md:h-36 bg-secondary-300 opacity-80 z-10"
				></div>

				<div class="absolute bottom-0 sm:bottom-10 w-full z-20">
					<div class="container mx-auto bg-surface-500 text-surface-50 py-3">
						<!-- form section -->
						<div class="md:w-[80%] lg:w-[70%] xl:w-[50%] text-sm md:text-base">
							<div class="grid md:grid-cols-3 px-5 pt-6 md:px-8 md:pt-8">
								<!-- the red part -->
								<div
									class="bg-primary-700 w-full text-surface-50 px-3 md:px-0 py-2 md:text-center uppercase {$currentAppLang ===
									'en'
										? 'rounded-l-sm'
										: 'rounded-r-sm'}"
								>
									{$t('landing.footer.question')}
								</div>
								<!-- the white part -->
								<div class="w-full md:col-span-2">
									<form method="POST" action="?/footerForm" use:enhance>
										<input
											type="text"
											name="question"
											placeholder={$t('landing.footer.placeholder')}
											class="w-full text-sm md:text-base bg-surface-50 border-none text-black py-2 {$currentAppLang ===
											'en'
												? 'rounded-r-sm'
												: 'rounded-l-sm'}"
											aria-invalid={$errors.question ? 'true' : undefined}
											bind:value={$form.question}
											{...$constraints.question}
										/>
										{#if $errors.question}<span class="invalid">{$errors.question}</span>{/if}
									</form>
								</div>
							</div>
						</div>

						<!-- rights & icons section -->
						<div class="md:grid md:grid-cols-3 p-3 md:p-7" dir="ltr">
							<!-- social media icons -->
							<div dir="ltr" class="flex justify-center items-end pt-3 md:pt-0 md:order-2">
								<div class="flex space-x-5">
									<!-- facebook -->
									<div>
										<span>
											<svg
												fill="#fff"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												class="w-4 h-4 md:w-5 md:h-5"
												viewBox="0 0 512 512"
												xml:space="preserve"
											>
												<g id="7935ec95c421cee6d86eb22ecd11b7e3">
													<path
														style="display: inline;"
														d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
															c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
															c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
															l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"
													>
													</path>
												</g>
											</svg>
										</span>
									</div>
									<!-- twitter -->
									<div>
										<span>
											<svg
												class="w-4 h-4 md:w-5 md:h-5"
												viewBox="0 -2 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
											>
												<title>twitter [#154]</title>
												<desc>Created with Sketch.</desc>
												<defs> </defs>
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-60.000000, -7521.000000)"
														fill="#fff"
													>
														<g id="icons" transform="translate(56.000000, 160.000000)">
															<path
																d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
																id="twitter-[#154]"
															>
															</path>
														</g>
													</g>
												</g>
											</svg>
										</span>
									</div>
									<!-- instagram -->
									<div>
										<span>
											<svg
												class="w-4 h-4 md:w-5 md:h-5"
												viewBox="0 0 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
											>
												<title>instagram [#167]</title>
												<desc>Created with Sketch.</desc>
												<defs> </defs>
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-340.000000, -7439.000000)"
														fill="#FFF"
													>
														<g id="icons" transform="translate(56.000000, 160.000000)">
															<path
																d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
																id="instagram-[#167]"
															>
															</path>
														</g>
													</g>
												</g>
											</svg>
										</span>
									</div>
									<!-- YouTube -->
									<div>
										<span>
											<svg
												class="w-5 h-5 md:w-6 md:h-6"
												viewBox="0 -3 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
											>
												<title>youtube [#168]</title>
												<desc>Created with Sketch.</desc>
												<defs> </defs>
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-300.000000, -7442.000000)"
														fill="#FFF"
													>
														<g id="icons" transform="translate(56.000000, 160.000000)">
															<path
																d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
																id="youtube-[#168]"
															>
															</path>
														</g>
													</g>
												</g>
											</svg>
										</span>
									</div>
								</div>
							</div>

							<!-- rights -->
							<div class="text-sm text-center md:text-left space-y-2 md:order-1">
								<p class="pt-2">Cookie Policy | Privacy | Terms & Conditions</p>
								<p>All rights @ Alkholi Group</p>
							</div>

							<div class="hidden md:block md:order-3">
								<div class="h-full flex justify-end items-end">
									<!-- logo -->
									<img
										src="/images/main-landing/small-white-logo_45x45.webp"
										alt="Company Logo"
										class="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
