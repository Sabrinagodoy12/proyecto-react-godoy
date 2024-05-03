import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

//NavBar
export const NavBar = () => {
  return (
    <Navbar data-bs-theme="dark" className="nav-bar">
      <Container>
        <Navbar.Brand to="#home">Rayzerk</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/auriculares" as={NavLink}>
            Auriculares
          </Nav.Link>
          <Nav.Link to="/category/monitores" as={NavLink}>
            Monitores
          </Nav.Link>
          <Nav.Link to="/category/gabinetes" as={NavLink}>
            Gabinetes
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

    //  <Nav.link to="/" as={NavLink}>Rayzerk</Nav.link>
