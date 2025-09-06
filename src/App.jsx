import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: "/page-two",
    element: <PageTwo />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
