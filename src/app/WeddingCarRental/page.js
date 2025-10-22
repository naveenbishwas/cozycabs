"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./WeddingCarRental.css";
import {
  FaCar,
  FaHeart,
  FaUsers,
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

const WeddingCarRental = () => {
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
          src="./inn5.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./10.png"
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
            <div className="stat__num" data-counter-to="5000">
              0+
            </div>
            <div className="stat__label">Weddings Served</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="2000">
              0+
            </div>
            <div className="stat__label">Luxury & Vintage Cars Available</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="15">
              0+
            </div>
            <div className="stat__label">Years of Wedding Expertise</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="10000">
              0+
            </div>
            <div className="stat__label">Happy Couples & Guests</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="300">
              0+
            </div>
            <div className="stat__label">Cities Covered Across India</div>
          </div>
        </div>
      </section>

      {/* Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Wedding car ride"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A grand ride for your <span>special day</span>
          </h2>
          <p>
            Looking for the perfect wedding car that adds elegance and style to
            your celebrations? You’re in the right place. We understand that
            weddings are once-in-a-lifetime occasions, and the right car can
            make all the difference.
          </p>
          <p>
            Our wedding car rental service ensures that every moment of travel
            on your big day is seamless, stress-free, and memorable. With a wide
            fleet of luxury cars, SUVs, and vintage models, driven by
            professional chauffeurs, we provide personalized experiences for
            couples and their families.
          </p>
          <p>
            From timely pickups and smooth rides to beautifully decorated cars,
            our services are designed to match the charm of your wedding. Book
            with us and let your journey to forever begin with style, comfort,
            and sophistication.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-container">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our dedication to wedding travel excellence sets us apart. Here’s
            why couples and families trust us for their big day.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaCar />}
            title="Luxury & Vintage Collection"
            text="We offer a wide range of premium sedans, SUVs, and vintage classics to perfectly complement your wedding theme and make your entry truly grand."
          />
          <Feature
            icon={<FaHeart />}
            title="Tailored for Bride & Groom"
            text="Our wedding cars are specially curated and decorated to add charm and elegance to bridal and groom entries, creating picture-perfect moments."
          />
          <Feature
            icon={<FaUsers />}
            title="Guest Transportation"
            text="From close family members to VIP guests, we provide spacious and comfortable vehicles to ensure everyone enjoys a smooth and stress-free ride."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaUserShield />}
            title="Safe & Professional Chauffeurs"
            text="All our chauffeurs are trained, uniformed, and background-verified, guaranteeing safety and punctuality."
          />
          <Feature
            icon={<FaGlobe />}
            title="Pan-India Coverage"
            text="With a strong presence across metros and tier-2/3 cities, we deliver reliable wedding car rentals and on-ground support no matter where your venue is."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Packages"
            text="We provide clear, all-inclusive packages with decoration and chauffeur services included, ensuring no hidden costs or last-minute surprises."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <section className="quote-section section-container" id="quote-section">
        <div className="quote-info">
          <h2>
            Request a <span>Custom Quote</span>
          </h2>
          <p>
            Tell us about your wedding travel requirements and we'll provide a
            tailored package with competitive pricing.
          </p>
          <ul className="benefits-list">
            <li>Luxury & vintage car options</li>
            <li>Decorated vehicles tailored for weddings</li>
            <li>Professional chauffeurs in uniform</li>
            <li>24/7 support and reliable service</li>
          </ul>
          <button className="tag-btn">Get Started Today</button>
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

export default WeddingCarRental;
