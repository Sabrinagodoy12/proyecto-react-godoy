import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

//NavBar
export const NavBar = () => {
  return (
    <Navbar data-bs-theme="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href="#home">Rayzerk</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Auriculares</Nav.Link>
          <Nav.Link href="#features">Monitores</Nav.Link>
          <Nav.Link href="#pricing">Gabinetes</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
