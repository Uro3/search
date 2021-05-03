import type { Result } from '../types';

export const execSearch = async (endpoint: string, key: string, query: string, publishedAfter='', publishedBefore=''): Promise<Result> => {
  const url = new URL(`${endpoint}?part=snippet&type=video&q=${query}&key=${key}`);
  if (publishedAfter) {
    url.searchParams.append('publishedAfter', publishedAfter);
  }
  if (publishedBefore) {
    url.searchParams.append('publishedBefore', publishedBefore);
  }

  console.log('api request: ', url.href);

  const response = await fetch(url.href);
	const data = await response.json();

  console.log('api response: ', data);

  return {
    totalResults: data.pageInfo.totalResults,
    videos: data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      publishTime: item.snippet.publishTime
    }))
  };
};
