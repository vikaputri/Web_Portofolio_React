import React from "react";
import Header from "../../components/Header";
import chef from "../../assets/chef.jpg";

const About = () => {
  return (
    <div>
      <Header/> 
      <header class="py-5">
        <div class="py-3 container">
          <div class="row justify-content-center">
            <div class="col-md-5">
                <h1 class="fw-bolder mb-3">Tentang Kami</h1>
                <p class="text-muted mb-4">Javood merupakan usaha bergerak didalam 
                  industri makanan yang memiliki standar rasa dan kualitas yang tinggi, 
                  namun harganya sangat terjangkau. Javood mampu melayani hingga 1000 
                  porsi setiap harinya.
                </p>
                <h3 class="fw-bolder mt-3">Visi dan Misi</h3>
                <ul class="text-muted">
                  <li>Memberikan makanan dengan harga terjangkau serta kualitas bahan dan rasa yang tinggi.</li>
                  <li>Memberikan makanan yang bervariatif dan lezat</li>
                  <li>Memberikan makanan yang bersih dan halal</li>
                </ul>
            </div>

            <div class="col-md-5">
              <img class="img-thumbnail" src={chef}/>
            </div>
          </div>
          <div class="text-center mt-5">
            <a class="btn btn-danger btn-lg px-4 me-sm-3 putih" href="/Menu">Lihat Menu ⟶</a>
          </div>
        </div>
      </header>
    </div>
    );
  };

export default About;