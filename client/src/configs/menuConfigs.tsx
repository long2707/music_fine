import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

type menuType = {
  display: string;
  path?: string;
  icon?: ReactNode;
  state: string;
};

const menu: menuType[] = [
  {
    display: "home",
    path: "/",
    icon: <HomeIcon />,
    state: "home",
  },
  {
    display: "browse",
    path: "/browse",
    icon: <WidgetsOutlinedIcon />,
    state: "browse",
  },
  {
    display: "album",
    path: "/album",
    icon: <LibraryMusicOutlinedIcon />,
    state: "album",
  },
];

export default menu;
