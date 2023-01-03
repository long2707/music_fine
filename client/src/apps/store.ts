import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import themeModeSlice from "./features/themeModeSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    appState: appStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
