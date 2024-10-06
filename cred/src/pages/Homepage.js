import React from "react";
import HeroSection from "../components/HeroSection";
import ProductShowCase from "../components/ProductShowCase";
import FeelSpecial from "../components/FeelSpecial";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import BrandsColab from "../components/BrandsColab";
import WindowPeek from "../components/WindowPeek";
import MobileScroll from "../components/MobileScroll";
import Footer from "../components/common/Footer";
import DownloadScroll from "../components/DownloadScroll";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <DownloadScroll / >
      <ProductShowCase />
      <FeelSpecial />
      <BrandsColab />
      <CredExperience />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <MobileScroll />
      <CredSecurity />
      <Footer />
    </div>
  );
};

export default Homepage;
