<script lang="ts">
	import type { Video } from '../types';

	export let videos: Video[];

	const generateHrefByChannelId = (channelId: string): string => {
		const url = new URL(window.location.href);
		url.searchParams.set('channelId', channelId);
		return url.href;
	};
</script>

{#each videos as video (video.id)}
	<a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener noreferrer">
		<img src={video.thumbnailUrl} alt="thumbnail" width=320>
		<p>{video.title}</p>
		<p>{video.channelTitle}</p>
		<p>{video.publishedAt}</p>
	</a>
	<a href={generateHrefByChannelId(video.channelId)}>
		<p>このチャンネル内で検索</p>
	</a>
{/each}
