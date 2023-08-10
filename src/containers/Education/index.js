import React from "react";
import Header from "../../components/Header";
import UG from "../../assets/UG.jpg"

const Education = () => {
  return (
  	<div>
      <Header/> 
      <header className="py-5">
        <div class="d-flex justify-content-center">
          <i class="fa fa-graduation-cap fa-4x"></i><h1 class="ms-3">My Education</h1>
        </div>
        <div className="py-3 container mt-4">
          <div className="row justify-content-center">
            <div class="card mb-4" style={{width : '40rem'}}>
                <div className="row">
                  <div className="col-md-4">
                    <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <h3>Gunadarma University</h3>
                    <div>Master Degree - Information System Management</div>
                    <div className="text-muted">Sep 2021 - Jul 2023</div>
                    <div>GPA : 3.93/4.0</div>
                  </div>
                </div>
              </div>

              <div class="card" style={{width : '40rem'}}>
                <div className="row">
                  <div className="col-md-4">
                    <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <h3>Gunadarma University</h3>
                    <div>Bachelor Degree - Informatics Engineering</div>
                    <div className="text-muted">Sep 2017 - Aug 2021</div>
                    <div>GPA : 3.93/4.0</div>
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