import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React, { cloneElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { Box } from "@mui/system";
import { RootState } from "../../apps/store";
import { themeModes } from "../../configs/themeConfigs";
import Sidebar from "./Sidebar";
import uiConfigs from "../../configs/uiConfigs";
import { setThemeMode } from "../../apps/features/themeModeSlice";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const ScrollAppBar = ({ children, window }: Props) => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode);
  console.log(themeModes.dark);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: {
      color: trigger
        ? "text.primary"
        : themeMode === themeModes.light
        ? "primary.constractText"
        : "text.primary",
      backgroundColor: trigger ? "background.paper" : "transparent",
      width: { xs: "100%", md: `calc(100% - ${uiConfigs.width.sidebarWidth})` },
      borderBottom: "1px solid #ccc",
    },
  });
};

const Header = () => {
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  const { themeMode } = useSelector((state: RootState) => state.themeMode);
  const dispatch = useDispatch();

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const toggleSwitchTheme = () => {
    const theme =
      themeMode === themeModes.light ? themeModes.dark : themeModes.light;
    dispatch(setThemeMode(theme));
  };
  console.log(openSidebar);
  return (
    <>
      <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
      <ScrollAppBar>
        <AppBar
          elevation={0}
          sx={{
            zIndex: 9999,
            p: 3,
          }}
        >
          <Toolbar
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <IconButton
              color="inherit"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box flexGrow={1} alignItems={"center"} display={"flex"}>
              <Box
                display={"flex"}
                alignItems="center"
                sx={{
                  border: "1px solid #ccc",
                  backgroundColor:
                    themeMode === themeModes.light ? "#fff" : "#0a1929",
                  "&:hover": {
                    backgroundColor:
                      themeMode === themeModes.light
                        ? "rgba(255, 255, 255, 0.8)"
                        : "#132f4c66",
                  },
                  borderRadius: "9px",
                  p: {
                    xs: "0.25rem 0 0.25rem 0.675rem",
                    md: "0.45rem 0 0.45rem 0.675rem",
                  },
                  gap: "20px",
                  width: { xs: "auto", md: "20rem" },
                  cursor: "pointer",
                }}
              >
                <SearchOutlinedIcon />

                <InputBase placeholder="Search..." />
              </Box>
            </Box>
            <IconButton
              onClick={toggleSwitchTheme}
              sx={{ fontSize: "0.985rem" }}
            >
              {themeMode === themeModes.light ? (
                <Brightness4Icon sx={{ color: "#000" }} />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  );
};

export default Header;
