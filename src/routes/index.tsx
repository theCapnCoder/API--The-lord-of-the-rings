import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <div>News</div>,
  }
]);

export default routes;
