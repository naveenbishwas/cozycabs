"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./HotelTravelDesk.css";
import {
  FaHotel,
  FaStar,
  FaMapMarkedAlt,
  FaUserShield,
  FaSuitcase,
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

const HotelTravelDesk = () => {
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
            Hotel <span>Travel Desk</span>
          </h1>
          <p>
            Seamless, safe, and efficient travel desk solutions tailored for
            hotel guests. From hassle-free airport transfers to guided local
            sightseeing and smooth corporate travel, we ensure every journey is
            handled with professionalism, comfort, and reliability.
          </p>
          <div className="cta-buttons">
            <Link href="#quote-section">
              <button className="primary-btn">Get Quote Now →</button>
            </Link>
            <a href="tel:+919876543210" className="secondary-btn">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
        <div className="employee-image">
          <Image
            src="/bus.jpg"
            alt="Hotel Travel Desk"
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
      <div className="stat__num" data-counter-to="250">
        0+
      </div>
      <div className="stat__label">Cities Covered Around India</div>
    </div>
    <div className="stat">
      <div className="stat__num" data-counter-to="1000">
        0+
      </div>
      <div className="stat__label">Cabs Available Everyday</div>
    </div>
    <div className="stat">
      <div className="stat__num" data-counter-to="10">
        0+
      </div>
      <div className="stat__label">Years of Experience in the Industry</div>
    </div>
    <div className="stat">
      <div className="stat__num" data-counter-to="5000">
        0+
      </div>
      <div className="stat__label">Happy Customers</div>
    </div>
    <div className="stat">
      <div className="stat__num" data-counter-to="1200">
        0+
      </div>
      <div className="stat__label">Vendors Covering the Entire Nation</div>
    </div>
  </div>
</section>


      {/* Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Hotel guest travel"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A hassle-free travel <span>experience</span> for your guests
          </h2>
          <p>
            Looking for reliable and well-organized travel services for your
            hotel guests? You’re in the right place. We understand that a smooth
            travel experience enhances guest satisfaction, improves loyalty, and
            makes their stay more memorable.
          </p>
          <p>
            Our wide fleet of cars and professional chauffeurs ensure timely
            pickups, safe rides, and hassle-free transportation. Whether it’s an
            airport transfer, local tour, or a business trip, our travel desk
            solutions save time, reduce stress, and provide complete peace of
            mind.
          </p>
          <p>
            With customized travel plans, multilingual drivers, and 24/7
            support, we make sure your guests experience the highest standard of
            hospitality both inside and outside your hotel.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-container">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our dedication to hospitality and guest satisfaction sets us apart.
            Here’s why leading hotels choose us as their travel desk partner.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaHotel />}
            title="Trusted Hospitality Partner"
            text="Recognized by leading hotels for premium travel desk services and professional standards."
          />
          <Feature
            icon={<FaStar />}
            title="5-Star Guest Feedback"
            text="Consistently rated high by hotel guests for reliable and comfortable journeys."
          />
          <Feature
            icon={<FaMapMarkedAlt />}
            title="Pan-India Coverage"
            text="Strong presence across metros and tier-2/3 cities with on-ground support."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaUserShield />}
            title="Trained & Verified Drivers"
            text="Background-verified, multilingual, and experienced drivers for complete safety."
          />
          <Feature
            icon={<FaSuitcase />}
            title="Customized Travel Plans"
            text="Tailored travel desk solutions to meet leisure, corporate, and event requirements."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Pricing"
            text="No hidden costs, only clear and fair pricing every time."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <section className="quote-section section-container" id="quote-section">
        <div className="quote-info">
          <button className="tag-btn">Get Started Today</button>
          <h2>
            Request a <span>Custom Quote</span>
          </h2>
          <p>
            Tell us about your hotel travel desk requirements and we'll provide
            a tailored solution with competitive pricing.
          </p>
          <ul className="benefits-list">
            <li>Free consultation and service demo</li>
            <li>Customized pricing based on your hotel needs</li>
            <li>Flexible contracts with no hidden fees</li>
            <li>24/7 guest support and real-time tracking</li>
          </ul>
        </div>

        <div className="quote-form">
          <h3>Get Your Quote</h3>
          <p>
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <form>
            <div className="form-grid">
              <input type="text" placeholder="Hotel Name" required />
              <input type="text" placeholder="Contact Person" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="+91 98765 43210" required />
              <select required>
                <option value="">Type of Travel Services</option>
                <option>Airport Transfers</option>
                <option>Local Tours</option>
                <option>Corporate Travel</option>
                <option>Events / Weddings</option>
              </select>
              <input type="text" placeholder="Preferred Locations / Routes" />
              <textarea
                placeholder="Tell us about your specific guest needs, timings, or special requirements..."
                rows="4"
              />
            </div>

            <button type="submit" className="primary-btn">
              Request Quote →
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default HotelTravelDesk;
