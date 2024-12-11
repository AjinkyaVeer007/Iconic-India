import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import "./App.css";
import Layout from "./layout/Layout";
import StateIcons from "./pages/StateIcons";
import Icon from "./components/Icon";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "/state/:state",
          element: <StateIcons />,
        },
        {
          path: "/icon/:iconName",
          element: <Icon />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
