import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/views/Layout";
import About from "./Components/views/About";
import NotFound from "./Components/views/NotFound";
import Home from "./Components/views/Home";
import HomeNuevo from "./Components/views/HomeNuevo";
import Home0 from "./Components/views/Home0";
import PastoreoPresicion from "./pastoreo/PastoreoPresicion";
import FramerMotion2 from "./Components/views/FramerMotion2";
import Bizkaia from "./situacion_fiscal_Bizkaia/Bizcaya";

import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeNuevo />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home0",
        element: <Home0 />,
      },

      {
        path: "pastoreo",
        element: <PastoreoPresicion />,
      },
      {
        path: "biz",
        element: <Bizkaia />,
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
