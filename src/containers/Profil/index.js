import React from "react";
import Header from "../../components/Header";
import chef from "../../assets/coba.jpeg";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import cypress from "../../assets/cypress.png"
import django from "../../assets/django.jpg"
import python from "../../assets/python.png"
import go from "../../assets/go.png"
import linux from "../../assets/linux.png"
import flask from "../../assets/flask.png"
import vue from "../../assets/vue.png"
import react from "../../assets/react.png"
import next from "../../assets/next.png"
import git from "../../assets/git.png"
import boostrap from "../../assets/bootstrap.png"
import postman from "../../assets/postman.png"

const About = () => {
  return (
    <div>
      <Header/> 
      <header className="py-5">
        <div className="py-3 container">
          <div className="row justify-content-center">
            <div className="col-md-5">
                <h1 className="fw-bolder mb-3">About</h1>
                <p className="text-muted mb-4">
                  Hi, my name is Vika Putri Ariyanti. 
                  I am a software engineer with 1 year of fullstack development experience. I am interested in web programming and machine learning.
                </p>
                <h3 className="fw-bolder mt-3 mb-4">Skill</h3>
                <div class="mb-3">
                  <div class="d-inline me-3"><img className="img" src={html} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={css} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={boostrap} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={react} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={next} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={vue} alt=""/></div>
                  <div href="/" class="d-inline"><img className="img" src={cypress} alt=""/></div>
                </div>
                <div class="mb-5">
                  <div href="/" class="d-inline me-3"><img className="img" src={python} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={django} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={flask} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={go} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={git} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={linux} alt=""/></div>
                  <div href="/" class="d-inline me-3"><img className="img" src={postman} alt=""/></div>
                </div>
                <a className="btn btn-danger btn-lg px-4 me-sm-3 putih" href="/ComingSoon">Download CV</a>
            </div>

            <div className="col-md-5">
              <img className="img-thumbnail" src={chef} alt=""/>
            </div>
          </div>
        </div>
      </header>
    </div>
    );
  };

export default About;