"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./GcarRental.css";
import {
  FaStar,
  FaGlobe,
  FaUsers,
  FaShieldAlt,
  FaCar,
  FaBalanceScale,
} from "react-icons/fa";
import ServiceBookingForm from "../Components/ServicesBookingForm/page";
import CityForm from "../Components/CityForm/page";

function Feature({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-text">{text}</p>
    </div>
  );
}

const GlobalCarRental = () => {
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
      {/* <section className="employee-transport section-container">
        <div className="employee-content">
          <h1>
            Global <span>Car Rental</span>
          </h1>
          <p>
            At Global Car Rental, we provide seamless, affordable, and reliable
            car hire services across major cities worldwide. Whether you’re
            traveling for business, leisure, or long-term stays, our flexible
            rental options ensure comfort, safety, and convenience wherever you
            go.
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
            alt="Global Car Rental"
            width={600}
            height={400}
            className="image"
          />
        </div>
      </section> */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./inn9.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./3.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
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
            <div className="stat__label">
              Years of Experience in the Industry
            </div>
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
            <div className="stat__label">
              Vendors Covering the Entire Nation
            </div>
          </div>
        </div>
      </section>

      {/* Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Happy travelers"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            Your <span>Travel</span>, Our Priority
          </h2>
          <p>
            Exploring new destinations is exciting, but it can feel overwhelming
            without the right travel partner. That’s where Global Car Rental
            comes in. We don’t just provide cars—we provide comfort,
            flexibility, and peace of mind.
          </p>
          <p>
            With our extensive fleet, you can choose exactly what suits your
            journey: compact cars for city drives, premium sedans for business,
            spacious SUVs for family trips, or luxury models for special
            occasions.
          </p>
          <p>
            Our mission is simple—to give you the freedom to travel at your own
            pace. Whether it’s a short commute or a cross-country drive, Global
            Car Rental ensures smooth journeys backed by transparent pricing and
            24×7 support.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-container" id="service-why-section">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our dedication to quality and customer satisfaction sets us apart.
            Here’s why thousands of customers trust us worldwide.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaCar />}
            title="Well-Known for Quality Services"
            text="Recognized worldwide for delivering excellence and maintaining premium travel standards."
          />
          <Feature
            icon={<FaStar />}
            title="Positive Reviews from Clients"
            text="Thousands of satisfied customers with consistent 5-star ratings."
          />
          <Feature
            icon={<FaUsers />}
            title="Largest Network of Drivers"
            text="A wide pool of background-verified chauffeurs available across every major city."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaShieldAlt />}
            title="Safe & Secure"
            text="Insured rides, strict driver verification, and compliance protocols ensure peace of mind."
          />
          <Feature
            icon={<FaGlobe />}
            title="Worldwide Coverage"
            text="Strong presence with on-ground support in major international cities."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Pricing"
            text="Clear quotes, no hidden charges—ever."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <CityForm />

      <SiteFooter />
    </div>
  );
};

export default GlobalCarRental;
