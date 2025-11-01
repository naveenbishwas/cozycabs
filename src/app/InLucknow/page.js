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

const InLucknow = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs are trained, background-checked, and know Lucknow’s routes—from Chowk to Gomti Nagar, Hazratganj to Charbagh Railway Station. For dependable car hire in Lucknow, Cozy Cabz is the right choice.",
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
      desc: "From hatchbacks and sedans to SUVs and tempo travelers, our fleet covers all needs. Whether you’re looking for a car on rent in Lucknow for a day or a self drive car in Lucknow for privacy, Cozy Cabz has flexible options.",
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
      desc: "With Cozy Cabz, you get upfront quotes with no hidden charges. Our Lucknow car rental services include driver fees, tolls, parking, and fuel estimates—making us one of the best car rental in Lucknow.",
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
      desc: "Need a late-night pickup or early-morning airport transfer? Our rental cars in Lucknow are available round the clock to fit your schedule.",
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
      desc: "Every vehicle is sanitized after each trip, GPS-enabled, and fully insured. Families, corporates, and tourists trust Cozy Cabz for safe car rentals in Lucknow.",
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
      title: "Bara Imambara",
      img: "/inlucknow/Bara.png",
      alt: "Bara Imambara, Lucknow",
      paragraphs: [
        "Built in 1784 by Nawab Asaf-ud-Daula, Bara Imambara is an architectural masterpiece of the Mughal era. Famous for its central hall, which is one of the largest arched constructions without support beams, it also houses the fascinating Bhool Bhulaiya (labyrinth). It’s a must-visit for history enthusiasts and culture seekers.",
      ],
    },
    {
      title: "Chota Imambara",
      img: "/inlucknow/Chota.png",
      alt: "Chota Imambara, Lucknow",
      paragraphs: [
        "Often called the Hussainabad Imambara, this monument is admired for its stunning chandeliers, calligraphy, and intricate decoration. Constructed in the 19th century, it reflects Lucknow’s Nawabi culture and grandeur. At night, when lit up, the building glows beautifully, earning it the title “Palace of Lights.”",
      ],
    },
    {
      title: "Rumi Darwaza",
      img: "/inlucknow/Rumi.png",
      alt: "Rumi Darwaza, Lucknow",
      paragraphs: [
        "Standing 60 feet tall, Rumi Darwaza is one of Lucknow’s most iconic landmarks. Built in 1784, this Mughal-style gateway is often referred to as the “Gateway to Lucknow.” Its unique design and historical charm make it one of the most photographed spots in the city.",
      ],
    },
    {
      title: "Hazratganj Market",
      img: "/inlucknow/Hazratganj.png",
      alt: "Hazratganj Market, Lucknow",
      paragraphs: [
        "Hazratganj is Lucknow’s most popular shopping district, blending tradition with modernity. From chikankari clothing and jewelry to branded stores and cafés, it has something for everyone. It’s also a foodie’s delight, offering delicious street snacks and authentic Awadhi cuisine.",
      ],
    },
    {
      title: "Ambedkar Memorial Park",
      img: "/inlucknow/Ambedkar.png",
      alt: "Ambedkar Memorial Park, Lucknow",
      paragraphs: [
        "Spread across 107 acres, Ambedkar Memorial Park is a grand structure built with red sandstone. Dedicated to Dr. B.R. Ambedkar and other social reformers, it features statues, museums, and impressive architecture. The park is a modern symbol of Lucknow’s cultural pride and vision.",
      ],
    },
    {
      title: "Lucknow Zoo",
      img: "/inlucknow/Lucknow-zoo.png",
      alt: "Lucknow Zoo (Nawab Wajid Ali Shah Zoological Garden)",
      paragraphs: [
        "Also known as Nawab Wajid Ali Shah Zoological Garden, Lucknow Zoo is a family favorite. Home to tigers, lions, elephants, and rare birds, it offers both education and entertainment. The zoo also has a toy train and nature museum, making it ideal for children and wildlife lovers.",
        "With Lucknow car rental services from Cozy Cabz, visiting these attractions becomes comfortable, convenient, and enjoyable, giving you the freedom to discover the city’s charm.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Lucknow cost?",
      a: "Economy rides start at ₹12/km, sedans at ₹25/km, and luxury cars at ₹35/km. Cozy Cabz offers transparent Lucknow car rental rates.",
    },
    {
      q: "Can I book a car rental in Lucknow with driver for outstation trips?",
      a: "Yes. Cozy Cabz provides one-way and round-trip rental cars in Lucknow for nearby destinations.",
    },
    {
      q: "Do you provide airport transfers in Lucknow?",
      a: "Absolutely. Our car hire Lucknow includes 24×7 airport pickups and drops.",
    },
    {
      q: "Are self-drive cars available in Lucknow?",
      a: "Yes. Cozy Cabz offers Lucknow car rental self drive options for those who prefer privacy.",
    },
    {
      q: "Do you provide drivers for personal cars?",
      a: "Yes, Cozy Cabz offers driver on rent in Lucknow, making your personal travel safe and easy.",
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
      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Lucknow </h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Lucknow, the City of Nawabs, blends Mughal architecture, vibrant
            markets, and rich culture. Yet exploring can be difficult without
            the right transport. That’s why Cozy Cabz Car Rental in Lucknow with
            driver ensures safe, smooth rides for tourists, corporates,
            families, and outstation trips
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
              Must-Visit Places in Lucknow with Cozy Cabz
            </h2>
            <p>
              With Cozy Cabz car rental Lucknow, exploring the city’s cultural
              gems and modern attractions becomes easy and stress-free. You can
              travel at your own pace without worrying about parking or traffic.
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

export default InLucknow;
