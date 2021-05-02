<script lang="ts">
	import { onMount } from 'svelte';

	export let clientId: string;
	export let redirectUri: string;
	export let googleAuthEndpoint: string;
	export let youtubeDataApiEndpoint: string;

	let token: string;

	const handleClick = async () => {
		if (!token) {
			location.href = `${googleAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=https://www.googleapis.com/auth/youtube.readonly`;
			return;
		}

		const response = await fetch(youtubeDataApiEndpoint, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = await response.json();
		console.log(data);
	};

	const parseHash = (hash: string) => {
		return Object.fromEntries(hash.split('&').map(str => str.split('=')));
	};

	onMount(() => {
		const parsedHash = parseHash(window.location.hash.substring(1));
		token = parsedHash['access_token'] || '';

		console.log('redirectUri: ', redirectUri);
		console.log('clientId: ', clientId);
		console.log('googleAuthEndpoint: ', googleAuthEndpoint);
	});
</script>

<main>
	<h1>Hello!</h1>
	<button on:click={handleClick}>
		hey!
	</button>
</main>
