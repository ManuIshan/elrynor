import React from "react";
import { useNavigate } from "react-router-dom";
import "./GalleryPage.css";
import Homehero6 from "../home/Homehero6";

export default function GalleryPage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
<Homehero6/>
      {/* Add your gallery content here */}

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
