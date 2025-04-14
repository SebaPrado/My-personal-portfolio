import React from "react";
import "animate.css";
import HeroPastoreo from "./Hero_biz.jsx";
import "./biz.css";

function Bizkaia() {

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
        <div className="s ">
          <div className="textPersonalSection ">
            <div>
              <p className="letsTalk">
                Cosas que deberías hacer apenas llegues
              </p>
            </div>
            <div className="scrollAnimation">
              <p>
                <div className="d">
                <strong> 1) Empadronarte en Bizkaia</strong></div> <br />  <div className="d">
                <strong> 2) Solicitar el NIE</strong> si aún no lo tenés.</div> <br />  <div className="d">
                <strong>
                  {" "}
                  3) Comunicar el cambio de domicilio fiscal
                </strong>{" "}
                usando el modelo 030 (tenés 3 meses desde tu llegada)</div> <br />   <div className="d">
                <strong>4) Avisar a tu empresa</strong> que vas a aplicar el
                régimen especial para que ajusten la retención del IRPF
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="Section1Home1"> */}
      <div className="s">
        <div className="textPersonalSection">
          <div>
            <p className="letsTalk">Fechas importantes</p>
          </div>
          <div className="scrollAnimation">
            <p>
              <strong>5 de mayo de 2025:</strong> comienzo del trabajo y
              residencia efectiva en Bizkaia. <br />
              <div className="d">
                <strong>Mayo-agosto 2025:</strong> plazo ideal para
                empadronarte, solicitar NIE y presentar el modelo 030 <br />
              </div>
              <strong>Abril a junio de 2026:</strong> tu primera declaración del
              IRPF (correspondiente al ejercicio 2025) <br />
            </p>
          </div>
        </div>
      </div>
      {/* </section> */}

      <section className="Section1Home1">
        <div className="s">
          <div className="textPersonalSection">
            <div>
              <p className="letsTalk">¿Qué ahorro fiscal tenés?</p>
            </div>
            <div className="scrollAnimation">
              <p>
                <strong>30% exento de IRPF:</strong> se aplica mes a mes en tu
                nómina, pagás menos impuestos y cobrás más <br />
                <strong>20% deducible en gastos:</strong> se appca en tu
                declaración anual (alquiler, mudanza, viajes a Uruguay) <br />
                <strong>Rentas del extranjero:</strong> están exentas de
                tributación si ya pagaron impuestos fuera <br />
                <strong>Ahorro estimado total anual:</strong> ~3.270 € para tu
                caso (sueldo de 33.000 € y alquiler de 600 €/mes)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Section1Home1">
        <div className="s">
          <div className="textPersonalSection">
            <div>
              <p className="letsTalk">Documentos que debés guardar</p>
            </div>
            <div className="scrollAnimation">
              <p>
                <strong>1) Contrato de alquiler</strong> + comprobantes de pago
                mensuales <br />
                <strong>2) Facturas de suministros</strong> (agua, luz, gas,
                internet...) <br />
                <strong>3) Tickets y facturas</strong> de mudanza y viajes{" "}
                <br />
                <strong>4) Comprobantes de cursos de idioma</strong> (vos y tu
                fa) <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bizkaia;
