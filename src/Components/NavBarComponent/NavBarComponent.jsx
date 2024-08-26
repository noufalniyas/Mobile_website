import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import menu from "../../Assets/burger-menu-svgrepo-com.svg";
import "./NavBar.css";

const NavBarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="text-white title">
            <span className="extra">Th</span>e Ma
            <span className="extra">gic</span> Mo
            <span className="extra">bile</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-toggle"
          >
            <img src={menu} alt="menu-icon" className="menu" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={Link} to={"/"} className="text-white mt-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/Service"} className="text-white mt-4">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="text-white mt-4">
                <Button className="btn-light Contact-btn ">Contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
