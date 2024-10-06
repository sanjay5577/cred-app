import React, { useState } from "react";
import "./mobileScroll.css";
import mobileImg1 from "../../assets/neopop-fold1.png";
import mobileImg2 from "../../assets/neopop-fold2.png";
import mobileImg3 from "../../assets/neopop-fold3.png";
import mobileImg4 from "../../assets/neopop-fold4.png";
import ScreenText from "./ScreenText";

const scrolldata = [
    {
        heading: "we've got your back.",
        description:
            "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden changes, and track your credit limit in real-time.",
        mobile_img: mobileImg1,
    },
    {
        heading: "begin your winning streak.",
        description:
            "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden changes, and track your credit limit in real-time.",
        mobile_img: mobileImg2,
    },
    {
        heading: "for your eclectic taste.",
        description:
            "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden changes, and track your credit limit in real-time.",
        mobile_img: mobileImg3,
    },
    {
        heading: "more cash in your pockets.",
        description:
            "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden changes, and track your credit limit in real-time.",
        mobile_img: mobileImg4,
    },
];

const MobileScroll = () => {
    const [currentImg, setCurrentImg] = useState(0);

    return (
        <div className="max-width flex mobile-scroll">
            <div className="scroll-full-screen-wrapper">
                {scrolldata.map((screen, i) => (
                    <div className="scroll-full-screen">
                        <ScreenText
                            screen={screen}
                            i={i}
                            setCurrentImg={setCurrentImg}
                        />
                    </div>
                ))}
            </div>
            <div className="mobile-mockup-wrapper non-mobile">
                <div className="mobile-mockup">
                    <div className="mobile-mockup-screen flex absolute-center">
                        <img
                            src={scrolldata[currentImg].mobile_img}
                            alt="mobile_img"
                            className="mobile-screen-img slide-in-right"
                            key={scrolldata[currentImg].mobile_img}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileScroll;
