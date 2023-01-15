export interface IMusicType {
  encodeId?: string;
  title: string;
  artistsNames?: string;
  thumbnail: string;
  thumbnailM: string;
  duration?: number;
  items?: [];
}
export interface IPlayType extends IMusicType {
  sortDescription?: string;
}

export interface ISongAudio extends IMusicType {
  currentTime: number;
  srcAudio: string;
}
