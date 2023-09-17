import React from "react";
import Header from "../../components/Header";
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
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'VikaPutriAriyanti.pdf';
        alink.click();
      })
    })
  }
  return (
    <div>
      <Header/> 
      <header className="py-4">
        <div className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-md-5">
                <h1 className="fw-bolder mb-3">About</h1>
                <p className="text-muted mb-4">
                  Hi, I'm Vika Putri Ariyanti.  
                  I am a software engineer in Indonesia. 
                  I have experience as a Fullstack developer with skills in React.js, Next.js, and Vue for Frontend. 
                  While in Backend, I have skills in Django and Golang.
                </p>
                <p className="text-muted mb-4">
                  I am a Bachelor's in Informatics Engineering and Master's Degree in Information System Management from Gunadarma University.  
                  I am also interested in machine learning especially NLP.
                </p>
            </div>

            <div className="col-md-5 mb-3">
            <h1 className="fw-bolder mt-3 mb-4">Skill</h1>
                <div className="mb-3">
                  <div className="d-inline me-3"><img className="img" src={html} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={css} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={boostrap} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={react} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={next} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={vue} alt=""/></div>
                  <div className="d-inline"><img className="img" src={cypress} alt=""/></div>
                </div>
                <div className="mb-5">
                  <div className="d-inline me-3"><img className="img" src={python} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={django} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={flask} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={go} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={git} alt=""/></div>
                  <div className="d-inline me-3"><img className="img" src={linux} alt=""/></div>
                  <div className="d-inline"><img className="img" src={postman} alt=""/></div>
                </div>
            </div>
          </div>
          <div className="px-5">
            <button className="btn btn-danger btn-lg px-5 ms-5 sm-3 putih" onClick={onButtonClick}>
              Download
            </button>
          </div>
        </div>
      </header>
    </div>
    );
  };

export default About;