import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiInsomnia } from "react-icons/si";
import matesito from "/matesito.png";


function Home1() {
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["    with a creative twist... ", " with a designing mind"];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef(null);
  // const [cardsLoaded, setCardsLoaded] = useState(false);

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

  const food = [
    ["public/logoseba.png", 30, 40],
    ["public/fakeflix.jpeg", 230, 230],
    ["public/alusur.jpeg", 200, 220],
  ];

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
        delay: index <= 3 ? index * 0.4 : 0.2,
      },
    },
  });
  
  const hue = (h) => `hsl(${h}, 50%, 20%)`;
  function Card({ image, hueA, hueB, index }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  
    return (
      <>
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
      </>
    );
  }

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "-400px 0px" }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // useEffect(() => {
  //   if (!cardsLoaded) {
  //     setCardsLoaded(true);
  //   }
  // }, []);

  return (
    <div>
      <section>
        <div className="padreContainer">
          <div className="sonLeftContainer"></div>
          <div className="sonRightContainer "></div>
          <div className="titles-container ">
            <h1 className="h1Home1  ">
              Website developer
            </h1>
          </div>
          <div className="titles-container">
            <h2 className="sebita displayedWord">{displayedWord}</h2>
          </div>
        </div>
      </section>

      <section className="Section1Home1">
        <div className="personalPresentation">
          <div className="textPersonalSection">
            <div className="">
              <img
                className="profilePicture"
                src="public\fotoperfil.png"
                alt=""
              />
            </div>
            <p className="helloText">
              Hey ! I'm Seb, a full stack developer specializing in{" "}
              <strong>React</strong> and
              <strong> Node.js</strong>. I design and develop websites for
              businesses and individuals. My focus on{" "}
              <strong>personalized service from start to finish </strong>
              ensures that your ideas are perfectly reflected in the project.
              Let's bring your vision to life!
            </p>
            <p className="letsTalk">Let's Talk...</p>
            <p>
              <a
                className="email-link "
                href="mailto:sebastian.pradomelesi@gmail.com"
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="section3Home1">
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
                sharp—I’m always ready to deliver results on time. Consider it
                my antioxidant secret weapon for staying focused and ensuring
                your project is finished right on schedule.
              </p>
            </div>
        </div>
      </section>

      <section className="section7 containerLarge ">
      <div className="titleH3section7">
          <h3>Abilities </h3>
          <h4 >
         Check the cards in your hand with me on your team...
            </h4>
        </div>
        <div>
      {/* <div className="card-grid">
        { food.map(([image, hueA, hueB], index) => (
          <Card
            image={image}
            hueA={hueA}
            hueB={hueB}
            index={index}
            key={index}
          />
        ))}
      </div> */}
    </div>
      </section>

      
    </div>
  );
}

export default Home1;
