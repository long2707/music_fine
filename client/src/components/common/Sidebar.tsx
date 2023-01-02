import React from "react";
import { Box } from "@mui/material";
import uiConfigs from "../../configs/uiConfigs";

const Sidebar = ({
  open,
  toggleSidebar,
}: {
  open: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <Box
      component={"nav"}
      sx={{
        width: { sm: uiConfigs.width.sidebarWidth },
        flexShrink: { sm: "0" },
        display: { xs: `${open ? "block" : "none"}`, md: "block" },
      }}
    >
      <div>Sidebar</div>
    </Box>
  );
};

export default Sidebar;
