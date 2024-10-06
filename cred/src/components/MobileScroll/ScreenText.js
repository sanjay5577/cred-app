import React, { useState, useRef, useEffect } from "react";
import "./mobileScroll.css";

const ScreenText = ({ screen, i, setCurrentImg }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const IntersectionCallback = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(IntersectionCallback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      ref={ref}
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
    >
      <div className="screen-heading">{screen.heading}</div>

      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              alt="mobile_img"
              className="mobile-screen-img"
            />
          </div>
        </div>
      </div>

      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
