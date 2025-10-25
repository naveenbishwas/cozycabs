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

function Feature({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-text">{text}</p>
    </div>
  );
}

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
          src="./inn4.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./6.png"
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

      {/* Event Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
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
      <section className="why section-container" id="service-why-section">
        <header className="why-head">
          <h2>What Makes Us the Best Choice</h2>
          <p>
            Our dedication to event travel excellence sets us apart. Here’s why
            leading planners and corporates trust us for their events.
          </p>
        </header>
        <div className="why-grid">
          <Feature
            icon={<FaCalendarAlt />}
            title="Expert Event Experience"
            text="Trusted by corporates, wedding planners, and organizers for seamless event travel management."
          />
          <Feature
            icon={<FaStar />}
            title="Positive Guest Feedback"
            text="Consistently praised by guests, VIPs, and clients for punctual, safe, and comfortable rides."
          />
          <Feature
            icon={<FaCar />}
            title="Wide Fleet for All Events"
            text="Luxury cars, SUVs, and buses available for groups of every size — from small gatherings to mega events."
          />
        </div>
        <div className="why-grid">
          <Feature
            icon={<FaUserShield />}
            title="Safe & Verified Chauffeurs"
            text="Trained, background-checked, and professional drivers ensuring reliability and peace of mind."
          />
          <Feature
            icon={<FaGlobe />}
            title="Nationwide Event Coverage"
            text="Strong presence in metros and tier-2/3 cities with on-ground coordination for events of any scale."
          />
          <Feature
            icon={<FaBalanceScale />}
            title="Transparent Event Pricing"
            text="Fair, upfront quotes with no hidden charges, tailored for corporate, social, and cultural events."
          />
        </div>
      </section>

      {/* Quote Section with Form */}
      <ServiceBookingForm />

      <SiteFooter />
    </div>
  );
};

export default EventTransportation;
