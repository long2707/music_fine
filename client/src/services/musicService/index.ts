import axiosClient from "../axiosClient";
import MUSIC_API from "./url";

class MusicService {
  getMusicPlayListHome() {
    return axiosClient.get(MUSIC_API.HOME_URL);
  }
  getMusicTop100() {
    return axiosClient.get(MUSIC_API.TOP100_URL);
  }
}
export default new MusicService();
