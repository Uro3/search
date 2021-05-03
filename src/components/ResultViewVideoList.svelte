<script lang="ts">
	import type { Video } from '../types';

	export let videos: Video[];
</script>


{#each videos as video (video.id)}
	<a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener noreferrer">
		<img src={video.thumbnailUrl} alt="thumbnail" width=320>
		<p>{video.title}</p>
		<p>{video.channelTitle}</p>
		<p>{video.publishTime}</p>
	</a>
{/each}
