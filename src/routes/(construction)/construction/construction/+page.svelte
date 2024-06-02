<script lang="ts">
	import type { PageData } from './$types';
	import CsFooter from '$lib/construction/CSFooter.svelte';
	import ConstructionIntro from '$lib/construction/construction/ConstructionIntro.svelte';
	import Services from '$lib/construction/construction/Services.svelte';
	import Departments from '$lib/construction/construction/Departments.svelte';

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

		<ConstructionIntro />

		<Departments />

		<Services />

		<div class="h-[100px]"></div>

		<CsFooter {formData} />
	</div>
</div>
