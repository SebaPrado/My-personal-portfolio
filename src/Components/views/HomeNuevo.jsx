import React, { useEffect, useRef } from 'react';
import './homeNuevo.css';
import './sectionDiagrama_chatbot.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const HomeNuevo = () => {
  const nubesLinternaRef = useRef(null);
  const containerLinternaRef = useRef(null);

  // Efecto de linterna
  useEffect(() => {
    const nubesLinterna = nubesLinternaRef.current;
    const containerLinterna = containerLinternaRef.current;
    const radius = 600;

    if (!nubesLinterna || !containerLinterna) return;

    // Al inicio, ocultamos la linterna fuera de la pantalla
    nubesLinterna.style.webkitMaskPosition = '-9999px -9999px';
    nubesLinterna.style.maskPosition = '-9999px -9999px';

    // EVENTO 1: Cuando el mouse entra en la sección
    const handleMouseEnter = (e) => {
      const rect = nubesLinterna.getBoundingClientRect();
      const x = e.clientX - rect.left - radius;
      const y = e.clientY - rect.top - radius;

      nubesLinterna.style.webkitMaskPosition = `${x}px ${y}px`;
      nubesLinterna.style.maskPosition = `${x}px ${y}px`;
    };

    // EVENTO 2: Cuando el mouse se mueve
    const handleMouseMove = (e) => {
      const rect = nubesLinterna.getBoundingClientRect();
      
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        
        const x = e.clientX - rect.left - radius;
        const y = e.clientY - rect.top - radius;

        nubesLinterna.style.webkitMaskPosition = `${x}px ${y}px`;
        nubesLinterna.style.maskPosition = `${x}px ${y}px`;
      }
    };

    // EVENTO 3: Cuando el mouse sale de la sección
    const handleMouseLeave = () => {
      nubesLinterna.style.webkitMaskPosition = '-9999px -9999px';
      nubesLinterna.style.maskPosition = '-9999px -9999px';
    };

    containerLinterna.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousemove', handleMouseMove);
    containerLinterna.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      containerLinterna.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousemove', handleMouseMove);
      containerLinterna.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll ultra-rápido con inicio inmediato para el navbar
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-transparent a');
    
    const handleClick = function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const targetId = href.startsWith('#') ? href.substring(1) : href;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Scroll inmediato sin demoras
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop - 80;
        const distance = targetPosition - startPosition;
        const duration = Math.min(Math.abs(distance) / 2, 1500);
        
        let startTime = null;
        
        // Función de easing ultra-simple
        function easeOutQuad(t) {
          return 1 - (1 - t) * (1 - t);
        }
        
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          
          const ease = easeOutQuad(progress);
          window.scrollTo(0, startPosition + distance * ease);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
        
        // Iniciar inmediatamente con el primer frame
        requestAnimationFrame(animation);
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  // ================ ALTERNATIVA : Cargar widget de WhatsApp desde el archivo index.html ================  //
  // useEffect(() => {
   
  //   if (window.initAIChat) {
  //     window.initAIChat({
  //       apiKey: "asst_Oh3EOHwb9x5TowODwDlj56Fq",
  //       targetSelector: "#whatsapp_widget_agro1",
  //       openByDefault: true
  //     });
  //   } else {
  //     const script = document.createElement("script");
  //     script.src = "https://website-ai-agent-widget.vercel.app/widget.js";
  //     script.onload = () => {
  //       window.initAIChat({
  //         apiKey: "asst_Oh3EOHwb9x5TowODwDlj56Fq",
  //         targetSelector: "#whatsapp_widget_agro1",
  //         openByDefault: true
  //       });
  //     };
  //     document.body.appendChild(script);
  //   }
  // }, []); 
  
// ================ FIN ALTERNATIVA : Cargar widget de WhatsApp desde el archivo index.html ================  //
  return (
    <>
      {/* NAVBAR TRANSPARENTE */}
      {/* <nav className="navbar-transparent">
        <a href="#section-1">cloud</a>
        <a href="#section-10">atoms</a>
        <a href="#section-surf">waves</a>
        <a href="#section-maps1">soil</a>
        <a href="#section-2">roots</a>
        <a href="#section-8">ocean</a>
        <a href="#section-work">seeds</a>
      </nav> */}

      {/* ===========================================
           INICIO - HTML SECCIÓN LINTERNA
      =========================================== */}

      <section id="home" className="section section-linterna section-scroll">
        <div className="container-linterna" ref={containerLinternaRef}>
          <img src="/spring.jpg" alt="Spring background" className="fondo-linterna" />
          
          <div className="nubes-linterna" ref={nubesLinternaRef}>
            <div className="texto-linterna">
              <h2>Digital creations</h2>
              <p>Software development with React, Supabase, AWS IoT, and AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN BLANCA SIMPLE - SECTION 6 */}
      <section className="section section-white-simple section-scroll" style={{ minHeight: '130vh' }}>
        <div className="section-content">
          <div className="box2">
            <h2>What we build</h2>
            <p>
              From concept to deployment. Applications, AI systems, cloud
              infrastructure. Any idea?
            </p>
            <a href="mailto:sebastian@sebastianprado.com">Email us your idea</a>
            <a href="https://wa.me/61487175193">Whatsapp us</a>
          </div>
        </div>
      </section>

      {/* FIELDS FROM ABOVE - SECTION 17 */}
      <section id="fields" className="section section-maps1 section-fixed">
        <div className="section-content">
          <div className="box">
          <div> 
            <h2 >Fields from above</h2>
            <p >Satellite imagery and NDVI analysis for precision agriculture</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="section section-white section-scroll" style={{ minHeight: '130vh', background: 'white' }}>
        <div className="section-content">
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '9px' }}>Fields From Above</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Geospatial intelligence. Precision mapping and actionable insights for every field.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '7px' }}>For Companies</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Your personal dashboards. Monitor your clients' farms, crops and pastures from a single platform.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '7px' }}>For advisors</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Your personal dashboards. Monitor your farmers'crops and pastures from a single platform.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '7px' }}>Mapbox and GeoJson Storage</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Interactive visualization. Real-time maps</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '7px' }}>Sentinel Hub</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Satellite imagery access. Weekly crop monitoring and field change detection.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: '#55c08a', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em', paddingBottom: '7px' }}>Google Earth Engine</h3>
            <p style={{ color: '#150039', fontSize: '0.85em' }}>Planet-scale analysis. NDVI, land-use classification, and environmental metrics.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN COW - SECTION 18 */}
      <section className="section section-cow section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Yes, looking at you</h2>
            <div className="boxcow">
              <a href="mailto:sebastian@sebastianprado.com">Email us your idea</a>
              <a href="https://wa.me/61487175193">Start a conversation</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD - SECTION 7 */}
      <section className="section section-white-simple section-scroll" style={{ minHeight: '130vh' }}>
        <div className="section-content">
          <div className="box2">
            <h2>For agencies</h2>
            <p>Custom software solutions. Simple. No contracts. Try</p>
            <a href="mailto:sebastian@sebastianprado.com">email your project</a>
            <a href="https://wa.me/61487175193">whatsapp me your need</a>
          </div>
        </div>
      </section>

      {/* PULSE IN THE CLOUD - SECTION 1 */}
      <section id="cloud" className="section section-1 section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Pulse in the cloud</h2>
            <p style={{ color: 'rgba(254, 193, 95, 0.767)' }}>AWS IoT and cloud architecture</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN AWS - SECTION 8 */}
      <section className="section section-aws section-fixed">
        <div className="section-content">
          <div className="box ligthBox">
            <h3 style={{ color: 'rgb(250, 165, 29)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1.2em' }}>Iot Internet of Things</h3>
            <p style={{ color: 'rgb(129, 80, 2)' }}>Connecting devices to the cloud. Mqtt. Events. Rules.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: 'rgb(250, 165, 29)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Lambda Functions</h3>
            <p style={{ color: 'rgb(129, 80, 2)' }}>Automated workflows. Serverless functions.</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: 'rgb(250, 165, 29)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1.2em' }}>Analitics</h3>
            <p style={{ color: 'rgb(129, 80, 2)' }}>Data processing and Analytics</p>
          </div>
          <div className="box ligthBox">
            <h3 style={{ color: 'rgb(250, 165, 29)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1.2em' }}>DynamoDB</h3>
            <p style={{ color: 'rgb(129, 80, 2)' }}>NoSQL database.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN GRADIENTE - SECTION 9 */}
      <section className="section section-gradient section-scroll">
        <div className="section-content">
          <div className="box">
            <h2>Sección Gradiente</h2>
            <p>
              Esta sección tiene un hermoso gradiente oscuro que se mueve con el
              scroll. Transición entre AWS y Electric-SQL.
            </p>
          </div>
        </div>
      </section>

      {/* ATOMS IN LIGHTNING - SECTION 10 */}
      <section id="atoms" className="section section-10 section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Atoms in lightning</h2>
            <p style={{ color: 'rgb(40, 133, 200)' }}>Building apps with React, Node js and Supabase</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN ELECTRIC-SQL2 - SECTION 11 */}
      <section className="section section-electric2 section-fixed">
        <div className="section-content">
          <div className="flex2columns">
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(248, 248, 248)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Supabase Database</h3>
              <p style={{ color: 'rgb(110, 159, 122)', fontSize: '0.9em' }}>Functions. Triggers. Policies. Row Level Security (RLS). Auth. JWT. Roles. Permissions.</p>
            </div>
            
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>React Frontend</h3>
              <p style={{ color: 'rgb(131, 156, 199)', fontSize: '0.9em' }}>Hooks. Components. JSX. State. Props. Context.</p>
            </div>
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Supabase API</h3>
              <p style={{ color: 'rgb(110, 159, 122)', fontSize: '0.9em' }}>WebSocket. Edge Functions. PostgREST. Auto-generated Endpoints.</p>
            </div>
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Deployment</h3>
              <p style={{ color: 'rgb(131, 156, 199)', fontSize: '0.9em' }}>Vercel. GitHub Actions. Docker. AWS Amplify.</p>
            </div>
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Node js</h3>
              <p style={{ color: 'rgb(110, 159, 122)', fontSize: '0.9em' }}>Express.js . MVC. Async/Await. Sequelize. JWT. OAuth.</p>
            </div>
            <div className="box" style={{ padding: '24px' }}>
              <h3 style={{ color: 'rgb(255, 255, 255)', fontWeight: 300, letterSpacing: '0.05em', fontSize: '1em' }}>Redux</h3>
              <p style={{ color: 'rgb(131, 156, 199)', fontSize: '0.9em' }}>Store. Actions. Reducers. Dispatch. State.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN GRADIENTE AZUL - SECTION 12 - 13 */}
      <section className="section section-gradient-blue section-scroll">
        <div className="section-content">
          {/* Contenido comentado */}
        </div>
      </section>

      {/* THE WAVE OF LEARNING - SECTION 14 */}
      <section id="section-surf" className="section section-surf section-fixed">
        <div className="section-content">
          <div id="ai" className="box">
            <h2>The wave of learning</h2>
            <p>
              Training AI agents with OpenAI for WhatsApp, Instagram, and web
              assistants.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SPRING - SECTION 15 */}
      <section className="section section-spring section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Sección Spring</h2>
            <p>
              Fondo fijo con imagen local spring.jpg. Primavera y renacimiento de
              la naturaleza.
            </p>
          </div>
        </div>
      </section>

