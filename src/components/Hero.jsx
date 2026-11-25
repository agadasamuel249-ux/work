import React from "react";
import "../App.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      {/* <div className="hero-left-text"></div> */}
      <div className="hero-content">
        <h1>
          {" "}
          <span>CARDIO WORK OUT </span> PERSONAL TRAINING BODY DEVELOPMENT
          NUTRITION PLANS <span>STRENGTH TRAINING</span>
        </h1>
        <p className="sub-header">
        Proffessional, reliable,
        and passionate about
        your health, let us guide
        you to a stonger,
        Healthier you.
      </p>
      </div>
    </section>
  );
}
