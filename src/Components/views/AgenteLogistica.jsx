import React, { useEffect, useRef, useState } from "react";

const stylesheet = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
   

    .zoom-wrapper {
        padding: 40px;
        transform: scale(0.85);
        transform-origin: top center;
        margin-top: 40px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .header {
        text-align: center;
        color: rgb(27, 1, 83);
        margin-bottom: 50px;
    }

    .header h1 {
        font-size: 1.8rem;
        margin-bottom: 12px;
        font-weight: 700;
    }

    .header p {
        font-size: 0.95rem;
        opacity: 0.9;
    }

    /* Botón toggle de idioma */
    .language-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        background: white;
        border: 1.5px solid #a24304;
        border-radius: 20px;
        padding: 4px 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(162, 67, 4, 0.15);
        margin: 30px auto 8px auto;
        width: fit-content;
        pointer-events: auto;
        user-select: none;
        position: relative;
        z-index: 1000;
        max-width: 1200px;
    }

    .language-toggle:hover {
        box-shadow: 0 6px 16px rgba(162, 67, 4, 0.3);
        transform: translateY(-2px);
    }

    .language-toggle span {
        font-size: 0.75rem;
        font-weight: 600;
        color: #a24304;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .language-toggle span.active {
        opacity: 1;
    }

    .language-toggle span.inactive {
        opacity: 0.5;
    }

    /* Contenedor del roadmap en serpiente */
    .roadmap-container {
        position: relative;
        padding: 30px 15px;
    }

    /* SVG para la línea serpiente */
    .path-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }

    .path-line {
        fill: none;
        stroke: url(#gradient);
        stroke-width: 4;
        stroke-linecap: round;
        stroke-dasharray: 3000;
        stroke-dashoffset: 3000;
    }

    .roadmap-container.in-view .path-line {
        animation: drawPath 4s ease-out forwards;
    }

    @keyframes drawPath {
        to {
            stroke-dashoffset: 0;
        }
    }

    /* Filas del roadmap */
    .roadmap-row {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        margin-bottom: 80px;
        position: relative;
        z-index: 1;
    }

    .roadmap-row:last-child {
        margin-bottom: 0;
    }

    /* Segunda fila va en orden inverso */
    .roadmap-row.reverse {
        flex-direction: row-reverse;
    }

    /* Nodos del roadmap */
    .step {
        flex: 1;
        max-width: 280px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }

    .step:nth-child(1) { animation-delay: 0.2s; }
    .step:nth-child(2) { animation-delay: 0.4s; }
    .roadmap-row.reverse .step:nth-child(1) { animation-delay: 0.6s; }
    .roadmap-row.reverse .step:nth-child(2) { animation-delay: 0.8s; }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Círculo del icono */
    .step-icon {
        width: 65px;
        height: 65px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.4s ease;
        position: relative;
        margin-bottom: 16px;
    }

    .step-icon-img {
        width: 38px;
        height: 38px;
        transition: transform 0.3s ease;
    }

    .step:hover .step-icon {
        box-shadow: 0 15px 40px rgba(255, 71, 87, 0.4);
    }

    .step:hover .step-icon-img {
        transform: scale(1.1);
    }

    /* Número del paso */
    .step-number {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 22px;
        height: 22px;
        background:#a24304;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
    }

    /* Card del contenido */
    .step-content {
        background: white;
        border-radius: 12px;
        padding: 18px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        width: 100%;
        transition: all 0.3s ease;
    }

    .step:hover .step-content {
        transform: translateY(-5px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    }

    .step-title {
        font-size: 1rem;
        font-weight: 700;
        color: #636e72;
        margin-bottom: 10px;
    }

    .step-description {
        font-size: 0.75rem;
        color: #636e72;
        line-height: 1.5;
        margin-bottom: 12px;
    }

    .step-description ul li {
        font-size: 0.75rem;
        margin-bottom: 6px;
    }

    /* Lista de verificación dentro de step-content */
    .step-content ul.verification-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .step-content ul.verification-list li {
        font-size: 0.75rem;
        color: #636e72;
        line-height: 1.5;
        margin-bottom: 6px;
        padding-left: 0;
        font-family: 'Montserrat', sans-serif;
    }

    .step-content ul.verification-list li span {
        color: #27ae60;
        margin-right: 6px;
    }

    /* Detalles */
    .step-details {
        background: #f8f9fa;
        padding: 12px;
        border-radius: 6px;
        margin-top: 8px;
    }

    .step-details ul {
        list-style: none;
        padding: 0;
    }

    .step-details li {
        padding: 4px 0;
        font-size: 0.72rem;
        color: #636e72;
        position: relative;
        padding-left: 18px;
    }

    .step-details li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #00b894;
        font-weight: bold;
    }

    /* Badge de tiempo */
    .time-badge {
        display: inline-block;
        background:#681c03;
        color: white;
        padding: 3px 10px;
        border-radius: 16px;
        font-size: 0.65rem;
        font-weight: 600;
        margin-top: 6px;
    }

    /* Responsive */
  
    }
    @media (max-width: 968px) {
        .roadmap-container {
            padding: 20px;
        }

        .roadmap-row {
            flex-direction: column !important;
            align-items: center;
            gap: 80px;
            margin-bottom: 80px;
        }

        .step {
            max-width: 400px;
            width: 100%;
        }

        .header h1 {
            font-size: 1.5rem;
        }

        .path-svg {
            display: none;
        }

        /* Línea vertical simple en móvil */
        .roadmap-container::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 100px;
            bottom: 100px;
            width: 4px;
            background: linear-gradient(180deg, #ff4757 0%, #ff6348 100%);
            transform: translateX(-50%);
            z-index: 0;
        }
    }

