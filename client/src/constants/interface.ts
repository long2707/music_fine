export interface IMusicType {
  encodeId?: string;
  title: string;
  artistsNames?: string;
  thumbnail: string;
  thumbnailM: string;
  items?: [];
}
export interface IPlayType extends IMusicType {
  sortDescription?: string;
}
