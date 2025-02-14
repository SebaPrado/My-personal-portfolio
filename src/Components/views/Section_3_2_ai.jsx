import React, { useState, useEffect, useRef } from "react";
import matesito from "/matesito.png";
import "./section_3_1.css";
import "./section_3_2.css";

const Section_3_2_ai = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="expertiseFlexContainer" id="ai">
      <div className="seccciones bkc2">
        <div className="titles">
          <div> AI</div>
          <div> Integration & Development</div>
        </div>
      </div>

      {/* ---------------------       1   AI Agents Developer      ------------------------- */}
      <div className="expertiseFlexItems_ai ero">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer bckimg ai1"
          onClick={() => toggleSection("customAI")}
        >
          <div className="uno">
            <h4> AI Agents Developer</h4>
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
                I create a custom Node.js API that interfaces with OpenAI's
                platform for AI assistants management
              </li>
              <li>
                Complete lifecycle control: Creation, modification, and
                monitoring of Assistants, Threads, Messages, Executions, and
                States.
              </li>
              <li>
                I connect Open AI, Databases, Google sheets, Calendly,
                Whatsapp/Instagram API, etc .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       2    AI websites Widget      ------------------------- */}
      <div className="expertiseFlexItems_ai">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer bckimg ai1 "
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
                simple script integration (as in this website)
              </li>
              <li>
                A 24/7 automated sales and support Agent that seamlessly
                integrates into any website
              </li>
              <li>
                I built it with Nodejs + React + Webpack for performance and
                minimal resource consumption
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------       3   Prompt Engineering and training ------------------------- */}
      <div className="expertiseFlexItems_ai">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer bckimg ai1"
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
              <li>Implementation of fine-tuning strategies.</li>
              <li>
                Development of static and dinamic context base for the
                assistant's training
              </li>
              <li>
                {" "}
                In progress: Evaluation-Validation, Hyperparameter Tuning.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------     4  Social Media     ------------------------- */}
      {/* <div className="expertiseFlexItems_ai">
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
              <li>Development of META-connected agents.</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* ---------------------     5  Open AI Function calling    ------------------------- */}
      <div className="expertiseFlexItems_ai">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer bckimg ai1"
          onClick={() => toggleSection("autonomousAI")}
        >
          <div className="uno">
            <h4> Open AI Function calling </h4>
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
                I give the AI agent freedom of action and the necessary
                programming tools to act autonomously and execute functions of
                significant scope.
              </li>
              <li>
                Therefore I create AI agents capable of executing code . Through
                function calling, the agent determine whether to execute any
                call or function , prior asking the client for information
                needed to excecute the code (if needed).
              </li>
              <li>
                Context-aware decision-making systems for automated operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------   6   Lancghain    ------------------------- */}
      <div className="expertiseFlexItems_ai">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer bckimg ai1"
          onClick={() => toggleSection("LangChain")}
        >
          <div className="uno">
            <h4>LangChain </h4>
          </div>
          <div className="dos">
            {expandedSections.LangChain ? (
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
            expandedSections.LangChain ? "expanded" : "collapsed"
          }`}
        >
          <div className="content_sub_container">
            <ul>
              <li>
                Custom LangChain agents using the OpenAI API integration,
                implementing memory chains for context retention +
                conversational abilities.
              </li>
              <li>
                Built sequential chain architectures to break down tasks into
                manageable steps (ConversationChain)
              </li>
              <li>
                Created document retrieval systems using Vector stores and
                embeddings, enabling processing of text datasets + Long term
                conversation memory with ChatHistory or Upstash .
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------     extras   ------------------------- */}

      {/* <div className="expertiseFlexItems_ai">
        <div
          className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
          onClick={() => toggleSection("extra")}
        >
          <div className="uno">
            <h4> Extras</h4>
          </div>
          <div className="dos">
            {expandedSections.extra ? (
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
        <div className="expertiseFlexItems_sub">
          <div
            className={`content ${
              expandedSections.extra ? "expanded" : "collapsed"
            }`}
          >
            {" "}
            <div
              className="h4_boton bkc2_subtitle rotacion list_title_div cursor-pointer"
              onClick={() => toggleSection("extra1")}
            >
              <div className="uno">
                <h4>Extra 1</h4>
              </div>
              <div className="dos">
                {expandedSections.extra1 ? (
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
                expandedSections.extra1 ? "expanded" : "collapsed"
              }`}
            >
              <div className="content_sub_container">
                <ul>
                  <li>
                   Accuracy optimization(OpenAI) 
                  </li>
                  <li>
                  Evals (OpenAI). Library to evaluate task performance of models and prompts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ---------------------       Mate     ------------------------- */}

      {/* <div className="expertiseFlexItems_ai">
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
            <ul>
              <li>
                To invest loads of time and effort, so I don't miss the upcoming
                'new industrial revolution'..
              </li>
              <li>
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
                <p></p>
                Always powered by 'mate' ,the South American antioxidant herb
                that keeps me awake and sharp for hours !
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Section_3_2_ai;
