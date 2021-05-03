<script lang="ts">
	import { onMount } from 'svelte';
	import { apiProps } from './stores';
	import SearchForm from './components/SearchForm.svelte';
	import ResultView from './components/ResultView.svelte';

	export let youtubeDataApiEndpoint: string;
	export let youtubeDataApiKey: string;

	onMount(() => {
		apiProps.update(() => ({
			endpoint: youtubeDataApiEndpoint,
			key: youtubeDataApiKey
		}));

		console.log('youtubeDataApiEndpoint: ', youtubeDataApiEndpoint);
		console.log('youtubeDataApiKey: ', youtubeDataApiKey);
	});
</script>

<main>
	<SearchForm />
	<ResultView />
</main>
