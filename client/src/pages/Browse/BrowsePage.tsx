import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { MusicPlayer, MusicPlayList } from "components/common";
import useLocalStorge from "hooks/useLocalStorge";
import { MusicService } from "services";
import { Toolbar } from "@mui/material";
import { setEncodeId } from "apps/features/songSlice";

const BrowsePage: React.FC = () => {
  const [song, setSong] = React.useState<[]>([]);

  const dispatch = useDispatch();

  return (
    <Box>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item md={8}>
          <MusicPlayList />
        </Grid>
        <Grid item md={4}>
          <MusicPlayer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrowsePage;
