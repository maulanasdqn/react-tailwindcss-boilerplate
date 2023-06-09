import { createBrowserRouter } from "react-router-dom";
import { AuthWraper } from "@/layouts"
import { Register, Login, Me } from "@/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthWraper/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/daftar",
        element: <Register/>
      }
    ]
  },
  {
    path: "/me",
    element: <Me/>
  }
])
