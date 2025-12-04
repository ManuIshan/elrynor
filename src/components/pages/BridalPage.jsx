import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./BridalPage.css";

export default function BridalPage() {
  const [popupImg, setPopupImg] = useState(null);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("services-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPopup = (src) => {
    setPopupImg(src);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupImg(null);
    document.body.style.overflow = "auto";
  };

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-show");
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bridal-container">

      {/* Heading */}
      <h1
        className="bridal-heading reveal"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        Bridal Henna
      </h1>

      {/* Quote */}
      <p
        className="bridal-quote reveal"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        “The elegance of a bride begins with the art written on her hands.”
      </p>

      {/* ⭐ GRID — 8 BRIDAL IMAGES */}
      <div
        className="bridal-grid reveal"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        {[
          "/bridalservicecover.jpeg",
          "/bridaltnz.jpeg",
          "/carosel4.jpeg",
          "/carosel24.jpeg",
          "/carosel7.jpeg",
          "/carosel8.jpeg",
          "/carosel14.jpeg",
          "/carosel30.jpeg"
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            className="bridal-img"
            onClick={() => openPopup(src)}
            alt=""
          />
        ))}
      </div>

      {/* Caption */}
      <p
        className="bridal-caption reveal"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        Bridal henna is a celebration of heritage, beauty, and storytelling —
        every pattern is crafted to enhance the grace of your special day.
      </p>

      {/* Back Button */}
      <button
        onClick={goToServices}
        className="bridal-back-btn reveal"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        ← Back to Services
      </button>

      {/* Popup */}
      {popupImg && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>✕</button>
            <img src={popupImg} className="popup-img" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
