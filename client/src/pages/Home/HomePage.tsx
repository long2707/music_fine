import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../apps/features/appStateSlice";

import { HeroSlider } from "../../components/common";
import MusicGird from "../../components/common/MusicGird";
import { MusicService } from "../../services";

interface IsectionType {
  sectionType: string;
}

const HomePage = () => {
  const [dataList, setDataList] = React.useState<[]>([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getDataNewRelease = async () => {
      dispatch(setLoading(true));
      const { data } = await (await MusicService.getMusicPlayListHome()).data;
      if (data) {
        const dataListHome = data?.items.filter(
          (e: IsectionType) => e.sectionType === "playlist"
        );
        setDataList(dataListHome);
        dispatch(setLoading(false));
      } else {
        console.log("error");
      }
    };
    getDataNewRelease();
  }, []);

  return (
    <>
      <HeroSlider />
      <MusicGird data={dataList} />
    </>
  );
};

export default HomePage;
