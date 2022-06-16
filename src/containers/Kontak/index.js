import React from "react";
import Header from "../../components/Header";
import gmail from "../../assets/gmail.png";
import placeholder from "../../assets/placeholder.png";
import whatsapp from "../../assets/whatsapp.png";

const Kontak = () => {
  return (
    <div>
      <Header/> 
       <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="mx-3 col-md-4">
              <h3 className="fw-bolder mb-5">Kontak</h3>
              <div className="mb-4">
                <img className="img" src={placeholder} alt=""/>
                <span className="mx-3">Gg. Arus, RT.3/RW.1, Srengseng Sawah, 
                  <br/>Kec. Jagakarsa, Kota Jakarta Selatan, 
                  <br/>Daerah Khusus Ibukota Jakarta 12640
                  <br/>Telp. 0856-423-3635
                </span>
              </div>
              <div className="mb-4">
                <img className="img" src={whatsapp} alt=""/>
                <span className="mx-3">08564233635</span>
              </div>
              <div className="mb-5">
                <img className="img" src={gmail} alt=""/>
                <span className="mx-3">support@javood.id</span>
              </div>
            </div>

            <div className="col-md-7 mx-2">
              <div className="card">
                <div className="py-5">
                  <h2 className="text-center fw-bolder">Hubungi kami</h2>
                  <p className="text-center mb-5">Tertarik untuk melakukan kerjasama dengan kami, silahkan hubungi </p>
                  <form className="px-5">
                    <h3 className="mb-3 text-center">Tinggalkan Pesan</h3>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label">Nama</label>
                      <div className="col-sm-8">
                        <input className="form-control mb-3"/>
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Email</label>
                      <div className="col-sm-8">
                        <input className="form-control mb-3"/>
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label  className="col-sm-4 col-form-label">Tulis Pesan</label>
                      <div className="col-sm-8">
                        <textarea cols="40" rows="" className="form-control mb-3"></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <input type="submit" value="Kirim" className="btn btn-primary"/>
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