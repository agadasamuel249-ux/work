import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="brand-top">
            <div className="brand-logo">
              <i className="fa-solid fa-dumbbell"></i>
              <h2>PowerFlow</h2>
            </div>
          </div>

          <p className="brand-desc">
            Transform your lifestyle with our expert gym services! From strength
            training to group classes…
          </p>

          
          <div className="footer-socials">
            <a aria-label="facebook" className="social" href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a aria-label="x" className="social" href="https://twitter.com" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a aria-label="instagram" className="social" href="https://instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a aria-label="youtube" className="social" href="https://youtube.com" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a aria-label="whatsapp" className="social" href="https://wa.me/1234567890" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        
        <div className="footer-column">
          <h4>Company</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Programs">Programs</Link>
            <Link to="/Schedule">Schedule</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>

       
        <div className="footer-column">
          <h4>Our Services</h4>
          <nav className="footer-links">
            <Link to="#">Strength & Conditioning</Link>
            <Link to="#">Personal Training</Link>
            <Link to="#">HIIT & Group Training</Link>
            <Link to="#">Yoga & Pilates</Link>
            <Link to="#">Circuit Training</Link>
            <Link to="#">Athletic Performance</Link>
          </nav>
        </div>

        {/* CONTACT BLOCKS */}
        <div className="footer-contact">
          <div className="contact-item">
            <i className="fa-regular fa-clock contact-icon"></i>
            <div>
              <h5>We're Open</h5>
              <p>Monday - Sunday 06.00 - 23.00</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-location-dot contact-icon"></i>
            <div>
              <h5>Our Location</h5>
              <p>100 S Main St, New York, NY</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-regular fa-envelope contact-icon"></i>
            <div>
              <h5>Send a Message</h5>
              <p>contact@powerflow.com</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
