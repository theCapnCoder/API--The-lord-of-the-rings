import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { books } from "./BooksRoutes";
import { movies } from "./MoviesRoutes";
import { characters } from "./CharactersRoutes";
import { quotes } from "./QuotesRoutes";
import { chapters } from "./ChaptersRoutes";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [...movies, ...books, ...characters, ...quotes, ...chapters],
    },
  ],
  { basename: "/API--The-lord-of-the-rings" }
);

export default routes;