{/* ===================================== INICIO CHATBOT SECTION ===================================== */}
{/*                                               \/                                                  */}

<section id="diagrama_chatbot" className="section section-white section-scroll">
  <div className="section-content diagrama-content">
    
    {/* 1. TÍTULO + DOLOR DEL DISTRIBUIDOR */}
    <div className="header-pain">
      <h2>¿40 consultas de cupos por día?</h2>
      <p className="subtitle">
        Tu asistente virtual responde automáticamente mientras vos te dedicás a lo importante.
      </p>
    </div>

    {/* 2. FLUJO VISUAL SIMPLE (3 PASOS) */}
    <div className="flujo-simple">
      <div className="paso">
        <span className="icon">📄</span>
        <p className="paso-titulo">1. Subís tu planilla</p>
        <p className="paso-descripcion">Excel o Google Drive</p>
      </div>
      
      <span className="flecha">→</span>
      
      <div className="paso">
        <span className="icon">🤖</span>
        <p className="paso-titulo">2. El bot responde</p>
        <p className="paso-descripcion">24/7, automático</p>
      </div>
      
      <span className="flecha">→</span>
      
      <div className="paso">
        <span className="icon">📱</span>
        <p className="paso-titulo">3. Cliente obtiene cupo</p>
        <p className="paso-descripcion">Sin esperar</p>
      </div>
    </div>

    {/* 3. DEMO DEL CHAT */}
    <div className="demo-chat-wrapper">
      <p className="demo-titulo">
        <strong>Probá cómo funciona desde el lado del cliente:</strong>
      </p>
      
      {/* Tu widget se monta acá */}
      <div id="whatsapp_widget_agro1" className="chat-widget-container"></div>
      
      <p className="demo-hint">
        💡 Ejemplo: "¿Tengo cupo disponible para 500 toneladas de soja?"
      </p>
    </div>

    {/* 4. BENEFICIO + CTA */}
    <div className="beneficio-cta">
      <p className="beneficio-texto">
        ⏱️ Ahorrá 2-3 horas diarias respondiendo consultas repetitivas
      </p>
      <a 
        href="https://wa.me/549XXXXXXXXX?text=Hola,%20quiero%20info%20sobre%20el%20asistente%20de%20cupos" 
        className="btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quiero mi asistente de cupos →
      </a>
      <p className="tranquilizante">
        Se integra con tu sistema actual. Setup en 1 día.
      </p>
    </div>

  </div>
