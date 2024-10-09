import React, { useState } from "react";
import "./heroSection.css";
import "../../common/styles/commonClasses.css";
import Button from "../common/Button";
import uprightarrow from "../../assets/upright-arrow-alt.svg";
import credlogo from "../../assets/cred-logo.webp";

const HeroSection = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  // const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  const loginInfo = "jik";
  if (loginInfo) {
    const { username } = loginInfo;
    console.log(username);
  }

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  return (
    <div className="hero-section-wrapper">
      <div className="mobile-menu-wrapper">
        <div
          className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
        >
          <div className="mobile-navbar">
            {loginInfo ? (
              <>
                <div className="mobile-nav-item">credit score check</div>
                <div className="mobile-nav-item">add credit card</div>
                 <div className="mobile-nav-item">view cards</div>
                {/* <div className="mobile-nav-item">credit card bill payment</div> */}
                <div className="mobile-nav-item">logout</div>
              </>
            ) : (
              <>
                <div className="mobile-nav-item">Login</div>
                <div className="mobile-nav-item">Register</div>
              </>
            )}
          </div>
        </div>

        <div className="flex max-width header">
          <img src={credlogo} alt="logo" className="header-logo" />

          <div className="only-mobile mobile-menu-button-wrapper">
            <button
              className={`hamburger hamburger--spin ${showMobMenu ? "is-active" : ""}`}
              type="button"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div className="non-mobile flex">
            {loginInfo ? (
              <>
                <div className="header-nav-item">credit score check</div>
                <div className="header-nav-item">add credit card</div>
                <div className="header-nav-item">view cards</div>
                {/* <div className="header-nav-item">credit card bill payment</div> */}
                <div className="header-nav-item">logout</div>
              </>
            ) : (
              <>
                <div className="header-nav-item">Login</div>
                <div className="header-nav-item">Register</div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex absolute-center hero-claim-label">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-now">
          claim now
          <img src={uprightarrow} alt="arrow" className="claim-arrow" />
        </div>
      </div>
      <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
          crafted for the
          <br />
          creditworthy
        </div>

        <div className="hero-subheading">
          CRED is a members-only club that enables the
          <br />
          trustworthy to make financial progress
        </div>

        <Button buttonText={"Download CRED"} />
      </div>
    </div>
  );
};

export default HeroSection;
