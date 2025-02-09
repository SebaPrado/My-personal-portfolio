import React, { useState, useEffect, useRef } from "react";
import matesito from "/matesito.png";
import "./section_3_1.css";

const Section_3_2 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="expertiseFlexContainer ">
      <div className="seccciones bkc2">
        <div className="titles">
          <div> AI</div>
          <div> Integration & Development</div>
        </div>
      </div>

      {/* ---------------------       1 AI Assistant Development    ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("customAI")}
        >
          <div className="uno">
            <h4> AI Assistant Development</h4>
          </div>
          <div className="dos">
            {expandedSections.customAI ? (
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
            expandedSections.customAI ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Built a custom Node.js API that interfaces with OpenAI's
                platform for comprehensive AI assistant management
              </li>
              <li>
                Full lifecycle control of AI agents, including creation,
                modification, and monitoring of Assistants, Threads, Messages,
                Runs, States.
              </li>
              <li>
                I connect Open AI, Databases, Google sheets, Calendly and
                Whatsapp/Instagram API .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       2    ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("aiWidget")}
        >
          <div className="uno">
            <h4>AI websites Widget </h4>
          </div>
          <div className="dos">
            {expandedSections.aiWidget ? (
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
            expandedSections.aiWidget ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Developed a plug-and-play AI assistant widget deployable via
                simple script integration
              </li>
              <li>
                A 24/7 automated sales and support Agent that seamlessly
                integrates into any website
              </li>
              <li>
                Built with Webpack for optimal performance and minimal resource
                consumption
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       3  ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("aiTraining")}
        >
          <div className="uno">
            <h4> Prompt Engineering and training</h4>
          </div>
          <div className="dos">
            {expandedSections.aiTraining ? (
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
            expandedSections.aiTraining ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>Prompt engineering for specialized business use cases</li>
              <li>
                Implementation of fine-tuning strategies for enhanced AI
                performance
              </li>
              <li>
                Development of static and dinamic context base for the
                assistant's training
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------      4   ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("socialIntegration")}
        >
          <div className="uno">
            <h4>Social Platform APIs Integration</h4>
          </div>
          <div className="dos">
            {expandedSections.socialIntegration ? (
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
            expandedSections.socialIntegration ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Integration of AI assistants across major social media platforms
              </li>
              <li>
                Development of META-connected solutions for enhanced customer
                reach
              </li>
              <li>Creation of multi-channel AI communication systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------      5    ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("autonomousAI")}
        >
          <div className="uno">
            <h4>Function calling tool</h4>
          </div>
          <div className="dos">
            {expandedSections.autonomousAI ? (
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
            expandedSections.autonomousAI ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                {" "}
                This is probably the most important feature I could learn,
                despite is not a complex one
              </li>
              <li>
                With this tool I make AI agents capable of executing code .
                Through function calling, I can ask the agent to determine
                whether to execute an Axios call or any function , asking the
                client for any parameter it needs to excecute the code.
              </li>
              <li>
                It is an Implementation of context-aware decision-making systems
                for automated operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------      5    ------------------------- */}
      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("autonomousAI")}
        >
          <div className="uno">
            <h4>LangChain </h4>
          </div>
          <div className="dos">
            {expandedSections.autonomousAI ? (
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
            expandedSections.autonomousAI ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                {" "}
                This is probably the most important feature I could learn,
                despite is not a complex one
              </li>
              <li>
                With this tool I make AI agents capable of executing code .
                Through function calling, I can ask the agent to determine
                whether to execute an Axios call or any function , asking the
                client for any parameter it needs to excecute the code.
              </li>
              <li>
                It is an Implementation of context-aware decision-making systems
                for automated operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------       Mate     ------------------------- */}

      <div className="expertiseFlexItems">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("weapon")}
        >
          <div className="uno">
            <h4>The strategy</h4>
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

export default Section_3_2;
