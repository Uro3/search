<script lang="ts">
	export let clientId: string;
	export let redirectUri: string;
	export let youtubeDataApiEndpoint: string;

	const handleClick = async () => {
		const response = await fetch(youtubeDataApiEndpoint);
		const data = await response.json();
		console.log(data)
	};
</script>

<main>
	<h1>Hello!</h1>
	<ul>
		<li>{clientId}</li>
		<li>{redirectUri}</li>
	</ul>
	<button on:click={handleClick}>
		hey!
	</button>
</main>
