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
      <section id="home">
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
                src="/fotoperfil.png"
                alt=""
              />
            </div>
            <div className=" green scrollAnimation ">
              <p className="helloText ">
                Hey ! I'm Sebastian, a full stack developer specializing in{" "}
                <strong>React</strong> and
                <strong> Node.js</strong>. I develop websites for businesses and
                individuals. My focus on{" "}
                <strong>personalized service from start to finish </strong>
                ensures that your ideas are perfectly reflected in the project.
                Let's bring your vision to life!
              </p>
              <p className="letsTalk  ">Let's Talk...</p>
            </div>

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
          {/* ---------------------       Backend     ------------------------- */}

          <div className="expertiseFlexItems">
            {/* <div class="containerrot">
              <div class="rotacion">Rotando</div>
            </div> */}
            <h4 className="rotacion">
              <span className="dot"></span> Your Back-end Developer
            </h4>
            <p>
              I build backend infrastructures using{" "}
              <span>
                {" "}
                <strong>Node.js</strong>
              </span>{" "}
              and
              <span>
                <strong> Express</strong>
              </span>
              , building{" "}
              <span>
                <strong>RESTful APIs </strong>
              </span>
              with asynchronous functions for data handling. Middlewares for{" "}
              <span>
                <strong>Authentication </strong>
              </span>
              and route controllers are integrated to manage operations.
            </p>
            <p>
              I organize code following the
              <span>
                <strong> MVC architecture</strong>
              </span>{" "}
              pattern, separating{" "}
              <span>
                <strong>Models </strong>
              </span>
              for data structures and{" "}
              <span>
                <strong>Controllers</strong>
              </span>{" "}
              for business logic.
              <span>
                <strong> CRUD operations</strong>
              </span>{" "}
              (Create, Read, Update, Delete) are implemented and tested using
              tools like{" "}
              <span>
                <strong>Insomnia. </strong>
              </span>
            </p>
            <p>
              I work with databases like
              <span>
                <strong> MongoDB</strong>
              </span>
              ,{" "}
              <span>
                <strong>MySQL</strong>
              </span>
              , and
              <span>
                <strong> PostgreSQL</strong>
              </span>{" "}
              to address storage needs.
            </p>{" "}
            <p>
              Authentication systems are implemented using sessions with{" "}
              <span>
                <strong>Passport.js</strong>
              </span>{" "}
              and API authentication with
              <span>
                <strong> JWT</strong>
              </span>
              .
            </p>
          </div>

          {/* ---------------------       Front end     ------------------------- */}

          <div className="expertiseFlexItems impar">
            <h4 className="rotacion">Your Front-end Developer</h4>
            <p>
              I create user interfaces using{" "}
              <span>
                <strong>React.js</strong>
              </span>
              , implementing a{" "}
              <span>
                <strong> Components architecture</strong>
              </span>{" "}
              for code reusability and efficiency. I use{" "}
              <span>
                <strong>React Router</strong>
              </span>{" "}
              to create a smooth navigation experience.
            </p>
            <p>
              I developed API integrations through{" "}
              <span>
                <strong>Axios</strong>
              </span>{" "}
              to handle all backend communications and data fetching operations.
            </p>
            <p>
              For state management, I implemented{" "}
              <span>
                <strong>Redux</strong>
              </span>{" "}
              to handle global application state, along with{" "}
              <span>
                <strong>React Hooks</strong>
              </span>{" "}
              for local states. This way I manage
              <span>
                <strong> e-commerces functionalities</strong>
              </span>{" "}
              and{" "}
              <span>
                <strong> users authentication status</strong>
              </span>
              .
            </p>
          </div>

          {/* ---------------------       Fullstack   ------------------------- */}

          <div className="expertiseFlexItems">
            <h4 className="rotacion">A Developer for Your Team</h4>
            <p>
              Looking for a reliable fullstack developer to integrate into your
              team? With a focus on finding solutions, I’m here to help you
              accelerate project timelines and enhance productivity, considering
              I offer both achievement alternatives or hour-rate.
            </p>
          </div>

          {/* ---------------------       Ecommerce   ------------------------- */}

          <div className="expertiseFlexItems impar ">
            <h4 className="rotacion">
              Launch Your E-commerce Site from Scratch
            </h4>
            <p>
              Ready to transform your vision into a fully functional e-commerce
              platform. Customized product pages, offer sections, display by
              categories and secure checkout processes, every detail is crafted.
            </p>
          </div>

          {/* ---------------------       Figma    ------------------------- */}

          <div className="expertiseFlexItems">
            <h4 className="rotacion">
              Transform Figma Designs into Responsive, Animated Experiences.
            </h4>
            <p>
              Turn static Figma files into dynamic, fully responsive interfaces.
              Using handcrafted CSS or Js libraries ( FramerMotion , Swiper ,
              tailwind ) , I create interactive, visually compelling experiences
              that retain the integrity of your design vision. Let’s bring your
              design to life
            </p>
          </div>

          {/* ---------------------       Mate     ------------------------- */}

          <div className="expertiseFlexItems impar">
            <h4 className="rotacion ">
              The secret weapon
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

      {/*                               SLIDER                                   */}

      <section className="projectsSection containerLarge" id="projects">
        <div className="titleH3">
          <h3>Some projects to check out </h3>
        </div>

        <div className="sliderContainer mt-5">
          <div className="sliderDiv">
            <a
              href="https://juegos.agesic.gub.uy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/juegos.png" alt="Juegos" />
            </a>
          </div>
          <div className="sliderDiv">
            <a
              href="https://alusur.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectImage" src="/alusur.jpg" alt="Alusur" />
            </a>
          </div>
          <div className="sliderDiv">
            <a
              href="https://equalvisionshop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/equal2.png" alt="E-commerce" />
            </a>
          </div>
          <div className="sliderDiv">
            <a
              href="https://equalvisiondashboard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/dashboard.jpg" alt="E-commerce dashboard" />
            </a>
          </div>
          <div className="sliderDiv">
            <a
              href="https://fakeflix-ruby.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/thewildrobot.png" alt="Fakeflix" />
            </a>
          </div>
          {/* <div className="divola"><h4>Titulo</h4></div> */}
        </div>
      </section>

      
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
