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

const MusicPlayList: React.FC = () => {
  const [playList, setPlayList] = React.useState<any | undefined>(undefined);
  const dispatch = useDispatch();
  const encodeId = useLocalStorge("sing").getItem();
  React.useEffect(() => {
    const getListMusic = async () => {
      dispatch(setLoading(true));
      const { data }: any = await MusicService.getPlayList(encodeId as string);
      if (data) {
        setPlayList(data?.data);
        dispatch(setLoading(false));
      }
      console.log(data?.data);
    };
    getListMusic();
  }, [encodeId]);

  return (
    <>
      {playList &&
        playList?.song["items"]?.map((item: IMusicType, index: number) => (
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
              <img
                src={item?.thumbnail}
                alt=""
                width={"70px"}
                style={{ marginLeft: "10px", borderRadius: "10px" }}
              />
              <ArrowRightIcon />
              <Typography
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                  height: "1.2em",
                  lineHeight: "1.2em",
                  fontWeight: "500",
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
                lineHeight: "1.2rem",
                height: "1.2rem",
              }}
            >
              {item?.title}
            </Typography>
            <Typography sx={{ flex: "0 0 10%", textAlign: "center" }}>
              {FormatDate(item?.duration || 0)}
            </Typography>
            <EqualizerIcon
              sx={{ flex: "0 0 10%", textAlign: "right", color: "#4A15BA" }}
            />
          </Paper>
        ))}
    </>
  );
};

export default MusicPlayList;
