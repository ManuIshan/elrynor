import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PartyPage.css";

export default function PartyPage() {
  const [popupImg, setPopupImg] = useState(null);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  // ⭐ Go back to HomeHero3
  const goToServices = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("services-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  // Scroll to top when opening
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
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="party-container">

      {/* Heading */}
      <h1
        className="party-heading reveal"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        Party Henna
      </h1>

      {/* Quote */}
      <p
        className="party-quote reveal"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        “Fun, bold, and modern designs to light up every celebration.”
      </p>

      {/* ⭐ GRID — 8 PARTY IMAGES */}
      <div
        className="party-grid reveal"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        {[
          "/carosel2.jpeg",
          "/carosel5.jpeg",
          "/carosel6.jpeg",
          "/carosel9.jpeg",
          "/carosel11.jpeg",
          "/carosel12.jpeg",
          "/carosel13.jpeg",
          "/carosel20.jpeg",
          "/carosel21.jpeg",
          "/carosel22.jpeg",
          "/carosel23.jpeg",
            "/carosel25.jpeg",
            "/carosel26.jpeg",
            "/carosel27.jpeg",
            "/carosel28.jpeg",

            "/carosel29.jpeg",
            "/carosel31.jpeg"
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            className="party-img"
            onClick={() => openPopup(src)}
            alt=""
          />
        ))}
      </div>

      {/* Caption */}
      <p
        className="party-caption reveal"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        Party henna brings a playful twist to tradition — quick, stylish,
        and perfect for festive vibes and joyful gatherings.
      </p>

      {/* Back Button */}
      <button
        onClick={goToServices}
        className="party-back-btn reveal"
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
