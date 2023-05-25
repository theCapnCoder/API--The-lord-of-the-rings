import { RouteObject } from "react-router";
import { MovieList } from "../../pages/Home/Movies/MovieList";
import { MovieDetails } from "../../pages/Home/Movies/MovieDetails";

export const movies: RouteObject[] = [
  {
    path: "/movies",
    element: <MovieList />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
];
