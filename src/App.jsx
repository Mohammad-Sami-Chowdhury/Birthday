import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Countdown from "./pages/CountDown";

const router = createBrowserRouter([
  {
    path: "/page-one",
    element: <PageOne />,
  },
  {
    path: "/page-two",
    element: <PageTwo />,
  },
  {
    path: "/",
    element: <Countdown />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
