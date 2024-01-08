import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Services from "./Components/Pages/Services";
import Signup from "./Components/Pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/services", element: <Services /> },
  { path: "/sign-up", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
