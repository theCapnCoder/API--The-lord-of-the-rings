import { RouteObject } from "react-router";
import { Movies } from "../../pages/Home/Movies";

export const movies: RouteObject[] = [
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <Movies />,
  },
];
