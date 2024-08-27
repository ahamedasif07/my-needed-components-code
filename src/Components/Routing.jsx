import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
