"use client";

import React, { useState } from "react";
// import "./InternalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InSurat = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers are trained, background-checked, and know Surat’s roads—from Ring Road and textile markets to Dumas Beach and the airport. For secure car hire in Surat, CozyCabz is your trusted partner.",
      icon: (
        // Shield check
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Choose from hatchbacks, sedans, SUVs, tempo travelers, and luxury cars. Whether it’s a self drive car on rent in Surat for privacy or a luxury car rental in Surat for events, we provide vehicles for every purpose.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H3v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "Our Surat car rental services come with clear, upfront pricing—covering fuel, tolls, driver charges, and parking. No hidden costs, just honest fares.",
      icon: (
        // Tag
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "From early-morning airport transfers to late-night pickups, CozyCabz provides car rental Surat services round the clock.",
      icon: (
        // Clock + tick
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Safety & Hygiene First",
      desc: "Every car is sanitized, GPS-enabled, and insured for passenger safety. Families, corporates, and tourists trust CozyCabz for rental cars in Surat.",
      icon: (
        // Headset
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Surat Castle",
      img: "/insurat/Surat-Castle.png",
      alt: "Surat Castle, Surat",
      paragraphs: [
        "Built in the 16th century by Sultan Mahmud III, Surat Castle is a grand fort that once protected the city from invasions. Its massive stone walls and strategic riverside location reflect the city’s historic importance. Today, it stands as a popular tourist landmark and heritage site.",
      ],
    },
    {
      title: "Sarthana Nature Park & Zoo",
      img: "/insurat/Sarthana.png",
      alt: "Sarthana Nature Park and Zoo, Surat",
      paragraphs: [
        "Spread over a large green area, this zoo is home to lions, tigers, leopards, and exotic birds. It’s one of the best fun places in Surat for families, offering both entertainment and learning for children. The natural surroundings make it a refreshing getaway within the city.",
      ],
    },
    {
      title: "Dumas Beach",
      img: "/insurat/Dumas.png",
      alt: "Dumas Beach, Surat",
      paragraphs: [
        "Famous for its unique black sand, Dumas Beach along the Arabian Sea is a favorite evening spot for locals and tourists. Visitors enjoy seaside snacks, sunset views, and the cool breeze. It’s perfect for a peaceful walk or a lively outing with friends and family.",
      ],
    },
    {
      title: "Ambika Niketan Temple",
      img: "/insurat/Ambika.png",
      alt: "Ambika Niketan Temple, Surat",
      paragraphs: [
        "Dedicated to Goddess Ashtabhuja Ambika, this riverside temple is one of Surat’s most spiritual places. Its calm setting along the Tapi River attracts devotees and tourists seeking peace. Festivals here are celebrated with great devotion, adding to the temple’s charm.",
      ],
    },
    {
      title: "Gopi Talav",
      img: "/insurat/Gopi.png",
      alt: "Gopi Talav, Surat",
      paragraphs: [
        "Originally built in the 16th century, Gopi Talav is now a lively recreational hub. With boating, gardens, fountains, and food courts, it’s a fun destination for families. The blend of history and modern development makes it a popular attraction in Surat.",
      ],
    },
    {
      title: "Dutch Garden",
      img: "/insurat/Dutch.png",
      alt: "Dutch Garden, Surat",
      paragraphs: [
        "Known for its colonial influence, Dutch Garden is a beautifully landscaped park with historical tombs of Dutch and Armenian traders. Its peaceful lawns and serene atmosphere make it an ideal place for relaxation. It’s a perfect mix of heritage and greenery.",
        "With Surat car rental services from CozyCabz, you can explore these landmarks without hassle, enjoying comfort and flexibility throughout your journey.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Surat cost per day?",
      a: "Economy rides start at ₹12/km, with options for car on rent for one day or long trips. Luxury cars and SUVs are also available.",
    },
    {
      q: "Can I book self drive cars in Surat?",
      a: "Yes. CozyCabz offers self drive car rental in Surat for those who prefer independence.",
    },
    {
      q: "Do you provide airport transfers in Surat?",
      a: "Absolutely. Our car hire Surat service includes 24×7 pickups and drops to Surat Airport.",
    },
    {
      q: "Are luxury cars available in Surat?",
      a: "Yes. CozyCabz offers luxury car rental in Surat for weddings, events, and VIP transfers.",
    },
    {
      q: "Do you offer cars for outstation travel?",
      a: "Yes. We provide rental cars in Surat for nearby destinations like Daman, Silvassa, Mumbai, and Ahmedabad.",
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
        <title>Car Rental in Surat | CozyCabz – Self Drive & Luxury Cars</title>
        <meta
          name="description"
          content="Book car rental in Surat with driver or self drive car rental in Surat. CozyCabz offers safe, reliable, and affordable car hire in Surat 24×7 for airport transfers, trips, and events."
        />
        <meta
          property="og:title"
          content="Car Rental in Surat | CozyCabz – Reliable Self Drive & Chauffeur Cars"
        />
        <meta
          property="og:description"
          content="Hire cars in Surat for sightseeing, business travel, and outstation trips. From budget sedans to luxury cars, CozyCabz provides transparent pricing and verified drivers."
        />
        <meta property="og:image" content="/insurat/Dumas.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/InSurat" />
        <meta name="robots" content="index, follow" />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Surat </h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Surat, the Diamond City of India, blends heritage, trade, markets,
            and seaside getaways. Exploring is exciting but traffic makes travel
            challenging. That’s why CozyCabz offers car rental in Surat with
            driver and self drive car rental in Surat.
          </p>
        </div>
      </section>

      <CityForm />

      <Trustcc />
      <Howto />
      <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Surat with CozyCabz
            </h2>
            <p>
              With CozyCabz rent a car in Surat, exploring the city’s top
              attractions becomes easy and comfortable. From historic forts to
              beaches and gardens, you can enjoy every corner of the city at
              your own pace.
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

export default InSurat;
