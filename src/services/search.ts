import type { APIProps, Result, SearchParams } from '../types';

export const execSearch = async (api: APIProps, params: SearchParams): Promise<Result> => {
  const url = generateSearchURL(api, params);

  console.log('api request: ', url);

  const response = await fetch(url);
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

const generateSearchURL = (api: APIProps, params: SearchParams): string => {
  const url = new URL(`${api.endpoint}?part=snippet&type=video&q=${params.query}&key=${api.key}`);
  if (params.publishedAfter) {
    url.searchParams.append('publishedAfter', params.publishedAfter);
  }
  if (params.publishedBefore) {
    url.searchParams.append('publishedBefore', params.publishedBefore);
  }
  if (params.pageToken) {
    url.searchParams.append('pageToken', params.pageToken);
  }

  return url.href;
};
