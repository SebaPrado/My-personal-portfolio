import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { motion } from "framer-motion";

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
    <div className="hero">
      <div className="presentacion">
        <div className="mi_nombre">
          <div className="letters_s"> I am</div>
          <div className="letters">Sebastian Prado.</div>
        </div>
      </div>
      <div className="hablity_agriculturalengineer"> Agricultural engineer</div>
      <div className="hablity_ai_agent_creator"> Ai agent creator</div>
      <div className="hablity_web_developer"> Fullstack web developer</div>
    </div>
  );
};

export default Hero;
