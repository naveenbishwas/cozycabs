import React from "react";
import Image from "next/image";
import "./banner.css";

const InnovaBanner = () => {
  const features = [
    { src: "/seater.png", text: "7+1 Seater" },
    { src: "/fully-insured.png", text: "Fully Insured" },
    { src: "/24.png", text: "24/7 Available" },
  ];
  return (
    <div>
      <section className="innova-hero-section">
        <div className="innova-hero-content">
          <div className="innova-hero-badge">Premium MPV Rental</div>
          <h1 className="innova-hero-title">
            Innova <span>Car Rental</span> in Delhi
          </h1>
          <p className="innova-hero-subtitle">
            Experience premium comfort and reliability with India's most trusted
            MPV. Perfect for family trips, corporate travel, and special
            occasions.
          </p>

          <div className="innova-feature-tags">
            {features.map((f, i) => (
              <span key={i} className="innova-feature-tag">
                <Image
                  src={f.src}
                  alt={f.text}
                  width={20}
                  height={20}
                  className="feature-icon"
                />
                {f.text}
              </span>
            ))}
          </div>
          <div className="innova-cta-buttons" id="banner-btnn">
            <a href="tel:+917387382383" className="innova-btn-primary">
              📞 Call: 7387382383
            </a>
            <a href="#booking" className="innova-btn-outline">
              Book Online →
            </a>
          </div>
        </div>
        <div className="innova-hero-image-div">
          <div className="innova-hero-image">
            <Image
              className="innova-img"
              src="./innova-9.jpg"
              width={500}
              height={400}
              alt="innova images"
              unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovaBanner;
