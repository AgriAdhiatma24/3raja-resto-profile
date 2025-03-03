import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import FoodMenu from "./pages/FoodMenu";
import FooterComponent from "./components/FooterComponent";
import WeddingPage from "./pages/WeddingPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import Gallery from "./pages/Gallery";
import DailyMenu from "./pages/DailyMenu";
import NasiBoxEkonomis from "./pages/NasiBoxEkonomis";
import NasiBoxBisnis from "./pages/NasiBoxBisnis";
import NasiBoxPremium from "./pages/NasiBoxPremium";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/nasbox-ekonomis" element={<NasiBoxEkonomis />} />
        <Route path="/nasbox-bisnis" element={<NasiBoxBisnis />} />
        <Route path="/nasbox-premium" element={<NasiBoxPremium />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/termsandcondition" element={<TermsConditionPage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/dailymenu" element={<DailyMenu />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
