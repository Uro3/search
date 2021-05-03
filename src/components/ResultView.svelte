<script lang="ts">
	import { result, currentSearchParams } from '../stores';
	import { execSearch } from '../services/search';
  import type { Result, SearchParams } from '../types';
	import ResultViewVideoList from './ResultViewVideoList.svelte';

	export let endpoint: string;
	export let key: string;

	const next = async () => {
		await fetchData($result.nextPageToken)
	};

	const prev = async () => {
		await fetchData($result.prevPageToken)
	};

	const fetchData = async (token: string) => {
		console.log('token: ', token);
		const params: SearchParams = {
			...$currentSearchParams,
			pageToken: token
		}
		const newResult: Result = await execSearch(endpoint, key, params);

    console.log('result: ', newResult);

    result.update(() => newResult);
		currentSearchParams.update(() => params);
	};
</script>

<p>
	{$result.totalResults}
</p>

<ResultViewVideoList videos={$result.videos} />

{#if $result.prevPageToken}
	<button on:click={prev}>
		前へ
	</button>
{/if}

{#if $result.nextPageToken}
	<button on:click={next}>
		次へ
	</button>
{/if}
