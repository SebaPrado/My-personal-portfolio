import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Home1 from "./Home1";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

function Home0() {
  const constraintsRef = useRef(null); // Esta línea crea una referencia mutable que inicialmente está seteada a null, para ser utilizada como restricción para el movimiento de un elemento.

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 3]);

  const [positionX, setPositionX] = useState(200);

  const [init, setInit] = useState(false);
  
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#023047",
        },
        opacity:"1"
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 180,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div>
      <section>
        <div className="home0section1">
          <motion.h1
            initial={{ color: "#ff0000" }}
            transition={{ duration: 4 }}
            animate={{
              opacity: [0, 1],
              y: 60,
              color: "#000",
            }}
          >
            Hola Sebastian
          </motion.h1>
        </div>
        <div className="home0section2">
          <motion.div initial={{}}>Hola </motion.div>
        </div>
        <div className="home0section3">
          <motion.div className="exampleContainer" ref={constraintsRef}>
            <motion.div
              className="exampleItem"
              drag
              dragConstraints={{
                top: -80, // Límite superior
                left: -200, // Límite izquierdo
                right: 200, // Límite derecho
                bottom: 100,
              }}
            />
          </motion.div>
        </div>
        <div className="wrapperScroll">
        <motion.div
          className="containerScroll"
          style={{
            scale,
          }}
        >
          <motion.div
            className="itemScroll"
            style={{
              scaleY: scrollYProgress,
            }}
          />
        </motion.div>
        <div>
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => setPositionX(positionX + 60)}>+</button>
            <button onClick={() => setPositionX(positionX - 60)}>-</button>
          </div>
          <motion.div animate={{ x: positionX }} transition={{ duration: 2 }}>
            Este div se moverá según los botones
          </motion.div>
        </div>
      </div>
        <div>
          <svg
            style={{
              width: 300,
              height: 200,
              background: "orange",
              borderRadius: 30,
            }}
          >
            <motion.path
              style={{
                stroke: "rgba(119, 0, 255, 0.4)", // Color morado
                strokeWidth: 10, // Grosor de la línea
                strokeLinecap: "round", // Extremos redondeados
                fill: "transparent", // Sin relleno
              }}
              animate={{
                d: [
                  "M 20,20 Q 160,40 160,160", // Línea en forma de L
                  "M 260,40 Q 100,100 40,160", // Diagonal
                  "M 160,160 Q 100,160 40,160", // Línea horizontal
                  "M 160,40 Q 100,160 40,40", // Curva
                  "M 160,40 Q 100,40 40,40", // Línea horizontal superior
                  "M 20,20 Q 160,40 160,160", // Vuelve al punto inicial exacto
                ],
              }}
              transition={{
                repeat: Infinity, // Se repite indefinidamente
                ease: "easeInOut", // Tipo de suavizado
                duration: 19, // Duración total en segundos
                times: [0, 0.16, 0.33, 0.5, 0.66, 0.83], // Tiempos específicos para cada forma
              }}
            />
          </svg>
        </div>
        <div>
          <svg
            style={{
              width: 400,
              height: 200,
              background: "green",
              borderRadius: 30,
            }}
          >
            <motion.path
              style={{
                stroke: "#70f",
                strokeWidth: 10,
                strokeLinecap: "round",
                fill: "transparent",
              }}
              animate={{
                d: [
                  // Forma inicial - S básica
                  "M 80,120 Q 320,120 320,300 Q 80,480 80,480",
                  // S más pronunciada
                  "M 80,80 Q 400,80 320,300 Q 80,520 80,520",
                  // S más suave
                  "M 80,160 Q 240,160 320,300 Q 160,440 80,440",
                  // Volver a la forma inicial
                  "M 80,120 Q 320,120 320,300 Q 80,480 80,480",
                ],
              }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: 6,
                times: [0, 0.33, 0.66, 1],
              }}
            />
          </svg>
        </div>
      </section>
      <section>
        <div className="section4" style={{ position: 'relative', width: '100%', height: '400px' }}>
          
         
          <h2> Esta es la section 4 </h2>
        </div>
      </section>
    </div>
  );
}

export default Home0;
