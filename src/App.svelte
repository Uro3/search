<script lang="ts">
	export let clientId: string;
	export let redirectUri: string;


	const handleClick = () => {
		console.log("clicked!!")
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
