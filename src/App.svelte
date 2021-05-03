<script lang="ts">
	import SearchForm from './components/SearchForm.svelte';
	import ResultView from './components/ResultView.svelte';

	export let youtubeDataApiEndpoint: string;
	export let youtubeDataApiKey: string;

	console.log('youtubeDataApiEndpoint: ', youtubeDataApiEndpoint);
	console.log('youtubeDataApiKey: ', youtubeDataApiKey);
</script>

<main>
	<SearchForm endpoint={youtubeDataApiEndpoint} key={youtubeDataApiKey} />
	<ResultView endpoint={youtubeDataApiEndpoint} key={youtubeDataApiKey} />
</main>
