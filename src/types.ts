export type APIProps = {
  endpoint: string
  key: string
}

export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelId: string;
  channelTitle: string;
  publishedAt: string;
}

export type Result = {
  totalResults: number;
  videos: Video[];
  nextPageToken?: string;
  prevPageToken?: string;
}

export type SearchParams = {
  query: string;
  channelId?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  pageToken?: string;
}
