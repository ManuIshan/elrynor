import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Homehero5.css";

function Homehero5() {
  const images = [
    "public/bridalservicecover.jpeg",
    "/serviceeventcover.jpeg",
    "/carosel2.jpeg",
    "/carosel3.jpeg",
    "/carosel4.jpeg",
    "/carosel5.jpeg",
    "/carosel6.jpeg",
    "/carosel7.jpeg",
    "/carosel8.jpeg",
    "/carosel9.jpeg",
    "/carosel10.jpeg",
    "/carosel11.jpeg",
    "/carosel12.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero5-wrapper" data-aos="fade-up">

      <h1 className="hero5-heading  ">My Top <span>Works</span></h1>

      <div className="hero5-carousel-container">

        {/* Prev Button */}
        <button
          className="hero5-btn hero5-prev"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        >
          ←
        </button>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          fade
          className="hero5-carousel"
        >
          {images.map((img, i) => (
            <Carousel.Item key={i}>
              <img className="d-block hero5-image" src={img} alt="Work" />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Next Button */}
        <button
          className="hero5-btn hero5-next"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          →
        </button>
      </div>

      <p className="hero5-caption" data-aos="fade-up" data-aos-delay="200">
        A curated collection showcasing the elegance, detail, and creativity that
        defines my recent work.
      </p>
    </div>
  );
}

export default Homehero5;
