import { ReactNode } from "react";
import { AlbumPage, AritstsPage, BrowsePage, HomePage } from "../pages";

interface RouteType {
  element: ReactNode;
  state: string;
  index?: boolean;
  path?: string;
}

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    path: "/",
    state: "home",
  },
  {
    element: <BrowsePage />,
    path: "/browse/:id",
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
