<script lang="ts">
	import ScrollToTop from '$lib/ScrollToTop.svelte';
	import MainNav from '$lib/construction/navigation/MainNav.svelte';
</script>

<div class="flex justify-center">
	<ScrollToTop />
	<div class="w-[1920px]">
		<!-- nav bar -->
		<MainNav />
	</div>
</div>

<slot />
