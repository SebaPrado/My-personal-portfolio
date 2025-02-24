import React, { useState, useEffect, useRef } from "react";
import { OpenAiLogo } from "@phosphor-icons/react";
import "./Section_2.css";
import {
  FaHtml5,
  FaCss3,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiInsomnia } from "react-icons/si";

const Section_2 = () => {
    const OpenAIIconWrapper = () => (
        <OpenAiLogo size={34} color="#001a27" weight="light" />
      );
  const techIcons = [
    { icon: OpenAIIconWrapper, name : "OpenAI"},
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiRedux, name: "Redux" },
    // { icon: FaBootstrap, name: "Bootstrap" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "Github" },
    { icon: SiInsomnia, name: "Insomnia" },
    { icon: FaFigma, name: "Figma" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
  ];

  return (
    <div className="padre_sliders">
      {/* <OpenAiLogo size={44} color="#ebebeb" weight="light" /> */}
      <section className="iconsSection">
        <div className="slider-container">
          <div className="slider-icons">
            <div className="slider-icon">
              <OpenAiLogo size={34} color="#001a27" weight="light" />
              <span className="icon-name">OpenAI</span>
            </div>
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div key={`tech-${index}`} className="slider-icon">
                <tech.icon className="icon" />
                <span className="icon-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="iconsSection2">
        <div className="slider-container">
          <div className="slider-icons2">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div key={`tech-${index}`} className="slider-icon">
                <tech.icon className="icon" />
                <span className="icon-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_2;
