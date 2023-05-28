import { RouteObject } from "react-router";
import { MovieList } from "../../pages/Movies/MovieList";
import { MovieDetails } from "../../pages/Movies/MovieDetails";

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
