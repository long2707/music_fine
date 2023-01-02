import { ReactNode } from "react";
import { AlbumPage, AritstsPage, BrowsePage, HomePage } from "../pages";

type RouteType = {
  element: ReactNode;
  state: string;
  index?: boolean;
  path?: string;
};

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    path: "/",
    state: "home",
  },
  {
    element: <BrowsePage />,
    path: "/browse",
    state: "browse",
  },
  {
    element: <AlbumPage />,
    path: "/album",
    state: "album",
  },
  {
    element: <AritstsPage />,
    path: "/aritst/:id",
    state: "aritst",
  },
];

export default appRoutes;