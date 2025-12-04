import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";
import HomeHero3 from "../home/Homehero3";

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
<HomeHero3/>
      {/* Add your service content here */}

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
