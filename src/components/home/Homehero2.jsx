import React, { useEffect } from "react";
import "./HomeHero2.css";

function HomeHero2() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="hh2-container">

      <div className="hh2-left reveal">
        <h1 className="hh2-title">
          About <br /> <span>Me</span>
        </h1>

        <p className="hh2-description">
         “I’m Shifna, a 20-year-old henna artist from Parappanangadi, Malappuram.
With a year of dedicated experience, I blend tradition with modern artistry to create elegant, meaningful designs for every occasion.”
        </p>

        <div className="hh2-line"></div>

        <img
          src="/hero2.png"
          alt="Art"
          className="hh2-image"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="hh2-right hh2-right-new reveal">
        
        <h1 className="hh2-title">
          Bridal <br /> <span>Mehandi</span>
        </h1>

        <img
          src="/bridaltnz.jpeg"
          alt="Bridal Mehndi"
          className="hh2-image-right"
        />

        <p className="hh2-bridal-text">
          Bridal mehandi is an ancient art of adorning the bride’s hands and feet  
          with intricate motifs that symbolize joy and prosperity.  
          Each swirl and stroke carries emotion, celebrating love and new beginnings.  
          The patterns reflect cultural beauty blended with personal storytelling.  
          Every bride deserves a unique design that matches her personality.  
          From traditional Indian motifs to modern Arabic ideas,  
          bridal mehandi brings elegance to the wedding day.  
          The fragrance of henna creates a magical warmth during celebrations.  
          It marks the start of a beautiful journey filled with happiness.  
          Mehandi is not just art—it is the soul of a bride’s wedding look.
        </p>


      </div>
    </div>
  );
}

export default HomeHero2;
