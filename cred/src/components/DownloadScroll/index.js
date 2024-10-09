import React, { useState, useEffect } from "react";
import "./downloadScroll.css";
import qrscanner from "../../assets/qrcode.png";

const DownloadScroll = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show the div when scroll position exceeds 100vh (window height)
      if (currentScrollPos >= window.innerHeight + 200) {
        setShowDiv(true); // Show the div
      } else {
        setShowDiv(false); // Hide the div
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`non-mobile ${showDiv ? "show-download" : "hide-download"}`}
    >
      <div className="download-cred">
        <img src={qrscanner} alt="qrscanner" className="qrscanner" />
        <div className="content">
          Download <br /> CRED{" "}
        </div>
      </div>
    </div>
  );
};

export default DownloadScroll;
