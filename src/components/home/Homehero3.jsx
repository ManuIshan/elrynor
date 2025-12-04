import React from "react";
import { Link } from "react-router-dom";
import "./HomeHero3.css";

const cards = [
  { id: 1, title: "Indicate", image: "/serviceindicatecover.jpeg", link: "/service/indicate" },
  { id: 2, title: "Party", image: "/serviceeventcover.jpeg", link: "/service/party" },
  { id: 3, title: "Bridal", image: "/bridalservicecover.jpeg", link: "/service/bridal" }
];

export default function HomeHero3() {
  return (
<section id="services-section" className="hh3-section">
      
      <h2 className="hh3-heading">My <span>Services</span></h2>

      <div className="hh3-grid">
        {cards.map((c) => (
          <Link key={c.id} to={c.link} className="hh3-card-link">
            <div className="hh3-card">

              <div className="hh3-img-wrap">
                <img src={c.image} alt={c.title} className="hh3-img" />

                {/* TEXT OVER IMAGE */}
                <div className="hh3-text-overlay">
                  <h3>{c.title}</h3>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
