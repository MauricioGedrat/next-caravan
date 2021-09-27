import React from "react";
import Link from "next/link";
import Caravan from "../SvgIcons/Caravan";
import { Button, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import AppModal from "../Login/AppModal";

const AppNavbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light fixed-top"
        style={{ boxShadow: "2px 2px 2px 0 rgba(12, 12, 12, 0.39)" }}
      >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>  
            <Navbar.Brand href="/">
              <Caravan />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              {" "}
              <Nav.Link eventKey={2} href="/Inscrever">
                <Button variant="outline-danger">Inscreva-se</Button>{" "}
              </Nav.Link>
              <Nav className="me-auto">
                <NavDropdown title="Locais" id="collasible-nav-dropdown" active>
                  <NavDropdown.Item as="span"><Link href="/Local"><a>California</a></Link></NavDropdown.Item>
                  <NavDropdown.Item as="span"><Link href="/Local"><a>Dublin</a></Link></NavDropdown.Item>
                  <NavDropdown.Item as="span"><Link href="/Local"><a>Paris</a></Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Planos">Planos</Nav.Link>
                <Nav.Link href="/Contato">Contato</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#"><AppModal/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    
    </div>
  );
};

export default AppNavbar;