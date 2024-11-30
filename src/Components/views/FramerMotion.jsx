import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "animate.css";
import Navbar from "../Navbar";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiInsomnia } from "react-icons/si";
import matesito from "/matesito.png";

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

function Card({ image, hueA, hueB, index }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants(index)}>
        <img
          src={image}
          alt="food"
          className="card-image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "1%",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function FramerMotion() {
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["    with a creative twist... ", " with a designing mind"];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef(null);

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
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
  ];

  const food = [
    ["public/logoseba.png", 30, 40],
    ["public/fakeflix.jpeg", 230, 230],
    ["public/alusur.jpeg", 200, 220],
  ];

  const animatedDivRef = useRef(null);

  useEffect(() => {
    let timer;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        if (displayedWord.length < currentWord.length) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
          timer = setTimeout(typeEffect, 250);
        } else {
          timer = setTimeout(() => setIsDeleting(true), 9000);
        }
      } else {
        if (displayedWord.length > 0) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
          timer = setTimeout(typeEffect, 50);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timer = setTimeout(typeEffect, 50);
        }
      }
    };

    timer = setTimeout(typeEffect, 100);

    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, wordIndex, words]);

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
    <div>
      <section>
        {/* <div className="navbar-container">
          <Navbar />
        </div> */}
        <div className="heroBigContainer">
          <div className="heroH1Container">
            <h1 className="heroH1">Website developer</h1>
          </div>
          <div className="prueba">
            <div className="heroH2Container">
              <h2 className="displayedWord">{displayedWord}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="Section1Home1">
        <div className="personalPresentation">
          <div className="textPersonalSection">
            <div>
              <img
                ref={animatedDivRef}
                className="profilePicture hidden"
                src="public/fotoperfil.png"
                alt=""
              />
            </div>
            <p className="helloText scrollAnimation">
              Hey ! I'm Seb, a full stack developer specializing in{" "}
              <strong>React</strong> and
              <strong> Node.js</strong>. I design and develop websites for
              businesses and individuals. My focus on{" "}
              <strong>personalized service from start to finish </strong>
              ensures that your ideas are perfectly reflected in the project.
              Let's bring your vision to life!
            </p>
            <p className="letsTalk  scrollAnimation">Let's Talk...</p>
            <p>
              <div>
                <a
                  href="mailto:sebastian.pradomelesi@gmail.com "
                  className="email-button email-link "
                  onMouseEnter={(e) => (e.target.style.color = "orange")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  sebastian.pradomelesi@gmail.com
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="iconsSection ">
        <div className="slider-container">
          <div className="slider-icons">
            {techIcons.map((tech, index) => (
              <div key={index} className="slider-icon">
                <tech.icon className="icon" />
                <span className="icon-name">{tech.name} </span>
              </div>
            ))}
            {techIcons.map((tech, index) => (
              <div key={index} className="slider-icon">
                <tech.icon className="icon" />
                <span className="icon-name">{tech.name} </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section5 containerLarge" id="expertise">
        <div className="titleH3">
          <h3>Your partner in development</h3>
        </div>
        <div className="expertiseFlexContainer ">
          <div className="expertiseFlexItems ">
            <h4>Launch Your E-commerce Site from Scratch</h4>
            <p>
              Ready to transform your vision into a fully functional e-commerce
              platform. Customized product pages, offer sections, display by
              categories and secure checkout processes, every detail is crafted.
            </p>
          </div>

          <div className="expertiseFlexItems">
            <h4>
              <span className="dot"></span>Fullstack Developer for Your Team
            </h4>
            <p>
              Looking for a reliable fullstack developer to integrate into your
              team? With a focus on finding solutions, I’m here to help you
              accelerate project timelines and enhance productivity, considering
              I offer both achievement alternatives or hour-rate.
            </p>
          </div>

          <div className="expertiseFlexItems">
            <h4>
              <span className="dot"></span>Transform Figma Designs into
              Responsive, Animated Experiences with FramerMotion and other JS
              libraries
            </h4>
            <p>
              Turn static Figma files into dynamic, fully responsive interfaces
              with engaging animations. Using Framer and Notion, I create
              interactive, visually compelling experiences that retain the
              integrity of your design vision. Let’s bring your design to life
              with seamless transitions, rich interactions, and a pixel-perfect
              finish that enhances the user experience across all devices.
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
              sharp—I’m always ready to deliver results on time. Consider it my
              antioxidant secret weapon for staying focused and ensuring your
              project is finished right on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ========================      SLIDER      ===========================  */}

      <section>
        <div className="sliderContainer">
          <img src="/juegos.png" alt="Juegos" />
          <img className="projectImage" src="/alusur.jpg" alt="Alusur" />
          <img src="/dashboard.jpg" alt="E-commerce dashboard" />
          <img src="/equal2.png" alt="E-commerce" />
          <img src="/fake3.png" alt="Fakeflix" />

        </div>
      </section>

      {/* <section>
        <div className="sliderContainer">
          
          <div>
            <img src="/juegos.png" alt="Juegos" />
          </div>{" "}
          <div>
            <img src="/juegos.png" alt="Juegos" />
          </div>{" "}
          <div>
            <img src="/juegos.png" alt="Juegos" />
          </div>{" "}
          <div>
            <img src="/juegos.png" alt="Juegos" />
          </div>{" "}
          <div>
            <img src="/juegos.png" alt="Juegos" />
          </div>
        </div>
      </section> */}


      {/* =====================        LETS TALK         ======================== */}

      <section className="section-lets-talk container">
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

      {/* ======================       CARDS         ========================  */}

      {/* <section className="section7 containerLarge ">
      <div className="titleH3">
          <h3>Your partner in development</h3>
        </div>
        <div className="titleH3section7">
          <h4>Check the cards in your hand with me on your team...</h4>
        </div>
        <div>
          <div className="card-grid">
            {food.map(([image, hueA, hueB], index) => (
              <Card
                image={image}
                hueA={hueA}
                hueB={hueB}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section> */}

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
