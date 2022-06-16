import React from "react";
import Header from "../../components/Header";
import gmail from "../../assets/gmail.png";
import placeholder from "../../assets/placeholder.png";
import whatsapp from "../../assets/whatsapp.png";

const Kontak = () => {
  return (
    <div>
      <Header/> 
       <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="mx-3 col-md-4">
              <h3 class="fw-bolder mb-5">Kontak</h3>
              <div class="mb-4">
                <img class="img" src={placeholder}/>
                <span class="mx-3">Gg. Arus, RT.3/RW.1, Srengseng Sawah, 
                  <br/>Kec. Jagakarsa, Kota Jakarta Selatan, 
                  <br/>Daerah Khusus Ibukota Jakarta 12640
                  <br/>Telp. 0856-423-3635
                </span>
              </div>
              <div class="mb-4">
                <img class="img" src={whatsapp}/>
                <span class="mx-3">08564233635</span>
              </div>
              <div class="mb-5">
                <img class="img" src={gmail}/>
                <span class="mx-3">support@javood.id</span>
              </div>
            </div>

            <div class="col-md-7 mx-2">
              <div class="card">
                <div class="py-5">
                  <h2 class="text-center fw-bolder">Hubungi kami</h2>
                  <p class="text-center mb-5">Tertarik untuk melakukan kerjasama dengan kami, silahkan hubungi </p>
                  <form class="px-5">
                    <h3 class="mb-3 text-center">Tinggalkan Pesan</h3>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label">Nama</label>
                      <div class="col-sm-8">
                        <input class="form-control mb-3"/>
                      </div>
                    </div>
                    <div class="form-group row mb-2">
                      <label class="col-sm-4 col-form-label">Email</label>
                      <div class="col-sm-8">
                        <input class="form-control mb-3"/>
                      </div>
                    </div>
                    <div class="form-group row mb-2">
                      <label  class="col-sm-4 col-form-label">Tulis Pesan</label>
                      <div class="col-sm-8">
                        <textarea cols="40" rows="10" class="form-control mb-3" rows="5"></textarea>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <input type="submit" value="Kirim" class="btn btn-primary"/>
                    </div>
                  </form>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


    </div>
    );
  };

export default Kontak;