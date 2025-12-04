import React from "react";
import "./Homehero1.css";

function Homehero1() {
  return (
    <div className="homehero-container">
      <div className="homehero-inner">

        <img 
          src="/cover.png"
          alt="Hero Decorative"
          className="homehero-overimg"
        />

        <h1 className="homehero-title">
          Henne <br />
          Ryn
        </h1>

        <p className="homehero-quote">
          “Where art meets tradition, your story is drawn in henna.”
        </p>

      </div>
    </div>
  );
}

export default Homehero1;
