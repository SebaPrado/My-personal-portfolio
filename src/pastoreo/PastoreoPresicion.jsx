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
            <p className="letsTalk  "> Contexto de la propuesta</p>
            <h4> General :</h4>
            <p className="helloText ">
              Que el productor tenga en tiempo real ( 2 veces por semana) una
              presupuestacion forrajera de su plataforma de pastoreo. Mapeo
              satelital periodico de sus parcelas.
            </p>
            <h4> Bajado a tierra </h4>
            <p className="helloText ">
              Mi propuesta en terminos generales: Ayudar a que el productor
              lechero y ganadero intensivoacceda a lo nuevo en tecnologia :
              mapeo de potreros , adquisicion indicadores de cantidad y calidad
              de forraje, ia que procese y prediga cantidad de forraje en tiempo
              real .
            </p>{" "}
            <h4> Metodologia </h4>
            <p className="helloText ">
              1 ) Nos encargamos de generar un modelo matematico que prediga con
              cierta presicion una funcion "calcular_materia_seca". (nada nuevo,
              vi tesis que lo hacen desde hace mucho. La pregunta es, si pudiera
              "re" definir y "re" validar la funcion en base a nuevos datos , e
              incluso a la incorporacion en la funcion de nuevas variables?? ) (
              lo que antes haciamos una vez por experimento , lo podriamos hacer
              miles de veces por dia)
              <br />
              1.a) entrenamos un algoritmo con informacion de la pastura +
              indices de biomasa y los resultados de mediciones historicas.{" "}
              <br />
              1.a.a) info de la pastura : especie + fecha ( version avanzada +
              composicion (tallo , lamina, senecente) + tipo de suelo + % Agua
              disponible). <br />
              1.a.b) indice NDVI extraido para el poligono. <br />
              1.a.c ) resultado de f (x,y,z) = X kg ms / ha <br />
            </p>
            <p className="helloText ">
              Resultado : Tabla de Imputs ( [x,y,z]) y sus respectivos Outputs
              (f(x,y,z)), materia prima para entrenar a un modelo de deep
              learning (AI). <br />
              Dicho modelo, que hara ? : Entrenara, validara, y reeptira el
              proceso semana a semana , devilviendo la funcion que mejor se
              adapte a explicar los pares Input-Output
            </p>
            <p className="helloText ">3)</p>
            <p className="helloText ">4)</p>
          </div>
        </div>
        <div className="personalPresentation">
          <div className="textPersonalSection">
            <div>
              <p className="letsTalk "> Prestaciones </p>
            </div>

            <div className=" scrollAnimation ">
              <h4><strong> /\ ndvi </strong> mayor a <strong> Consumo </strong></h4>
              <h5>
                {" "}
                Modelo " tu superhabit forrajero es de 1000 kg ms/dia y el modelo predice un valor de 2000 kg ms/dia para el 20/9, dando un acumulado
                de 45 tt "
              </h5>
              <br />
              <h5>
                Grafico 1 : Consumo diario de forraje ( tt ms /dia ).
                Actualizacion c/3 dias.
              </h5>{" "}
              <br />
              <h5>
                Grafico 2 : Crecimiento diario de tus pasturas ( tt ms /dia ).
                Actualizacion c/3 dias.
              </h5>
              <br />
              <h5>
                Grafico 3 : Superhabit/deficit diario de forraje ( tt ms /dia ).
                Actualizacion c/3 dias.
              </h5>
              <br />
              <h5>
                {" "}
                Recomendaciones : Modelo analiza cientas de posibles
                alternativas, filtramos y proponemos segun nuestro criterio
                humano :{" "}
              </h5>
              <br />
              <h5>
                {" "}
                Recomendacion 1 : Podrias cerrar 15 has de tu plataforma (10%
                del area) para reservas, sin reducir el consumo del rodeo.
              </h5>{" "}
              <br />
              <h5>
                {" "}
                Recomendacion 2 : Podrias traer la recria ( 'x' kg de peso vivo
                ) y dejar empastar el campo natural , que no pierde
                digestivilidad tan rapido + adecuado para la recria en 70 dias
              </h5>
              <p className="helloText ">
                Cierro potrero para reserva || reduzco suministro reservas ||
                bajo concentrado
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

            <div></div>
          </div>
        </div>
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
                Soy Sebastian Prado (34) , Ingeniero Agronomo de profesion (
                UDELAR ). Trabajo como programador Iot . Incursionado como
                programador Iot en una empresa Espanola de automatizaciones en
                maquinaria agricola (Zetrack).
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
              {/* <a
                href="mailto:sebastian.pradomelesi@gmail.com "
                className="email-button email-link "
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a> */}
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
