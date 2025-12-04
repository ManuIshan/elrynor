import React from "react";
import { useNavigate } from "react-router-dom";
import "./PricingPage.css";
import HomeHero4 from "../home/Homehero4";

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
<HomeHero4/>
      {/* Add your content here */}

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
