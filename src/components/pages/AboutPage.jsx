import React from "react";
import { useNavigate } from "react-router-dom";
import Homehero2 from "../home/Homehero2";
import "./AboutPage.css";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      <Homehero2 />

      {/* Bottom Back Button */}
      <button className="back-home-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