`;

function injectStyles() {
    if (!document.getElementById("agente-logistica-styles")) {
        const style = document.createElement("style");
        style.id = "agente-logistica-styles";
        style.innerHTML = stylesheet;
        document.head.appendChild(style);
    }
}

// Traducciones
const translations = {
    en: {
        header: {
            title: "Logistics Assistance",
            subtitle: "End-to-end automation via WhatsApp"
        },
        step1: {
            title: "Client Request",
            message: "Hello, I'm looking for a loading slot to fulfill my contract 1234-5678"
        },
        step2: {
            title: "Control Steps",
            items: [
                "Verifies that the sender is a client",
                "Gets balance (tons) for the client's contract",
                "Client and contract match: proceeds",
                "Slot available, proceeds",
                "If no slot available, informs the client"
            ]
        },
        step3: {
            title: "Intelligent Assignment",
            description: "The system automatically assigns the available slot",
            details: [
                "Queries slot table",
                "Assigns unique slot from \"available\"",
                "Updates database : \"available\" slot to \"assigned\"",
                "Informs the admin/company that the slot has been assigned"
            ]
        },
        step4: {
            title: "Confirmation Ready",
            message: "You just have been assigned a slot to fulfill your contract 1234-5678. Slot number: TRI-1234-10122015. Now, the remaining tons for contract 1234-5678 to fulfill is 90 tt."
        }
    },
    es: {
        header: {
            title: "Asistente en Logística",
            subtitle: "Automatización de permisos de carga vía WhatsApp"
        },
        step1: {
            title: "Solicitud del Cliente",
            message: "Hola, estoy buscando un cupo de carga para cumplir con mi contrato 1234-5678"
        },
        step2: {
            title: "Pasos de Control",
            items: [
                "Verifica que whatsapp es cliente ",
                "Obtiene el pendiente (tt) del contrato",
                "Cliente y contrato coinciden: procede",
                "Entregas pendientes xa contrato: procede",
                "Si no hay cupos disponibles, informa al cliente"
            ]
        },
        step3: {
            title: "Asignación Inteligente",
            description: "El sistema asigna automáticamente el cupo disponible",
            details: [
                "Consulta la tabla de cupos",
                "Asigna un cupo único en estado \"disponible\"",
                "Actualiza la base de datos: cupo \"disponible\" a \"asignado\"",
                "Informa al administrador/empresa que el cupo ha sido asignado",
                "Al haberse usado el cupo, se actualiza el estado del cupo a \"usado\""
            ]
        },
        step4: {
            title: "Confirmación Lista",
            message: "Acabas de ser asignado un slot para cumplir con tu contrato 1234-5678. Número de slot: TRI-1234-10122015. Ahora, las toneladas restantes para cumplir el contrato 1234-5678 son 90 tt."
        }
    }
};

const AgenteLogistica = () => {
    const roadmapRef = useRef(null);
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    useEffect(() => {
        injectStyles();

        // Calcular la longitud real del path y ajustar la animación
        const adjustSVGPath = () => {
            const pathLines = document.querySelectorAll('.path-line');
            pathLines.forEach(function(path) {
                if (typeof path.getTotalLength === "function") {
                    const pathLength = path.getTotalLength();
                    path.style.strokeDasharray = pathLength;
                    path.style.strokeDashoffset = pathLength;
                }
            });
        };
        // Timeout para asegurar renderizado DOM
        setTimeout(adjustSVGPath, 0);

        // Intersection Observer para activar animación cuando entra en viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        // Desconectar después de activar la animación
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del elemento es visible
                rootMargin: '50px' // Se activa 50px antes de entrar en el viewport
            }
        );

        if (roadmapRef.current) {
            observer.observe(roadmapRef.current);
        }

        // Cleanup
        return () => {
            if (roadmapRef.current) {
                observer.unobserve(roadmapRef.current);
            }
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <>
            <div 
                className="language-toggle" 
                onClick={toggleLanguage}
                onMouseDown={(e) => e.preventDefault()}
                style={{ position: 'relative', zIndex: 1000 }}
            >
                <span className={language === 'en' ? 'active' : 'inactive'}>EN</span>
                <span style={{ color: '#a24304', pointerEvents: 'none' }}>|</span>
                <span className={language === 'es' ? 'active' : 'inactive'}>ES</span>
            </div>
            <div className="zoom-wrapper">
            <div className="container">
            <div className="header">
                <h1>{t.header.title}</h1>
                <p>{t.header.subtitle}</p>
            </div>

            <div className="roadmap-container" ref={roadmapRef}>
                {/* SVG para la línea serpiente */}
                <svg className="path-svg" viewBox="0 0 1100 600" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor:'#a24304', stopOpacity:1 }} />
                            <stop offset="100%" style={{ stopColor:'#a24304', stopOpacity:1 }} />
                        </linearGradient>
                    </defs>
                    {/* Línea en forma de S */}
                    <path className="path-line" d="M 160 60 L 160 130 Q 160 150 200 150 L 500 150 L 880 150 Q 920 150 920 200 L 920 280 Q 920 330 880 330 L 500 330 L 120 330 Q 80 330 80 380 L 80 460 Q 80 510 120 510 L 500 510 L 1000 510 L 880 510 L 160 510" />
                </svg>

                {/* Primera fila: Paso 1 y 2 (izquierda a derecha) */}
                <div className="roadmap-row">
                    {/* Paso 1: Solicitud del cliente */}
                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="step-icon-img" />
                            <span className="step-number">1</span>
                        </div>
                        <div className="step-content">
                            <h6 className="step-title">{t.step1.title}</h6>
                            <p className="step-description" style={{ fontStyle: "italic" }}>
                            "{t.step1.message}"
                            </p>
                        </div>
                    </div>

                    {/* Paso 2: Verificación inteligente */}
                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" alt="OpenAI" className="step-icon-img" />
                            <span className="step-number">2</span>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">{t.step2.title}</h3>
                            <ul className="verification-list">
                                {t.step2.items.map((item, index) => (
                                    <li key={index}><span>&#10003;</span> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Segunda fila: Paso 3 y 4 (derecha a izquierda) */}
                <div className="roadmap-row reverse">
                    {/* Paso 4: Confirmación */}
                    <div className="step">
                    <div className="step-icon">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="step-icon-img" />
                        <span className="step-number">4</span>
                    </div>
                    <div className="step-content">
                        <h6 className="step-title">{t.step4.title}</h6>
                        <p className="step-description" style={{ fontStyle: "italic" }}>
                            "{t.step4.message}"
                        </p>
                    </div>
                    </div>
                    {/* Paso 3: Asignación */}
                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" alt="OpenAI" className="step-icon-img" />
                            <span className="step-number">3</span>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">{t.step3.title}</h3>
                            <p className="step-description">
                                {t.step3.description}
                            </p>
                            
                            <div className="step-details">
                                <ul>
                                    {t.step3.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default AgenteLogistica;