import { Chracters } from "../../pages/Home/Characters";
import { Routes } from "../type";

export const characters: Routes = [
  {
    path: "/Characters",
    element: <Chracters />,
  },
  {
    path: "/Characters/:id",
    element: <Chracters />,
  },
];
