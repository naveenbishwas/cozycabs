"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InVisakhapatnam = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Expert Drivers",
      desc: "Our chauffeurs are familiar with Visakhapatnam’s roads, including beach roads, hills, and forest stretches.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Vehicle Range",
      desc: "From economy cars to SUVs, luxury vehicles, or self drive cars in Visakhapatnam, we have what you need.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "Estimates include everything—fuel, tolls, driver charges. No hidden costs.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Service",
      desc: "Early flights or late-hour rides—our rental cars in Visakhapatnam are available anytime.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Safety & Hygiene",
      desc: "Cars are sanitized, GPS-enabled, and insured—trusted for both local rides and long trips.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kailasagiri Hill",
      img: "/invisakhapatnam/Kailasagiri.png",
      alt: "Kailasagiri Hill viewpoint over Vizag",
      paragraphs: [
        "Perched above the city, Kailasagiri offers panoramic views of mountains and sea. Ropeway rides, gardens, and giant statues make it a favourite for all ages.",
      ],
    },
    {
      title: "Submarine Museum & INS Kursura",
      img: "/invisakhapatnam/Submarine.png",
      alt: "INS Kursura Submarine Museum in Vizag",
      paragraphs: [
        "A decommissioned submarine turned museum where you can walk through compartments and learn about naval life—adjacent to a maritime museum.",
      ],
    },
    {
      title: "Simhachalam Temple",
      img: "/invisakhapatnam/Simhachalam.png",
      alt: "Simhachalam Temple hill shrine in Visakhapatnam",
      paragraphs: [
        "Dedicated to Lord Narasimha, this ancient hill temple combines spiritual significance with scenic beauty, set amidst lush green hills.",
      ],
    },
    {
      title: "Thotlakonda & Pavuralakonda",
      img: "/invisakhapatnam/Thotlakonda.png",
      alt: "Buddhist sites Thotlakonda Pavuralakonda near Vizag",
      paragraphs: [
        "Ancient Buddhist monastic complexes on hilltops near Vizag—ruins, stupas, and coastal views ideal for history and nature lovers.",
      ],
    },
    {
      title: "Yarada & Rushikonda Beaches",
      img: "/invisakhapatnam/Yarada.png",
      alt: "Yarada and Rushikonda beaches in Vizag",
      paragraphs: [
        "Soft sands, clear waters, and water activities draw families and tourists alike—top coastal relaxation spots.",
      ],
    },
    {
      title: "Dwaraka Tirumala & ISKCON Vizag",
      img: "/invisakhapatnam/Dwaraka.png",
      alt: "Hilltop temple and ISKCON in Vizag",
      paragraphs: [
        "A tranquil hilltop spiritual center offering sunrise views and peaceful worship ambience—an escape from the city bustle.",
        "With Cozy Cabz rent a car in Visakhapatnam, visiting these attractions is comfortable and logistics-free.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Visakhapatnam cost?",
      a: "Rates vary by car type, distance, and duration. Economy starts low; luxury and longer trips cost more. You’ll see full pricing when you book.",
    },
    {
      q: "Can I hire a car in Visakhapatnam with driver for one day?",
      a: "Yes. We offer car on rent in Visakhapatnam with driver even for day trips and local tours.",
    },
    {
      q: "Are self-drive cars available in Visakhapatnam?",
      a: "Absolutely. We provide self drive cars in Visakhapatnam for customers wanting flexibility and privacy.",
    },
    {
      q: "Do you offer outstation trips from Visakhapatnam?",
      a: "Yes. Cozy Cabz covers car rental for nearby destinations like Araku, Vizag coast, and hill regions.",
    },
    {
      q: "Does the fare include all charges?",
      a: "Yes, your estimate includes tolls, parking, driver fees, and basic fuel—no hidden surprises.",
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
          Car Rental in Visakhapatnam | Self Drive & Chauffeur Service –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Book car rental in Visakhapatnam with CozyCabz. Choose from self drive, chauffeur-driven, or luxury cars for local, airport, and outstation rides. Safe, reliable & available 24×7."
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Visakhapatnam</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Visakhapatnam, or Vizag, blends beaches, hills, temples, and modern
            life. From Kailasagiri’s Bay of Bengal views to Buddhist sites and
            sanctuaries, the city has much to explore. Cozy Cabz offers car
            rental in Visakhapatnam with driver for smooth journeys.
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
              Must-Visit Places in Visakhapatnam with Cozy Cabz
            </h2>
            <p>
              Visit top attractions comfortably, without worrying about parking
              or logistics.
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
            Answers to common questions about our car rental services in Vizag.
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

export default InVisakhapatnam;
