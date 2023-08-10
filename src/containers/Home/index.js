import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";

const Home = () => {
  return (
  <div>
    <header className="background text-white">
      <Navbar collapseOnSelect expand="sm" className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/" className="px-3 nav-link text-uppercase text-white">Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/About">About</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/Education">Education</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/Experience">Experience</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/Project">Project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
      <div className="container py-5 px-5">
        <div className="py-3 row gx-5 align-items-center justify-content-center">
          <div className="py-3 col-lg-8 col-xl-7 col-xxl-6">
            <div className="text-xl-start">
              <h3>Hi, i'm</h3>
              <h1 className="display-5 fw-bolder">Vika Putri Ariyanti</h1>
              <p className="fw-normal mb-5">
                Software Engineer with experience as Fullstack Developer
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3 putih" href="/About">About Me</a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 text-center">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <a href="https://www.linkedin.com/in/vikaputriariyanti/" className="d-inline me-3"><i className="fab fa-linkedin fa-lg fa-white"></i></a>
            <a href="https://github.com/Vputri" className="d-inline me-3"><i className="fab fa-github fa-lg fa-white"></i></a>
            <a href="https://github.com/vikaputri" className="d-inline me-3"><i className="fab fa-github fa-lg fa-white"></i></a>
            <a href="hhttps://gitlab.com/Vputri" className="d-inline me-3"><i className="fab fa-gitlab fa-lg fa-white"></i></a>
            <a href="https://vpa.pythonanywhere.com/" className="d-inline me-3"><i className="fa fa-globe fa-lg fa-white"></i></a>
          </div>
          <div className="col-xl-5 col-xxl-6 text-center"></div>
        </div>
      </div>
    </header>
  </div>

    );
  };

export default Home;