<script lang="ts">
	export let name: string;

	const handleClick = () => {
		console.log("clicked!!")
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<button on:click={handleClick}>
		hey!
	</button>
</main>
