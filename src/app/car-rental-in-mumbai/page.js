"use client";

import React, { useState } from "react";
import "./InternalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Well Known for Quality Services",
      desc: "Recognized across India for our commitment to excellence and premium service standards.",
      image: "/known.png",
    },
    {
      title: "Earned Positive Reviews from All Clients",
      desc: "Consistent 5-star ratings and testimonials from thousands of satisfied customers.",
      image: "/postive.png",
    },
    {
      title: "The Largest Network of Drivers",
      desc: "Extensive network of professional, verified drivers covering every major city in India.",
      image: "/ntework.png",
    },
    {
      title: "Safe & Secure",
      desc: "Background-verified partners and insured moves for complete peace of mind.",
      image: "/safe.png",
    },
    {
      title: "Nationwide Coverage",
      desc: "Strong presence with on-ground support in metros and tier‑2/3 cities.",
      image: "/nationwide.png",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear quotes, no hidden charges—ever.",
      image: "/transparent.png",
    },
  ];

  const spots = [
    {
      title: "Gateway of India & Colaba Causeway",
      img: "/g1.webp",
      alt: "The Gateway of India at sunrise",
      paragraphs: [
        "Standing tall by the Arabian Sea, the Gateway of India is Mumbai’s most iconic landmark. Built during the British era, it’s not just a tourist attraction but a piece of history. Just a short walk away lies Colaba Causeway, a bustling market street filled with trendy clothes, antique jewelry, handicrafts, and cozy cafés. With our car rental with driver, you can explore both spots in one go—without the stress of crowded lanes or parking issues",
      ],
    },
    {
      title: "Marine Drive & Girgaon Chowpatty",
      img: "/g2.webp",
      alt: "Marine Drive during a colorful sunset",
      paragraphs: [
        "Known as the Queen’s Necklace because of its glittering night view, Marine Drive is perfect for long seaside walks, photography, and sunset views. Close by is Girgaon Chowpatty, a popular beach where you can indulge in Mumbai’s famous street food like pav bhaji, bhel puri, and ice gola. Booking a car on rent in Mumbai ensures you enjoy the evening at your own pace, without worrying about transport after dark.",
      ],
    },
    {
      title: "Siddhivinayak Temple & Haji Ali Dargah",
      img: "/g3.webp",
      alt: "Golden sanctum of Shree Siddhivinayak Temple",
      paragraphs: [
        "Mumbai is as spiritual as it is fast-paced. The Siddhivinayak Temple, dedicated to Lord Ganesha, attracts lakhs of devotees every week. Equally famous is the Haji Ali Dargah, located on a small islet in the Arabian Sea, offering both peace and breathtaking views. With our car rental service in Mumbai, you can plan your visit conveniently, avoiding long waits and ensuring you reach at the best times of the day.",
      ],
    },
    {
      title: "Elephanta Caves & Sanjay Gandhi National Park",
      img: "/g4.webp",
      alt: "Rock-cut Elephanta Caves surrounded by greenery",
      paragraphs: [
        "If you want to step away from the chaos of the city, Elephanta Caves and Sanjay Gandhi National Park are perfect day trips. The Elephanta Caves, a UNESCO World Heritage site, house ancient rock-cut temples dedicated to Lord Shiva. Meanwhile, Sanjay Gandhi National Park offers greenery, trekking trails, and a mini train ride, making it a favorite for nature lovers and families. By booking a rental car in Mumbai with driver, you can comfortably plan a full-day outing, knowing your car and driver will be with you throughout the trip.",
      ],
    },
    {
      title: "Juhu Beach & Bandra Bandstand",
      img: "/m1.jpg",
      alt: "Juhu Beach & Bandra Bandstand",
      paragraphs: [
        "For a taste of Mumbai’s glam life, head to Juhu Beach and Bandra Bandstand. Juhu is buzzing with food stalls, local entertainment, and sometimes even Bollywood celebrity sightings. On the other hand, Bandra Bandstand offers a quieter seaside walk, along with famous attractions like Mannat, Shah Rukh Khan’s residence. Our cars on rent in Mumbai make it easy to cover both locations in one smooth ride, whether for leisure, family outings, or a casual evening.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a cab cost in Mumbai per km?",
      a: "Economy rides start at ₹12/km, premium cars at ₹25/km, and luxury at ₹35/km. Whether you need a cheap car rental Mumbai or a luxury car rental in Mumbai, we provide a transparent fare estimate before booking.",
    },
    {
      q: " Can I book a cab from Mumbai to other cities?",
      a: "Yes. Popular outstation routes include Mumbai–Pune, Mumbai–Nashik, Lonavala, Shirdi, and Mumbai–Goa. Our car rental in Mumbai for outstation offers both one-way and round-trip options.",
    },
    {
      q: "Do you provide airport pickups at night?",
      a: "Absolutely. Our Mumbai airport cab service runs 24×7 for both Domestic (T1) and International (T2) terminals.",
    },
    {
      q: "Is there a package for full-day Mumbai sightseeing?",
      a: "Yes, we offer 8 hr / 80 km full day car rental in Mumbai with driver, ideal for sightseeing tours covering all major attractions.",
    },
  ];

  /* ===== Inline SVG Icons ===== */
  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path
        d="M6 2h4l1 5-3 2a14 14 0 007 7l2-3 5 1v4c0 1-1 2-2 2A18 18 0 014 4C4 3 5 2 6 2z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const PinIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path
        d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="2" />
    </svg>
  );
  const CarIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path
        d="M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5v5h-2a2 2 0 01-4 0H9a2 2 0 01-4 0H3v-5z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="18" r="1.6" fill="#fff" />
      <circle cx="16" cy="18" r="1.6" fill="#fff" />
    </svg>
  );
  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
      <path
        d="M8 12l3 3 5-5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  function StepCard({ color, icon, step, title, text }) {
    return (
      <div className="step">
        <div className="badge" style={{ backgroundColor: color }}>
          <div className="badgeIcon">{icon}</div>
          <span className="badgeStep">Step {step}</span>
        </div>

        <div className="descCard">
          <h3 className="descTitle">{title}</h3>
          <p className="descText">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <head>
        <title>
          Car Rental in Mumbai | Affordable Taxi & Chauffeur Service – CozyCabz
        </title>
        <meta
          name="description"
          content="Book car rentals in Mumbai with CozyCabz. Choose economy, premium, or luxury cars for city rides, airport transfers, and outstation trips. 24×7 service, verified drivers & transparent pricing."
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Mumbai </h1>
          <span className="small-head">
            <h4>Safe, Reliable & Comfortable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Exploring Mumbai can be exciting but also overwhelming with traffic,
            long distances, and the city’s non-stop energy. That’s where Cozy
            Cabz Car Rental in Mumbai makes your journey easier.
          </p>
        </div>
      </section>

      <CityForm />

      {/* <section className="trust">
        <div className="trust__container">
          <h2 className="trust__title">
            Why Ride <span>CozyCabs</span>
          </h2>
          <p className="trust__sub">
            Everything we build is focused on safe, reliable and fairly-priced
            rides.
          </p>

          <div className="trust__grid">
            {items.map((it, i) => (
              <article className="trust__card" key={i}>
                <div className="trust__icon">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}
      <Trustcc />
      <Howto />
      <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Mumbai with Cozy Cabz
            </h2>
            <p>
              Mumbai is a city that blends history, culture, glamour, and
              nature—all in one. From colonial-era monuments to vibrant markets,
              spiritual centers, and Bollywood hotspots, there’s so much to
              explore. With Cozy Cabz car hire in Mumbai, you can cover these
              places comfortably, without the hassle of traffic, parking, or
              last-minute cab hunting.
            </p>
          </header>

          <div className="attractions__grid">
            {spots.map((s) => (
              <article className="spot" key={s.title}>
                <figure className="spot__figure">
                  <img className="spot__img" src={s.img} alt={s.alt} />
                </figure>
                <h3 className="spot__title">{s.title}</h3>
                {s.paragraphs.map((t, i) => (
                  <p className="spot__text" key={i}>
                    {t}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers to the most common questions about our corporate
            transportation program.
          </p>
        </div>

        <div className="faq-list" role="list">
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

      <Footer />
    </div>
  );
};

export default InMumbai;
