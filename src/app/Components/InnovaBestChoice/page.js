import Image from "next/image";
import React from "react";

const InnovaBestChoice = () => {
  // Reusable Feature Card
  function Feature({ image, title, text }) {
    return (
      <div className="innova-feature-card">
        <div className="innova-feature-icon">
          <Image src={image} width={50} height={50} unoptimized alt={title} />
        </div>
        <h3 className="innova-feature-title">{title}</h3>
        <p className="innova-feature-text">{text}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="innova-why">
        <div className="innova-why-wrap">
          <header className="innova-why-head">
            <h2>
              What Makes Us the <span className="red-black">Best Choice</span>
            </h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart.
            </p>
          </header>
          <div className="innova-why-grid">
            <Feature
              image="./known.png"
              title="Well Known for Quality Services"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Earned Positive Reviews from All Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="The Largest Network of Drivers"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>
          <div className="innova-why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
              text="Background-verified partners and insured moves for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="Strong presence with on-ground support in metros and tier-2/3 cities."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Clear quotes, no hidden charges—ever."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovaBestChoice;
