<script lang="ts">
  import { result } from '../stores';
  import { execSearch } from '../services/search';
  import type { Result } from '../types';

	export let endpoint: string;
	export let key: string;

  let query: string = '';
  let publishedAfterInput: string = '';
  let publishedBeforeInput: string = '';

  $: publishedAfter = publishedAfterInput ? new Date(publishedAfterInput).toISOString() : '';
  $: publishedBefore = publishedBeforeInput ? new Date(publishedBeforeInput).toISOString() : '';

	const handleClick = async () => {
    const newResult: Result = await execSearch(endpoint, key, query, publishedAfter, publishedBefore);
    result.update(() => newResult);
	};
</script>

<input bind:value={query}>
<input bind:value={publishedAfterInput} type="date">
<input bind:value={publishedBeforeInput} type="date">
<button on:click={handleClick}>
  検索
</button>
