import { Col, Container, Row } from "react-bootstrap";
import MenuCards from "../components/MenuCards";
import { completeMenus } from "../data";

const FoodMenu = () => {
  return (
    <div className="menu-page w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Menu Kami</h1>
            <p className="text-center">
              Berikut adalah seluruh pilihan menu buffet kami
            </p>
          </Col>
        </Row>
        <Row>
          {completeMenus.map((menu) => (
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
            <h6>Fasilitas: </h6>
            <ul>
              <li>
                <h6>Tempat & Peralatan</h6>
                <ol className="alphabet-list">
                  <li>Pemakaian tempat selama maksimal 3 jam</li>
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
                  <li>Tata meja + dekorasi di buffet</li>
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
    </div>
  );
};

export default FoodMenu;
