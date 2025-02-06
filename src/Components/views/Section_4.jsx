import React, { useState, useEffect, useRef } from "react";
import "./Section_4.css";

const Section_4 = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Section_4;
