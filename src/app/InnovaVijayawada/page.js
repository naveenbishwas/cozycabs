"use client";

import React, { useEffect, useRef, useState } from "react";
import SiteFooter from "../Components/Footer/page";
import Header from "../Components/Header/page";
import Image from "next/image";
import NumberCounter from "../Components/NumberCounter/page";
import InnovaBanner from "../Components/InnovaBanner/page";
import InnovaSpecsCard from "../Components/InnovaSpecsCard/page";
import InnovaBestChoice from "../Components/InnovaBestChoice/page";
import InnovaBookingForm from "../Components/InnovaBookingForm/page";
import InnovaGallerySection from "../Components/InnovaGallerySection/page";

const Innovainvijayawada = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  // Counter Animation
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

  const faqs = [
    {
      q: "Can I book an Innova for Vijayawada Airport pickup or drop?",
      a: "Yes, our drivers handle Gannavaram Airport transfers on time with full comfort.",
    },
    {
      q: "Do you offer Innova rental for sightseeing in Vijayawada?",
      a: "Yes, we cover major attractions like Kanaka Durga Temple, Prakasam Barrage, and Bhavani Island.",
    },
    {
      q: "Is Innova available for outstation trips from Vijayawada?",
      a: "Yes, our Innovas are available for trips to Hyderabad, Vizag, and Tirupati.",
    },
    {
      q: "Are your Innovas clean and well-maintained?",
      a: "All our Innovas are sanitized and maintained for comfort and safety.",
    },
    {
      q: "How can I book an Innova cab in Vijayawada?",
      a: "Booking is easy via website or call at 7387382383 for 24×7 assistance.",
    },
  ];

  const carImages = [
    "/innova-3.png",
    "/innova-6.png",
    "/innova-1.png",
    "/innova-10.png",
  ];

  function Feature({ image, title, text }) {
    return (
      <div className="innova-feature-card">
        <div className="innova-feature-icon">
          <Image src={image} width={50} height={50} unoptimized alt={title} />
        </div>
        <h3 className="innova-feature-title">{title}</h3>
        <p className="innova-feature-text">{text}</p>
      </div>
    );
  }

  return (
    <div className="innova-page">
      <Header />

      {/* Hero Section */}
      <InnovaBanner city="Vijayawada" />

      {/* Number Counters */}
      <NumberCounter />

      {/* Gallery Section */}
      <InnovaGallerySection city="Vijayawada" />

      {/* Specs */}
      <InnovaSpecsCard />

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Innova Car Rental in <span>Vijayawada</span>
        </h2>
        <p>
          Experience premium comfort and reliability with India’s most trusted
          MPV. Perfect for family trips, corporate travel, and special occasions.
        </p>
        <div className="innova-highlight-box">
          <p>
            Vijayawada, one of the busiest cities in Andhra Pradesh, combines
            commerce and spirituality. Cozy Cabz Innova car rental in Vijayawada
            provides the perfect ride for temple visits, business trips, or
            airport transfers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <InnovaBestChoice />

      {/* Booking Form */}
      <InnovaBookingForm />

      {/* FAQ Section */}
      <section className="innova-faq-section">
        <div className="innova-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions...</p>
        </div>
        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`innova-faq-item ${open ? "open" : ""}`}>
                <button
                  onClick={() => toggle(i)}
                  className="innova-faq-question"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`innova-faq-icon ${open ? "rotated" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className={`innova-faq-answer ${open ? "show" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Innovainvijayawada;
