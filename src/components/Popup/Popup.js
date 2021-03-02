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

const openPopESP = function () {
  let popup = document.querySelector('.body-message');
  let popupESP = document.querySelector('.body-message-esp');

  popup.style.display = 'none';
  popupESP.style.display = 'block';
};

const openPop = function () {
  let popup = document.querySelector('.body-message');
  let popupESP = document.querySelector('.body-message-esp');

  popup.style.display = 'block';
  popupESP.style.display = 'none';
};

export default class Popup extends Component {
  render() {
    return (
      <div id='popup'>
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
                Your health and safety is our number one priority. We continue
                to prepare your tax returns but we are minimizing physical
                contact at this time. We have several available options so that
                you can send us your documents in a reliable and secure way.
              </p>
              <p>
                <b>1</b> - You can download the{' '}
                <a
                  className='italics'
                  id='taxpass-link'
                  href='https://urlgeni.us/taxpass'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Tax Pass'
                >
                  TaxPass
                </a>{' '}
                application on your mobile device and register using the code{' '}
                <span className='italics'> 'G4MLBWLV'</span> to get access to
                Primavera Taxx. (Make sure you see the name 'Primavera Taxx'
                before submitting any information.) The information you input
                will go straight into your file and the process of your return
                will start almost automatically.
              </p>
              <p>
                <b>2</b> - You can signup for{' '}
                <a
                  href='https://urlgeni.us/verifyle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Verifyle
                </a>{' '}
                using your email. Once your account is setup, be sure to add{' '}
                <span className='italics'>primaverataxx@gmail.com</span> to your
                contacts. You will now be able to have one to one private
                messages with Maria Luisa of Primavera Taxx. You will have the
                ability to send documents and photos over as well as sign
                documents.
              </p>
              <p>
                <b>3</b> - You can fax your documents over to us at{' '}
                <span className='italics' id='fax-number'>
                  (855) 751-5543
                </span>
                . We will start working on your tax return in the order we
                recieve them.
              </p>
              <p>
                <b>4</b> - You can stop by the office to drop off documents in
                an envelope or bag and we'll give you a call back once your
                documents are ready to be signed. (Please keep in mind, we will
                allow <span className='italics'>24-72</span> hours to pass
                before handling any documents to be safe and prevent the spread
                of COVID-19.)
              </p>
              <p>
                For any questions or concerns, feel free to contact us through
                text at
                <a href='sms:+19252484166' className='italics'>
                  {' '}
                  (925) 248-4166{' '}
                </a>
                or by phone at
                <a href='tel:+19255501986' className='italics'>
                  {' '}
                  (925) 550-1986
                </a>
                .
              </p>
              <a href='/#' onClick={openPopESP} className='trans-link'>
                Para Español
              </a>
            </div>
            <div className='body-message-esp'>
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
                  href='https://urlgeni.us/taxpass'
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
                  href='https://urlgeni.us/verifyle'
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
              <a href='/#' onClick={openPop} className='trans-link'>
                For English
              </a>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
