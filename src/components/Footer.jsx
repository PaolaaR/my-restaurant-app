import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


export const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} EMPANADOS </p>
        <p> Geronimo de Alderete 627, La Florida</p>
        <p> Teléfono: +56 9 1234 5678</p>
        <p> Horario de atención: 10:00 - 21:00 hrs</p>
        <p> Email:empana2@gmail.com</p>
        <p> Síguenos en nuestras redes sociales</p>
        <div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook fa-2x"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
        
        <p>Encuéntranos en Google Maps</p>

        <div id="map-container">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=Geronimo%20de%20Alderete%20627%2C%20La%20Florida&key=AIzaSyDkhw2SoQWbmKjbUOnGAsJtcAgbw0tyWSg`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
