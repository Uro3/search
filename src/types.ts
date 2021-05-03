export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishedAt: string;
}

export type Result = {
  totalResults: number;
  videos: Video[];
}
