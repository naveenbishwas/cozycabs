"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./ChauffeurCarRental.css";
import {
  FaCar,
  FaUserTie,
  FaCrown,
  FaUserShield,
  FaGlobe,
  FaBalanceScale,
} from "react-icons/fa";

function Feature({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-text">{text}</p>
    </div>
  );
}

const ChauffeurCarRental = () => {
  const aboutCountersRef = useRef(null);

  function runCounter(el, to) {
    const duration = 1400;
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(to * eased);
      el.textContent = val + "+";
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  useEffect(() => {
    if (!aboutCountersRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          aboutCountersRef.current
            .querySelectorAll("[data-counter-to]")
            .forEach((node) => {
              const to =
                parseInt(node.getAttribute("data-counter-to"), 10) || 0;
              runCounter(node, to);
            });
        }
      },
      { threshold: 0.35 }
    );
    io.observe(aboutCountersRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./inn7.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./9.png"
          width={1440}
          height={600}
          className="innova-backgound "
          alt="Background-img"
          unoptimized
        />
      </section>

      {/* Stats Section */}
      <section className="number-stats" ref={aboutCountersRef} id="about">
        <div className="about__stats">
          <div className="stat">
            <div className="stat__num" data-counter-to="15000">
              0+
            </div>
            <div className="stat__label">Rides Managed Nationwide</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="5000">
              0+
            </div>
            <div className="stat__label">Luxury Cars & SUVs</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="12">
              0+
            </div>
            <div className="stat__label">Years of Service Excellence</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="20000">
              0+
            </div>
            <div className="stat__label">Happy Clients & Families</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="300">
              0+
            </div>
            <div className="stat__label">Cities Covered Across India</div>
          </div>
        </div>
      </section>

      {/* Premium Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Chauffeur ride"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A Premium Ride with a <span>Professional Touch</span>
          </h2>
          <p>
            Looking for more than just a basic car rental? Our chauffeur-driven
            car services are designed to provide a complete blend of luxury,
            comfort, and reliability.
          </p>
          <p>
            Whether it’s top executives attending meetings, families going on
            vacations, or couples booking stylish rides for occasions, every
            journey feels exclusive. With a personal chauffeur at the wheel, you
            no longer need to worry about traffic, directions, or parking —
            everything is handled with professionalism.
          </p>
          <p>
            Our fleet includes luxury sedans, spacious SUVs, and premium cars,
            each maintained for performance and comfort. Every ride is managed
            by trained, uniformed, and background-verified chauffeurs who ensure
            safety, punctuality, and courtesy.
          </p>
          <p>
            From airport pickups and hotel transfers to intercity trips and city
            tours, we take care of logistics while you focus on what matters
            most.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-container" id="service-why-section">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our dedication to premium chauffeur-driven services sets us apart.
            Here’s why clients trust us nationwide.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaCrown />}
            title="Luxury Fleet at Your Service"
            text="Choose from luxury sedans, premium SUVs, and high-end cars, perfect for business trips, weddings, airport transfers, and leisure travel."
          />
          <Feature
            icon={<FaUserTie />}
            title="Professional & Verified Chauffeurs"
            text="Our chauffeurs are uniformed, background-verified, and trained to provide safe driving, punctual arrivals, and courteous service every time."
          />
          <Feature
            icon={<FaCar />}
            title="Tailored for Every Need"
            text="From corporate meetings and VIP transfers to stylish wedding rides and family tours, our rentals are customized to suit every occasion."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaUserShield />}
            title="Comfort & Convenience"
            text="Focus on your work or relaxation while our chauffeurs expertly manage routes, traffic, and parking for a stress-free journey."
          />
          <Feature
            icon={<FaGlobe />}
            title="Pan-India Availability"
            text="We provide reliable chauffeur-driven car rental services across metros and tier-2/3 cities with on-ground support whenever you need it."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Pricing"
            text="Our all-inclusive packages cover cars, chauffeurs, and amenities upfront with no hidden charges or last-minute surprises."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <section className="quote-section section-container" id="quote-section">
        <div className="quote-info">
          <button className="tag-btn">Get Started Today</button>
          <h2>
            Book Your <span>Chauffeur Car</span>
          </h2>
          <p>
            Tell us about your travel needs and we'll provide a customized
            chauffeur-driven package with clear pricing.
          </p>
          <ul className="benefits-list">
            <li>Luxury sedans, SUVs & premium cars</li>
            <li>Trained & uniformed chauffeurs</li>
            <li>Pan-India availability with 24/7 support</li>
            <li>All-inclusive, transparent packages</li>
          </ul>
        </div>

        <div className="quote-form">
          <h3>Get Your Quote</h3>
          <p>
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <form>
            <div className="form-grid">
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Email ID" required />
              <input
                type="tel"
                placeholder="Phone No"
                required
                pattern="^\+91\s[1-9]{1}[0-9]{9}$"
              />
              <select required>
                <option value="">Select Service Type</option>
                <option>Chauffeur Driven</option>
                <option>Self Drive</option>
              </select>
              <select required>
                <option value="">Select Vehicle Type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Luxury</option>
              </select>
              <input
                type="number"
                placeholder="No. of Travellers"
                required
                min="1"
              />
              <input type="text" placeholder="Enter City Name" required />
              <input type="date" placeholder="dd/mm/yyyy" required />
              <textarea
                placeholder="Any specific requirement / itinerary"
                rows="4"
              />

              <button type="submit" className="primary-btn">
                Request Quote →
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ChauffeurCarRental;
