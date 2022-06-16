import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";

const Home = () => {
  return (
  <header class="background text-white">
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <Navbar.Brand>
          <NavLink to="/" className="px-3 nav-link text-uppercase text-white">Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase text-white px-3" href="/Menu">Menu</Nav.Link>
            <Nav.Link className="nav-item text-uppercase text-white px-3" href="/Profil">Profil</Nav.Link>
            <Nav.Link className="nav-item text-uppercase text-white px-3" href="/FAQ">FAQ</Nav.Link>
            <Nav.Link className="nav-item text-uppercase text-white px-3" href="/KONTAK">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    <div class="container py-5 px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-xl-start">
            <h2>Catering Tanpa Minimal Order</h2>
            <h1 class="display-5 fw-bolder">Javood</h1>
            <p class="fw-normal mb-5">
              Makanan rumahan murah, enak, dan berkualitas
            </p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <a class="btn btn-warning btn-lg px-4 me-sm-3 putih" href="/Menu">Lihat Menu ⟶</a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 text-center mb-5">
        </div>
      </div>
    </div>
  </header>
    );
  };

export default Home;