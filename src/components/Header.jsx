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
          <Nav.Link as= {Link} to="/my-restaurant-app" >¡Pide Delivery!</Nav.Link>
            <Nav.Link as={Link} to="/my-restaurant-app">Menú y promociones</Nav.Link>
            <NavDropdown title="Quiénes Somos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Historia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Equipo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sucursales</NavDropdown.Item>  
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;