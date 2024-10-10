import React, { useState } from "react";
import "./heroSection.css";
import "../../common/styles/commonClasses.css";
import Button from "../common/Button";
import uprightarrow from "../../assets/upright-arrow-alt.svg";
import credlogo from "../../assets/cred-logo.webp";
import { useNavigate, Link } from "react-router-dom";

const HeroSection = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const navigate = useNavigate();

  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  if (loginInfo) {
    const { username } = loginInfo;
    console.log(username);
  }

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  const handleLogout =()=>{
    localStorage.clear();
    navigate("/")
  }

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
                <div className="mobile-nav-item" onClick={()=> navigate("/addcard")}>add credit card</div>
                 <div className="mobile-nav-item" onClick={()=> navigate("/viewcards")}>view cards</div>
                {/* <div className="mobile-nav-item">credit card bill payment</div> */}
                <Link className="mobile-nav-item" onClick={handleLogout}>logout</Link>
              </>
            ) : (
              <>
                <Link className="mobile-nav-item" to="/login">Login</Link>
                <Link className="mobile-nav-item" to="/register">Register</Link>
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
                <div className="header-nav-item" onClick={()=> navigate("/addcard")}>add credit card</div>
                <div className="header-nav-item"  onClick={()=> navigate("/viewcards")}>view cards</div>
                {/* <div className="header-nav-item">credit card bill payment</div> */}
                <Link className="header-nav-item" onClick={handleLogout}>logout</Link>
              </>
            ) : (
              <>
                <Link className="header-nav-item" to="/login">Login</Link>
                <Link className="header-nav-item" to="/register">Register</Link>
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
