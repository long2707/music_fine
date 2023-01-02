import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeModeSlice";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
