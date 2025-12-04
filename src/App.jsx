import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import IndicatePage from "./components/pages/IndicatePage.jsx";
import PartyPage from "./components/pages/PartyPage.jsx";
import BridalPage from "./components/pages/BridalPage.jsx";

import AboutPage from "./components/pages/AboutPage.jsx";
import ServicesPage from "./components/pages/ServicesPage.jsx";
import PricingPage from "./components/pages/PricingPage.jsx";
import GalleryPage from "./components/pages/GalleryPage.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Menu Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Service Type Pages */}
        <Route path="/service/indicate" element={<IndicatePage />} />
        <Route path="/service/party" element={<PartyPage />} />
        <Route path="/service/bridal" element={<BridalPage />} />
      </Routes>
<WhatsappButton/>
      <Footer />
    </>
  );
}

export default App;
