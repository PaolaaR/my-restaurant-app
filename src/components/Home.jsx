import Carousel from 'react-bootstrap/Carousel';
import empanadas1 from '../assets/empanadas1.jpeg'
import empanadas2 from '../assets/empanadas2.jpg';
import empanadas3 from '../assets/empanadas3.jpg';


export const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto  my-5"
            src={empanadas3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Empanadas de Pino</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto my-5"
            src={empanadas2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Empanadas de Queso</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block mx-auto  my-5"
            src={empanadas1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Empanadas de Camarón</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      <h4>
        Hemos buscado por todo Chile las empanadas favoritas de la gente, aquellas que sólo aparecen en Fiestas Patrias o en la playa.
        Ahora las tenemos para ti en delivery o local para todo Santiago. ¡Ven a conocernos!
      </h4>



    </>
  );
}


