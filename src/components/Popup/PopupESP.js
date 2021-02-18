import React, { Component } from 'react';
import './style.css';

const closePopup = function () {
  let popupWindow = document.querySelector('.popup-wrapper');
  let body = document.querySelector('body');

  popupWindow.style.position = 'absolute';
  popupWindow.style.visibility = 'hidden';

  popupWindow.style.animation = 'fadeOut 1s forwards';

  body.style.overflow = 'auto';
};



export default class PopupESP extends Component {
  render() {
    return (
      <div id='popupESP'>
        <section className='popup-wrapper'>
          <section className='main-popup'>
            <div className='close-section'>
              <i
                className='fas fa-times'
                id='popup-button'
                onClick={closePopup}
              ></i>
            </div>

            <header>
              <h1>COVID-19 Update</h1>
            </header>
            <div className='body-message'>
              <p>
                Su salud y seguridad es nuestra prioridad número uno.
                Continuamos para preparar sus declaraciones de impuestos, pero
                estamos minimizando contacto en este momento. Tenemos varias
                opciones disponibles para que puedes enviarnos tus documentos de
                forma fiable y segura.
              </p>
              <p>
                <b>1</b> - Puede descargar el{' '}
                <a
                  className='italics'
                  id='taxpass-link'
                  href='https://apps.apple.com/us/app/taxpass/id1256036789'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Tax Pass'
                >
                  TaxPass
                </a>{' '}
                aplicación en su dispositivo móvil y regístrese usando el código{' '}
                <span className='italics'> 'G4MLBWLV'</span> para tener acceso a
                Primavera Taxx. (Asegúrese de ver el nombre 'Primavera Taxx'
                antes de enviar cualquier información.) La información que la
                entrada irá directamente a su archivo y el proceso de su el
                retorno comenzará casi automáticamente.
              </p>
              <p>
                <b>2</b> - Puedes registrarte para{' '}
                <a
                  href='http://www.verifyle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Verifyle
                </a>{' '}
                usando su correo electrónico. Una vez que su cuenta esté
                configurada, asegúrese de agregar{' '}
                <span className='italics'>primaverataxx@gmail.com</span> a tus
                contactos. Ahora podrá tener uno a uno mensajes privado con
                María Luisa de Primavera Taxx. Tendrás el capacidad de enviar
                documentos y fotos, y tambien firmar documentos.
              </p>
              <p>
                <b>3</b> - Puede enviarnos sus documentos por fax a{' '}
                <span className='italics' id='fax-number'>
                  (855) 751-5543
                </span>
                . Comenzaremos a trabajar en su declaración de impuestos en el
                orden en que recíbelos.
              </p>
              <p>
                <b>4</b> - Puede pasar por la oficina para dejar documentos en
                un sobre o una bolsa y le devolveremos la llamada una vez que su
                los documentos están listos para ser firmados. (Por favor
                manténgase en mente, permitiremos{' '}
                <span className='italics'>24-72</span> horas para pasar antes de
                manipular cualquier documento para estar seguro y evitar la
                propagación de COVID-19.)
              </p>
              <p>
                Para cualquier pregunta o inquietud, no dude en contactarnos a
                través de envía un mensaje de texto a
                <a href='sms:+19252484166' className='italics'>
                  {' '}
                  (925) 248-4166{' '}
                </a>
                or por telefono a
                <a href='tel:+19255501986' className='italics'>
                  {' '}
                  (925) 550-1986
                </a>
                .
              </p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
