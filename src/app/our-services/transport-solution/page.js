"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./TransportSolution.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "@/app/Components/ServicesBookingForm/page";
import CityForm from "@/app/Components/CityForm/page";
import CityBestChoice from "@/app/Components/CityBestChoice/page";
import NumberCounter from "@/app/Components/NumberCounter/page";

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
      <head>
        <title>
          Corporate Employee Transport Services | Safe & Reliable Fleet in India
        </title>
        <meta
          name="description"
          content="Trusted employee transport solutions for businesses. 500+ corporate clients, 1200+ fleet, serving 50,000+ employees across 25+ Indian cities with safe, punctual rides."
        />
      </head>
      <Header />

      <section className="employee-transport section-container" id="desktop">
        <Image
          src="../service-red-desktop-32.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="../12.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <NumberCounter />

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

      <CityBestChoice />

      {/* <ServiceBookingForm /> */}
      <CityForm />

      <SiteFooter />
    </div>
  );
};

export default TransportSolution;
