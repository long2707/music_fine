import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import { setDuration } from "apps/features/songSlice";
import { RootState } from "apps/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import musicService from "services/musicService";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { FormatDate } from "helper/utilties";

const WallPaper = styled("div")({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
});

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlayer: React.FC = () => {
  const id = useSelector((state: RootState) => state.songState.encodeId);

  const [Loading, setLoading] = React.useState<boolean>(false);
  const [AudioSrc, setAudioSrc] = React.useState<string>("");
  const [infoSong, setInfoSong] = React.useState<{}>({});
  const [paused, setPaused] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getAudioSrc = async () => {
      const { data } = await musicService.getSong(id as string);
      setAudioSrc(data?.data["128"]);
      setLoading(false);
    };
    const getInfoSong = async () => {
      setLoading(true);
      const { data } = await musicService.getInfoSong(id as string);
      const body: any = {
        title: data?.data?.title,
        artistsNames: data?.data?.artistsNames,
        thumbnai: data?.data?.thumbnailM,
      };
      setInfoSong(body);
      dispatch(setDuration(data?.data?.duration));
      getAudioSrc();
    };
    getInfoSong();
  }, [id]);
  console.log(AudioSrc);
  return (
    <Paper>
      <Box>
        {Loading ? (
          "loading"
        ) : (
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CoverImage>
                <img
                  alt="can't win - Chilling Sunday"
                  src="/static/images/sliders/chilling-sunday.jpg"
                />
              </CoverImage>
              <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={500}
                >
                  Jun Pulse
                </Typography>
                <Typography noWrap>
                  <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                  Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                </Typography>
              </Box>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              min={0}
              step={1}
              sx={{
                color: "rgba(0,0,0,0.87)",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)'
                }`,
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
              }}
            >
              {/* <TinyText>{FormatDate(position)}</TinyText>
          <TinyText>-{FormatDate(duration - position)}</TinyText> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song">
                <FastRewindRounded fontSize="large" />
              </IconButton>
              <IconButton
                aria-label={paused ? "play" : "pause"}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <PlayArrowRounded sx={{ fontSize: "3rem" }} />
                ) : (
                  <PauseRounded sx={{ fontSize: "3rem" }} />
                )}
              </IconButton>
              <IconButton aria-label="next song">
                <FastForwardRounded fontSize="large" />
              </IconButton>
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1, px: 1 }}
              alignItems="center"
            >
              <VolumeDownRounded />
              <Slider
                aria-label="Volume"
                defaultValue={30}
                sx={{
                  color: "rgba(0,0,0,0.87)",
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#fff",
                    "&:before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
              <VolumeUpRounded />
            </Stack>
            <WallPaper />
            <audio src={AudioSrc} autoPlay={true} />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default MusicPlayer;
