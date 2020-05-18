import React, { Component } from "react";
import "./style.css";

const closePopup = function () {
  let popupWindow = document.querySelector(".popup-wrapper");
  let body = document.querySelector("body");

  popupWindow.style.display = "none";
  body.style.overflow = "auto";
};

export default class Popup extends Component {
  render() {
    return (
      <div>
        <section className="popup-wrapper">
          <section className="main-popup">
            <div className="close-section">
              <i
                className="fas fa-times"
                id="popup-button"
                onClick={closePopup}
              ></i>
            </div>

            <header>
              <h1>COVID-19 News</h1>
            </header>
            <div className="body-message">
              <p>
                COVID-19- Su salud y seguridad es nuestra prioridad. Seguimos
                preparando sus declaraciones de impuesto pero estamos evitando
                el contacto físico. Tenemos varias opciones para que nos pueda
                hacer llegar sus documentos de una manera confiable y segura.
              </p>
              <p>
                1- Puede descargar en su celular la aplicación TaxPass (link)
                Usando el código de oficina G4MLBWLV, (asegúrese que ve el
                nombre de Primavera Taxx) ( la información llega directamente a
                su archivo y el proceso de su declaración comienza casi
                automáticamente)
              </p>
              <p>
                2-Puede enviarnos por FAX sus documentos al 855 751-5543,
                (comenzaremos a trabajar en su declaración de impuestos en el
                orden que los recibamos)
              </p>{" "}
              <p>
                3-Puede pasar a la oficina y dejarlos en un sobre o bolsa de
                papel (dejaremos transcurrir 24 hrs antes de tocar los
                documentos, si los trae en bolsa de plástico esperaremos 72 hrs)
              </p>{" "}
              <p>
                Siempre puede enviarnos sus preguntas por texto de una manera
                segura al 925 248-4166 o nos puede dejar mensaje de voz en el
                925 550-1986.
              </p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
