<script lang="ts">
  import { apiProps, result, currentSearchParams } from '../stores';
  import { searchVideo } from '../services/search';
  import type { Result, SearchParams } from '../types';

  export let channelId: string = '';

  let query: string = '';
  let publishedAfterInput: string = '';
  let publishedBeforeInput: string = '';

  $: publishedAfter = publishedAfterInput ? new Date(publishedAfterInput).toISOString() : '';
  $: publishedBefore = publishedBeforeInput ? new Date(publishedBeforeInput).toISOString() : '';

	const handleClick = async () => {
    const params: SearchParams = {
      query,
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
  <div id="search-input-field" class="flex">
    <input bind:value={query} class="flex-auto px-2 py-1 border" placeholder="検索ワード">
    <button on:click={handleClick} class="flex-none px-2 py-1 bg-gray-300">
      検索
    </button>
  </div>
  <div id="search-filter-field" class="flex">
    <span class="mr-2">アップロード日:</span>
    <input bind:value={publishedAfterInput} type="date" class="flex-auto border-b">
    <span class="mx-2">~</span>
    <input bind:value={publishedBeforeInput} type="date" class="flex-auto border-b">
  </div>
</div>
