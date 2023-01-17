import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISongAudio } from "constants/interface";

const AudioSongSlice = createSlice({
  name: "aduioSongState",
  initialState: {
    encodeId: "",
    infoSong: undefined,
    currentTime: 0,
    duration: 0,
    srcAudio: "",
  } as ISongAudio,
  reducers: {
    setIdSong: (state, action: PayloadAction<string>) => {
      state.encodeId = action.payload;
    },
    setInfoSong: (state, action: PayloadAction<any>) => {
      const { title, artistsNames, thumbnai }: any = action.payload;
      state.infoSong = { title, artistsNames, thumbnai };
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setAudioSrc: (state, action: PayloadAction<string>) => {
      state.srcAudio = action.payload;
    },
  },
});

export const { setIdSong, setInfoSong, setDuration, setAudioSrc } =
  AudioSongSlice.actions;
export default AudioSongSlice.reducer;
