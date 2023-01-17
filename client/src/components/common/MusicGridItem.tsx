import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorge from "hooks/useLocalStorge";
import { LOCAL_STORAGE } from "constants/enum";

const MusicGridItem = ({ item }: any) => {
  const setSingLocalstorge = useLocalStorge(LOCAL_STORAGE.ALBUM);
  return (
    <Link
      to={`/browse/${item.encodeId}`}
      onClick={() => {
        setSingLocalstorge.setItem(item?.encodeId);
      }}
      style={{ textDecoration: "none" }}
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
          display: "block",
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
        sx={{
          display: "inline-block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
          whiteSpace: "nowrap",
          color: "primary.contractsText",
          fontWeight: "500",
        }}
      >
        {item.artistsNames}
      </Typography>
      {item?.sortDescription && (
        <Box
          color={"#615b5b"}
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            height: "2.4em",
            lineHeight: "1.2em",
          }}
        >
          {item?.sortDescription}
        </Box>
      )}
    </Link>
  );
};

export default MusicGridItem;
