<script lang="ts">
	import { apiProps, result, currentSearchParams } from '../stores';
	import { execSearch } from '../services/search';
  import type { Result, SearchParams } from '../types';
	import ResultViewVideoList from './ResultViewVideoList.svelte';

	const next = async () => {
		await fetchData($result.nextPageToken)
	};

	const prev = async () => {
		await fetchData($result.prevPageToken)
	};

	const fetchData = async (token: string) => {
		const params: SearchParams = {
			...$currentSearchParams,
			pageToken: token
		}
		const newResult: Result = await execSearch($apiProps, params);

    console.log('result: ', newResult);

    result.set(newResult);
		currentSearchParams.set(params);
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
