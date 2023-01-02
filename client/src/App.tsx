import { ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootState } from "./apps/store";
import MainLayout from "./components/Layout/MainLayout";
import PageWrapper from "./components/Layout/PageWrapper";
import menu from "./configs/menuConfigs";
import themeConfigs from "./configs/themeConfigs";
import appRoutes from "./routes/appRoutes";

const App: React.FC = () => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      {/* routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {appRoutes.map((route, index) =>
              route.index ? (
                <Route
                  index
                  key={index}
                  path={route.path}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
