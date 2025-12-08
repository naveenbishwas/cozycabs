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

const Innovainbangalore = () => {
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
      q: "Can I book an Innova for Bangalore Airport pickup or drop?",
      a: "Yes, we provide prompt airport transfers with comfortable Innovas to and from Kempegowda International Airport.",
    },
    {
      q: "Do you offer Innova rental for sightseeing in Bangalore?",
      a: "Yes, our Innova rentals cover attractions like Lalbagh, Bangalore Palace, and Nandi Hills for a full-day or half-day trip.",
    },
    {
      q: "Is Innova available for outstation trips from Bangalore?",
      a: "Yes, we offer Innova rentals for destinations like Mysore, Coorg, Ooty, and Chennai.",
    },
    {
      q: "Are your Innovas clean and well-maintained?",
      a: "All our Innovas are sanitized and serviced regularly for a premium experience.",
    },
    {
      q: "How can I book an Innova cab in Bangalore?",
      a: "Simply book online or call 7387382383 for instant booking confirmation.",
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
          Innova Car Rental in Bangalore | CozyCabz with Driver & Self Drive
        </title>
        <meta
          name="description"
          content="Book Innova Crysta or Hycross in Bangalore with driver or self drive options. CozyCabz offers airport pickup, outstation trips, and local sightseeing with verified chauffeurs."
        />
        <meta
          property="og:title"
          content="Innova Car Rental in Bangalore | CozyCabz with Driver & Self Drive"
        />
        <meta
          property="og:description"
          content="Hire Innova in Bangalore for family, business, or airport travel. Clean, safe, and comfortable rides by CozyCabz with 24×7 service support."
        />
        <meta property="og:image" content="/innova-1.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/InBangalore"
        />
      </head>

      <Header />

      {/* Hero Section */}
      <InnovaBanner city="Bangalore" />

      {/* Number Counters */}
      <NumberCounter />

      {/* Gallery Section */}
      <InnovaGallerySection city="Bangalore" />

      {/* Specs */}
      <InnovaSpecsCard />

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Innova Car Rental in <span>Bangalore</span>
        </h2>
        <p>
          Experience premium comfort and reliability with India’s most trusted
          MPV. Perfect for family trips, corporate travel, and special
          occasions.
        </p>
        <div className="innova-highlight-box">
          <p>
            Bangalore, India’s tech hub, is known for its busy roads and modern
            lifestyle. CozyCabz Innova car rental in Bangalore provides a
            premium travel solution for both corporate and personal trips. Ideal
            for airport transfers, meetings, or exploring places like Lalbagh,
            Cubbon Park, and Nandi Hills.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <InnovaBestChoice />

      {/* Booking Form */}
      <InnovaBookingForm />

      {/* FAQ Section */}
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
              // <div key={i} className={`innova-faq-item ${open ? "open" : ""}`}>
              //   <button
              //     onClick={() => toggle(i)}
              //     className="innova-faq-question"
              //   >
              //     <span>{item.q}</span>
              //     <svg
              //       className={`innova-faq-icon ${open ? "rotated" : ""}`}
              //       xmlns="http://www.w3.org/2000/svg"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       strokeWidth="1.5"
              //       stroke="currentColor"
              //     >
              //       <path
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //         d="m19.5 8.25-7.5 7.5-7.5-7.5"
              //       />
              //     </svg>
              //   </button>
              //   <div className={`innova-faq-answer ${open ? "show" : ""}`}>
              //     <p>{item.a}</p>
              //   </div>
              // </div>
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

export default Innovainbangalore;
