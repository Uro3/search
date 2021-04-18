import App from './App.svelte';

const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI;

const app = new App({
	target: document.body,
	props: {
		name: `world : ${client_id} : ${redirect_uri}`
	}
});

export default app;
