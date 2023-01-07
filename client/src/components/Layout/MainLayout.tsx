import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { GlobalLoading, Header } from "../common";

const MainLayout = () => {
  return (
    <>
      <GlobalLoading />
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        {/* header */}
        <Header />
        {/* header */}

        {/* main */}
        <Box
          component={"main"}
          flexGrow={1}
          overflow={"hidden"}
          minHeight={"100vh"}
          mx={3}
          pb={"30px"}
        >
          <Toolbar />
          <Outlet />
        </Box>
        {/* main */}
      </Box>
    </>
  );
};

export default MainLayout;
