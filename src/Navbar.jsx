import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // ⭐ Navigate to dedicated pages
  const goToPage = (path) => {
    setOpen(false);    // close the menu
    navigate(path);    // go to correct page
  };

  return (
    <>
      {/* Blur background when menu open */}
      <div className={open ? "blur-page" : ""}></div>

      {/* NAVBAR */}
      <nav className="nav">
        <img src="/flower.svg" alt="logo" className="nav-logo" />
        <h3 className="nav-title">ELRYNOR</h3>

        <div className="hamburger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <div className={`menu ${open ? "show" : ""}`}>
        <div className="menu-header">
          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="menu-items">

          {/* ⭐ Go to About Page */}
          <button className="menu-link" onClick={() => goToPage("/about")}>
            <span>I</span> ABOUT ME
          </button>

          {/* ⭐ Go to Services Page */}
          <button className="menu-link" onClick={() => goToPage("/services")}>
            <span>II</span> SERVICES
          </button>

          {/* ⭐ Go to Pricing Page */}
          <button className="menu-link" onClick={() => goToPage("/pricing")}>
            <span>III</span> PRICING
          </button>

          {/* ⭐ Go to Gallery Page */}
          <button className="menu-link" onClick={() => goToPage("/gallery")}>
            <span>IV</span> GALLERY
          </button>

        </div>
      </div>
    </>
  );
}
