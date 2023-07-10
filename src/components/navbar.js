import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="pt-3">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold text-light">
          Sunnyside
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#about" className="fw-bold text-light">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="fw-bold text-light">
              Services
            </Nav.Link>
            <Nav.Link href="#projects" className="fw-bold text-light">
              Projects
            </Nav.Link>
            <Button variant="light" className="rounded-pill fw-bold">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
