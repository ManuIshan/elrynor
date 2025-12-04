import React, { useEffect, useState } from "react";
import "./Homehero6.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Homehero6() {

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // 🚫 PREVENT BODY SCROLL WHEN POPUP ACTIVE
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImg]);

  const images = [
    "/carosel13.jpeg", "/carosel14.jpeg", "/carosel15.jpeg", "/carosel4.jpeg",
    "/carosel17.jpeg", "/carosel18.jpeg", "/carosel19.jpeg", "/carosel20.jpeg",
    "/carosel21.jpeg", "/carosel22.jpeg", "/carosel23.jpeg", "/carosel24.jpeg",
    "/carosel25.jpeg", "/carosel26.jpeg", "/carosel27.jpeg", "/carosel28.jpeg",
    "/carosel29.jpeg", "/carosel30.jpeg", "/carosel31.jpeg", "/carosel2.jpeg",
  ];

  return (
    <div className="h6-wrapper">

      <h1 className="h6-heading">My Work <span>Gallery</span></h1>

      <div className="h6-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="h6-img-box"
            data-aos="zoom-in"
            onClick={() => setSelectedImg(img)}  // ⭐ NO SCROLL
          >
            <img src={img} className="h6-img" alt="Work" />
          </div>
        ))}
      </div>

      {/* POPUP VIEWER */}
      {selectedImg && (
        <div className="h6-popup">
          <div className="h6-popup-content">
            <img src={selectedImg} className="h6-popup-img" alt="full" />

            <button
              className="h6-close-btn"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Homehero6;
