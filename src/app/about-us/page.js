// export default About;
import React from "react";
import "./about.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Link from "next/link";

const About = () => {
  return (
    <>
      <head>
        <title>About CozyCabz | India’s Trusted Cab Rental Platform</title>
        <meta
          name="description"
          content="Learn about CozyCabz — India’s most trusted cab rental platform offering premium rides, reliable chauffeurs, and 24/7 customer support across 250+ cities."
        />
        <meta
          property="og:title"
          content="About CozyCabz | India’s Trusted Cab Rental Platform"
        />
        <meta
          property="og:description"
          content="Discover CozyCabz — providing safe, comfortable, and affordable chauffeur-driven rides across India for families, corporates, and travelers."
        />
        <meta property="og:image" content="/innova-7.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/about" />
      </head>

      <Header />

      {/* 🌆 Hero Banner Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About CozyCabz</h1>
          <p>
            India’s most trusted cab rental platform offering premium rides,
            reliable chauffeurs, and comfort that travels with you.
          </p>
        </div>
      </section>

      {/* 🏙️ Info Section */}
      <section className="info-page">
        <div className="info-container">
          <div className="info-text">
            <h2>Who We Are</h2>
            <p>
              <b>CozyCabz</b> is India’s trusted cab rental platform offering
              reliable, comfortable, and affordable rides across 250+ cities. We
              specialize in premium MPV and SUV rentals for families,
              corporates, and travellers.
            </p>
            <p>
              From airport transfers to long-distance journeys, our mission is
              to make every trip safe, smooth, and hassle-free. With 10+ years
              of experience, 1000+ daily cabs, and 5000+ happy customers, Cozy
              Cabz continues to lead in quality service and transparent pricing.
            </p>

            <h2>Our Vision</h2>
            <p>
              To redefine intercity and intracity travel through technology,
              comfort, and trustworthy chauffeur-driven experiences.
            </p>

            <h2>Why Choose Us</h2>
            <ul>
              <li>✔ Professional, verified chauffeurs</li>
              <li>✔ Wide fleet of vehicles: Sedans, SUVs, Innovas</li>
              <li>✔ Transparent billing with no hidden charges</li>
              <li>✔ 24/7 customer support</li>
            </ul>

            <p className="info-footer">
              We drive people, not just cars — <b>CozyCabz</b> makes every ride
              memorable.
            </p>
          </div>

          {/* 🚘 Side Image */}
          <div className="info-image">
            <img src="./innova-7.jpg" alt="CozyCabz Car" />
            {/* 🚖 CTA Section */}
            <div className="cta-section">
              <h3>Ready to ride with us?</h3>
              <p>Experience CozyCabz comfort today.</p>
              <Link href="/#book-your-car" className="cta-button">
                Book Your Cab Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default About;
