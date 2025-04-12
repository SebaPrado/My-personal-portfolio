import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/views/Layout";
import About from "./Components/views/About";
import NotFound from "./Components/views/NotFound";
import Home from "./Components/views/Home";
import Home0 from "./Components/views/Home0";
import FramerMotion from "./Components/views/FramerMotion";
import FramerMotion2 from "./Components/views/FramerMotion2";

import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "home0",
        element: <Home0 />,
      },

      {
        path: "fm",
        element: <FramerMotion />,
      },
      {
        path: "fm2",
        element: <FramerMotion2 />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const [init, setInit] = useState(false);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
