import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import HeroPastoreo from "../pastoreo/HeroPastoreo.jsx";
import matesito from "/matesito.png";
import "./pastoreo_presicion.css";

function FramerMotion() {
  const animatedDivRef = useRef(null);

  return (
    <div>
      <section id="home">
        {HeroPastoreo ? (
          <HeroPastoreo />
        ) : (
          <p>Error al cargar el componente Hero.</p>
        )}
      </section>

      <section className="Section1Home1">
        <div className="personalPresentation">
          <div className="textPersonalSection">
            <div>
              <p className="letsTalk  ">Un poco sobre mi</p>
              <img
                className="profilePicture "
                src="../fotoperfil.png"
                alt="foto perfil"
              />
            </div>
            <div className=" scrollAnimation ">
              <p className="helloText ">
                Soy Sebastian Prado (34) , Ingeniero Agronomo de profesion ( UDELAR
                ). Trabajo como programador Iot . Incursionado como programador
                Iot en una empresa Espanola de automatizaciones en maquinaria
                agricola (Zetrack).
              </p>
              <p className="helloText ">
                Estudio ademas areas de la programacion que creo que pueden
                ayudar mucho al agro, como el entrenamiento de modelos de
                analisis de datos y redes neuronales (IA) + el procesamiento de
                indices de vegetacion a traves de imagenes satelitales. Lejos de
                ser cosas separadas, uno (img sat) es el sustrato del otro
                (modelo AI){" "}
              </p>
            </div>

            <div>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com "
                className="email-button email-link "
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="iconsSection ">
        <div className="slider-container"></div>
      </section> */}

      <section className="section5 containerLarge" id="expertise">
        <div className="titleH3">
          <h3>Porque le escribo a Pablo</h3>
        </div>
        <div className="expertiseFlexContainer ">
          {/* ---------------------       Backend     ------------------------- */}

          <div className="expertiseFlexItems">
            <h2 className="rotacion">Your Back-end Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eveniet vel voluptatem blanditiis quos unde adipisci
              doloribus repellat omnis repudiandae quae, incidunt quod laborum.
              Quisquam atque deserunt suscipit vitae tempore.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              voluptatibus necessitatibus architecto animi aut voluptatum
              aperiam quo asperiores doloribus facilis modi aliquam, rem facere
              et consectetur fugit eveniet ad esse.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              aperiam, odio ut nisi incidunt porro assumenda reiciendis
              veritatis expedita eaque. Deleniti soluta unde quaerat facere
              quisquam! Itaque autem magnam deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              ratione aspernatur sequi dolorem eaque deleniti corporis provident
              doloribus facere est, commodi ab magni reprehenderit harum sed
              nesciunt consequuntur maiores esse!
            </p>
          </div>

          {/* ---------------------       Front end     ------------------------- */}

          <div className="expertiseFlexItems impar">
            <h4 className="rotacion">Your Front-end Developer</h4>
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

          {/* ---------------------       Fullstack   ------------------------- */}

          <div className="expertiseFlexItems">
            <h4 className="rotacion">A Developer for Your Team</h4>
            <p>
              Looking for a reliable fullstack developer to integrate into your
              team? With a focus on finding solutions, I'm here to help you
              accelerate project timelines and enhance productivity, considering
              I offer both achievement alternatives or hour-rate.
            </p>
          </div>

          {/* ---------------------       Ecommerce   ------------------------- */}

          <div className="expertiseFlexItems impar ">
            <h4 className="rotacion">
              Launch Your E-commerce Site from Scratch
            </h4>
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
      </section>

      {/* ========================      SLIDER      ===========================  */}

      {/*                               SLIDER                                   */}

      {/* <section className="projectsSection containerLarge" id="projects">
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
          {/* <div className="divola"><h4>Titulo</h4></div> */}
      {/* </div> */}
      {/* </section> */}

      {/* =====================        LETS TALK         ======================== */}

      <section className="section-lets-talk container">
        <div className="lets-talk-flexContainer">
          <div className="lets-talk-flexItem">
            <h2>Let's talk!</h2>

            <p>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com "
                className="email-button email-link"
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ======================       CARDS         ========================  */}

      {/* <section className="section7 containerLarge ">
      <div className="titleH3">
          <h3>Your partner in development</h3>
        </div>
        <div className="titleH3section7">
          <h4>Check the cards in your hand with me on your team...</h4>
        </div>
        <div>
          <div className="card-grid">
            {food.map(([image, hueA, hueB], index) => (
              <Card
                image={image}
                hueA={hueA}
                hueB={hueB}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* =====================         FOOTER        ======================== */}

      {/* <section>
        <footer className="footer ">
          <div className="footer-content">
            <p>&copy; 2024 Sebastian Prado.</p>
            <div className="social-icons">
              <a
                href="https://github.com/SebaPrado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sebastian_prado31/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </footer>
      </section> */}
    </div>
  );
}

export default FramerMotion;
