import React, { useEffect, useRef } from "react";
import "./Hero.css";

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

    <div className="heroContainer">
      <div className="heroflex1">
        <div className="heroFlexText">
          <h2>Welcome</h2>
          <p>
            I'm Sebastian, a fullstack developer specializing in AI agents with
            OpenAI and Node.js. I create solutions using the MERN stack,
            focusing on Node.js and React, to develop and integrate AI assistants.
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
