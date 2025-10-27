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
import ServiceBookingForm from "../Components/ServicesBookingForm/page";
import CityForm from "../Components/CityForm/page";
import CityBestChoice from "../Components/CityBestChoice/page";

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
              src="/service-car-img.png"
              alt="Wedding car ride"
              width={0}
              height={0}
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
      <CityBestChoice />

      {/* Quote Section with Form */}

      <CityForm />
      <SiteFooter />
    </div>
  );
};

export default WeddingCarRental;
