import React from "react";
import Header from "../../components/Header";
import chef from "../../assets/chef.jpg";

const About = () => {
  return (
    <div>
      <Header/> 
      <header className="py-5">
        <div className="py-3 container">
          <div className="row justify-content-center">
            <div className="col-md-5">
                <h1 className="fw-bolder mb-3">Tentang Kami</h1>
                <p className="text-muted mb-4">Javood merupakan usaha bergerak didalam 
                  industri makanan yang memiliki standar rasa dan kualitas yang tinggi, 
                  namun harganya sangat terjangkau. Javood mampu melayani hingga 1000 
                  porsi setiap harinya.
                </p>
                <h3 className="fw-bolder mt-3">Visi dan Misi</h3>
                <ul className="text-muted">
                  <li>Memberikan makanan dengan harga terjangkau serta kualitas bahan dan rasa yang tinggi.</li>
                  <li>Memberikan makanan yang bervariatif dan lezat</li>
                  <li>Memberikan makanan yang bersih dan halal</li>
                </ul>
            </div>

            <div className="col-md-5">
              <img className="img-thumbnail" src={chef}/>
            </div>
          </div>
          <div className="text-center mt-5">
            <a className="btn btn-danger btn-lg px-4 me-sm-3 putih" href="/Menu">Lihat Menu ⟶</a>
          </div>
        </div>
      </header>
    </div>
    );
  };

export default About;