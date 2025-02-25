import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Hero = () => {
  const animatedDivRef = useRef(null);
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
    // <div className="hero">
    //   <div className="presentacion">
    //     <div className="mi_nombre">
    //       <div className="letters_s"> I am</div>
    //       <div className="letters">Sebastian Prado.</div>
    //     </div>
    //   </div>
    //   <div className="hablity_agriculturalengineer skill"> Agricultural engineer</div>
    //   <div className="hablity_ai_agent_creator skill"> Ai agent creator</div>
    //   <div className="hablity_web_developer skill"> Fullstack web developer</div>
    // </div>
    <div className="heroContainer">
      <div className="heroflex1">
        <div className="heroFlexText">
          <h2>Welcome</h2>
          <p>
            I'm Sebastian, a fullstack developer specializing in AI-powered
            web applications. Using the MERN stack with a focus on Node.js and
            React, I create solutions that leverage OpenAI
            technologies and AI assistants to solve complex problems.
          </p>
        </div>
        <div>
          <img src="/hero_setup.jpg" alt="Contraer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
