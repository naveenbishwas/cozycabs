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

const Innovainmumbai = () => {
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
      q: "Can I book an Innova for Mumbai Airport pickup or drop?",
      a: "Yes, our Innova services are available 24×7 for Chhatrapati Shivaji International Airport transfers.",
    },
    {
      q: "Do you offer Innova rental for sightseeing in Mumbai?",
      a: "Yes, explore Gateway of India, Marine Drive, and Juhu Beach with our comfortable Innovas.",
    },
    {
      q: "Is Innova available for outstation trips from Mumbai?",
      a: "Yes, book Innovas for Pune, Lonavala, or Nashik trips at competitive rates.",
    },
    {
      q: "Are your Innovas clean and well-maintained?",
      a: "Yes, all Innovas are regularly serviced and sanitized for premium quality.",
    },
    {
      q: "How can I book an Innova cab in Mumbai?",
      a: "Book online or call 7387382383 anytime for fast booking.",
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
      <head>
        <title>
          Innova Car Rental in Mumbai | Cozy Cabz – Crysta & Hycross with Driver
        </title>
        <meta
          name="description"
          content="Hire Toyota Innova Crysta or Hycross in Mumbai for airport transfers, business trips, or weekend getaways. 24×7 chauffeur service, clean cars & transparent pricing with Cozy Cabz."
        />
        <meta
          property="og:title"
          content="Innova Car Rental in Mumbai | Cozy Cabz – Reliable Chauffeur Service"
        />
        <meta
          property="og:description"
          content="Book Innova car rental in Mumbai for airport pickup, outstation travel, and sightseeing. Cozy Cabz offers comfort, safety, and affordability for every trip."
        />
        <meta property="og:image" content="/innova-6.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/InMumbai" />
        <meta name="robots" content="index, follow" />
      </head>

      <Header />

      {/* Hero Section */}
      <InnovaBanner city="Mumbai" />

      {/* Number Counters */}
      <NumberCounter />

      {/* Gallery Section */}
      <InnovaGallerySection city="Mumbai" />

      {/* Specs */}
      <InnovaSpecsCard />

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Innova Car Rental in <span>Mumbai</span>
        </h2>
        <p>
          Experience premium comfort and reliability with India’s most trusted
          MPV. Perfect for family trips, corporate travel, and special
          occasions.
        </p>
        <div className="innova-highlight-box">
          <p>
            Mumbai, India’s financial hub, is a blend of fast life and scenic
            drives. Cozy Cabz Innova car rental in Mumbai offers a luxury
            experience for corporate meetings, family travel, or airport
            commutes.
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
          Answers to the most common questions about our corporate
          transportation program.
        </div>
        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                className={`faq-item ${open ? "open" : ""}`}
                key={i}
                role="listitem"
              >
                <button
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-control-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-control-${i}`}
                  className="faq-answer"
                  style={{ maxHeight: open ? "300px" : "0px" }}
                >
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

export default Innovainmumbai;
