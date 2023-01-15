import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import themeModeSlice from "./features/themeModeSlice";
import AudioSongSlice from "./features/songSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    appState: appStateSlice,
    songState: AudioSongSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
