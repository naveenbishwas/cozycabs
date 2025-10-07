"use client";

import React, { useEffect, useRef, useState } from "react";
import SiteFooter from "../Components/Footer/page";
import Header from "../Components/Header/page";
import Image from "next/image";
import "./Innova.css";
import NumberCounter from "../Components/NumberCounter/page";
import InnovaBanner from "../Components/InnovaBanner/page";
import InnovaSpecsCard from "../Components/InnovaSpecsCard/page";
import InnovaBestChoice from "../Components/InnovaBestChoice/page";
import InnovaBookingForm from "../Components/InnovaBookingForm/page";
import InnovaGallerySection from "../Components/InnovaGallerySection/page";

const Innovaindelhi = () => {
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
      q: "What services are included in the Corporate Program?",
      a: "We cover everything from daily office commutes and airport transfers to outstation rentals, event transportation, and monthly packages. Each account also gets a dedicated manager and customized reporting.",
    },
    {
      q: "Can we get consolidated monthly invoices?",
      a: "Yes. We provide a single monthly invoice with complete trip details, usage summaries, and expense breakdowns to make your finance team's job easier.",
    },
    {
      q: "Do you offer volume or long-term discounts?",
      a: "Absolutely. Companies with high booking volumes or long-term partnerships benefit from tailored pricing plans and flexible payment terms.",
    },
    {
      q: "How does our team manage and track bookings?",
      a: "Bookings can be made via web, app, or WhatsApp. You'll also have an account manager for urgent changes, plus dashboards to track trips and expenses in real time.",
    },
    {
      q: "Are vehicles and drivers reliable and certified?",
      a: "All vehicles are regularly serviced and fully insured. Drivers go through background verification, corporate etiquette training, and follow strict safety and punctuality standards.",
    },
  ];

  const carImages = [
    "/innova-3.png",
    "/innova-6.png",
    "/innova-1.png",
    "/innova-10.png",
  ];

  // Reusable Feature Card
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
      <InnovaBanner  city="Delhi" />

      {/* Number Counters */}
      <NumberCounter />

      {/* Gallery Section */}
      <InnovaGallerySection  city="Delhi" />

      {/* Specs */}
      <InnovaSpecsCard />

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Experience Unmatched Comfort with{" "}
          <span>Toyota Innova Crysta Rental</span> Service
        </h2>
        <p>
          Delhi, a city that is a mixture of history, culture, and modernity,
          requires a comfortable travel solution. Whether you're planning to
          visit iconic landmarks like the Red Fort, India Gate, or Humayun's
          Tomb or exploring Delhi's busy markets and business hubs, renting an
          Innova car in Delhi offers the perfect combination of comfort,
          convenience, and efficiency.
        </p>
        <div className="innova-highlight-box">
          <p>
            The Toyota Innova, famous for its spacious interiors, smooth ride
            quality, and luxurious, is a popular choice among travelers. With
            the capacity to comfortably accommodate up to seven passengers, it
            is ideal for families, corporate teams, and tourist groups..
          </p>
        </div>
        <p>
          Rental services in Delhi provide well-maintained Innovas with
          professional chauffeurs who are adept at navigating the city's traffic
          and routes. Whether you need a car for airport transfers, city tours,
          or long-distance travel to nearby attractions like Agra or Jaipur,
          Innova car rentals cater to all your requirements.
        </p>
        <h3>Innova Crysta: Options to Suit Every Journey</h3>
        <p>
          Traveling in Delhi becomes a breeze with the versatile Toyota lineup,
          which includes the Innova and Innova Crysta. Each vehicle caters to
          different travel needs, from local commutes to long journeys, ensuring
          that your experience is nothing short of exceptional.
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

export default Innovaindelhi;
