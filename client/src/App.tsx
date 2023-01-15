import { ThemeProvider } from "@mui/material";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import { RootState } from "apps/store";
import { GlobalLoading } from "components/common";
import MainLayout from "components/Layout/MainLayout";
import PageWrapper from "components/Layout/PageWrapper";
import themeConfigs from "configs/themeConfigs";
import useLocalStorge from "hooks/useLocalStorge";
import appRoutes from "routes/appRoutes";

const Error404 = React.lazy(() => import("pages/404"));
const App: React.FC = () => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode);
  const setSongLocal = useLocalStorge("sing");
  React.useEffect(() => {
    if (!setSongLocal.getItem()) {
      setSongLocal.setItem("Z6U9IW09");
    }
  }, []);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      {/* routes */}
      <BrowserRouter>
        <Suspense fallback={<GlobalLoading />}>
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
              <Route element={<Error404 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
