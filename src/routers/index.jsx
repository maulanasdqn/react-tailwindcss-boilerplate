import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages";
import Register from "@/pages/daftar";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/daftar",
    element: <Register/>
  }

])
