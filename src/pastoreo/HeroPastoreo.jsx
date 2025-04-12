import React, { useEffect, useRef } from "react";
import "./hero_pastoreo.css";

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
          <h2>Propuesta pastoreo de precision</h2>
          <h6>Pablo Chillibroste</h6>
          {/* <p>
            Mi propuesta en terminos generales: Poner al servicio del productor
            lechero y ganadero intensivo, los nuevo en tecnologia : mapeo de
            potreros , adquisicion indicadores de cantidad y calidad de forraje,
            ia que procese y prediga cantidad de forraje en tiempo real .
          </p>
          <p>
            Mi propuesta en concreto : Puedo mapear a gran escala el ndvi de
            cada chacra ( incluso definir y separar areas dentro de la misma ,
            algo asi como en la ag de presicion ) y devolverle al productor
            mucha mucha datos , temporales y espaciales : decametros2 como
            unidad de superficie ( 100 por ha ) y 2-4 dias el 'delta' tiempo.{" "}
          </p> */}
        </div>
        <div>
          <img src="/hero_setup.jpg" alt="Contraer" />
        </div>
      </div>
    </div>
  );
};

export default HeroPastoreo;
