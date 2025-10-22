"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import CityForm from "../Components/CityForm/page";

const InDelhi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  // const items = [
  //   {
  //     title: "Well Known for Quality Services",
  //     desc: "Recognized across India for our commitment to excellence and premium service standards.",
  //     image: "/known.png",
  //   },
  //   {
  //     title: "Earned Positive Reviews from All Clients",
  //     desc: "Consistent 5-star ratings and testimonials from thousands of satisfied customers.",
  //     image: "/postive.png",
  //   },
  //   {
  //     title: "The Largest Network of Drivers",
  //     desc: "Extensive network of professional, verified drivers covering every major city in India.",
  //     image: "/ntework.png",
  //   },
  //   {
  //     title: "Safe & Secure",
  //     desc: "Background-verified partners and insured moves for complete peace of mind.",
  //     image: "/safe.png",
  //   },
  //   {
  //     title: "Nationwide Coverage",
  //     desc: "Strong presence with on-ground support in metros and tier‑2/3 cities.",
  //     image: "/nationwide.png",
  //   },
  //   {
  //     title: "Transparent Pricing",
  //     desc: "Clear quotes, no hidden charges—ever.",
  //     image: "/transparent.png",
  //   },
  // ];

  const spots = [
    {
      title: "Red Fort & Chandni Chowk",
      img: "/indelhi/Red-Fort.png",
      alt: "Historic Red Fort and bustling Chandni Chowk",
      paragraphs: [
        "Begin your journey at the majestic Red Fort, a UNESCO World Heritage site that symbolizes India’s rich history. Just nearby is Chandni Chowk, one of Delhi’s oldest and busiest markets—perfect for heritage lovers and foodies alike.",
      ],
    },
    {
      title: "Qutub Minar & Humayun’s Tomb",
      img: "/indelhi/Qutub-Minar.png",
      alt: "Qutub Minar complex and Humayun’s Tomb gardens",
      paragraphs: [
        "For architecture admirers, Qutub Minar and Humayun’s Tomb are must-visits. The tallest brick minaret and the Mughal-era tomb that inspired the Taj Mahal make for stunning photography spots.",
      ],
    },
    {
      title: "India Gate & Rajpath",
      img: "/indelhi/India-Gate (1).png",
      alt: "India Gate illuminated in the evening",
      paragraphs: [
        "At the heart of the city, India Gate stands tall as a war memorial. An evening walk along Rajpath with glowing lights is truly memorable and iconic.",
      ],
    },
    {
      title: "Lotus Temple & Akshardham",
      img: "/indelhi/Lotus-Temple (1).png",
      alt: "Lotus Temple and Akshardham complex",
      paragraphs: [
        "Seek peace at the Lotus Temple or explore the grand Akshardham Temple—both blend spirituality, art, and culture, ideal for travelers seeking calm and beauty.",
      ],
    },
    {
      title: "Connaught Place & Khan Market",
      img: "/indelhi/Connaught (1).png",
      alt: "Connaught Place market circles and shops",
      paragraphs: [
        "For shopping and city vibes, Connaught Place is packed with branded stores and eateries, while Khan Market offers upscale cafés, bookstores, and boutiques.",
      ],
    },
    {
      title: "Lodhi Gardens & Hauz Khas Village",
      img: "/indelhi/Lodhi-Gardens (1).png",
      alt: "Lodhi Gardens greenery and Hauz Khas fort",
      paragraphs: [
        "Enjoy a natural and cultural mix at Lodhi Gardens and Hauz Khas Village—perfect for walks, heritage tombs, art galleries, cafés, and nightlife.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a car rental in Delhi cost per km?",
      a: "Economy rides start from around ₹12–₹15/km, premium cars from ₹25/km, and luxury cars from ₹35/km. Whether you choose a car rental service in Delhi for local trips or a car hire Delhi with driver for longer journeys, you’ll always get a transparent fare estimate.",
    },
    {
      q: "Can I book a cab from Delhi to other cities?",
      a: "Yes. Popular routes include Delhi to Agra, Jaipur, Rishikesh, Shimla, and Manali. Our car rentals New Delhi also provide one-way and round-trip options.",
    },
    {
      q: "Do you provide 24×7 airport transfers in Delhi?",
      a: "Absolutely. We cover all terminals at Indira Gandhi International Airport. Our premium taxi service in Delhi and luxury taxi service in Delhi ensure timely pickups and drops, even during late nights or early mornings.",
    },
    {
      q: "Is there a package for Delhi sightseeing?",
      a: "Yes. We provide half-day and full-day rental packages, such as 8 hrs/80 km, where you can cover Delhi’s top attractions in comfort.",
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
          <h1 className="heroeco__title">Car Rental in Delhi</h1>
          <span className="small-head">
            <h4>Safe, Reliable & Comfortable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Delhi, India’s capital, blends history and modern life with forts,
            markets, and business hubs. But heavy traffic and crowds make travel
            stressful. That’s where Cozy Cabz Car Rental in Delhi ensures
            smooth, safe, and hassle-free journeys every time.
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
              Must-Visit Places in Delhi with Cozy Cabz
            </h2>
            <p>
              Delhi is a city where every street has a story to tell. From
              centuries-old Mughal forts to modern shopping hubs, the capital is
              a mix of history, culture, spirituality, and vibrant city life.
              With cozy cabz car rental in Delhi with driver, exploring becomes
              stress-free—you just sit back and enjoy while we take care of
              traffic, routes, and parking.
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

export default InDelhi;
