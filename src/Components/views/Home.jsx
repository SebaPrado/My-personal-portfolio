import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import "animate.css";

import Hero from "./Hero.jsx";
import Section_1 from "./Section_1.jsx";
import Section_2 from "./Section_2.jsx";
import Section_3_1_farming from "./Section_3_1_farming.jsx";
import Section_3_2_ai from "./Section_3_2_ai.jsx";
import Section_3_3_dev from "./Section_3_3_dev.jsx";
import Section_4 from "./Section_4.jsx";
import Section_5 from "./Section_5.jsx";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const cardVariants = (index) => ({
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -7,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
      delay: index <= 3 ? index * 0.4 : 0,
    },
  },
});

const hue = (h) => `hsl(${h}, 50%, 20%)`;


function FramerMotion() {
  //   const [displayedWord, setDisplayedWord] = useState("");
  //   const [isDeleting, setIsDeleting] = useState(false);
  const words = ["    with a creative twist... ", " with a designing mind"];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef(null);

  const food = [
    ["public/logoseba.png", 30, 40],
    ["public/fakeflix.jpeg", 230, 230],
    ["public/alusur.jpeg", 200, 220],
  ];

  const animatedDivRef = useRef(null);

  //   useEffect(() => {
  //     let timer;

  //     const typeEffect = () => {
  //       const currentWord = words[wordIndex];

  //       if (!isDeleting) {
  //         if (displayedWord.length < currentWord.length) {
  //           setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
  //           timer = setTimeout(typeEffect, 250);
  //         } else {
  //           timer = setTimeout(() => setIsDeleting(true), 9000);
  //         }
  //       } else {
  //         if (displayedWord.length > 0) {
  //           setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
  //           timer = setTimeout(typeEffect, 50);
  //         } else {
  //           setIsDeleting(false);
  //           setWordIndex((prev) => (prev + 1) % words.length);
  //           timer = setTimeout(typeEffect, 50);
  //         }
  //       }
  //     };

  //     timer = setTimeout(typeEffect, 100);

  //     return () => clearTimeout(timer);
  //   }, [displayedWord, isDeleting, wordIndex, words]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.replace("hidden", "blur-in-expand");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const animatedDiv = animatedDivRef.current;
    if (animatedDiv) {
      observer.observe(animatedDiv);
    }

    return () => {
      if (animatedDiv) {
        observer.unobserve(animatedDiv);
      }
    };
  }, []);

  return (
    <div className="padre">
      <section id="home">
        {Hero ? <Hero /> : <p>Error al cargar el componente Hero.</p>}
      </section>

      <section className="Section1Home1">
        <Section_1 />
      </section>

      {/* ========================   AI developer    ===========================  */}

      <section className="section3 containerLarge">
        <Section_3_2_ai />
      </section>

      {/* ========================   Fullstack developer    ===========================  */}

      <section className="section3 containerLarge">
        <Section_3_3_dev />
      </section>

      {/* ========================   Section 4_SLIDER      ===========================  */}

      <section className="section_projects " id="projects">
        <div className="containerLarge">
          <Section_4 />
        </div>
      </section>

      {/* ========================   technologies icons  slider      ===========================  */}
      <section>
        <Section_2 />
      </section>

      {/* ========================   About myself      ===========================  */}

      <section className="section3 containerLarge">
        <Section_3_1_farming />
      </section>

      {/* ========================   Empty      ===========================  */}
      <section>
        <Section_5 />
      </section>

      {/* =====================        LETS TALK         ======================== */}

      <section className="section-lets-talk ">
        <div className="lets-talk-flexContainer">
          <div className="lets-talk-flexItem">
            <h2>Let's talk!</h2>

            <p>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com "
                className="email-button email-link"
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* =====================         FOOTER        ======================== */}

      <section>
        <footer className="footer ">
          <div className="footer-content">
            <p>&copy; 2024 Sebastian Prado.</p>
            <div className="social-icons">
              <a
                href="https://github.com/SebaPrado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sebastian_prado31/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default FramerMotion;
