"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import "./ChauffeurCarRental.css";
import {
  FaCar,
  FaUserTie,
  FaCrown,
  FaUserShield,
  FaGlobe,
  FaBalanceScale,
} from "react-icons/fa";
import CityForm from "../Components/CityForm/page";
import CityBestChoice from "../Components/CityBestChoice/page";
import NumberCounter from "../Components/NumberCounter/page";

const ChauffeurCarRental = () => {
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
          Chauffeur Car Rental | Luxury Chauffeur-Driven Cars in India –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Book professional chauffeur-driven car rentals with CozyCabz. Enjoy luxury sedans, SUVs, and premium cars with trained chauffeurs for meetings, airport transfers, and intercity rides."
        />
      </head>

      <Header />

      {/* Hero Section */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="./service-red-desktop-4.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <section className="employee-transport section-container" id="mobile">
        <Image
          src="./188.png"
          width={1440}
          height={600}
          className="innova-backgound "
          alt="Background-img"
          unoptimized
        />
      </section>

      {/* Stats Section */}
      <NumberCounter />

      {/* Premium Ride Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
              alt="Chauffeur ride"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A Premium Ride with a <span>Professional Touch</span>
          </h2>
          <p>
            Looking for more than just a basic car rental? Our chauffeur-driven
            car services are designed to provide a complete blend of luxury,
            comfort, and reliability.
          </p>
          <p>
            Whether it’s top executives attending meetings, families going on
            vacations, or couples booking stylish rides for occasions, every
            journey feels exclusive. With a personal chauffeur at the wheel, you
            no longer need to worry about traffic, directions, or parking —
            everything is handled with professionalism.
          </p>
          <p>
            Our fleet includes luxury sedans, spacious SUVs, and premium cars,
            each maintained for performance and comfort. Every ride is managed
            by trained, uniformed, and background-verified chauffeurs who ensure
            safety, punctuality, and courtesy.
          </p>
          <p>
            From airport pickups and hotel transfers to intercity trips and city
            tours, we take care of logistics while you focus on what matters
            most.
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

export default ChauffeurCarRental;
