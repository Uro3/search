<script lang="ts">
	import { apiProps, result } from '../stores';
	import { getChannelTitleById } from '../services/search';
	import ResultViewSummary from './ResultViewSummary.svelte';
	import ResultViewVideoList from './ResultViewVideoList.svelte';
	import ResultViewPaginator from './ResultViewPaginator.svelte';

	export let channelId: string;

	let getChannelTitlePromise: Promise<string>;

	$: getChannelTitlePromise = getChannelTitle(channelId);

	const getChannelTitle = async (id) => {
		if (id) {
			const channelTitle = await getChannelTitleById($apiProps, id);
			console.log('channelTitle: ', channelTitle)
			return channelTitle
		}
		return '';
	};
</script>

{#await getChannelTitlePromise}
	<p>...waiting</p>
{:then title}
	<ResultViewSummary totalResults={$result.totalResults} channelTitle={title} />
{/await}

<ResultViewVideoList videos={$result.videos} />
<ResultViewPaginator prevPageToken={$result.prevPageToken} nextPageToken={$result.nextPageToken} />
