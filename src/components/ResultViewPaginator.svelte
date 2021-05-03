<script lang="ts">
	import { apiProps, result, currentSearchParams } from '../stores';
	import { searchVideo } from '../services/search';
  import type { Result, SearchParams } from '../types';

	export let prevPageToken: string;
	export let nextPageToken: string;

	const next = async () => {
		await fetchData(nextPageToken)
	};

	const prev = async () => {
		await fetchData(prevPageToken)
	};

	const fetchData = async (token: string) => {
		const params: SearchParams = {
			...$currentSearchParams,
			pageToken: token
		}
		const newResult: Result = await searchVideo($apiProps, params);

    console.log('result: ', newResult);

    result.set(newResult);
		currentSearchParams.set(params);
	};
</script>

{#if prevPageToken}
	<button on:click={prev}>
		前へ
	</button>
{/if}

{#if nextPageToken}
	<button on:click={next}>
		次へ
	</button>
{/if}
