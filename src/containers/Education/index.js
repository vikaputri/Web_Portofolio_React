import React from "react";
import UG from "../../assets/UG.png"

const Education = () => {
  return (
      <div className="py-4">
        <div class="d-flex justify-content-center">
          <i class="fa fa-graduation-cap fa-3x"></i><h1 class="ms-3">My Education</h1>
        </div>

        <div className="py-3 container mt-4">
          <div className="row justify-content-center">
            {/* <div class="card mb-4" style={{width : '41rem'}}>
                <div className="row m-1">
                  <div className="col-2">
                    <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-10">
                    <h3>Gunadarma University</h3>
                    <div>Master Degree - Information System Management</div>
                    <div className="text-muted mb-2">Sep 2021 - Jul 2023</div>
                  </div>
                  
                  <table class="table table-borderless">
                      <tr>
                        <th scope="row">GPA</th>
                        <td><div>3.93/4.0</div></td>
                      </tr>
                      <tr>
                        <th scope="row">Thesis</th>
                        <td>
                          <div>Forecasting Crude Oil Prices using ARIMA and SARIMA Model</div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Publication</th>
                        <td>
                          <div>
                            <a className="text-decoration-none text-reset" href=" https://doi.org/10.29207/resti.v7i2.4895"> Comparison of ARIMA and SARIMA for Forecasting Crude Oil Prices</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  
                </div>
              </div> */}

              <div class="card" style={{width : '41rem'}}>
                <div className="row m-1">
                  <div className="col-2">
                    <img className="card-img-top" src={UG} alt=""/>
                  </div>
                  <div className="col-10">
                    <h3>Gunadarma University</h3>
                    <div>Bachelor Degree - Informatics Engineering</div>
                    <div className="text-muted mb-2">Sep 2017 - Aug 2021</div>
                  </div>
                    <table class="table table-borderless">
                      <tr>
                        <th scope="row">GPA</th>
                        <td><div>3.93/4.0</div></td>
                      </tr>
                      <tr>
                        <th scope="row">Thesis</th>
                        <td>
                          <div>Implementation of Naïve Bayes Algorithm on Sentiment Analysis of Topic of Giving Covid 19 Pandemic Vaccine Using Python</div>
                        </td>
                      </tr>
                    </table>

                </div>
              </div>
            </div>
          
        </div>
      </div>
    );
  };

export default Education;