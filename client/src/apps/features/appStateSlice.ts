import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IappState {
  appState?: string;
  loading?: boolean;
}

const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    appState: "",
    loading: false,
  } as IappState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setAppState, setLoading } = appStateSlice.actions;

export default appStateSlice.reducer;
