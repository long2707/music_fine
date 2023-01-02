import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateThemeSlice {
  themeMode?: string;
}

export const themeModeSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "light",
  } as stateThemeSlice,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
