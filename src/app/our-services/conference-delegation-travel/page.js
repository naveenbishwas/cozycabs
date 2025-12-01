"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./ConferenceDelegationTravel.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "@/app/Components/ServicesBookingForm/page";
import CityForm from "@/app/Components/CityForm/page";
import CityBestChoice from "@/app/Components/CityBestChoice/page";
import NumberCounter from "@/app/Components/NumberCounter/page";

const ConferenceDelegationTravel = () => {
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
          Conference & Delegation Travel | Premium Transport for Events & VIPs –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Professional conference & delegation travel services with airport pickups, hotel transfers, and venue shuttles. Trusted by top corporates for seamless VIP and group travel across India."
        />
      </head>

      <Header />

      {/* Hero Section */}
      {/* <section className="employee-transport section-container">
        <div className="employee-content">
          <h1>
            Conference & <span>Delegation Travel</span>
          </h1>
          <p>
            Professional conference & delegation travel services with airport
            pickups, hotel transfers, and venue shuttles. Ensure smooth,
            punctual, and comfortable travel for every delegate and VIP guest.
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
            alt="Conference & Delegation Travel"
            width={600}
            height={400}
            className="image"
          />
        </div>
      </section> */}
      <section className="employee-transport section-container" id="desktop">
        <Image
          src="../service-red-desktop-62.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>
      <section className="employee-transport section-container" id="mobile">
        <Image
          src="../14.png"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      {/* Stats Section */}
      <NumberCounter />

      {/* Solutions Section */}
      <section className="smooth-ride section-container">
        <div className="ride-images">
          <div className="main-img">
            <Image
              src="/service-car-img.png"
              alt="Delegates arriving"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            Conference & Delegation <span>Travel Solutions</span>
          </h2>
          <p>
            Organizing a conference or hosting an official delegation demands
            flawless planning — and smooth travel is at the heart of it. Our
            conference & delegation travel services are designed to simplify
            complex logistics, ensuring every participant experiences
            professionalism, punctuality, and comfort from start to finish.
          </p>
          <p>
            Whether you are welcoming international delegates, transporting
            keynote speakers, or managing large groups of attendees, we provide
            end-to-end solutions that cover airport pickups, hotel transfers,
            venue shuttles, and intercity travel.
          </p>
          <p>
            Our dedicated coordinators, multilingual chauffeurs, and premium
            fleet make sure your event runs seamlessly while leaving a lasting
            impression on your guests.
          </p>
          <p>
            With us as your travel partner, you can focus on delivering
            impactful conferences while we handle the movement of your people —
            efficiently and reliably.
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

export default ConferenceDelegationTravel;
