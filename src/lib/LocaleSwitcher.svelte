<script lang="ts">
	import { currentAppLang } from '$lib/stores';
	import { t, locale, locales } from '$lib/i18n/translator';
</script>

<!-- language switcher -->
<button
	class="btn !bg-transparent px-3 min-[400px]:px-5"
	on:click={() => {
		if ($locale === 'en') {
			$locale = 'ar';
			return;
		}
		$locale = 'en';
	}}
>
	<span
		class="text-xs md:text-sm lg:text-lg 2xl:text-xl {$currentAppLang === 'en'
			? 'ar-common'
			: 'en-common'}">{$locale === 'en' ? 'العــربية' : 'English'}</span
	>
</button>
