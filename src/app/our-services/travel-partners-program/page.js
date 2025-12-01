"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./TravelPartnersProgram.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "@/app/Components/ServicesBookingForm/page";
import CityForm from "@/app/Components/CityForm/page";
import CityBestChoice from "@/app/Components/CityBestChoice/page";
import NumberCounter from "@/app/Components/NumberCounter/page";

const TravelPartnersProgram = () => {
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
        <title>Travel Partners Program | Drive Growth with CozyCabz</title>
        <meta
          name="description"
          content="Join the CozyCabz Travel Partners Program. Collaborate with us to offer premium chauffeur-driven travel services, expand your business & earn more."
        />
        <meta
          property="og:title"
          content="Travel Partners Program | Drive Growth with CozyCabz"
        />
        <meta
          property="og:description"
          content="Partner with CozyCabz to deliver reliable, nationwide transportation for hotels, corporates, and agencies. Earn revenue & delight your customers."
        />
        <meta property="og:image" content="/service-car-img.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/TravelPartnersProgram"
        />
      </head>

      <Header />

      {/* Hero Section */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="../service-red-desktop-22.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <section className="employee-transport section-container" id="mobile">
        <Image
          src="../17.png"
          width={1440}
          height={600}
          className="innova-backgound "
          alt="Background-img"
          unoptimized
        />
      </section>

      {/* Stats Section */}
      <NumberCounter />

      {/* Partnership Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
              alt="Partnership Program"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A <span>Partnership</span> That Drives Growth
          </h2>
          <p>
            Looking to add more value to your customers while building new
            revenue streams? Our Travel Partners Program is the perfect
            solution. By partnering with us, you gain access to a nationwide
            fleet of cars, professional chauffeurs, and 24/7 support, enabling
            you to deliver premium transportation without investing in
            logistics.
          </p>
          <p>
            Whether you are a hotel looking to provide guest transfers, a
            corporate managing business travel, or an agency planning tours, our
            program ensures reliable, safe, and efficient services for your
            clients.
          </p>
          <p>
            Together, we create unforgettable journeys while strengthening your
            brand reputation.
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

export default TravelPartnersProgram;
