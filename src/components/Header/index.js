import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <Navbar.Brand>
          <NavLink to="/" className="px-3 nav-link text-uppercase text-reset">Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-toggle-button"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3" href="/About">About</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/Education">Education</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/Experience">Experience</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/Project">Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Header;