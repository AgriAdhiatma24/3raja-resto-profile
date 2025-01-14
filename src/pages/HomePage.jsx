import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { foodMenus } from "../data";
import MenuCards from "../components/MenuCards";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      {/* <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <img src={restoImg} alt="resto-img" />
      </header> */}
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp custom-font">
                SUGENG RAWUH
              </h1>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="about w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Tentang Kami</h1>
              <p>
                Selamat datang di Resto 3 Raja, rumah makan yang berdiri sejak
                tahun 2019 di Yogyakarta. Kami hadir dengan misi untuk
                menyajikan hidangan lezat dengan cita rasa yang otentik dan
                pelayanan yang ramah. Sejak pertama kali dibuka, Resto 3 Raja
                telah berkembang pesat dan menjadi pilihan favorit bagi banyak
                pelanggan di Yogyakarta.
              </p>
              <p>
                Resto 3 Raja tidak hanya sekadar tempat makan, tetapi juga
                menjadi tempat yang nyaman untuk berbagai macam acara. Kami
                sering digunakan untuk menyelenggarakan arisan, gathering, acara
                keagamaan, dan berbagai acara lainnya. Dengan suasana yang
                nyaman dan menu yang beragam, kami berkomitmen untuk memberikan
                pengalaman terbaik bagi setiap tamu yang datang.
              </p>
              <p>
                Kami terus berinovasi dan berkembang untuk memenuhi kebutuhan
                pelanggan. Dengan kualitas yang selalu dijaga, kami berharap
                dapat terus menjadi tempat yang menyatukan keluarga, teman, dan
                komunitas di Yogyakarta, serta memberikan kenangan indah melalui
                hidangan-hidangan terbaik yang kami sajikan. Terima kasih telah
                memilih Resto 3 Raja sebagai pilihan Anda. Kami menantikan
                kunjungan Anda dan berjanji untuk terus memberikan yang terbaik!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="menu w-100 min-vh-100">
        <Container>
          <Row className="menu-header">
            <Col>
              <h1 className="text-center fw-bold">Menu Kami</h1>
              <p className="text-center">
                Berikut adalah beberapa pilihan menu prasmanan kami
              </p>
            </Col>
          </Row>
          <Row className="menu-items">
            {foodMenus.map((menu) => (
              <MenuCards
                key={menu.id}
                title={menu.title}
                price={menu.price}
                items={menu.items}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={menu.delay}
              />
            ))}
          </Row>
          <Col
            className="text-center pt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              className="btn btn-success rounded-4 btn-lg"
              onClick={() => navigate("/menu")}
            >
              Semua Menu<i className="fa-solid fa-chevron-right ms-2"></i>
            </button>
          </Col>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default HomePage;
