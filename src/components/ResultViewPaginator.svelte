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
    result.set(newResult);
		currentSearchParams.set(params);
	};
</script>

<div id="result-view-paginator" class="flex justify-center">
	{#if prevPageToken}
		<button on:click={prev} class="px-7 py-1 border">
			前へ
		</button>
	{/if}

	{#if nextPageToken}
		<button on:click={next} class="px-7 py-1 border">
			次へ
		</button>
	{/if}
</div>
