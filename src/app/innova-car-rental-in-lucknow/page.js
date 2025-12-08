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

const Innovainlucknow = () => {
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
      q: "Can I book an Innova for Lucknow Airport pickup or drop?",
      a: "Yes, we provide Innova Crysta and Hycross rentals for the airport in Lucknow. Our drivers ensure timely airport pickups and drops with complete comfort and reliability.",
    },
    {
      q: "Do you offer Innova rental for sightseeing in Lucknow?",
      a: "Absolutely! You can hire an Innova for local sightseeing across Lucknow, covering popular landmarks and attractions in and around the city.",
    },
    {
      q: "Is Innova available for outstation trips from Lucknow?",
      a: "Yes. We provide Innova car rentals for outstation travel from Lucknow to nearby destinations with one-way or round-trip travel options.",
    },
    {
      q: "Are your Innovas clean and well-maintained?",
      a: "Yes, all our vehicles are regularly sanitized, fully insured, and maintained to premium standards, ensuring a safe and comfortable travel experience for all passengers.",
    },
    {
      q: "How can I book an Innova cab in Lucknow?",
      a: "You can easily book online through our website or call our team at 7387382383 for instant booking confirmation and 24×7 travel assistance.",
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
          Innova Car Rental in Lucknow | Innova Crysta & Hycross with Driver –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Book Innova car rental in Lucknow with CozyCabz. Choose Innova Crysta or Hycross for airport transfers, local rides & outstation trips. Clean cars, professional chauffeurs & clear pricing."
        />
      </head>

      <Header />

      {/* Hero Section */}
      <InnovaBanner city="Lucknow" />

      {/* Number Counters */}
      <NumberCounter />

      {/* Gallery Section */}
      <InnovaGallerySection city="Lucknow" />

      {/* Specs */}
      <InnovaSpecsCard />

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Innova Car Rental in <span>Lucknow</span>
        </h2>
        <p>
          Experience premium comfort and reliability with India’s most trusted
          MPV. Perfect for family trips, corporate travel, and special
          occasions.
        </p>
        <div className="innova-highlight-box">
          <p>
            Lucknow, one of India’s major cities, offers a unique mix of
            culture, business, and lifestyle. Whether you’re traveling for work,
            sightseeing, or leisure, CozyCabz Innova car rental in Lucknow
            ensures a safe, comfortable, and convenient journey.
          </p>
        </div>
        <p>
          The Toyota Innova on rent in Lucknow is known for its spacious
          interiors and smooth ride. Whether you’re a tourist exploring or on an
          outstation trip, it’s ideal for families, corporate groups, or
          friends. With seating for up to 7 passengers, every journey becomes
          easy and enjoyable.
        </p>
        <p>
          In Lucknow’s busy roads, booking an Innova with driver in Lucknow
          gives you complete peace of mind. CozyCabz provides professional
          chauffeurs and flexible rental packages – from airport transfers to
          day trips and multi-day tours – making every ride simple, safe, and
          stress-free.
        </p>
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

export default Innovainlucknow;
