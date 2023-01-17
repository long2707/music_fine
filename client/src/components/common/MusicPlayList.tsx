import React from "react";
import { useDispatch } from "react-redux";
import { MusicService } from "services";
import { Box, Paper, Typography } from "@mui/material";
import { setLoading } from "apps/features/appStateSlice";
import useLocalStorge from "hooks/useLocalStorge";
import { IMusicType } from "constants/interface";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { FormatDate } from "helper/utilties";
import { LOCAL_STORAGE } from "constants/enum";

import { setIdSong } from "apps/features/songSlice";

const MusicPlayList: React.FC = () => {
  const [playList, setPlayList] = React.useState<any | undefined>(undefined);

  const dispatch = useDispatch();
  const encodeId = useLocalStorge(LOCAL_STORAGE.ALBUM).getItem();

  React.useEffect(() => {
    const getListMusic = async () => {
      dispatch(setLoading(true));
      const { data }: any = await MusicService.getPlayList(encodeId as string);
      if (data) {
        setPlayList(data?.data);
        const id = data?.data?.song["items"]["0"].encodeId;
        dispatch(setIdSong(id));
      }
      dispatch(setLoading(false));
    };
    getListMusic();
  }, [encodeId]);

  return (
    <>
      {playList &&
        playList?.song["items"]?.map((item: IMusicType, index: number) => (
          <div
            style={{ cursor: "pointer" }}
            key={item?.encodeId}
            onClick={() => {
              dispatch(setIdSong(item?.encodeId as string));
            }}
          >
            <Paper
              elevation={2}
              sx={{
                mb: "1.125rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: "1.125rem 1.5rem",
                borderRadius: "10px",
                backgroundColor: "background.secondary",
                color: "primary.contractsText",
                "&:hover": { opacity: 0.8 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                  flex: "0 0 40%",
                }}
              >
                <Typography>
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </Typography>
                <Box
                  sx={{
                    mx: "0.5rem",
                    minWidth: { xs: "50px", sm: "70px" },
                  }}
                >
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    width={"100%"}
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <ArrowRightIcon />
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    fontWeight: "500",
                    display: { xs: "none", sm: "-webkit-box" },
                  }}
                >
                  {item?.artistsNames}
                </Typography>
              </Box>
              <Typography
                sx={{
                  flex: "0 0 40%",
                  ml: "0.95rem",
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                  height: "1.2em",
                  lineHeight: "1.2em",
                }}
              >
                {item?.title}
              </Typography>
              <Typography sx={{ flex: "0 0 10%", textAlign: "center" }}>
                {FormatDate(item?.duration || 0)}
              </Typography>
              <EqualizerIcon
                sx={{
                  flex: "0 0 10%",
                  textAlign: "right",
                  color: "#4A15BA",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Paper>
          </div>
        ))}
    </>
  );
};

export default React.memo(MusicPlayList);
