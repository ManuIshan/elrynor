import React, { useEffect, useRef, useState } from "react";
import "./Homehero4.css";

const BRIDAL = [
  {
    id: "b1",
    title: "Palm Length",
    caption: "Elegant palm-focused bridal motifs.",
    points: [
      "Designs still palm-focused",
      "Design styles:intricate florals,traditional paisleys,delicate mandalas,bridal finger detailing.",
      "Time:20-30 mins per side",
      "Ideal for brides wanting a quick yet elegant mehndi"
    ],
    original: 250,
    current: 200
  },
  {
    id: "b2",
    title: "Bangle length",
    caption: "Palm to wrist detailed flow.",
    points: [
      "Coverage from palm to wrist with bridal elements",
      "Design styles:bridal florals,traditional motifs,mandala accents,finger fill patterns.",
      "Time:35-45 mins per side",
      "Perfect for brides desiring moderate bridal mehndi"
    ],
    original: 300,
    current: 250
  },
  {
    id: "b3",
    title: "Mid arm length",
    caption: "Beautiful mid-arm bridal design.",
    points: [
      "Coverage from palm to mid-arm with intricate detailing",
      "Design styles:elaborate florals,traditional paisleys,bridal motifs,full finger coverage.",
      "Time:55-70 mins per side",
      "Great for brides wanting a prominent bridal mehndi"
    ],
    original: 600,
    current: 500,
    best: true
  },
  {
    id: "b4",
    title: "Elbow",
    caption: "Extended luxurious bridal mehndi.",
    points: [
      "Extended coverage from palm to elbow with dense detailing",
      "Design styles:intricate bridal patterns,traditional motifs,floral vines,full finger coverage.",
      "Time:80-100 mins per side",
      "Ideal for brides seeking a grand and elaborate bridal mehndi"
    ],
    original: 800,
    current: 750
  }
];

const EVENT = [
  {
    id: "e1",
    title: "Palm",
    caption: "Quick elegant palm mehndi.",
    points: [
      "Elegant designs focused on palm area",
      "Design styles:minimal florals,Arabic trails,trendy line work,light finger detailing.",
      "Time:15-25 mins per side",
      "Perfect for small gatherings & casual events"
    ],
    original: 200,
    current: 150
  },
  {
    id: "e2",
    title: "Wrist Length",
    caption: "Stylish wrist mehndi for events.",
    points: [
      "Wrist-focused designs with balanced detailing",
      "Design styles:shaded Arabic florals,mandala with finger fill,bangle borders,modern paisleys.",
      "Time:25-35 mins per side",
      "Ideal for festive occasions and social gatherings"
    ],
    original: 350,
    current: 300,
    best: true
  },
  {
    id: "e3",
    title: "Mid Arm",
    caption: "Pretty mid-arm event design.",
    points: [
      "Balanced, eye-catching design from palm to mid-arm",
      "Design styles:Indo arabic fusion,geometric patterns,floral vines,modern motifs.",
      "Time:45-55 mins per side",
      "Great for larger events & celebrations"
    ],
    original: 500,
    current: 450
  },
  {
    id: "e4",
    title: "Elbow Length",
    caption: "Extended event mehndi.",
    points: [
      "Elegant elbow-length motifs with graceful flow",
      "Designed to enhance festive outfits & jewellery",
      "Aftercare ensured for darker stain during events",
      "Time:60-75 mins per side"
      

    ],
    original: 700,
    current: 500
  }
];

function percentOff(o, c) {
  return Math.round(((o - c) / o) * 100);
}

export default function Homehero4() {
  const [mode, setMode] = useState("bridal");
  const revealRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = revealRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShow(true);
      },
      { threshold: 0.15 }
    );
    io.observe(node);
  }, []);

  const DATA = mode === "bridal" ? BRIDAL : EVENT;

  return (
    <section className="hh4-section">
      <div className="hh4-inner" ref={revealRef}>
        
        <h2 className="hh4-heading">My <span>Pricing</span> </h2>

        {/* TWO MAIN TOGGLES */}
        <div className="hh4-toggle-row">
          <button
            className={`hh4-toggle ${mode === "bridal" ? "active" : ""}`}
            onClick={() => setMode("bridal")}
          >
            Bridal
          </button>

          <button
            className={`hh4-toggle ${mode === "event" ? "active" : ""}`}
            onClick={() => setMode("event")}
          >
            Event
          </button>
        </div>

        {/* CARD GRID */}
        <div className="hh4-grid">
          {DATA.map((c) => {
            const off = percentOff(c.original, c.current);

            return (
              <div
                key={c.id}
                className={`hh4-card ${show ? "active" : ""}`}
              >
                {/* CORNER DESIGNS */}
       

                {/* BADGES */}
                <div className="hh4-badges">
                  <div className="hh4-off">{off}% OFF</div>
                  {c.best && <div className="hh4-best">BEST</div>}
                </div>

                {/* CONTENT */}
                <h3 className="hh4-title">{c.title}</h3>
                <p className="hh4-caption">{c.caption}</p>

                <ul className="hh4-points">
                  {c.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                {/* PRICE BUTTON */}
                <button className="hh4-price-btn">
                  <span className="hh4-price-original">₹{c.original}</span>
                  <span className="hh4-price-current">
                    ₹{c.current}
                    <span className="hh4-side">/side</span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>
        {/* PRICING NOTE CAPTION */}
<p className="hh4-note">
  * Pricing may vary based on design detailing, coverage, theme customization,
  and fill density. Final rates are confirmed after consultation.
</p>

      </div>
    </section>
  );
}
