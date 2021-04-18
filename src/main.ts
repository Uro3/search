import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		clientId: process.env.CLIENT_ID || '',
		redirectUri: process.env.REDIRECT_URI || ''
	}
});

export default app;
