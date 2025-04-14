import React, { useEffect, useRef } from "react";
import "../pastoreo/hero_pastoreo.css";

const HeroPastoreo = () => {
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
          <h2>Relocation </h2>
          <h6> Formulariosn, contrato , IRPF , etc</h6>
          <p> informacion a tener en cuenta para mi relocalizacion en Bilbao</p>
        </div>
        <div>
          <img src="/hero_setup.jpg" alt="Contraer" />
        </div>
      </div>
    </div>
  );
};

export default HeroPastoreo;
