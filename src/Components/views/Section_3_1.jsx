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
        <div className="titles">
          <div> About myself</div>
          {/* <div>Engineer.</div> */}
        </div>
      </div>
      {/* ---------------------       Backend     ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("backend")}
        >
          <div>
            <h4>Agricultural Engineering </h4>
          </div>
          <div className="dos">
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
        <div
          className={`content ${
            expandedSections.backend ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Bachelor's degree in{" "}
                <span>
                  {" "}
                  <strong>Agricultural engineering (2009-2013)</strong>
                </span>
              </li>
              <li>
                <strong> Maize seed chamber agronomist | 2018-2019. </strong>
                <br />
                <span></span> Overseeing registration processes for imported
                corn seeds incorporating IRM technology, ensuring compliance
                with agricultural standards. <span></span>
                <span>
                  Managing agricultural practices for Insect Resistance
                  Biotechnologies for 125 businesses
                </span>{" "}
                <span></span> <span></span>
              </li>
              <li>
                <strong>Private agricultural advisory | 2019 2020 </strong>
                <br />
                Developing Sustainable Dairy Land Management Plans. Soil erosion
                analysis and hydric loss.
              </li>
              <li>
                <strong>Agricultural engineer | 2021 2023</strong>
                <br />
                Prescision agriculture specialist | Subsoil manuring proyects | Nutrient balance analyst for 1200 winter crop hectares
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Front end     ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("frontend")}
        >
          <div className="uno">
            <h4> Life in Australia </h4>
          </div>
          <div className="dos">
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

      {/* ---------------------       Ecommerce   ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("commerce")}
        >
          <div className="uno">
            <h4> Farming background</h4>
          </div>
          <div className="dos">
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

      {/* ---------------------       Mate     ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("weapon")}
        >
          <div className="uno">
            <h4>Family</h4>
          </div>
          <div className="dos">
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
