<script lang="ts">
	import type { Video } from '../types';

	export let videos: Video[];
</script>

<ul>
{#each videos as video (video.id)}
	<li>
		{video.title}
		<ul>
			<li><a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener noreferrer">play</a></li>
			<li>{video.channelTitle}</li>
			<li>{video.publishTime}</li>
		</ul>
	</li>
{/each}
</ul>
