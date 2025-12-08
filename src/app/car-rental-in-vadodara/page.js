"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InVadodara = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs are trained, background-checked, and experienced. From Sayajigunj to Gotri, Alkapuri to the airport, they know every route. For dependable car and driver rental, CozyCabz is your trusted travel partner.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Choose from hatchbacks, sedans, SUVs, tempo travelers, and premium cars. Whether it’s a car on rent in Vadodara with driver, a rental car with driver for business, or car travels in Vadodara for sightseeing, we have the right option.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges. Our Vadodara car rental rates are upfront, covering driver fees, fuel, tolls, and parking. Be it a rental car in Vadodara for a day or long-term car rental in Baroda, you get fair pricing.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "From early morning airport transfers to late-night pickups, our car hire Vadodara services are available round the clock.",
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
      desc: "Every vehicle is sanitized, GPS-enabled, and fully insured. Families, corporates, and tourists rely on CozyCabz for safe and hygienic car rentals in Vadodara Gujarat.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Lakshmi Vilas Palace",
      img: "/invadodara/Lakshmi.png",
      alt: "Lakshmi Vilas Palace in Vadodara",
      paragraphs: [
        "One of the grandest palaces in India, Lakshmi Vilas Palace was built by the Gaekwad dynasty and is said to be four times the size of Buckingham Palace. Its Indo-Saracenic architecture, royal artifacts, and lush gardens make it a cultural treasure.",
      ],
    },
    {
      title: "Sayaji Baug (Kamati Baug)",
      img: "/invadodara/Sayaji.png",
      alt: "Sayaji Baug gardens and attractions",
      paragraphs: [
        "Spread over 100 acres, Sayaji Baug is a green retreat housing a zoo, planetarium, toy train, and gardens—popular for morning walks, picnics, and family leisure.",
      ],
    },
    {
      title: "Champaner-Pavagadh Archaeological Park",
      img: "/invadodara/Champaner.png",
      alt: "Champaner-Pavagadh UNESCO site near Vadodara",
      paragraphs: [
        "Located just outside Vadodara, this UNESCO World Heritage Site is known for forts, palaces, mosques, and ancient temples—perfect for history lovers and day trips.",
      ],
    },
    {
      title: "EME Temple",
      img: "./EME-temple.jpeg",
      alt: "EME Dakshinamurthy Temple modern architecture",
      paragraphs: [
        "Also called Dakshinamurthy Temple, the EME Temple is unique for its modern architecture by the Indian Army. Dedicated to Lord Shiva, it blends spirituality with contemporary design.",
      ],
    },
    {
      title: "Baroda Museum & Picture Gallery",
      img: "/invadodara/Baroda.png",
      alt: "Baroda Museum and Picture Gallery exhibits",
      paragraphs: [
        "Established in the 19th century, the Baroda Museum & Picture Gallery showcases art, sculptures, manuscripts, and global artifacts. It provides deep insights into history and culture, making it an enriching stop for visitors. Art lovers and students often find it a must-visit attraction in Vadodara.",
      ],
    },
    {
      title: "Sursagar Lake",
      img: "/invadodara/Sursagar.png",
      alt: "Sursagar Lake with Shiva statue in Vadodara",
      paragraphs: [
        "Situated in the heart of the city, Sursagar Lake is ideal for relaxation and boating. Evenings are magical when the lake is lit up, with a towering Shiva statue adding to its charm.",
        "With CozyCabz rent a car in Vadodara, exploring these landmarks becomes simple, comfortable, and stress-free.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Vadodara cost?",
      a: "Economy rides start at ₹12/km, sedans from ₹25/km, and luxury cars from ₹35/km. CozyCabz provides transparent Vadodara car rental rates.",
    },
    {
      q: "Can I book a car on rent in Vadodara with driver for one day?",
      a: "Yes. We provide flexible packages, including one day car rental with driver.",
    },
    {
      q: "Do you provide cars for outstation trips from Vadodara?",
      a: "Absolutely. CozyCabz offers car rental in Vadodara Gujarat for one-way and round-trip outstation journeys.",
    },
    {
      q: "Do you provide corporate and business car hire in Vadodara?",
      a: "Yes. Our car hire in Vadodara is popular for meetings, events, and client pickups.",
    },
    {
      q: "Do you also provide luxury and premium vehicles?",
      a: "Yes. CozyCabz offers luxury car rental in Vadodara for weddings, VIP transfers, and corporate use.",
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
      <head>
        <title>
          Car Rental in Vadodara | CozyCabz – Self Drive & Chauffeur Cars
        </title>
        <meta
          name="description"
          content="Book car rental in Vadodara with driver or self drive car rental in Vadodara. CozyCabz offers reliable, safe, and affordable car hire in Baroda for airport transfers, city tours, and business trips."
        />
        <meta
          property="og:title"
          content="Car Rental in Vadodara | CozyCabz – Reliable Car Hire in Baroda"
        />
        <meta
          property="og:description"
          content="Hire cars in Vadodara for sightseeing, corporate travel, and outstation trips. From sedans to luxury cars, CozyCabz provides verified drivers and transparent pricing 24×7."
        />
        <meta property="og:image" content="/invadodara/Lakshmi.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/InVadodara" />
        <meta name="robots" content="index, follow" />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Vadodara</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Vadodara, or Baroda, blends royal heritage with modern charm, from
            Lakshmi Vilas Palace to the Champaner-Pavagadh UNESCO site and
            industrial hubs. To explore stress-free, CozyCabz offers car rental
            in Vadodara with driver and flexible packages.
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
              Must-Visit Places in Vadodara with CozyCabz
            </h2>
            <p>
              With CozyCabz rent a car in Vadodara, exploring the city’s iconic
              landmarks becomes simple, comfortable, and stress-free.
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
            Answers to common questions about our car rental services in
            Vadodara.
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

export default InVadodara;
