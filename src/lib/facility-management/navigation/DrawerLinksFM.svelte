<script lang="ts">
	import { page } from '$app/stores';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n/translator';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-secondary-300' : '!bg-secondary-200';
</script>

<div class="w-full flex flex-col justify-center m-5">
	<Avatar
		src="/images/main-landing/small-white-logo_35x35.webp"
		width="w-10"
		background="bg-none"
		rounded="rounded-sm"
	/>
</div>

<hr />

<nav class="list-nav">
	<ul>
		<li>
			<a
				href="/facility-management"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/facility-management')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.home')}</span>
			</a>
		</li>

		<li>
			<a
				href="/facility-management/about-us"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/facility-management/about-us')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.about')}</span>
			</a>
		</li>

		<li>
			<a
				href="/facility-management/construction"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/facility-management/construction')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.construction')}</span>
			</a>
		</li>

		<li>
			<a
				href="/facility-management/projects"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/facility-management/projects')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.projects')}</span>
			</a>
		</li>

		<li>
			<a
				href="/facility-management/contact-us"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/facility-management/contact-us')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.contact')}</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.list-nav > ul > li :hover {
		background: none;
	}
</style>
