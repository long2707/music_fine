import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { setLoading } from "../../apps/features/appStateSlice";
import useLocalStorge from "../../hooks/useLocalStorge";
import { MusicService } from "../../services";

interface IitemType {
  encodeId: string;
  title: string;
  artistsNames: string;
  thumbnail: string;
  thumbnailM: string;
  sectionType: string;
}

const HeroSlider = () => {
  const [dataSlider, setDataSlider] = React.useState<any>();

  const dispatch = useDispatch();

  const setSingLocalstorge = useLocalStorge("sing");

  React.useEffect(() => {
    const getDataNewRelease = async () => {
      dispatch(setLoading(true));
      const { data } = await MusicService.getMusicPlayListHome();
      if (data) {
        const dataSlideList = data?.data?.items.filter(
          (e: IitemType) => e.sectionType === "new-release"
        );
        setDataSlider(dataSlideList[0]);
      } else {
        console.log("error");
      }
      dispatch(setLoading(false));
    };
    getDataNewRelease();
  }, [dispatch]);

  return (
    <>
      {dataSlider && (
        <Box sx={{ color: "primary.contractsText" }}>
          <Toolbar />
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", pb: "10px", textTransform: "capitalize" }}
          >
            {dataSlider.title}
          </Typography>
          <Swiper
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: false,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 10,
                pagination: false,
              },
              // >= tablet
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: false,
              },
              // >= desktop
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
                speed: 1500,
              },
            }}
          >
            {dataSlider?.items.all?.map((item: IitemType) => (
              <SwiperSlide key={item.encodeId}>
                <Link
                  to={`/browse/${item.encodeId}`}
                  onClick={() => {
                    setSingLocalstorge.setItem(item?.encodeId);
                  }}
                >
                  <img
                    src={item.thumbnailM}
                    style={{ borderRadius: "10px" }}
                    width="100%"
                    height={"100%"}
                  />
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "1.225rem",
                      display: "inline-block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      whiteSpace: "nowrap",
                      color: "primary.contractsText",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color={"#615b5b"}
                    sx={{
                      display: "inline-block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.artistsNames}
                  </Typography>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </>
  );
};

export default HeroSlider;
