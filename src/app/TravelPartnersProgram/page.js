"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./TravelPartnersProgram.css"
import {
  FaGlobe,
  FaHandshake,
  FaStar,
  FaUserShield,
  FaUsers,
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

const TravelPartnersProgram = () => {
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
              const to = parseInt(node.getAttribute("data-counter-to"), 10) || 0;
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
      <section className="employee-transport section-container">
        <div className="employee-content">
          <h1>
            Travel <span>Partners Program</span>
          </h1>
          <p>
            Expand your opportunities by joining our Travel Partners Program.
            Designed for hotels, corporates, and travel agencies, we offer
            seamless collaboration that brings reliable transportation services
            to your clients and guests.
          </p>
          <div className="cta-buttons">
            <Link href="#quote-section">
              <button className="primary-btn">Join Program →</button>
            </Link>
            <a href="tel:+919876543210" className="secondary-btn">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
        <div className="employee-image">
          <Image
            src="/bus.jpg"
            alt="Travel Partners Program"
            width={600}
            height={400}
            className="image"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="number-stats" ref={aboutCountersRef} id="about">
        <div className="about__stats">
          <div className="stat">
            <div className="stat__num" data-counter-to="1000">
              0+
            </div>
            <div className="stat__label">Hotels & Corporates Partnered</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="5000">
              0+
            </div>
            <div className="stat__label">Clients Served Through Partners</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="15">
              0+
            </div>
            <div className="stat__label">Years of Industry Experience</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="300">
              0+
            </div>
            <div className="stat__label">Cities Covered Nationwide</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="20000">
              0+
            </div>
            <div className="stat__label">Happy Partner Customers</div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Partnership Program"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A <span>Partnership</span> That Drives Growth
          </h2>
          <p>
            Looking to add more value to your customers while building new
            revenue streams? Our Travel Partners Program is the perfect
            solution. By partnering with us, you gain access to a nationwide
            fleet of cars, professional chauffeurs, and 24/7 support, enabling
            you to deliver premium transportation without investing in
            logistics.
          </p>
          <p>
            Whether you are a hotel looking to provide guest transfers, a
            corporate managing business travel, or an agency planning tours, our
            program ensures reliable, safe, and efficient services for your
            clients.
          </p>
          <p>
            Together, we create unforgettable journeys while strengthening your
            brand reputation.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-container">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our proven partnerships and transparent models make us the most
            trusted choice for hotels, corporates, and agencies across India.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaGlobe />}
            title="Nationwide Fleet Access"
            text="Gain access to luxury cars, SUVs, and buses across metros and tier-2/3 cities, ready for any requirement."
          />
          <Feature
            icon={<FaHandshake />}
            title="Revenue Sharing Model"
            text="Earn more by offering transportation services to your customers under clear and flexible revenue-sharing plans."
          />
          <Feature
            icon={<FaStar />}
            title="Trusted by Leading Brands"
            text="Our partnerships with top hotels, corporates, and travel agencies highlight our proven reliability."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaUsers />}
            title="Dedicated Account Support"
            text="Enjoy a single point of contact and 24/7 assistance to manage all your client travel needs seamlessly."
          />
          <Feature
            icon={<FaUserShield />}
            title="Safe & Verified Drivers"
            text="Background-checked and professional chauffeurs ensure every ride is safe, punctual, and comfortable."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Collaboration"
            text="No hidden conditions, just clear agreements and long-term growth opportunities for both partners."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <section className="quote-section section-container" id="quote-section">
        <div className="quote-info">
          <button className="tag-btn">Become a Partner</button>
          <h2>
            Join Our <span>Travel Partners Program</span>
          </h2>
          <p>
            Share your details below and our team will connect with you to
            discuss partnership opportunities.
          </p>
          <ul className="benefits-list">
            <li>Flexible revenue-sharing models</li>
            <li>Dedicated account manager</li>
            <li>Pan-India presence with reliable support</li>
            <li>Premium vehicles & chauffeurs</li>
          </ul>
        </div>

        <div className="quote-form">
          <h3>Partner With Us</h3>
          <p>
            Fill out the form below and we'll reach out within 24 hours to
            discuss partnership details.
          </p>
          <form>
            <div className="form-grid">
              <input type="text" placeholder="Organization Name" required />
              <input type="text" placeholder="Contact Person" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="+91 98765 43210" required />
              <select required>
                <option value="">Partner Type</option>
                <option>Hotel</option>
                <option>Corporate</option>
                <option>Travel Agency</option>
                <option>Other</option>
              </select>
              <input type="text" placeholder="City / Location" />
              <textarea
                placeholder="Tell us about your requirements or how you'd like to collaborate..."
                rows="4"
              />
            </div>

            <button type="submit" className="primary-btn">
              Submit →
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TravelPartnersProgram;
