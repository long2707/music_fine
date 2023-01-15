import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "apps/store";
import "assets/styles/loading.css";

const GlobalLoading = () => {
  const loading = useSelector((state: RootState) => state.appState.loading);

  const [isLoaing, setIsLoading] = React.useState<boolean>(false);

  return (
    <>
      {loading && (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            backgroundColor: "#FFEEDE",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Box>
      )}
    </>
  );
};

export default GlobalLoading;
