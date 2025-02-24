import React, { useState, useEffect, useRef } from "react";
import matesito from "/matesito.png";
import "./section_3_1.css";

const Section_3_1_farming = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="expertiseFlexContainer secciones1">
      <div className="secciones1 bkc1">
        <div className="titles">
          <div>About myself</div>
        </div>
      </div>
      {/* ---------------------      Agricultural Engineering      ------------------------- */}

      <div className="expertiseFlexItems content ero">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer bckimg ai4"
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
                <strong>Agronomist | Maize seed chamber | 2018-2019. </strong>
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
                <strong>Private agricultural advisory | 2013-2020 </strong>
                <br />
                Developing Sustainable Dairy Land Management Plans. Soil and
                hydric erosion loss mitigation .
              </li>
              <li>
                <strong>
                  Agricultural engineer | Yaloak estate | 2021 2023
                </strong>
                <br />
                Prescision agriculture specialist | Subsoil manuring proyects |
                Nutrient balance analyst for 1200 winter crop hectares
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Secondary skills    ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer bckimg ai4"
          onClick={() => toggleSection("frontend")}
        >
          <div className="uno">
            <h4> Other skills </h4>
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
                I have a very good <strong>English level</strong> as I lived in
                Australia for 5.5 years and took international English exams to
                objectively prove this skill (Proven English level: Superior -
                C1 / PTE-90pts and CAE-band 8).
              </li>
              <li>
                I studied <strong>Trading </strong> as additional education .
                Got the management of a small invest account of (50K).. and
                developed a tiny Bot that so far is making an (non)incredible
                amount of 185 u$s / month..(I know, invest it in the S&P500 and
                get more + secure money)
              </li>
              <li>
                I obtained an{" "}
                <strong> Cattle Traceability Certificate </strong>. This way, I
                help agricultural producers record the traceability history of
                their herd, thereby adding more value to the meat in various
                international markets.
              </li>
              <li>Great tennis player</li>
              <li>Even better surfer..</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Farming background     ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc1_subtitle rotacion list_title_div cursor-pointer bckimg ai4"
          onClick={() => toggleSection("commerce")}
        >
          <div className="uno">
            <h4> Some balance</h4>
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
                <strong>A bit of myself ..</strong>
              </li>
              <li>
                I had a great happy childhood
                ..even though I had to drive tractors at
                age 11 and trucks by age 15 to help on my dad's
                farm.
              </li>
              
              <li>
                Always taking one step in the risky unknown{" "}
                 ..even though My logical intelligence.
              </li>
          
              <li>
                I've learned to enjoy failures (so many...){" "}
                ..even though I'm always working for
                success.
              </li>
              <li>
                I have big plans for the future{" "}
                 ..even though I'm aware Life is today
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       Family     ------------------------- */}

      {/* <div className="expertiseFlexItems">
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
      </div> */}
    </div>
  );
};

export default Section_3_1_farming;
