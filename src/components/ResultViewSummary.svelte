<script lang="ts">
	export let totalResults: number;
	export let channelTitle: string;

	const url = new URL(window.location.href);
	url.searchParams.delete('channelId');
</script>

{#if channelTitle}
	<p>
		<span class="font-semibold">{channelTitle}</span> で検索中
	</p>
	<a href={url.href}>
		<p class="underline">チャンネル内検索を解除</p>
	</a>
{/if}

{#if totalResults}
	<p>
		検索結果: {totalResults}件
	</p>
{/if}
