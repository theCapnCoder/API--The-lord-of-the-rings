import { Book } from "../../pages/Home/Book";
import { Books } from "../../pages/Home/Books";
import { Routes } from "../type";

export const books: Routes = [
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "books/:id",
    element: <Book />,
  },
];
