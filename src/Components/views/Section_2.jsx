import React, { useState, useEffect, useRef } from "react";
import "./section_2.css";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaGitAlt,
    FaFigma,
    FaGithub,
   
   
  } from "react-icons/fa";
  import { IoLogoJavascript } from "react-icons/io";
  import { SiRedux, SiInsomnia } from "react-icons/si";

const Section_2 = () => {
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
    
  return (
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
  );
};

export default Section_2;
