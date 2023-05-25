import { RouteObject } from "react-router";
import { Chapters } from "../../pages/Home/Chapters";

export const chapters: RouteObject[] = [
  {
    path: "/Chapters",
    element: <Chapters />,
  },
  {
    path: "/Chapters/:id",
    element: <Chapters />,
  },
];
