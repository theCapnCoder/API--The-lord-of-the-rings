import { RouteObject } from "react-router";
import { ChapterList } from "../../pages/Chapters/ChapterList";

export const chapters: RouteObject[] = [
  {
    path: "/Chapters",
    element: <ChapterList />,
  },
  {
    path: "/Chapters/:pageNumber/:id?",
    element: <ChapterList />,
  },
];
