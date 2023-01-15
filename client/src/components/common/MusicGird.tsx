import { Box, Grid, Typography } from "@mui/material";
import { IMusicType, IPlayType } from "constants/interface";
import MusicGridItem from "./MusicGridItem";

const MusicGird = ({ data }: any) => {
  return (
    <>
      {data &&
        data?.map((item: IMusicType) => (
          <Box
            width={"100%"}
            flexGrow={1}
            paddingTop={"20px"}
            sx={{ color: "primary.contractsText" }}
            key={item.title}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "500",
                pb: "10px",
                textTransform: "capitalize",
              }}
            >
              {item.title}
            </Typography>
            <Grid
              container
              rowSpacing={2}
              sx={{
                width: "100%!important",
                // marginLeft: "0px!important",
              }}
              columnSpacing={3}
            >
              {item?.items?.map((musicItem: IPlayType) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  height={"100%"}
                  key={item.encodeId}
                >
                  <MusicGridItem item={musicItem} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
    </>
  );
};

export default MusicGird;
