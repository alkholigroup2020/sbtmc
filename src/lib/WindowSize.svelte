<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Define the breakpoints as specified in your Tailwind CSS configuration
	const breakpoints: any = {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1536
	};

	let dimensions = { width: 0, height: 0 };
	let currentBreakpoint = '';

	let updateDimensions = () => {
		dimensions.width = window.innerWidth;
		dimensions.height = window.innerHeight;

		for (let breakpoint in breakpoints) {
			if (window.innerWidth >= breakpoints[breakpoint]) {
				currentBreakpoint = breakpoint;
			}
		}
	};

	onMount(() => {
		window.addEventListener('resize', updateDimensions);
		updateDimensions();
	});
</script>

<div
	class="fixed top-12 left-5 bg-opacity-60 border-white border-2 bg-blue-800 text-white
	text-center p-4 rounded-full z-[999] h-fit w-fit"
>
	<p class="text-lg">W: {dimensions.width}px</p>
	<p class="text-lg">H: {dimensions.height}px</p>
	<p class="text-2xl">{currentBreakpoint}</p>
</div>
