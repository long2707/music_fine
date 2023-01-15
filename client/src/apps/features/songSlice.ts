import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISongAudio } from "constants/interface";
import useLocalStorge from "hooks/useLocalStorge";

const AudioSongSlice = createSlice({
  name: "aduioSongState",
  initialState: {
    encodeId: useLocalStorge("sing").getItem(),
    title: "",
    artistsNames: "",
    thumbnail: "",
    thumbnailM: "",
    currentTime: 0,
    duration: 0,
    srcAudio: "",
  } as ISongAudio,
  reducers: {
    setEncodeId: (state, action: PayloadAction<string>) => {
      state.encodeId = action.payload;
    },
  },
});

export const { setEncodeId } = AudioSongSlice.actions;
export default AudioSongSlice.reducer;
