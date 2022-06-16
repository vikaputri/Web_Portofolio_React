import React from "react";
import Header from "../../components/Header";
import Accordion from 'react-bootstrap/Accordion'

const FAQ = () => {
  return (
    <div>
      <Header/> 
        <section className="py-5 px-2">
          <div className="container px-5">
            <div className="justify-content-center">
              <h1 className="fw-bolder mb-5 text-center">Pusat bantuan</h1>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Bagaimana Cara Pemesaan Javood?</Accordion.Header>
                  <Accordion.Body>
                    Pemesanan dapat menghubungi Whatsapp Customer Care kami 
                    pada 08564233635 pada Senin-Jumat pukul 9:00 – 17:00 WIB
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bagaimana Ketentuan Pemesanan?</Accordion.Header>
                  <Accordion.Body>
                    <ol>
                      <li>Pemesanan maksimal H-1 sebelum pengantaran.</li>
                      <li>Pembayaran dilakukan via transfer maksimal H-1 jam 16:00 WIB.</li>
                      <li>Pemesanan ditutup jam 16.00 WIB untuk pengantaran hari esoknya.</li>
                      <li>Pengantaran akan dilakukan pada jam 8:00-18:00 wib.</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Berapa harga produk Javood?</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Bento Mealbox – Rp 25.000 per box (minimum pembelian 5 box/menu)</li>
                      <li>Valuebox – Rp 20.000 per box (minimum pembelian 5 box/menu)</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Kapan waktu pengiriman makanan</Accordion.Header>
                  <Accordion.Body>
                    Waktu pengantaran makanan antara jam 10:00 – 17:00 WIB. 
                    Untuk pemesanan dengan waktu khusus silahkan menghubungi whatsapp 
                    customer care 08564233635.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-5 px-2">
          <div className="container px-5">
            <div className="justify-content-center">
              <h2 className="fw-bolder mb-4 text-center">Ingin bertanya lebih jauh?</h2>
              <div className="mb-5 text-center">
                <p>Hubungi kami untuk informasi lebih lanjut mengenai pelatihan di Metalit.id</p>        
              </div>
              <div className="text-center">
                <a className="btn btn-primary" href="Kontak">Hubungi Kami</a>
              </div>
            </div>
          </div>
        </section>
  </div>
    );
  };

export default FAQ;