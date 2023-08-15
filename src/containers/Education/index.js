import React from "react";
import Header from "../../components/Header";
import UG from "../../assets/UG.png"

const Education = () => {
  return (
  	<div>
      <Header/> 
      <header className="py-5">
        <div class="d-flex justify-content-center">
          <i class="fa fa-graduation-cap fa-3x"></i><h1 class="ms-3">My Education</h1>
        </div>

        <div className="py-3 container mt-4 d-flex justify-content-center">
          <div className="">
            <div class="card mb-4" style={{width : '45rem'}}>
                <div className="row m-1">
                  <div className="col-md-3">
                  <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-md-9">
                    <h3>Gunadarma University</h3>
                    <div>Master Degree - Information System Management</div>
                    <div className="text-muted mb-2">Sep 2021 - Jul 2023</div>
                    <div><strong>GPA</strong> : 3.93/4.0</div>
                    <div><strong>Thesis</strong> : Forecasting Crude Oil Prices using ARIMA and SARIMA Model</div>
                  </div>
                </div>
              </div>

              <div class="card" style={{width : '45rem'}}>
                <div className="row m-1">
                  <div className="col-md-3">
                    <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-md-9">
                    <h3>Gunadarma University</h3>
                    <div>Bachelor Degree - Informatics Engineering</div>
                    <div className="text-muted mb-2">Sep 2017 - Aug 2021</div>
                    <div><strong>GPA</strong> : 3.93/4.0</div>
                    <div><strong>Thesis</strong> : Implementation of Naïve Bayes Algorithm on Sentiment Analysis of Topic of 
                      Giving Covid 19 Pandemic Vaccine Using Python</div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </header>
	</div>
    );
  };

export default Education;