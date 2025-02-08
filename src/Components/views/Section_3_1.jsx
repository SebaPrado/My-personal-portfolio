import React, { useState, useEffect, useRef } from "react";
import matesito from "/matesito.png";
import "./section_3_1.css";

const Section_3_1 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="expertiseFlexContainer ">
      <div className="seccciones bkc1">
        <div>
          <div className="letters_s"> Agricultural</div>
          <div className="letters">Engineer.</div>
        </div>
      </div>
      {/* ---------------------       Backend     ------------------------- */}

      <div className="expertiseFlexItems">
        <div className="h4_boton bkc1_subtitle rotacion list_title_div ">
          <div>
            <h4>Project manager </h4>
          </div>
          <div className="dos" onClick={() => toggleSection("backend")}>
            {expandedSections.backend ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Nota: Ya no usamos && para condicionar el render */}
        <div
          className={`content ${
            expandedSections.backend ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
                Authentication systems are implemented using sessions with{" "}
                <span>
                  <strong>Passport.js</strong>
                </span>{" "}
                and API authentication with
                <span>
                  <strong> JWT</strong>
                </span>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Front end     ------------------------- */}

      <div className="expertiseFlexItems">
        <div className="h4_boton bkc1_subtitle rotacion list_title_div">
          <div className="uno">
            <h4> Precision agricuture </h4>
          </div>
          <div className="dos" onClick={() => toggleSection("frontend")}>
            {expandedSections.frontend ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>

        <div
          className={`content ${
            expandedSections.frontend ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
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
              </li>
              <li>
                I developed API integrations through{" "}
                <span>
                  <strong>Axios</strong>
                </span>{" "}
                to handle all backend communications and data fetching
                operations.
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Fullstack   ------------------------- */}

      {/* <div className="expertiseFlexItems">
        <div className="h4_boton rotacion list_title_div">
          <div className="uno">
            <h4>A Developer for Your Team</h4>
          </div>
          <div className="dos" onClick={() => toggleSection("fullstack")}>
            {expandedSections.fullstack ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`content ${
            expandedSections.fullstack ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <p>
              Looking for a reliable fullstack developer to integrate into your
              team? With a focus on finding solutions, I'm here to help you
              accelerate project timelines and enhance productivity, considering
              I offer both achievement alternatives or hour-rate.
            </p>
          </div>
        </div>
      </div> */}

      {/* ---------------------       Ecommerce   ------------------------- */}

      <div className="expertiseFlexItems">
        <div className="h4_boton bkc1_subtitle rotacion list_title_div">
          <div className="uno">
            <h4> Farming background</h4>
          </div>
          <div className="dos" onClick={() => toggleSection("commerce")}>
            {expandedSections.commerce ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`content ${
            expandedSections.commerce ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Ready to transform your vision into a fully functional
                e-commerce platform. Customized product pages, offer sections,
                display by categories and secure checkout processes, every
                detail is crafted.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Figma    ------------------------- */}
{/* 
      <div className="expertiseFlexItems">
        <div className="h4_boton rotacion list_title_div">
          <div className="uno">
            <h4>Figma Designs into responsive, animated UIs.</h4>
          </div>
          <div className="dos" onClick={() => toggleSection("designs")}>
            {expandedSections.designs ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`content ${
            expandedSections.designs ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <p>
              Turn static Figma files into dynamic, fully responsive interfaces.
              Using handcrafted CSS or Js libraries ( FramerMotion , Swiper ,
              tailwind ) , I create interactive, visually compelling experiences
              that retain the integrity of your design vision. Let's bring your
              design to life
            </p>
          </div>
        </div>
      </div> */}

      {/* ---------------------       Mate     ------------------------- */}

      <div className="expertiseFlexItems">
        <div className="h4_boton bkc1_subtitle rotacion list_title_div">
          <div className="uno">
            <h4>The secret weapon</h4>
          </div>
          <div className="dos" onClick={() => toggleSection("weapon")}>
            {expandedSections.weapon ? (
              <img
                src="/contraer.svg"
                alt="Contraer"
                className="contraer cursor-pointer"
              />
            ) : (
              <img
                src="/contraer.svg"
                alt="Expandir"
                className="expandir cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`content ${
            expandedSections.weapon ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
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
            <ul>
              <li>
                Powered by mate—the South American drink that keeps me awake and
                sharp—I'm always ready to deliver results on time. Consider it
                my antioxidant secret weapon for staying focused and ensuring
                your project is finished right on schedule.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3_1;
