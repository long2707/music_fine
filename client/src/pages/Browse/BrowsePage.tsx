import { Box, Grid } from "@mui/material";
import React from "react";
import { MusicPlayer, MusicPlayList } from "components/common";

import { Toolbar } from "@mui/material";

const BrowsePage: React.FC = () => {
  return (
    <Box>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item lg={8} width={"100%"}>
          <MusicPlayList />
        </Grid>
        <Grid item lg={4} width={"100%"}>
          <MusicPlayer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrowsePage;
