<script lang="ts">
	import { result } from '../stores';
	import ResultViewVideoList from './ResultViewVideoList.svelte';
	import ResultViewPaginator from './ResultViewPaginator.svelte';
</script>

<p>
	{$result.totalResults}
</p>

<ResultViewVideoList videos={$result.videos} />
<ResultViewPaginator prevPageToken={$result.prevPageToken} nextPageToken={$result.nextPageToken} />
