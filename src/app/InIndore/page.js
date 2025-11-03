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

const InIndore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers know Indore’s routes—from Rajwada to Vijay Nagar, Sarafa to the airport—ensuring on-time travel. Each car driver in Indore is trained, background-checked, and courteous, making car hire in Indore with driver completely safe and reliable.",
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
      desc: "From budget hatchbacks to premium sedans, SUVs, tempo travelers, and luxury models, Cozy Cabz has something for every need. Looking for privacy? Choose our car rental Indore self drive option for flexibility.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "With Cozy Cabz, what you see is what you pay. Our car rental rates in Indore include driver charges, fuel, tolls, and parking. Whether you need a rental car in Indore for a day or a weekend, we guarantee fair and transparent pricing.",
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
      desc: "Be it late-night arrivals or early-morning departures, our Indore car rental services are available round the clock.",
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
      desc: "All vehicles are sanitized after every ride, GPS-enabled, and fully insured. Families, corporates, and tourists prefer Cozy Cabz for secure car rentals in Indore.",
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
      title: "Rajwada Palace",
      img: "/inindore/Rajwada.png",
      alt: "Rajwada Palace, Indore",
      paragraphs: [
        "Rajwada Palace is a historic seven-story palace built by the Holkars over 200 years ago. It combines Mughal, Maratha, and French styles, making it an architectural gem. Located in the heart of the city, it is a must-visit for history lovers and photographers.",
      ],
    },
    {
      title: "Lal Bagh Palace",
      img: "/inindore/Lal.png",
      alt: "Lal Bagh Palace, Indore",
      paragraphs: [
        "Once the residence of the Holkar rulers, Lal Bagh Palace showcases the grandeur of European architecture. The lavish interiors, ornate furniture, and expansive gardens give visitors a glimpse of royal lifestyle. It’s one of Indore’s finest heritage landmarks.",
      ],
    },
    {
      title: "Kanch Mandir",
      img: "/inindore/Kanch.png",
      alt: "Kanch Mandir, Indore",
      paragraphs: [
        "This Jain temple, made entirely of glass and mirrors, is a dazzling sight. Intricate glasswork covers the walls, ceilings, and floors, creating a unique and spiritual ambiance. It is one of Indore’s most striking and sacred attractions.",
      ],
    },
    {
      title: "Sarafa Bazaar",
      img: "/inindore/Sarafa.png",
      alt: "Sarafa Bazaar, Indore",
      paragraphs: [
        "Sarafa Bazaar is Indore’s most vibrant spot, buzzing with jewelry shops by day and transforming into a food street by night. From chaat to sweets, it’s a paradise for food lovers. Exploring this market is a must for anyone who enjoys nightlife and local flavors.",
      ],
    },
    {
      title: "Patalpani Waterfall",
      img: "/inindore/Patalpani.png",
      alt: "Patalpani Waterfall, Indore",
      paragraphs: [
        "Located about 30 km from Indore, Patalpani is a scenic waterfall surrounded by greenery. It’s a popular picnic spot and a great escape from the city. Monsoon season makes the view especially breathtaking, attracting tourists and locals alike.",
      ],
    },
    {
      title: "Central Museum",
      img: "/inindore/Central.png",
      alt: "Central Museum, Indore",
      paragraphs: [
        "Also known as Indore Museum, this place houses rare artifacts, coins, and sculptures from Madhya Pradesh’s history. It’s a great spot for those interested in archaeology and culture, offering insights into the region’s rich heritage.",
        "With Indore car hire from Cozy Cabz, visiting these attractions becomes comfortable, safe, and enjoyable, giving you the freedom to experience the best of the city.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Indore cost?",
      a: "Economy rides start at ₹12/km, sedans from ₹25/km, and luxury cars from ₹35/km. Cozy Cabz offers fair and transparent car rental rates in Indore.",
    },
    {
      q: "Can I book car rental in Indore with driver for outstation trips?",
      a: "Yes. Cozy Cabz provides car rental in Indore for outstation travel with one-way or round-trip options.",
    },
    {
      q: "Do you provide airport transfers in Indore?",
      a: "Absolutely. Our Indore car rental service includes 24×7 pickups and drops from the airport.",
    },
    {
      q: "Are self-drive cars available in Indore?",
      a: "Yes. Cozy Cabz offers car rental Indore self drive for customers seeking privacy and flexibility.",
    },
    {
      q: "Do you provide drivers separately in Indore?",
      a: "Yes. Cozy Cabz also provides driver on rent in Indore for your personal vehicle.",
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
        <title>Car Rental in Indore | CozyCabz with Driver</title>
        <meta
          name="description"
          content="Book car rental in Indore with driver for city travel, airport transfers, and outstation trips. Reliable, affordable, and safe rides with CozyCabz – available 24×7."
        />
        <meta
          property="og:title"
          content="Car Rental in Indore | CozyCabz with Driver"
        />
        <meta
          property="og:description"
          content="Hire cars in Indore with verified drivers for local sightseeing, business travel, or outstation trips. Transparent pricing and professional service."
        />
        <meta property="og:image" content="/inindore/Rajwada.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/InIndore" />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Indore </h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Indore, Madhya Pradesh’s commercial capital, blends heritage and
            modern life with Rajwada Palace, Sarafa Bazaar, and IT hubs. Yet
            traffic can be exhausting. That’s why Cozy Cabz Car Rental in Indore
            with driver ensures safe, smooth rides for sightseeing, business
            travel, and outstation journeys.
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
              Must-Visit Places in Indore with Cozy Cabz
            </h2>
            <p>
              With Cozy Cabz car rental Indore, exploring the city’s cultural
              and fun places becomes convenient and stress-free. You can travel
              at your own pace while enjoying comfort and safety.
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

export default InIndore;
