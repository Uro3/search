<script lang="ts">
	import type { Video } from '../types';

	export let videos: Video[];

	const generateHrefByChannelId = (channelId: string): string => {
		const url = new URL(window.location.href);
		url.searchParams.set('channelId', channelId);
		return url.href;
	};
</script>

<div id="result-view-video-list" class="flex flex-col space-y-2">
	{#each videos as video (video.id)}
	<a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener noreferrer" class="flex flex-row p-2 border rounded shadow">
		<img src={video.thumbnailUrl} alt="thumbnail" width=320 class="flex-none">
		<div class="flex-auto flex flex-col justify-between px-2 py-4">
			<div class="flex flex-col pace-y-2">
				<p class="text-xl	font-bold">{video.title}</p>
				<p class="text-sm font-light">{video.publishedAt}</p>
				<p class="font-light">{video.channelTitle}</p>
			</div>
			<a href={generateHrefByChannelId(video.channelId)} class="self-end underline">
				このチャンネル内で検索
			</a>
		</div>
	</a>
	{/each}
</div>
