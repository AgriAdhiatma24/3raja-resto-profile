import { Col, Container, Row } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const TermsConditionPage = () => {
  return (
    <div className="terms-page">
      <div className="terms min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Selamat datang di Resto 3 Raja. Syarat dan ketentuan ini
                mengatur penggunaan layanan kami, di venue Resto 3 Raja. Dengan
                mengunjungi atau memesan dari Resto 3 Raja, Anda setuju dengan
                Syarat ini. Harap baca dengan cermat.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Reservasi</h4>
              <p>
                a. Reservasi : Reservasi dapat melalui telepon atau secara
                langsung dengan staff kami. Adapun reservasi akan dilayani
                maksimal pada H-3 acara untuk jumlah pesanan kurang dari 100
                pax. Untuk reservasi wedding setidaknya dilakukan H-1 Bulan
                acara{" "}
              </p>
              <p>
                b. Konfirmasi: Pesanan anda dianggap terkonfirmasi setelah anda
                menerima pesan konfirmasi dari kami.
              </p>
              <p>
                c. Down Payment{"(DP)"}: DP diberikan sebesar 50% saat melakukan
                reservasi
              </p>
              <p>
                d. Pembatalan: Untuk pembatalan reservasi, dapat dilakukan
                melalui telepon atau secara langsung serta DP yang diberikan
                dianggap hangus atau tidak dapat dikembalikan
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Menu dan Harga</h4>
              <p>
                a. Harga yang tertera pada menu kami dapat berubah sewaktu-waktu
                tanpa pemberitahuan sebelumnya dikarenakan faktor ketersediaan,
                musim, dan lain-lain.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Perilaku dan Etika</h4>
              <p>
                a. Kami berusaha menyediakan lingkungan yang ramah dan aman bagi
                semua tamu. Setiap perilaku kasar, menganggu, atau tidak pantas
                terhadap staf atau tamu lainnya tidak akan ditoleransi dan dapat
                mengakibatkan tamu diminta untuk meninggalkan tempat.
              </p>
              <p>
                b. Untuk kenyamanan bersama, semua tamu dilarang untuk membawa
                segala jenis hewan peliharaan ke dalam area venue Resto 3 Raja.
              </p>
              <p>
                c. Untuk keamanan bersama, semua tamu dilarang untuk membawa
                segala jenis senjata tajam dan segala jenis minuman alkohol ke
                dalam area venue Resto 3 Raja.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Perubahan Syarat dan Ketentuan</h4>
              <p>
                a. Modifikasi: Kami berhak untuk mengubah Syarat ini kapan saja
                tanpa pemberitahuan sebelumnya. Perubahan apa pun akan diposting
                di situs web kami, dan syarat yang diperbarui akan berlaku untuk
                semua transaksi di masa mendatang.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TermsConditionPage;
