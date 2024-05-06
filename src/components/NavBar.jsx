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
        <Nav.Link to="/" as={NavLink} className="titulo-nav">
          Rayzerk
        </Nav.Link>
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
