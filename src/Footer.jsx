import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">

      {/* BRAND NAME */}
      <h1 className="footer-title">Elynor</h1>

      {/* TWO COLUMNS */}
      <div className="footer-columns">

        {/* COLUMN 1 - LINKS */}
        <div className="footer-col">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* COLUMN 2 - THANK YOU TEXT */}
        <div className="footer-col">
          <p>Thank you for visiting</p>
          <p>Your support means everything</p>
          <p>Keep exploring our work</p>
          <p>Have a beautiful day!</p>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-icons">
        <a href="https://www.instagram.com/elrynor?igsh=dGpodXpubDQ4MDQ=" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://wa.me/917736086912" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="mailto:elrynorhenna@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://facebook.com/" target="_blank">
          <FaFacebook />
        </a>
      </div>

    </div>
  );
}

export default Footer;
