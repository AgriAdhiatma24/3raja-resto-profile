import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import { photoSwiperPrivate, photoSwiperWedding } from "../data";

const Gallery = () => {
  return (
    <div className="gallery w-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold my-5 animate__animated animate__fadeInUp animate__delay-1s">
              Our Gallery
            </h1>
          </Col>
        </Row>
        <Row>
          <div className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-center fw-bold ">Private Event</h3>
            <h6 className="text-center ">Geser untuk melihat koleksi</h6>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {photoSwiperPrivate.map((data) => {
              return (
                <SwiperSlide key={data.id} className="shadow-sm">
                  <div className="people">
                    <img src={data.image} alt="image" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
        <Row>
          <div className="mt-5 mb-5 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-center fw-bold">Wedding Event</h3>
            <h6 className="text-center ">Geser untuk melihat koleksi</h6>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {photoSwiperWedding.map((data) => {
              return (
                <SwiperSlide key={data.id} className="shadow-sm">
                  <div className="people">
                    <img src={data.image} alt="image" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
