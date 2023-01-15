import { ReactNode } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

interface menuType {
  display: string;
  path?: string;
  icon?: ReactNode;
  state: string;
}

const menu: menuType[] = [
  {
    display: "home",
    path: "",
    icon: <HomeOutlinedIcon sx={{ fontSize: "1.875rem" }} />,
    state: "home",
  },
  {
    display: "browse",
    path: "browse",
    icon: <WidgetsOutlinedIcon sx={{ fontSize: "1.875rem" }} />,
    state: "browse",
  },
  {
    display: "album",
    path: "album",
    icon: <LibraryMusicOutlinedIcon sx={{ fontSize: "1.875rem" }} />,
    state: "album",
  },
];

export default menu;
