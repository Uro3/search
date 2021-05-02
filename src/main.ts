import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		youtubeDataApiEndpoint: process.env.YOUTUBE_DATA_API_ENDPOINT || '',
		youtubeDataApiKey: process.env.YOUTUBE_DATA_API_KEY || ''
	}
});

export default app;
