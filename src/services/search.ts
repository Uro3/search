import type { Result, SearchParams } from '../types';

export const execSearch = async (endpoint: string, key: string, params: SearchParams): Promise<Result> => {
  const url = new URL(`${endpoint}?part=snippet&type=video&q=${params.query}&key=${key}`);
  if (params.publishedAfter) {
    url.searchParams.append('publishedAfter', params.publishedAfter);
  }
  if (params.publishedBefore) {
    url.searchParams.append('publishedBefore', params.publishedBefore);
  }
  if (params.pageToken) {
    url.searchParams.append('pageToken', params.pageToken);
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
      publishedAt: item.snippet.publishedAt
    })),
    nextPageToken: data.nextPageToken,
    prevPageToken: data.prevPageToken
  };
};
