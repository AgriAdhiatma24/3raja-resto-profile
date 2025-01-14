import { Col, Container, Row } from "react-bootstrap";
import wedding1 from "../assets/img/wedding/wedding1.png";
import wedding2 from "../assets/img/wedding/wedding2.png";
import wedding3 from "../assets/img/wedding/wedding3.png";
import wedding4 from "../assets/img/wedding/wedding4.png";
import { weddingBuffet, weddingGubukan } from "../data";
import MenuCards from "../components/MenuCards";

const WeddingPage = () => {
  return (
    <div className="wedding">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp">
                Rayakan <br />
                <span>Momen Terindahmu</span> Bersama Kami!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp">
                Percayakan hari terindahmu kepada kami. Biarkan kami yang urus
                semua!
              </p>
              <div className="promo-btn">
                <button className="btn btn-success btn-lg rounded-5 mb-xs-0 mb-2 animate__animated animate__fadeInUp">
                  Promo Terbaik!
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="wedding-package w-100">
        <img src={wedding1} alt="wedding-1" />
        <img src={wedding2} alt="wedding-2" />
        <img src={wedding3} alt="wedding-3" />
        <img src={wedding4} alt="wedding-4" />
      </div>
      <div className="menu-page w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Menu Kami</h1>
              <p className="text-center">
                Berikut adalah seluruh pilihan menu buffet wedding kami
              </p>
            </Col>
          </Row>
          <Row>
            {weddingBuffet.map((menu) => (
              <MenuCards
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
          <div className="text-center mt-5">
            <h3>Aneka Gubukan</h3>
            <h6>Berdasarkan kelompok harga</h6>
          </div>

          <Row>
            {weddingGubukan.map((menu) => (
              <MenuCards
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
          <Row className="facility-box">
            <div className="facility">
              <h4>Syarat dan Ketentuan Pemesanan: </h4>

              <ol className="alphabet-list">
                <li>Jumlah Pemesanan Catering Minimal 200pax</li>
                <li>
                  Terdapat charge tambahan apabila di bawah minimal pemesanan
                </li>
                <li>Dekorasi dapat loading H-1 acara</li>
                <li>Waktu untuk acara di batasi selama 6 jam</li>
              </ol>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WeddingPage;
