import React, { useState, useEffect } from "react";
import equalvision from "../../../public/equalFront.jpeg";
import alusur from "../../../public/alusur.jpeg";
import movie from "../../../public/fakeflix.jpeg";
import dashboard from "../../../public/equalAdmin.jpeg";
import matesito from "../../../public/matesito.png";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiInsomnia } from "react-icons/si";

function Home() {
  console.log("Renderizando componente Home");
  const techIcons = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiRedux, name: "Redux" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "Github" },
    { icon: SiInsomnia, name: "Insomnia" },
    { icon: FaFigma, name: "Figma" },
  ];

  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [" a twist", " designing mind"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        if (displayedWord.length < currentWord.length) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
          timer = setTimeout(typeEffect, 250);
        } else {
          // Palabra completa, espera 4 segundos antes de borrar
          timer = setTimeout(() => setIsDeleting(true), 4000);
        }
      } else {
        if (displayedWord.length > 0) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
          timer = setTimeout(typeEffect, 50);
        } else {
          // Palabra borrada, cambia a la siguiente palabra
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timer = setTimeout(typeEffect, 250);
        }
      }
    };

    timer = setTimeout(typeEffect, 100);

    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, wordIndex, words]);

  console.log(techIcons);
  return (
    <>
      <div className="" id="home">
        <section className="section1 containerLarge">
          <div className="h1Title">
            <h1 className="titulo-principal">
              A fullstack developer with{" "}
              <span className="changing-text">{displayedWord}</span>
            </h1>
          </div>

          <div className="section2">
            <div className="container2-1">
              <h5>Let's Talk</h5>
              <p>
                <a
                  className="mail"
                  href="mailto:sebastian.pradomelesi@gmail.com"
                >
                  sebastian.pradomelesi@gmail.com
                </a>
              </p>
            </div>
            <div className="container2-2">
              <p>
                Hello, I'm Sebastian, a fullstack developer focusing in React,
                NodeJs and WordPress. Closely related to designers, I will bring
                your idea into reality.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================      PROJECTS         =====================  */}

        <section className="section3 container" id="projects">
          <div className="container3-1">
            <div className="titleH3">
              <h3>Projects</h3>
            </div>
            <div className="container3-3">
              <p>Explore some of my most recent work.</p>
            </div>
          </div>
          <div className="container3-4">
            <p className="more-projects-link">
              more <FaArrowRight style={{ marginLeft: "8px" }} />
            </p>
          </div>
        </section>
        <section className="sectionProjects container">
          {/* ================   Proyect 1   ==================== */}

          <div className="column-container-s4">
            <div
              className="singleProyectContainer
"
            >
              <div className="column-content-s4 project-container">
                <a
                  href="https://equalvision.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="imageProject"
                    src={equalvision}
                    alt="equalvision"
                  />
                </a>
              </div>
              <div className="column-footer-s4">
                <div className="projectsFlexItems">
                  <h4>
                    <a
                      href="https://equalvision.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Equalvision e-commerce
                    </a>
                  </h4>
                </div>

                <h5>Web development</h5>

                <p>
                  Practice E-commerce site featuring a public-facing section for
                  buyers built with React-Redux. The backend API is a RESTful
                  service built with Node.js, Express, Supabase and SQL.
                </p>
              </div>
            </div>

            {/* ================   Proyect 1   ==================== */}
            {/* ================   Proyect 2   ==================== */}

            <div
              className="singleProyectContainer
"
            >
              <div className="column-content-s4 project-container">
                <a
                  href="https://alusur.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="imageProject" src={alusur} alt="alsur" />
                </a>
              </div>
              <div className="column-footer-s4">
                <div className="projectsFlexItems">
                  <h4>
                    <a
                      href="https://alusur.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Alusur sa
                    </a>
                  </h4>
                  <h5>Web development</h5>
                </div>
                <p>
                  Company dedicated to the efficient distribution and logistics
                  of aluminum architectural systems, profiles, and glass.This
                  project was developed using Node, JavaScript, and CSS
                </p>
              </div>
            </div>

            {/* ================   Proyect 2   ==================== */}
            {/* ================   Proyect 3  ==================== */}

            <div className="singleProyectContainer">
              <div className="column-content-s4 project-container">
                <a
                  href="https://equalvision-admin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="imageProject"
                    src={dashboard}
                    alt=" dashboard"
                  />
                </a>
              </div>
              <div className="column-footer-s4">
                <div className="projectsFlexItems">
                  <h4>
                    <a
                      href="https://equalvision-admin.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Backend e-commerce
                    </a>
                  </h4>
                  <h5>Web development</h5>
                </div>
                <p>
                  E-commerce dashboard site section for managing the site, built
                  with React-Redux. . The backend API is a RESTful service built
                  with Node.js, Express, Supabase and SQL.
                </p>
              </div>
            </div>

            {/* ================   Proyect 3  ==================== */}
            {/* ================   Proyect 4  ==================== */}

            <div
              className="singleProyectContainer
