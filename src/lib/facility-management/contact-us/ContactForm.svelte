<script lang="ts">
	import { pageDirection } from '$lib/stores';
	import { t } from '$lib/i18n/translator';
	import { superForm } from 'sveltekit-superforms/client';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	export let contactUsForm;

	const { form, errors, constraints, enhance } = superForm(contactUsForm, {
		resetForm: true,
		validators: {
			firstName: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 3) {
					return `${$t('fm.contact-us.form.firstName.shortError')}`;
				} else if (value.length > 60) {
					return `${$t('fm.contact-us.form.firstName.longError')}`;
				} else if (!nameFormat.test(value)) {
					return `${$t('fm.contact-us.form.firstName.typeError')}`;
				} else {
					return null;
				}
			},
			lastName: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/;
				if (value.length < 3) {
					return `${$t('fm.contact-us.form.lastName.shortError')}`;
				} else if (value.length > 60) {
					return `${$t('fm.contact-us.form.lastName.longError')}`;
				} else if (!nameFormat.test(value)) {
					return `${$t('fm.contact-us.form.lastName.typeError')}`;
				} else {
					return null;
				}
			},
			email: (value) => {
				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$t('fm.contact-us.form.email.error')}` : null;
			},
			mobile: (value) => {
				// if (value === undefined) {
				// 	// If mobile is optional and not filled in
				// 	return null;
				// }
				const mobileFormat = /^[0-9]{10}$/;
				return !mobileFormat.test(value) ? `${$t('fm.contact-us.form.mobile.error')}` : null;
			},
			companyName: (value) => {
				if (value === undefined) {
					// If companyName is optional and not filled in
					return null;
				}
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 3) {
					return `${$t('fm.contact-us.form.companyName.shortError')}`;
				} else if (value.length > 60) {
					return `${$t('fm.contact-us.form.companyName.longError')}`;
				} else if (!nameFormat.test(value)) {
					return `${$t('fm.contact-us.form.companyName.typeError')}`;
				} else {
					return null;
				}
			},
			subject: (value) => {
				if (value === undefined) {
					// If subject is optional and not filled in
					return null;
				} else if (value.length > 100) {
					return `${$t('fm.contact-us.form.subject.longError')}`;
				}
			},
			textArea: (value) => {
				if (value.length > 500) {
					return `${$t('fm.contact-us.form.textArea.error')}`;
				}
				return null;
			}
		},
		onResult: (result) => {
			if (result.result.status === 200) {
				const successMSG: ToastSettings = {
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

<section class="container mx-auto">
	<div class="lg:grid lg:grid-cols-3 gap-5 py-8 xl:py-12">
		<!-- contact details -->
		<div class="bg-surface-500 p-8 lg:p-12 flex flex-col justify-between space-y-12 text-white">
			<div>
				<p class="text-xl lg:text-3xl xl:text-4xl font-bold">{$t('fm.contact-us.form.title')}</p>
			</div>

			<!-- phone -->
			<div class="flex space-x-3 md:space-x-5 lg:space-x-4">
				<div class="min-w-fit">
					<a type="button" href="tel:00966114041919" aria-label="Riyadh branch phone number">
						<img
							src="/images/fm/contact-us/asset-53.png"
							class="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16"
							alt="phone"
						/>
					</a>
				</div>
				<div class="{$pageDirection === 'rtl' ? 'pr-5' : ''} flex items-center">
					<div class="flex flex-col justify-around h-full">
						<a type="button" href="tel:00966114041919" aria-label="Riyadh branch phone number">
							<p class="text-base lg:text-lg font-light">{$t('fm.contact-us.form.phone1')}</p>
						</a>
						<a type="button" href="tel:00966114022426" aria-label="Riyadh branch phone number">
							<p class="text-base lg:text-lg font-light">{$t('fm.contact-us.form.phone2')}</p>
						</a>
					</div>
				</div>
			</div>

			<!-- location -->
			<div class="flex space-x-3 md:space-x-5 lg:space-x-4">
				<div class="min-w-fit">
					<a
						type="button"
						href="https://maps.app.goo.gl/ejvgs1QSRA4y5JsaA"
						aria-label="Riyadh branch location"
						target="_blank"
					>
						<img
							src="/images/fm/contact-us/asset-54.png"
							class="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16"
							alt="the company location"
						/>
					</a>
				</div>
				<div class="{$pageDirection === 'rtl' ? 'pr-5' : ''} flex items-center">
					<a
						type="button"
						href="https://maps.app.goo.gl/ejvgs1QSRA4y5JsaA"
						aria-label="Riyadh branch location"
						target="_blank"
					>
						<div class="flex flex-col justify-around h-full">
							<p class="text-base lg:text-lg font-light">
								{$t('fm.contact-us.form.address1')}
							</p>
							<p class="text-base lg:text-lg font-light">
								{$t('fm.contact-us.form.address2')}
							</p>
						</div>
					</a>
				</div>
			</div>

			<!-- email -->
			<div class="flex space-x-3 md:space-x-5 lg:space-x-4">
				<div class="min-w-fit">
					<a type="button" href="mailto:info@buildingtek.com" aria-label="email address">
						<img
							src="/images/fm/contact-us/asset-55.png"
							class="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16"
							alt="email"
						/>
					</a>
				</div>
				<div class="{$pageDirection === 'rtl' ? 'pr-5' : ''} flex items-center">
					<div class="flex flex-col">
						<a href="mailto:info@buildingtek.com" aria-label="a mail link">
							<p class="text-xs sm:text-sm md:text-base">info@buildingtek.com</p>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- contact form -->
		<div class="lg:col-span-2 pt-12 lg:pt-0 px-3 sm:px-0">
			<form method="POST" action="?/contactUsForm" use:enhance>
				<div class="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 gap-3 lg:gap-5">
					<!-- first name -->
					<div>
						<input
							type="text"
							name="firstName"
							placeholder={$t('fm.contact-us.form.firstName')}
							class="w-full h-16 rounded-none text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							aria-invalid={$errors.firstName ? 'true' : undefined}
							bind:value={$form.firstName}
							{...$constraints.firstName}
						/>
						{#if $errors.firstName}<span class="invalid text-error-500">{$errors.firstName}</span
							>{/if}
					</div>

					<!-- last name -->
					<div>
						<input
							type="text"
							name="lastName"
							placeholder={$t('fm.contact-us.form.lastName')}
							class="w-full h-16 rounded-none text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							aria-invalid={$errors.lastName ? 'true' : undefined}
							bind:value={$form.lastName}
							{...$constraints.lastName}
						/>
						{#if $errors.lastName}<span class="invalid text-error-500">{$errors.lastName}</span
							>{/if}
					</div>

					<!-- email -->
					<div>
						<input
							type="email"
							name="email"
							placeholder={$t('fm.contact-us.form.email')}
							class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							aria-invalid={$errors.email ? 'true' : undefined}
							bind:value={$form.email}
							{...$constraints.email}
						/>
						{#if $errors.email}<span class="invalid text-error-500">{$errors.email}</span>{/if}
					</div>

					<!-- mobile number -->
					<div>
						<input
							dir={$pageDirection}
							bind:value={$form.mobile}
							class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							type="tel"
							title="Input (number)"
							name="mobile"
							placeholder={$t('fm.contact-us.form.mobile')}
							{...$constraints.mobile}
						/>
						{#if $errors.mobile}<span class="invalid text-error-500">{$errors.mobile}</span>{/if}
					</div>

					<!-- company name -->
					<div>
						<input
							type="text"
							name="companyName"
							placeholder={$t('fm.contact-us.form.companyName')}
							class="w-full h-16 rounded-none text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							aria-invalid={$errors.companyName ? 'true' : undefined}
							bind:value={$form.companyName}
							{...$constraints.companyName}
						/>
						{#if $errors.companyName}<span class="invalid text-error-500"
								>{$errors.companyName}</span
							>{/if}
					</div>

					<!-- subject -->
					<div>
						<input
							type="text"
							name="subject"
							placeholder={$t('fm.contact-us.form.subject')}
							class="w-full h-16 rounded-none text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							aria-invalid={$errors.subject ? 'true' : undefined}
							bind:value={$form.subject}
							{...$constraints.subject}
						/>
						{#if $errors.subject}<span class="invalid text-error-500">{$errors.subject}</span>{/if}
					</div>

					<!-- text area -->
					<div class="col-span-2">
						<textarea
							class="w-full rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none p-5"
							rows="5"
							{...$constraints.textArea}
							placeholder={$t('fm.contact-us.form.textArea')}
							bind:value={$form.textArea}
							title="textarea"
							name="textArea"
						/>
						{#if $errors.textArea}<span class="invalid text-error-500">{$errors.textArea}</span
							>{/if}
					</div>

					<!-- submit -->
					<div>
						<button
							type="submit"
							class="btn rounded-none variant-filled-primary bg-primary-700 text-white px-12 py-3"
							>{$t('fm.contact-us.form.send')}</button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
