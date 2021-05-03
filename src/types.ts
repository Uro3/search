export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishTime: string;
}

export type Result = {
  totalResults: number;
  videos: Video[];
}
