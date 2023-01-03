import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IappState {
  appState?: string;
}

const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    appState: "home",
  } as IappState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
