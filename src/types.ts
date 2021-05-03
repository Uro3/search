export type Video = {
  id: string;
  title: string;
  channelTitle: string;
  publishTime: string;
}

export type Result = {
  totalResults: number;
  videos: Video[];
}
