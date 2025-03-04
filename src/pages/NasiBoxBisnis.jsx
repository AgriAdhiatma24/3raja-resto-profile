import { Col, Container, Row } from "react-bootstrap";
import { BoxBisnis } from "../data";
import { useNavigate } from "react-router-dom";
import MenuCardsNasBoxBisnis from "../components/MenuCardsNasBoxBisnis";

const NasiBoxBisnis = () => {
  let navigate = useNavigate();
  return (
    <div className="menu-page w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Nasi Box Bisnis</h1>
            <p className="text-center">
              Berikut adalah seluruh pilihan menu nasi box bisnis
            </p>
          </Col>
        </Row>
        <Row>
          {BoxBisnis.map((menu) => (
            <MenuCardsNasBoxBisnis
              key={menu.id}
              title={menu.title}
              price={menu.price}
              items={menu.items}
              data-aos="fade-up"
              data-aos-duation="1000"
              data-aos-delay={menu.delay}
            />
          ))}
        </Row>

        <Row className="menu-header">
          <Col>
            <h1 className="text-center fw-bold">Menu Box Lengkap</h1>
            <p className="text-center">
              Lihat Juga Menu Pilihan Nasi Box Lainnya
            </p>
          </Col>
        </Row>
        <Col
          className="text-center pt-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <button
            className="btn btn-success rounded-4 btn-lg me-5 d-block w-100 mb-3"
            onClick={() => navigate("/nasbox-ekonomis")}
          >
            NasBox Ekonomis<i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
          <button
            className="btn btn-success rounded-4 btn-lg d-block w-100"
            onClick={() => navigate("/nasbox-premium")}
          >
            NasBox Premium<i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
        </Col>
        <Row className="facility-box">
          <div className="facility">
            <h6>Fasilitas: </h6>
            <ul>
              <li>
                <h6>Pemesanan</h6>
                <ol className="alphabet-list">
                  <li>Pemesanan minimal 25 pax</li>
                  <li>Gratis antar area Yogyakarta</li>
                </ol>
              </li>
            </ul>

            <ul>
              <li>
                <h6>Tempat & Peralatan</h6>
                <ol className="alphabet-list">
                  <li>
                    Pemakaian tempat selama maksimal 3 jam, minimal pemesanan
                    50pax
                  </li>
                  <li>Soundsystem 2 mic</li>
                  <li>
                    Kursi sebanyak maksimal 80pcs. Lebih dari itu diperlukan
                    sewa unit tambahan
                  </li>
                  <li>Alat saji dan peralatan makan standar</li>
                </ol>
              </li>
            </ul>

            <ul>
              <li>
                <h6>Penataan</h6>
                <ol className="alphabet-list">
                  <li>
                    Apabila ada permintaan khusus untuk penataan tempat, segera
                    sampaikan ke staff kami
                  </li>
                </ol>
              </li>
            </ul>

            <ul>
              <li>
                <h6>Pelayanan</h6>
                <ol className="alphabet-list">
                  <li>Petugas pramusaji</li>
                </ol>
              </li>
            </ul>

            <ul>
              <li>
                <h6>Menu</h6>
                <ol className="alphabet-list">
                  <li>
                    Silahkan pilih salah satu dari pilihan menu yang ada, tukar
                    menu dari pilihan yang lain ada tambahan biaya
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
      {/* <Container>
        <Row className="menu-header">
          <Col>
            <h1 className="text-center fw-bold">Menu Harian Resto 3 Raja</h1>
            <p className="text-center">Lihat Juga Menu Harian Kami</p>
          </Col>
        </Row>
        <Col
          className="text-center pt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <button
            className="btn btn-success rounded-4 btn-lg"
            onClick={() => navigate("/dailymenu")}
          >
            Menu Harian<i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
        </Col>
      </Container> */}
    </div>
  );
};

export default NasiBoxBisnis;
