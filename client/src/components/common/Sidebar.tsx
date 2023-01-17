import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import uiConfigs from "configs/uiConfigs";
import menu from "configs/menuConfigs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "apps/store";
import { setAppState } from "apps/features/appStateSlice";
import { themeModes } from "configs/themeConfigs";
import useLocalStorge from "hooks/useLocalStorge";
import { LOCAL_STORAGE } from "constants/enum";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("assets/images/music.png");

const Sidebar = ({
  open,
  toggleSidebar,
}: {
  open: boolean;
  toggleSidebar: (active: boolean) => void;
}) => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const { themeMode } = useSelector((state: RootState) => state.themeMode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSong = useLocalStorge(LOCAL_STORAGE.ALBUM);
  const drawer = (
    <>
      <Toolbar />
      <List disablePadding={true}>
        {menu.map((item) => (
          <ListItemButton
            key={item.display}
            onClick={() => {
              if (item.path === "browse") {
                navigate(`/${item.path}/${getSong.getItem()}`);
              } else {
                navigate(`/${item.path}`);
              }
              dispatch(setAppState(item.state));
              toggleSidebar(false);
            }}
            sx={{
              cursor: "pointer",
            }}
          >
            <ListItemIcon
              sx={{
                color: appState?.includes(item.state)
                  ? "primary.main"
                  : "secondary.contractsText",
                fontSize: "1.325rem",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  textTransform="capitalize"
                  sx={{
                    color: appState?.includes(item.state)
                      ? "primary.main"
                      : "primary.constractText",
                    fontWeight: "500",
                  }}
                >
                  {item.display}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <Box component={"nav"} position="relative">
      {/*  width >= 900px */}
      <Drawer
        disableScrollLock={true}
        open
        variant="permanent"
        sx={{
          width: { md: uiConfigs.width.sidebarWidth },
          "& .MuiDrawer-paper": {
            backgroundColor:
              themeMode === themeModes.light
                ? "background.secondary"
                : "background.secondary",
            boxSixing: "border-box",
            width: uiConfigs.width.sidebarWidth,
            display: { xs: "none", md: "block" },
          },
        }}
      >
        {drawer}
        <Box sx={{ textAlign: "center" }} position="absolute" bottom={"10px"}>
          <img src={logo} width={"90%"} />
        </Box>
      </Drawer>
      {/* width >= 900px */}

      {/* width <900px */}
      <Drawer
        disableScrollLock={true}
        variant="temporary"
        open={open}
        onClose={toggleSidebar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor:
              themeMode === themeModes.light
                ? "background.secondary"
                : "background.secondary",
            boxSixing: "border-box",
            width: uiConfigs.width.sidebarWidth,
          },
        }}
      >
        {drawer}
        <Box sx={{ textAlign: "center" }} position="absolute" bottom={"10px"}>
          <img src={logo} width={"90%"} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
