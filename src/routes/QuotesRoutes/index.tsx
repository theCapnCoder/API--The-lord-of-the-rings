import { RouteObject } from "react-router";
import { QuoteList } from "../../pages/Quote/QuoteList";

export const quotes: RouteObject[] = [
  {
    path: "/quotes",
    element: <QuoteList />,
  },
  {
    path: "/quotes/:id",
    element: <QuoteList />,
  },
];
