import { RouteObject } from "react-router";
import { Quotes } from "../../pages/Home/Quotes";

export const quotes: RouteObject[] = [
  {
    path: "/Quotes",
    element: <Quotes />,
  },
  {
    path: "/Quotes/:id",
    element: <Quotes />,
  },
];
