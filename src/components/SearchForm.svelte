<script lang="ts">
  import { apiProps, result, currentSearchParams } from '../stores';
  import { execSearch } from '../services/search';
  import type { Result, SearchParams } from '../types';

  let query: string = '';
  let publishedAfterInput: string = '';
  let publishedBeforeInput: string = '';

  $: publishedAfter = publishedAfterInput ? new Date(publishedAfterInput).toISOString() : '';
  $: publishedBefore = publishedBeforeInput ? new Date(publishedBeforeInput).toISOString() : '';

	const handleClick = async () => {
    const params: SearchParams = {
      query,
      publishedAfter,
      publishedBefore
    };
    const newResult: Result = await execSearch($apiProps, params);

    console.log('result: ', newResult);

    result.update(() => newResult);
    currentSearchParams.update(() => params);
	};
</script>

<input bind:value={query}>
<input bind:value={publishedAfterInput} type="date">
<input bind:value={publishedBeforeInput} type="date">
<button on:click={handleClick}>
  検索
</button>
