<script lang="ts">
	import FacilityManagementIntro from '$lib/facility-management/facility-management/FacilityManagementIntro.svelte';
	import Services from '$lib/facility-management/facility-management/Services.svelte';

	import FmFooter from '$lib/facility-management/FMFooter.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
	const formData = data.form;
</script>

<div class="flex justify-center">
	<div class="w-full max-w-[1920px]">
		<div class="relative">
			<div class="absolute inset-0 h-[300px] bg-surface-500"></div>
			<div class="container mx-auto">
				<!-- Hero image container -->
				<div class="relative overflow-hidden h-[400px] md:h-[550px] xl:h-[700px]">
					<img
						src="/images/fm/facility-mgmt/facility-management_1920x1080.webp"
						srcset="/images/fm/facility-mgmt/facility-management_560x315.webp 640w, 	 
						/images/fm/facility-mgmt/facility-management_1120x630.webp 1024w, 
						/images/fm/facility-mgmt/facility-management_1920x1080.webp 2000w"
						alt="a hero background"
						class="absolute inset-0 object-cover object-bottom w-full h-full aspect-auto"
					/>
					<div class="absolute inset-0 bg-black opacity-20"></div>
				</div>
			</div>
		</div>

		<FacilityManagementIntro />
		<Services />

		<!-- <div class="w-full h-[200px]"></div> -->

		<FmFooter {formData} />
	</div>
</div>