"
            >
              <div className="column-content-s4 project-container">
                <a
                  href="https://fakeflix-ruby.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="imageProject" src={movie} alt=" movie" />
                </a>
              </div>
              <div className="column-footer-s4">
                <div className="projectsFlexItems">
                  <h4>
                    <a
                      href="https://fakeflix-ruby.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Fakeflix
                    </a>
                  </h4>
                </div>
                <h5>Desktop app </h5>

                <p>
                  Fakeflix is a practice project designed to showcase an
                  engaging and user-friendly interface. It highlights the
                  ability to create a seamless browsing experience with
                  efficient data management This project was developed using
                  Node, JavaScript, and CSS, incorporating Express as the
                  framework and Redux for state management.
                </p>
              </div>
            </div>
            {/* ================   Proyect 4  ==================== */}
          </div>
        </section>
        {/* ==========================      PROJECTS         =====================  */}
        {/* ==========================      EXPERTISE         =====================  */}

        <section className="section5 containerLarge" id="expertise">
          <div className="titleH3">
            <h3>Expertise</h3>
          </div>
          <div className="ecpertiseFlexContainer">
            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>Fullstack developer
              </h4>
              <p>
                Looking for a developer who can handle it all? I’ve got you
                covered. From front to back, I’ll build a seamless experience
                that aligns with your brand. Let’s take your business to the
                next level with a strong, cohesive digital presence
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>Web developer
              </h4>
              <p>
                Your website deserves to stand out. I craft responsive,
                user-friendly sites that capture your brand’s essence without
                the hassle of complex code. With Webflow at the core, you’ll get
                a secure, custom site that’s as unique as your business.
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>Wordpress / PHP
              </h4>
              <p>
                Need a site that’s both powerful and flexible? I create custom
                WordPress and PHP solutions that fit your needs perfectly. No
                bloated code or generic templates—just a sleek, efficient
                website tailored to your goals.
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                Mate drinker
                <img
                  src={matesito}
                  alt="Mate"
                  style={{
                    width: "28.8px",
                    height: "28.8px",
                    marginLeft: "8px",
                    verticalAlign: "middle",
                  }}
                />
              </h4>
              <p>
                Powered by mate—the South American drink that keeps me awake and
                sharp—I’m always ready to deliver results on time.
                Consider it my antioxidant secret weapon for staying focused and
                ensuring your project is finished right on schedule.
              </p>
            </div>
          </div>
        </section>
        <section className="section-slider">
          <div className="slider-container">
            <div className="slider-icons">
              {techIcons.map((tech, index) => (
                <div key={index} className="slider-icon">
                  <tech.icon className="icon" />
                  <span className="icon-name">{tech.name}</span>
                </div>
              ))}
              {/* Duplicamos los iconos para crear un efecto de bucle infinito */}
              {techIcons.map((tech, index) => (
                <div key={`duplicate-${index}`} className="slider-icon">
                  <tech.icon className="icon" />
                  <span className="icon-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="section-testimonials container">
          <h3>Testimonials</h3>
          <div className="testimonialsFlexContainer">
            <div className="testimonialsFlexItems testimonial-content">
              <p>
                "Joey is a remarkable artist. He grasps abstract ideas and
                transforms them into exceptional visuals. Throughout the years,
                I've witnessed him produce everything from small symbols to
                comprehensive adaptive web pages. He has crafted clothing items
                like tees and caps, promotional products, and professional
                literature."
              </p>
            </div>
            <div className="testimonialsFlexItems testimonial-info">
              <div className="autor">
                <h6>Sebastian</h6>
                <p>Product Lead</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-lets-talk container">
          <div className="lets-talk-flexContainer">
            <div className="lets-talk-flexItem">
              <h2>Let's talk!</h2>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com"
                className="email-button"
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Nuevo footer */}
      <footer className="footer ">
        <div className="footer-content">
          <p>&copy; 2024 Sebastian Prado. All rights reserved.</p>
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
    </>
  );
}

export default Home;
