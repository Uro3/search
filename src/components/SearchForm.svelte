<script lang="ts">
  import { result } from '../stores';
  import type { Result } from '../types';

	export let endpoint: string;
	export let key: string;

  let query: string = '';

	const handleClick = async () => {
		const response = await fetch(`${endpoint}?q=${query}&part=snippet&type=video&key=${key}`);
		const data = await response.json();
    console.log('api response: ', data);

    const newResult: Result = {
      totalResults: data.pageInfo.totalResults,
      videos: data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        channelTitle: item.snippet.channelTitle,
        publishTime: item.snippet.publishTime
      }))
    };
    result.update(() => newResult);
	};
</script>

<input bind:value={query}>
<button on:click={handleClick}>
  検索
</button>
