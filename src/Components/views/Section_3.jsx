import React, { useState, useEffect, useRef } from "react";
import matesito from "/matesito.png";
import "./section_3.css";

const Section_3 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="expertiseFlexContainer ">
      {/* ---------------------       Backend     ------------------------- */}

      <div className="expertiseFlexItems">
        <div className="h4_boton">
          <div className="uno">
            <h4 className="rotacion" onClick={() => toggleSection("backend")}>
              Your Back-end Developer {expandedSections.backend ? " --" : " +"}
            </h4>
          </div>
          <div className="dos"> + </div>
        </div>
        {expandedSections.backend && (
          <div
            style={{ transition: "max-height 0.5s ease", overflow: "hidden" }}
          >
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
        )}
      </div>

      {/* ---------------------       Front end     ------------------------- */}

      <div className="expertiseFlexItems impar">
        <h4 className="rotacion" onClick={() => toggleSection("frontend")}>
          Your Front-end Developer {expandedSections.frontend ? " --" : " +"}
        </h4>
        {expandedSections.frontend && (
          <div>
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
        )}
      </div>

      {/* ---------------------       Fullstack   ------------------------- */}

      <div className="expertiseFlexItems">
        <h4 className="rotacion" onClick={() => toggleSection("fullstack")}>
          A Developer for Your Team {expandedSections.fullstack ? " --" : " +"}
        </h4>
        {expandedSections.fullstack && (
          <div>
            <p>
              Looking for a reliable fullstack developer to integrate into your
              team? With a focus on finding solutions, I'm here to help you
              accelerate project timelines and enhance productivity, considering
              I offer both achievement alternatives or hour-rate.
            </p>
          </div>
        )}
      </div>

      {/* ---------------------       Ecommerce   ------------------------- */}

      <div className="expertiseFlexItems impar ">
        <h4 className="rotacion">Launch Your E-commerce Site from Scratch</h4>
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
          that retain the integrity of your design vision. Let's bring your
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
          sharp—I'm always ready to deliver results on time. Consider it my
          antioxidant secret weapon for staying focused and ensuring your
          project is finished right on schedule.
        </p>
      </div>
    </div>
  );
};

export default Section_3;
