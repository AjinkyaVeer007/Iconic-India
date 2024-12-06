import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          path: "",
          element: "",
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
