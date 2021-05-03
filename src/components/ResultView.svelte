<script lang="ts">
	import { result } from '../stores';
	import ResultViewVideoList from './ResultViewVideoList.svelte';
</script>

<p>
	{$result.totalResults}
</p>

<ResultViewVideoList videos={$result.videos} />
