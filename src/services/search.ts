import type { APIProps, Result, SearchParams } from '../types';

export const searchVideo = async (api: APIProps, params: SearchParams): Promise<Result> => {
  const url = generateSearchVideoURL(api, params);

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
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt
    })),
    nextPageToken: data.nextPageToken,
    prevPageToken: data.prevPageToken
  };
};

export const getChannelTitleById = async (api: APIProps, channelId: string): Promise<string> => {
  const url = new URL(`${api.endpoint}?part=snippet&type=channel&channelId=${channelId}&key=${api.key}`).href;
  const response = await fetch(url);
	const data = await response.json();

  return data.items[0].snippet.channelTitle;
};

const generateSearchVideoURL = (api: APIProps, params: SearchParams): string => {
  const url = new URL(`${api.endpoint}?part=snippet&type=video&q=${params.query}&maxResults=${params.maxResults}&key=${api.key}`);
  if (params.channelId) {
    url.searchParams.append('channelId', params.channelId);
  }
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
