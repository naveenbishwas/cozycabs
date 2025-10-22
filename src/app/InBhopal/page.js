"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InBhopal = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers are experienced, background-checked, and familiar with Bhopal’s roads—from New Market and MP Nagar to old city routes. For dependable Bhopal car rental service, Cozy Cabz ensures safe and timely rides.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Choose from hatchbacks, sedans, SUVs, tempo travelers, and premium cars. Whether you need rental cars in Bhopal for a day, car hire in Bhopal for business, or self drive cars in Bhopal for privacy, we have it all.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "With Cozy Cabz, what you see is what you pay. Our Bhopal car rental rates include driver charges, fuel, tolls, and parking—no hidden costs.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "From airport transfers to late-night trips, our car rental service in Bhopal is available round the clock to suit your schedule.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Safety & Hygiene First",
      desc: "All vehicles are sanitized after each trip, GPS-enabled, and insured for your safety. Families, corporates, and tourists trust Cozy Cabz for car rental in Bhopal.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Upper Lake & Lower Lake",
      img: "/inbhopal/Upper.png",
      alt: "Upper Lake Bhojtal and Lower Lake in Bhopal",
      paragraphs: [
        "Known as Bhojtal, Upper Lake is one of the oldest man-made lakes in India—ideal for boating, sunsets, and peaceful surroundings. The adjoining Lower Lake enhances the city’s charm, making the twin lakes a must-visit.",
      ],
    },
    {
      title: "Taj-ul-Masajid",
      img: "/inbhopal/Taj.png",
      alt: "Taj-ul-Masajid mosque architecture in Bhopal",
      paragraphs: [
        "Among the largest mosques in Asia, admired for Mughal-style domes, tall minarets, and sprawling courtyards—a spiritual and architectural landmark of Bhopal.",
      ],
    },
    {
      title: "Van Vihar National Park",
      img: "/inbhopal/Van.png",
      alt: "Van Vihar National Park wildlife near Upper Lake",
      paragraphs: [
        "A protected reserve beside Upper Lake, home to tigers, leopards, crocodiles, and exotic birds—animals live in near-natural habitats.",
      ],
    },
    {
      title: "Bharat Bhavan",
      img: "/inbhopal/Bharat.png",
      alt: "Bharat Bhavan multi-arts complex in Bhopal",
      paragraphs: [
        "A multi-arts complex celebrating creativity with galleries, libraries, theaters, and workshops—a cultural hotspot in Bhopal.",
      ],
    },
    {
      title: "Shaukat Mahal & Sadar Manzil",
      img: "/inbhopal/Shaukat.png",
      alt: "Shaukat Mahal and Sadar Manzil heritage architecture",
      paragraphs: [
        "These 19th-century architectural wonders showcase a rare mix of Indo-Islamic and European influences. Shaukat Mahal stands out for its Gothic and post-Renaissance style, while Sadar Manzil served as a royal durbar hall. Both are must-see heritage sites for history lovers.",
      ],
    },
    {
      title: "State Museum Bhopal",
      img: "/inbhopal/State.png",
      alt: "State Museum artifacts and exhibits in Bhopal",
      paragraphs: [
        "Artifacts, sculptures, coins, and manuscripts reflecting Madhya Pradesh’s rich past—from prehistoric findings to tribal art.",
        "With Cozy Cabz rent a car in Bhopal, exploring the city’s lakes, mosques, and cultural centers becomes simple and comfortable.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Bhopal cost?",
      a: "Economy rentals start at ₹12/km, sedans from ₹25/km, and premium cars from ₹35/km. Cozy Cabz offers transparent rates for car rent in Bhopal.",
    },
    {
      q: "Can I book a car on rent in Bhopal with driver for one day?",
      a: "Yes. Cozy Cabz provides flexible car on rent in Bhopal packages, including daily and hourly rentals.",
    },
    {
      q: "Do you provide self drive cars in Bhopal?",
      a: "Yes. We offer self drive cars in Bhopal and self drive rental cars in Bhopal for privacy and convenience.",
    },
    {
      q: "Can I rent cars for outstation trips from Bhopal?",
      a: "Absolutely. Cozy Cabz offers car rental in Bhopal for nearby getaways like Sanchi, Pachmarhi, and Indore.",
    },
    {
      q: "Is driver-only service available in Bhopal?",
      a: "Yes. Cozy Cabz also provides driver on hire in Bhopal for your personal car.",
    },
  ];

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
      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Bhopal</h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Bhopal, the City of Lakes, blends heritage, culture, and natural
            beauty with sites like Upper Lake and Taj-ul-Masajid. Cozy Cabz Car
            Rental in Bhopal offers safe, stress-free travel through
            well-maintained cars, professional chauffeurs, self drive rentals,
            and flexible car hire options.
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
              Must-Visit Places in Bhopal with Cozy Cabz
            </h2>
            <p>
              Enjoy Bhopal’s heritage and natural beauty at your own pace
              without travel hassles.
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
            Answers to common questions about our car rental services in Bhopal.
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

export default InBhopal;
