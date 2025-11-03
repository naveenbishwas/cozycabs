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
import CityBestChoice from "../Components/CityBestChoice/page";
import NumberCounter from "../Components/NumberCounter/page";

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
      <head>
        <title>
          Global Car Rental | International Car Hire & Chauffeur Services
        </title>
        <meta
          name="description"
          content="Book worldwide car rentals with Global Car Rental. Enjoy professional chauffeurs, premium cars, flexible packages, and 24/7 global support in 100+ countries."
        />
        <meta
          property="og:title"
          content="Global Car Rental | International Car Hire & Chauffeur Services"
        />
        <meta
          property="og:description"
          content="Reliable and affordable international car hire for business and leisure. 100+ cities covered with 24/7 assistance."
        />
        <meta property="og:image" content="/service-car-img.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/GlobalCarRental"
        />
      </head>

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
      <NumberCounter />

      {/* Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
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
      <CityBestChoice />

      {/* Quote Section with Form */}
      <CityForm />

      <SiteFooter />
    </div>
  );
};

export default GlobalCarRental;
