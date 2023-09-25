import React from "react";
import image from "../../assets/wfh.jpg";
import wfh from "../../assets/wfh.jpg"

const Home = () => {
  return (
    <div>
      <div className="container py-5 px-5 mb-3">
        <div className="py-3 row gx-5 align-items-center justify-content-center">
          <div className="py-3 col-lg-8 col-xl-7 col-xxl-6">
            <div className="text-xl-start">
              <h3>Hi, i'm</h3>
              <h1 className="display-5 fw-bolder">Vika Putri Ariyanti</h1>
              <p className="fw-normal mb-4">
                Software Engineer with experience as Fullstack Developer
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3 putih" href="/About">About Me</a>
              </div>
              <div class="mt-5">
                <a href="https://www.linkedin.com/in/vikaputriariyanti/" className="d-inline me-3"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="https://github.com/Vputri" className="d-inline me-3"><i className="fab fa-github fa-lg"></i></a>
                <a href="https://github.com/vikaputri" className="d-inline me-3"><i className="fab fa-github fa-lg"></i></a>
                <a href="hhttps://gitlab.com/Vputri" className="d-inline me-3"><i className="fab fa-gitlab fa-lg"></i></a>
                <a href="https://vpa.pythonanywhere.com/" className="d-inline me-3"><i className="fa fa-globe fa-lg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 text-center">
            <img className="img-fluid" src={wfh} alt={image}/>
            <small>Image by brgfx on Freepik</small>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Home;