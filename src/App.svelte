<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
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

		console.log('youtubeDataApiEndpoint: ', youtubeDataApiEndpoint);
		console.log('youtubeDataApiKey: ', youtubeDataApiKey);

		const url = new URL(window.location.href);
		channelId = url.searchParams.get('channelId') || '';
	});
</script>

<main>
	<SearchForm channelId={channelId} />
	<ResultView />
</main>
