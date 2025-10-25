"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import "./TransportSolution.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "../Components/ServicesBookingForm/page";
import CityForm from "../Components/CityForm/page";

const stats = [
  {
    id: 1,
    icon: <FaBuilding />,
    value: "500+",
    label: "Corporate Clients",
  },
  {
    id: 2,
    icon: <FaUsers />,
    value: "50,000+",
    label: "Employees Served",
  },
  {
    id: 3,
    icon: <FaBus />,
    value: "1,200+",
    label: "Fleet Size",
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt />,
    value: "25+",
    label: "Cities Covered",
  },
];

function Feature({ image, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">
        <Image src={image} alt={title} width={50} height={50} unoptimized />
      </div>
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-text">{text}</p>
    </div>
  );
}

const TransportSolution = () => {
  const trackRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: <FaBuilding />,
      value: "500+",
      label: "Corporate Clients",
    },
    {
      id: 2,
      icon: <FaUsers />,
      value: "50,000+",
      label: "Employees Served",
    },
    {
      id: 3,
      icon: <FaBus />,
      value: "1,200+",
      label: "Fleet Size",
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt />,
      value: "25+",
      label: "Cities Covered",
    },
  ];

  // Counter animation function
  function runCounter(el, to) {
    const duration = 1400;
    let startTs = null;

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const val = Math.floor(to * eased);
      el.textContent = val + "+";
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  // Custom hook for About section counters
  const useAboutCountersObserver = () => {
    const rootRef = useRef(null);
    const fired = useRef(false);

    useEffect(() => {
      if (!rootRef.current) return;

      const io = new IntersectionObserver(
        (entries) => {
          if (!fired.current && entries.some((e) => e.isIntersecting)) {
            fired.current = true;
            rootRef.current
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

      io.observe(rootRef.current);
      return () => io.disconnect();
    }, []);

    return rootRef;
  };
  const aboutCountersRef = useAboutCountersObserver();
  return (
    <div>
      <Header />

      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./inn1.jpg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./2.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

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
            <div className="stat__label">Vendor Covering the Entire Nation</div>
          </div>
        </div>
      </section>

      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/s1.webp"
              alt="Happy employees commuting"
              width={500}
              height={350}
              className="image"
            />
          </div>
          {/* Uncomment if sub-images needed
          <div className="sub-images">
            <Image
              src="/ride-van1.jpg"
              alt="Fleet Van"
              width={240}
              height={180}
              className="image"
            />
            <Image
              src="/ride-van2.jpg"
              alt="Driver with van"
              width={240}
              height={180}
              className="image"
            />
          </div>
          */}
        </div>
        <div className="ride-content">
          <h2>
            A <span>smooth</span> ride for your workforce
          </h2>
          <p>
            Looking for safe, comfortable and reliable employee transportation
            services for your team? You’ve come to the right place. We
            understand that assurance of reliable transport boosts employee
            morale and drives productivity by improving punctuality and
            eliminating stress.
          </p>
          <p>
            Our large fleet of cars and experienced chauffeurs help businesses
            put in place systems that save time and energy for employees, and
            prevent wastage of resources. Regardless of workforce size, we
            ensure a seamless transition to efficient and reliable transport
            solutions.
          </p>
          <p>
            Get all your doubts answered with a presentation. Call us to arrange
            a session at your convenience.
          </p>
        </div>
      </section>

      <section className="why section-container" id="service-why-section">
        <div className="why-wrap">
          <header className="why-head">
            <h2>What Makes Us the Best Choice</h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart. Here’s why thousands of customers trust us with their
              transportation needs.
            </p>
          </header>
          <div className="why-grid">
            <Feature
              image="/known.png"
              title="Well Known for Quality Services"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Earned Positive Reviews from All Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="The Largest Network of Drivers"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>
          <div className="why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
              text="Background-verified partners and insured moves for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="Strong presence with on-ground support in metros and tier‑2/3 cities."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Clear quotes, no hidden charges—ever."
            />
          </div>
        </div>
      </section>

      {/* <ServiceBookingForm /> */}
      <CityForm />

      <SiteFooter />
    </div>
  );
};

export default TransportSolution;
