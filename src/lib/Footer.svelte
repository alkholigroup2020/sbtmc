<script lang="ts">
	import { t, locale, locales } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';

	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	import { superForm } from 'sveltekit-superforms/client';
	export let formData;

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

<div class="absolute bottom-0 w-full h-[16%] bg-secondary-300 opacity-80"></div>
<div class="absolute bottom-8 w-[90%] h-[20%] bg-surface-500">
	<div class="text-surface-50">
		<!-- form section -->
		<div class="w-[40%]">
			<div class="grid grid-cols-3 p-8">
				<!-- the red part -->
				<div
					class="bg-primary-700 w-full text-surface-50 py-2 text-center uppercase {$currentAppLang ===
					'en'
						? 'rounded-l-sm'
						: 'rounded-r-sm'}"
				>
					{$t('landing.footer.question')}
				</div>
				<!-- the white part -->
				<div class="w-full col-span-2">
					<form method="POST" use:enhance>
						<input
							type="text"
							name="question"
							placeholder={$t('landing.footer.placeholder')}
							class="w-full bg-surface-50 border-none text-black py-2 {$currentAppLang === 'en'
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
		<!--  -->
	</div>
</div>
