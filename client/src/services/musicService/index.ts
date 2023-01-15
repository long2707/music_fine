import axios from "axios";
import axiosClient from "../axiosClient";
import MUSIC_API from "./url";

class MusicService {
  getMusicPlayListHome() {
    return axiosClient.get(MUSIC_API.HOME_URL);
  }
  getMusicTop100() {
    return axiosClient.get(MUSIC_API.TOP100_URL);
  }
  getSong(id: string) {
    const url = MUSIC_API.SONG_URL + `?id=${id}`;
    return axiosClient.get(url);
  }
  getInfoSong(id: string) {
    const url = MUSIC_API.INFO_SONG + `?id=${id}`;
    return axiosClient.get(url);
  }
  getLyric(id: string) {
    const url = MUSIC_API.LYRIC + `?id=${id}`;
    return axiosClient.get(url);
  }
  getPlayList(id: string) {
    const url = MUSIC_API.DETAIL_PLAY_LIST_URL + `?id=${id}`;
    return axiosClient.get(url);
  }
}
export default new MusicService();
