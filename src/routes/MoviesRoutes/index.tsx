import { Movies } from "../../pages/Home/Movies";
import { Routes } from "../type";

export const movies: Routes = [
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <Movies />,
  },
];
