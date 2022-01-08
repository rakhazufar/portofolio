import React, { useRef, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Header() {
  const navbar = useRef();
  const closeNav = useRef();
  const buttonNav = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        navbar.current.classList.add("activeNavbar");
      }
      if (window.scrollY <= 50) {
        navbar.current.classList.remove("activeNavbar");
      }
    });
  }, []);

  const closeNavbar = () => {
    closeNav.current.classList.add("collapsed");
    buttonNav.current.classList.remove("show");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      ref={navbar}
      fixed="top"
      className="nav"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="logo">
          <Link className="home" to="hero">
            Rakha.
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={closeNav}>
          <Hamburger />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" ref={buttonNav}>
          <Nav>
            <Nav.Link className="link">
              <Link to="skillset" onClick={() => closeNavbar()}>
                Skillset
              </Link>
            </Nav.Link>
            <Nav.Link className="link">
              <Link to="projects" onClick={() => closeNavbar()}>
                Projects
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="contact">
            <Nav.Link className="link contact-link">
              <Link to="contact" onClick={() => closeNavbar()}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Hamburger() {
  return (
    <div className="icon-toggler">
      <div className="icon-bar top-bar"></div>
      <div className="icon-bar middle-bar"></div>
      <div className="icon-bar bottom-bar"></div>
    </div>
  );
}
