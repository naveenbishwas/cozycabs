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

const InChandigarh = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional, Verified Drivers",
      desc: " Our chauffeurs are trained, polite, and know every corner of the city—from the lanes of Andheri to the sea breeze of Marine Drive. If you’re searching for rent a car in Mumbai with driver or car hire in Mumbai with driver, Cozy Cabz provides you with the most reliable option.",
      icon: (
        // Shield check
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Well-Maintained Fleet",
      desc: "Choose from hatchbacks, sedans, SUVs, and premium cars. Whether you need an economy rental car in Mumbai, a 7 seater car on rent in Mumbai, or a luxury car rental Mumbai with driver, we’ve got it covered.",
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
      desc: "Get clear estimates with no hidden charges. From eco car rental to monthly car rental Mumbai, we share all details on per km rates, tolls, and driver allowances upfront.",
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
      desc: " Mumbai never sleeps—and neither do we. Be it airport pickups at night or one day car rental Mumbai, our services are available around the clock.",
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
      desc: " Every ride is sanitized, insured, and GPS-enabled. From private car rental in Mumbai to car with driver Mumbai, your safety and comfort remain our top priority.",
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
      title: "Rock Garden",
      img: "/inchandigarh/Rock.png",
      alt: "Rock Garden Chandigarh sculptures made from recycled materials",
      paragraphs: [
        "Created by Nek Chand, Rock Garden is a surreal sculpture park built from recycled materials. Winding pathways reveal thousands of imaginative statues and installations, turning waste into art. It’s one of Chandigarh’s most beloved attractions and perfect for a relaxed exploration.",
      ],
    },
    {
      title: "Sukhna Lake",
      img: "/inchandigarh/Sukhna.png",
      alt: "Sukhna Lake promenade with serene waters and walkers",
      paragraphs: [
        "This serene man-made lake at the foothills of the Shivalik Range is a favourite for morning walks, boating, and scenic views. The promenade and gardens around the lake offer a calm escape from city bustle and lovely spots for photos and quiet moments.",
      ],
    },
    {
      title: "Rose Garden (Zakir Rose Garden)",
      img: "/inchandigarh/Rose.png",
      alt: "Zakir Rose Garden blooms and green lawns in Chandigarh",
      paragraphs: [
        "Spread over 30+ acres, this is Asia’s largest rose garden. With hundreds of rose varieties in full bloom, wide green lawns, and quiet corners, it’s a calm spot for nature lovers and a refreshing contrast to urban life.",
      ],
    },
    {
      title: "Capitol Complex & Open Hand Monument",
      img: "/inchandigarh/Capitol.png",
      alt: "Chandigarh Capitol Complex and Open Hand Monument",
      paragraphs: [
        "Designed by Le Corbusier, the Capitol Complex is Chandigarh’s UNESCO architectural gem, housing the Legislative Assembly, High Court, and Secretariat. The nearby Open Hand Monument—symbolizing peace and unity—is a striking modern landmark.",
      ],
    },
    {
      title: "Government Museum & Art Gallery",
      img: "inchandigarh/Government.png",
      alt: "Government Museum and Art Gallery exhibits in Chandigarh",
      paragraphs: [
        "This museum houses rich collections of ancient sculptures, Gandharan art, Pahari paintings, and modern Indian works. It’s a cultural hub that showcases Chandigarh’s heritage and its progressive spirit.",
      ],
    },
    {
      title: "Japanese Garden",
      img: "inchandigarh/Japanese.png",
      alt: "Japanese Garden pagoda, waterfalls, and landscaped paths",
      paragraphs: [
        "Located in Sector 31, the Japanese Garden offers a peaceful oasis in the city. With waterfalls, pagoda structures, themed gardens, and a meditation centre, it’s a tranquil place to unwind and connect with nature.",
        "With Cozy Cabz car rental Chandigarh, enjoying these attractions becomes effortless, letting you soak in the city’s beauty without the stress of driving or parking.",
      ],
    },
  ];

  const faqs = [
    {
      q: "What are the charges for car rental in Chandigarh?",
      a: "Economy rides start at ₹12–₹15/km, premium sedans from ₹25/km, and luxury cars from ₹35/km. Cozy Cabz offers transparent Chandigarh car rental rates.",
    },
    {
      q: "Can I rent a car in Chandigarh with driver for outstation trips?",
      a: "Yes, we provide rental cars in Chandigarh for one-way and round-trip travel to nearby cities.",
    },
    {
      q: "Do you provide airport transfers in Chandigarh?",
      a: "Absolutely. Our car rental Chandigarh with driver includes 24×7 airport pickups and drops.",
    },
    {
      q: "Are self-drive cars available in Chandigarh?",
      a: "Yes. Cozy Cabz offers self drive cars in Chandigarh for those who prefer privacy and independence.",
    },
    {
      q: "Do you offer SUVs or tempo travelers for group travel?",
      a: "Yes, Cozy Cabz provides SUVs and 7-seater car rental in Chandigarh for family or corporate trips.",
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
        <title>Car Rental in Chandigarh | CozyCabz with Driver</title>
        <meta
          name="description"
          content="Book car rental in Chandigarh with driver for local trips, airport transfers & outstation travel. Safe, affordable & comfortable rides by CozyCabz."
        />
        <meta
          property="og:title"
          content="Car Rental in Chandigarh | CozyCabz with Driver"
        />
        <meta
          property="og:description"
          content="Hire a car with driver in Chandigarh for sightseeing, business, or weekend trips. 24×7 service, verified chauffeurs & transparent pricing."
        />
        <meta property="og:image" content="/inchandigarh/Rock.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/InChandigarh"
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Chandigarh </h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Chandigarh, the City Beautiful, is known for its clean roads,
            planned design, gardens, and lakes. Yet travel can be
            time-consuming. That’s why Cozy Cabz Car Rental in Chandigarh with
            driver ensures safe, smooth rides for sightseeing, airport
            transfers, business trips, and weekend journeys.
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
              Must-Visit Places in Chandigarh with Cozy Cabz
            </h2>
            <p>
              With Cozy Cabz rent a car in Chandigarh, you can explore the
              city’s iconic landmarks comfortably and at your own pace.
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

export default InChandigarh;
