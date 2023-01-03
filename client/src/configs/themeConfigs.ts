import { createTheme } from "@mui/material/styles";

export const enum themeModes {
  dark = "dark",
  light = "light",
}

const themeConfigs = {
  custom: ({ mode }: { mode: any }) => {
    const customPalette =
      mode === themeModes.light
        ? {
            primary: {
              main: "#E57886",
              constractText: "#000",
            },
            secondary: {
              main: "#E5786E",
              contractsText: "#a0aab4",
            },
            background: {
              default: "#FFEEDE",
              secondary: "#fff",
            },
          }
        : {
            primary: {
              main: "#66b2ff",
              contractsText: "#a0aab4",
            },
            secondary: {
              main: "#66b2ff",
              constractsText: "#fff",
            },
            background: {
              default: "#0F172A",
              secondary: "#0F172A",
            },
          };
    return createTheme({
      palette: { mode, ...customPalette },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
      typography: { fontFamily: ["Rubik", "sans-serif"].join(",") },
    });
  },
};

export default themeConfigs;
