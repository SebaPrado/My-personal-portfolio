import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/views/Layout";
import About from "./Components/views/About";
import NotFound from "./Components/views/NotFound";
import Home from "./Components/views/Home";
import Home0 from "./Components/views/Home0";
import FramerMotion from "./Components/views/FramerMotion";
import FramerMotion2 from "./Components/views/FramerMotion2";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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

  // this should be run only once per application lifetime
  //   useEffect(() => {
  //     initParticlesEngine(async (engine) => {
  //       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //       // starting from v2 you can add only the features you need reducing the bundle size
  //       //await loadAll(engine);
  //       //await loadFull(engine);
  //       await loadSlim(engine);
  //       //await loadBasic(engine);
  //     }).then(() => {
  //       setInit(true);
  //     });
  //   }, []);

  //   const particlesLoaded = (container) => {};

  //   const options = useMemo(
  //     () => ({
  //       background: {
  //         color: {
  //           value: "#023047",
  //         },
  //         opacity: "1",
  //       },
  //       fpsLimit: 110,
  //       interactivity: {
  //         events: {
  //           onClick: {
  //             enable: false,
  //             mode: "push",
  //           },
  //           onHover: {
  //             enable: true,
  //             mode: "repulse",
  //           },
  //         },
  //         modes: {
  //           push: {
  //             quantity: 4,
  //           },
  //           repulse: {
  //             distance: 200,
  //             duration: 0.4,
  //           },
  //         },
  //       },
  //       particles: {
  //         color: {
  //           value: "#ffffff",
  //         },
  //         links: {
  //           color: "#ffffff",
  //           distance: 100,
  //           enable: true,
  //           opacity: 0.5,
  //           width: 1,
  //         },
  //         move: {
  //           direction: "none",
  //           enable: true,
  //           outModes: {
  //             default: "bounce",
  //           },
  //           random: false,
  //           speed: 2,
  //           straight: false,
  //         },
  //         number: {
  //           density: {
  //             enable: true,
  //           },
  //           value: 110,
  //         },
  //         opacity: {
  //           value: 0.3,
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         size: {
  //           value: { min: 1, max: 5 },
  //         },
  //       },
  //       detectRetina: true,
  //     }),
  //     []
  //   );

  return (
    <>
      {/* <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "contain",
            height: "100%",
            zIndex: -1,
          }}
        /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
