import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Chracters } from "../pages/Home/Characters";
import { Quotes } from "../pages/Home/Quotes";
import { Chapters } from "../pages/Home/Chapters";
import { books } from "./BooksRoutes";
import { movies } from "./MoviesRoutes";
import { characters } from "./CharactersRoutes";
import { quotes } from "./QuotesRoutes";
import { chapters } from "./ChaptersRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [...movies, ...books, ...characters, ...quotes, ...chapters],
  },
]);

export default routes;
