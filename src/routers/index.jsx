import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])
