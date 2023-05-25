import { RouteObject } from "react-router";
import { Book } from "../../pages/Home/Book";
import { Books } from "../../pages/Home/Books";

export const books: RouteObject[] = [
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "books/:id",
    element: <Book />,
  },
];
