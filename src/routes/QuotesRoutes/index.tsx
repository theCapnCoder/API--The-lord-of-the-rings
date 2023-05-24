import { Quotes } from "../../pages/Home/Quotes";
import { Routes } from "../type";

export const quotes: Routes = [
  {
    path: "/Quotes",
    element: <Quotes />,
  },
  {
    path: "/Quotes/:id",
    element: <Quotes />,
  },
];
