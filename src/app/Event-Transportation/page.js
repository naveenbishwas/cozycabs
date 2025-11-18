"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./EventTransportation.css";
import {
  FaCalendarAlt,
  FaStar,
  FaCar,
  FaUserShield,
  FaGlobe,
  FaBalanceScale,
} from "react-icons/fa";
import ServiceBookingForm from "../Components/ServicesBookingForm/page";
import CityForm from "../Components/CityForm/page";
import CityBestChoice from "../Components/CityBestChoice/page";
import NumberCounter from "../Components/NumberCounter/page";

const EventTransportation = () => {
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
          Event Transportation | Luxury Cars, Buses & Chauffeur Services
        </title>
        <meta
          name="description"
          content="Plan seamless event travel with CozyCabz. Luxury cars, SUVs & buses for guests and staff with professional chauffeurs and on-time service."
        />
        <meta
          property="og:title"
          content="Event Transportation | Luxury Cars, Buses & Chauffeur Services"
        />
        <meta
          property="og:description"
          content="Smooth, comfortable, and reliable event transportation for guests, VIPs & teams. Airport transfers, hotel shuttles, and venue rides managed professionally."
        />
        <meta property="og:image" content="/service-car-img.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/EventTransportation"
        />
      </head>

      <Header />

      {/* Hero Section */}
      {/* <section className="employee-transport section-container">
        <div className="employee-content">
          <h1>
            Event <span>Transportation</span>
          </h1>
          <p>
            Make your event stress-free with our event transportation services.
            Luxury cars, SUVs, and buses with trained chauffeurs ensure smooth,
            punctual, and professional rides for guests and staff.
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
            alt="Event Transportation"
            width={600}
            height={400}
            className="image"
          />
        </div>
      </section> */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./service-red-desktop-7.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./15.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      {/* Stats Section */}
      <NumberCounter />

      {/* Event Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
              alt="Event guests travel"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A reliable ride for your <span>event</span>
          </h2>
          <p>
            Looking for smooth, comfortable, and dependable transportation for
            your next event? You’ve come to the right place. Our event
            transportation services ensure that every guest, VIP, and staff
            member reaches the venue on time without stress.
          </p>
          <p>
            With a wide fleet of luxury cars, SUVs, and buses, along with
            trained chauffeurs and event coordinators, we manage airport
            pickups, hotel transfers, venue shuttles, and intercity rides.
          </p>
          <p>
            No matter the size of your event, we provide punctual and
            professional travel arrangements tailored to your needs.
          </p>
          <p>
            Let us handle the logistics while you focus on creating
            unforgettable experiences. Connect with us today to learn how our
            event transportation solutions can make your event truly seamless.
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

export default EventTransportation;
