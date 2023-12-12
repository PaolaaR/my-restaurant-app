import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <img className='logo' src={logo} alt={logo} />
        <Navbar.Brand as = {Link}to="/my-restaurant-app">EMPANADOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as= {Link} to="/my-restaurant-app/delivery" >¡Pide Delivery!</Nav.Link>
            <Nav.Link as={Link} to="/my-restaurant-app/menu">Menú y promociones</Nav.Link>
            <Nav.Link as={Link} to="/my-restaurant-app/reserva">Reserva tu mesa</Nav.Link>
            <Nav.Link as={Link} to="/my-restaurant-app/contacto">¡Contáctanos!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <h1>Pide Tus Empanadas Caseras Favoritas😋</h1>

    </Navbar>
    
  );
}

export default Header;