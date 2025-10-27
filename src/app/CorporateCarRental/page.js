"use client";

import React, { useRef, useEffect } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import "../TransportSolution/TransportSolution.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "../Components/ServicesBookingForm/page";
import CityForm from "../Components/CityForm/page";
import CityBestChoice from "../Components/CityBestChoice/page";

const CorporateCarRental = () => {
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

      {/* <section className="employee-transport section-container">
        <div className="employee-content">
          <h1>
            Corporate Car <span>Rental</span>
          </h1>
          <p>
            Seamless, reliable, and scalable car rental solutions designed for
            your corporate needs. From daily office commutes to inter-branch
            travel and business events, we ensure your employees travel with
            comfort, safety, and punctuality.
          </p>
          <div className="cta-buttons">
            <Link href="#quote-section">
              <button className="primary-btn" id="quote-btn">
                Get Quote Now →
              </button>
            </Link>
            <a href="tel:+919876543210" className="secondary-btn">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
        <div className="employee-image">
          <Image
            src="/luxury1.jpeg"
            alt="Employee Transport"
            width={600}
            height={400}
            className="image"
          />
        </div>
      </section> */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./inn8.jpg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./1.png"
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
              src="/service-car-img.png"
              alt="Happy employees commuting"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A <span>Smooth</span> Ride for Your Workforce
          </h2>
          <p>
            Looking for safe, comfortable, and dependable corporate car rental
            services for your team? Youre in the right place. At Cozy Cabz, we
            understand that reliable transport not only boosts employee morale
            but also drives productivity by ensuring punctuality and reducing
            stress.
          </p>
          <p>
            Our extensive fleet of well-maintained cars and professional
            chauffeurs help businesses streamline travel, save time and energy
            for employees, and eliminate resource wastage. Whether your
            workforce is small or large, we guarantee a smooth and trustworthy
            rental experience tailored to your requirements.
          </p>
          <p>
            Have questions? Schedule a presentation with us, and our team will
            walk you through the best rental plan designed for your company’s
            mobility needs.
          </p>
        </div>
      </section>

      <CityBestChoice />

      <CityForm />

      <SiteFooter />
    </div>
  );
};

export default CorporateCarRental;
