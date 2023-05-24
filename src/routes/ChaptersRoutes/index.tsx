import { Chapters } from "../../pages/Home/Chapters";
import { Routes } from "../type";

export const chapters: Routes = [
  {
    path: "/Chapters",
    element: <Chapters />,
  },
  {
    path: "/Chapters/:id",
    element: <Chapters />,
  },
];
