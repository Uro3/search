<script lang="ts">
	import { onMount } from 'svelte';
	import { apiProps } from './stores';
	import SearchForm from './components/SearchForm.svelte';
	import ResultView from './components/ResultView.svelte';

	export let youtubeDataApiEndpoint: string;
	export let youtubeDataApiKey: string;

	let channelId: string;

	onMount(() => {
		apiProps.set({
			endpoint: youtubeDataApiEndpoint,
			key: youtubeDataApiKey
		});
		const url = new URL(window.location.href);
		channelId = url.searchParams.get('channelId') || '';
	});
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main class="container mx-auto max-w-screen-sm">
	<SearchForm channelId={channelId} />
	<ResultView channelId={channelId} />
</main>
