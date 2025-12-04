import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./IndicatePage.css";

export default function IndicatePage() {
  const [popupImg, setPopupImg] = useState(null);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  // ⭐ Go back to HomeHero3 section
  const goToServices = () => {
    navigate("/"); // navigate home

    setTimeout(() => {
      const section = document.getElementById("services-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); // wait for home to mount
  };

  // scroll to top when opening
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // open popup
  const openPopup = (src) => {
    setPopupImg(src);
    document.body.style.overflow = "hidden";
  };

  // close popup
  const closePopup = () => {
    setPopupImg(null);
    document.body.style.overflow = "auto";
  };

  // reveal animation
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
    <div className="indicate-container">

      {/* Heading */}
      <h1
        className="indicate-heading reveal"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        Indicate Henna
      </h1>

      {/* Quote */}
      <p
        className="indicate-quote reveal"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        “Where simplicity meets elegance — your story begins with delicate henna.”
      </p>

      {/* ROW 1 */}
      <div
        className="grid-row row-1 reveal"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        {["/carosel15.jpeg", "/carosel16.jpeg", "/carosel17.jpeg"].map((src, i) => (
          <img
            key={i}
            src={src}
            className="g-img"
            onClick={() => openPopup(src)}
          />
        ))}
      </div>

      {/* ROW 2 */}
      <div
        className="grid-row row-2 reveal"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <img src="/carosel18.jpeg" className="g-img big-left" onClick={() => openPopup("/carosel18.jpeg")} />

        <div className="center-col">
          <img src="/carosel19.jpeg" className="g-img half" onClick={() => openPopup("/carosel19.jpeg")} />
          <img src="/caro.jpeg" className="g-img half" onClick={() => openPopup("/caro.jpeg")} />
        </div>

        <img src="/caro1.jpeg" className="g-img big-right" onClick={() => openPopup("/caro1.jpeg")} />
      </div>

      {/* ROW 3 */}
     

      {/* Caption */}
      <p
        className="indicate-caption reveal"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        Indicate Henna brings beauty in the smallest details — minimal patterns,
        elegant strokes, and soft designs perfect for intimate celebrations.
      </p>

      {/* ⭐ Back Button → goes directly to HomeHero3 */}
      <button
        onClick={goToServices}
        className="indicate-back-btn reveal"
        ref={(el) => (sectionsRef.current[6] = el)}
      >
        ← Back to Services
      </button>

      {/* POPUP */}
      {popupImg && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>✕</button>
            <img src={popupImg} className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
}
