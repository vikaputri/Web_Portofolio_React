import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import bento from "../../assets/bento.png";

const Home = () => {
  return (
  <div>
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
        <div class="py-5 row gx-5 align-items-center justify-content-center">
          <div class="py-5 col-lg-8 col-xl-7 col-xxl-6">
            <div class="text-xl-start">
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

    <section class="py-5 bg-light text-center">
      <div class="container my-5">
        <h2 class="fw-bolder mb-5">Mengapa Kami</h2>
        <div class="kotak">
          <div class="isi">
            <div class="row gx-5 row-cols-1 row-cols-md-2">
              <div class="col-md-4">
                <h3 class="fw-bolder">Bebas Pilih Menu</h3>
                <p class="mb-0 text-muted">Bebas memilih menu dari lebih dari 50 pilihan menu</p>
              </div>
              <div class="col-md-4">
                <h3 class="fw-bolder">Bebas Pilih Waktu</h3>
                <p class="mb-0 text-muted">Waktu pengantaran fleksibel antara jam 10:00-18:00 WIB.</p>
              </div>
              <div class="col-md-4">
                <h3 class="fw-bolder">Bebas Ongkir</h3>
                <p class="mb-0 text-muted">Gratis biaya pengiriman radius 50 km dari Javood</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h2 class="mx-4 fw-bolder mb-5">Kategori Menu</h2>
        <div class="row text-center mx-2">

          <div class="col-md-4">
            <div class="card mb-3">
              <img src={bento}/>
              <div class="card-body">
                <h5 class="card-title name">Ayam</h5>
              </div>
              <div class="card-footer footer">
                <a class="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-3">
              <img src={bento}/>
              <div class="card-body">
                <h5 class="card-title name">Daging</h5>
              </div>
              <div class="card-footer footer">
                <a class="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-3">
              <img src={bento}/>
              <div class="card-body">
                <h5 class="card-title name">Ikan dan Seafood</h5>
              </div>
              <div class="card-footer footer">
                <a class="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>


        </div>

        <div class="text-center mt-3">
          <a href="/Menu" class="btn btn-primary">Lihat Menu Lainnya</a>
        </div>
      </div>
    </section>



  </div>

    );
  };

export default Home;