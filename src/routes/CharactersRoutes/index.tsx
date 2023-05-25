import { RouteObject } from "react-router";
import { Chracters } from "../../pages/Home/Characters";

export const characters: RouteObject[] = [
  {
    path: "/Characters",
    element: <Chracters />,
  },
  {
    path: "/Characters/:id",
    element: <Chracters />,
  },
];
