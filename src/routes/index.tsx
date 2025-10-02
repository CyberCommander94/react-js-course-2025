import { createBrowserRouter  } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import App from "@/App";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "*", Component: NotFound },
    ],
  },
];

export const router = createBrowserRouter(routes);
