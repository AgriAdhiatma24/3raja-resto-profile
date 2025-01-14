import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/resto/logo resto clean.png";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <img src={logo} alt="logo-resto" />
            <h3 className="fw-bold"></h3>
            <p className="desc">
              Hubungi kami untuk setiap keperluan acara anda
            </p>
            <div className="no mb-2 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 877-7644-1192</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">resto3raja@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="gallery">Galeri</Link>
            <Link to="wedding">Wedding</Link>
            <Link to="termsandcondition">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="">
            <div className="map-loc">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.449706263948!2d110.38243607400732!3d-7.742030792276541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5978e1736217%3A0x91e19eaad319e5e0!2sResto%203%20Raja!5e0!3m2!1sid!2sid!4v1736753371223!5m2!1sid!2sid"
                width="600"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <MapComponent /> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Adhiatemo</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
