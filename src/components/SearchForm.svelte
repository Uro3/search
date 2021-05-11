<script lang="ts">
  import { apiProps, result, currentSearchParams } from '../stores';
  import { searchVideo } from '../services/search';
  import type { Result, SearchParams } from '../types';

  export let channelId: string = '';

  let query: string = '';
  let maxResults: number = 5;
  let publishedAfterInput: string = '';
  let publishedBeforeInput: string = '';

  $: publishedAfter = publishedAfterInput ? new Date(publishedAfterInput).toISOString() : '';
  $: publishedBefore = publishedBeforeInput ? new Date(publishedBeforeInput).toISOString() : '';

  const maxResultOptions: number[] = [5, 10, 25, 50]

	const handleClick = async () => {
    const params: SearchParams = {
      query,
      maxResults,
      channelId,
      publishedAfter,
      publishedBefore
    };
    const newResult: Result = await searchVideo($apiProps, params);

    console.log('result: ', newResult);

    result.set(newResult);
    currentSearchParams.set(params);
	};
</script>

<div id="search-form-container" class="flex flex-col m-auto pt-3 pb-1 space-y-1">
  <div id="search-query" class="flex">
    <input bind:value={query} class="flex-auto px-2 py-1 border" placeholder="検索ワード">
    <button on:click={handleClick} class="flex-none px-2 py-1 bg-gray-300">
      検索
    </button>
  </div>
  <div id="search-max-results" class="flex">
    <span class="mr-2">1ページあたりの件数:</span>
    <select bind:value={maxResults} class="border">
      {#each maxResultOptions as option}
        <option value={option}>
          {option}
        </option>
      {/each}
    </select>
  </div>
  <div id="search-filter-published-at" class="flex">
    <span class="mr-2">アップロード日:</span>
    <input bind:value={publishedAfterInput} type="date" class="flex-auto border-b">
    <span class="mx-2">~</span>
    <input bind:value={publishedBeforeInput} type="date" class="flex-auto border-b">
  </div>
</div>
