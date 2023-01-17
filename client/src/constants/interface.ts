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

export interface ISongAudio {
  encodeId?: string;
  infoSong?: {};
  currentTime: number;
  srcAudio: string;
  duration?: number;
}
