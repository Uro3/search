<script lang="ts">
	export let youtubeDataApiEndpoint: string;
	export let youtubeDataApiKey: string;

	const handleClick = async () => {
		const response = await fetch(youtubeDataApiEndpoint);
		const data = await response.json();
		console.log(data);
	};

	console.log('youtubeDataApiEndpoint: ', youtubeDataApiEndpoint);
	console.log('youtubeDataApiKey: ', youtubeDataApiKey);
</script>

<main>
	<h1>Hello!</h1>
	<button on:click={handleClick}>
		hey!
	</button>
</main>
