import Carousel from 'react-bootstrap/Carousel';
import empanadas1 from '../assets/empanadas1.jpeg'
import empanadas2 from '../assets/empanadas2.jpg';
import empanadas3 from '../assets/empanadas3.jpg';


export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto px-5"
          src={empanadas3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Empanadas de Pino</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto px-5"
          src={empanadas2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Empanadas de Queso</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block mx-auto px-5"
          src={empanadas1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Empanadas de Camarón</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


  
export default MyCarousel;