import Image from "next/image";
import React from "react";
import "./CityBestChoice.css";

const CityBestChoice = () => {
  function Feature({ image, title, text }) {
    return (
      <div className="why-card">
        <div className="why-icon">
          <Image src={image} alt={title} width={50} height={50} unoptimized />
        </div>
        <h3 className="why-card-title">{title}</h3>
        <p className="why-card-text">{text}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="why section-container" id="service-why-section">
        <div className="why-wrap">
          <header className="why-head">
            <h2>What Makes Us the Best Choice</h2>
            <p>
              Our dedication to quality and customer satisfaction sets us apart.
              Here’s why corporates across India choose Cozy Cabz for corporate
              car rental services:
            </p>
          </header>
          <div className="why-grid">
            <Feature
              image="/known.png"
              title="Well-Known for Quality Services"
              text="Recognized nationwide for our commitment to excellence and premium car rental standards."
            />
            <Feature
              image="/postive.png"
              title="Positive Reviews from Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied businesses."
            />
            <Feature
              image="/ntework.png"
              title="Largest Network of Drivers"
              text="A wide pool of professional, background-verified chauffeurs serving every major city."
            />
          </div>
          <div className="why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
              text="Insured rides and strict driver verification processes for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="On-ground presence across metros and Tier-2/3 cities to support companies of all sizes."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Upfront quotes with zero hidden costs — giving you total clarity on your rentals."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityBestChoice;