</section>

{/*                                               /\                                                  */}
{/* ===================================== FIN CHATBOT SECTION ===================================== */}

      {/* SECCIÓN 8: DESIERTO (NÍTIDA) - SECTION 28 */}
      <section id="section-2" className="section section-2 section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Deep roots, bold branches</h2>
            <p>Requirements into solutions</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: DESIERTO (NÍTIDA) - SECTION 28 */}
      <section id="section-8" className="section section-8 section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Sección 8: Oceano</h2>
            <p>
              Imagen nítida del oceano con fondo fijo. Cada transición entre
              secciones ofrece una experiencia única.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 BETA: DESIERTO (CON BLUR) - SECTION 29 */}
      <section className="section section-8beta section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Sección 8 Beta: Oceano</h2>
            <p>
              Versión con blur de la sección Oceano. El fondo está desenfocado
              para crear un efecto visual diferente.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN COLOR OSCURO - SECTION 31 */}
      <section className="section section-dark section-scroll">
        <div className="section-content">
          {/* Contenido comentado */}
        </div>
      </section>

      {/* SECCIÓN WORK - SECTION 32 */}
      <section id="section-work" className="section section-work section-fixed">
        <div className="section-content">
          <div className="box">
            <h2>Sección Work</h2>
            <p>
              Fondo fijo con imagen local work.jpg. Trabajo agrícola en el campo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN GRADIENTE SUAVE - SECTION 35 */}
      <section className="section section-gradient-soft section-scroll">
        <div className="section-content">
          <div className="box">
            <h2>Sección Gradiente Suave</h2>
            <p>
              Gradiente suave con colores vibrantes que se mueve con el scroll.
              Transición elegante hacia la sección de trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* =====================         FOOTER        ======================== */}
      <section>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Sebastian Prado.</p>
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
      </section>
    </>
  );
};

export default HomeNuevo;

