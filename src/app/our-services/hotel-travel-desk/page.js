"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./HotelTravelDesk.css";
import Image from "next/image";
import { FaBuilding, FaUsers, FaBus, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBookingForm from "@/app/Components/ServicesBookingForm/page";
import CityForm from "@/app/Components/CityForm/page";
import CityBestChoice from "@/app/Components/CityBestChoice/page";
import NumberCounter from "@/app/Components/NumberCounter/page";

const HotelTravelDesk = () => {
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
          Hotel Travel Desk | Guest Transportation & Chauffeur Services
        </title>
        <meta
          name="description"
          content="Offer your hotel guests premium travel experiences with our reliable chauffeur-driven cars. Safe airport transfers, city tours & 24/7 guest support."
        />
      </head>

      <Header />

      <section className="employee-transport section-container" id="desktop">
        <Image
          src="../service-red-desktop-8.jpeg"
          width={1440}
          height={600}
          className="innova-backgound"
          alt="Background-img"
          unoptimized
        />
      </section>

      <section className="employee-transport section-container" id="mobile">
        <Image
          src="../13.png"
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
              alt="Hotel guest travel"
              width={500}
              height={350}
              className="image"
            />
          </div>
        </div>
        <div className="ride-content">
          <h2>
            A hassle-free travel <span>experience</span> for your guests
          </h2>
          <p>
            Looking for reliable and well-organized travel services for your
            hotel guests? You’re in the right place. We understand that a smooth
            travel experience enhances guest satisfaction, improves loyalty, and
            makes their stay more memorable.
          </p>
          <p>
            Our wide fleet of cars and professional chauffeurs ensure timely
            pickups, safe rides, and hassle-free transportation. Whether it’s an
            airport transfer, local tour, or a business trip, our travel desk
            solutions save time, reduce stress, and provide complete peace of
            mind.
          </p>
          <p>
            With customized travel plans, multilingual drivers, and 24/7
            support, we make sure your guests experience the highest standard of
            hospitality both inside and outside your hotel.
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

export default HotelTravelDesk;
