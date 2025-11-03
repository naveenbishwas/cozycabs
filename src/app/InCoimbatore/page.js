"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InCoimbatore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs are trained, background-checked, and know Coimbatore’s routes well—from Gandhipuram to Peelamedu, RS Puram to the airport. For dependable car rental in Coimbatore with driver, Cozy Cabz is your best choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "We provide hatchbacks, sedans, SUVs, tempo travelers, and luxury cars for rent in Coimbatore. Need a family ride? Our 7 seater car rental in Coimbatore and 8 seater car for rent in Coimbatore are perfect for group travel.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges. Our Coimbatore car rentals include fuel, tolls, and driver fees in your quote. Whether you need a car for rent in Coimbatore for one day or long trips, pricing is upfront and fair.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "From early-morning airport drops to late-night pickups, our car hire in Coimbatore is available round the clock.",
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
      desc: "Every car is sanitized, GPS-enabled, and insured. Families, corporates, and tourists rely on Cozy Cabz for secure rental cars in Coimbatore.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Marudamalai Temple",
      img: "/incoimbatore/Marudamalai.png",
      alt: "Marudamalai Temple hilltop in Coimbatore",
      paragraphs: [
        "Situated on a scenic hilltop, Marudamalai Temple is dedicated to Lord Murugan and is one of Coimbatore’s most sacred sites. The temple’s peaceful atmosphere and panoramic city views make it a favourite for devotees and tourists alike.",
      ],
    },
    {
      title: "Gass Forest Museum",
      img: "/incoimbatore/Gass.png",
      alt: "Gass Forest Museum exhibits in Coimbatore",
      paragraphs: [
        "Gass Forest Museum offers a fascinating collection of preserved animals, birds, and plants. It’s an educational hotspot where students, researchers, and families can learn about biodiversity.",
      ],
    },
    {
      title: "VOC Park & Zoo",
      img: "/incoimbatore/VOC.png",
      alt: "VOC Park and Zoo family attraction in Coimbatore",
      paragraphs: [
        "A lively recreation spot, VOC Park & Zoo is home to animal enclosures, lush gardens, and children’s play areas—perfect for families spending a relaxed day outdoors.",
      ],
    },
    {
      title: "Perur Pateeswarar Temple",
      img: "/incoimbatore/Perur.png",
      alt: "Perur Pateeswarar Temple pillars in Coimbatore",
      paragraphs: [
        "Perur Temple, dedicated to Lord Shiva, is a centuries-old shrine renowned for its beautifully carved pillars and spiritual ambiance—one of the most significant pilgrimage spots in Coimbatore.",
      ],
    },
    {
      title: "Black Thunder Water Park",
      img: "/incoimbatore/Black.png",
      alt: "Black Thunder Water Park slides near Coimbatore",
      paragraphs: [
        "Located near Mettupalayam, Black Thunder is one of India’s largest water parks with thrilling slides, wave pools, and entertainment zones—a hotspot for youngsters and families.",
      ],
    },
    {
      title: "Brookefields Mall",
      img: "/incoimbatore/Brookefields.png",
      alt: "Brookefields Mall shopping and leisure in Coimbatore",
      paragraphs: [
        "Brookefields Mall is Coimbatore’s top shopping and entertainment hub with branded outlets, restaurants, and a multiplex—perfect to unwind after sightseeing.",
        "With Cozy Cabz rent a car in Coimbatore, exploring these places becomes safe, comfortable, and convenient.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Coimbatore cost?",
      a: "Economy rides start at ₹12/km, sedans from ₹25/km, and luxury cars from ₹35/km. Cozy Cabz offers clear car rental Coimbatore rates.",
    },
    {
      q: "Can I rent a car in Coimbatore with driver for outstation trips?",
      a: "Yes. We provide car rental in Coimbatore with driver for both one-way and round-trip journeys.",
    },
    {
      q: "Do you provide luxury cars in Coimbatore?",
      a: "Absolutely. Cozy Cabz offers luxury car rental in Coimbatore for weddings, VIP events, and corporate travel.",
    },
    {
      q: "Are group vehicles available?",
      a: "Yes. We provide 7 seater car rental in Coimbatore, 8-seater cars, and tempo travelers for families and large groups.",
    },
    {
      q: "Do you also provide taxi and travel services?",
      a: "Yes. Cozy Cabz covers both car hire in Coimbatore and car travels in Coimbatore, catering to local and outstation needs.",
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
        <title>Car Rental in Coimbatore | CozyCabz with Driver</title>
        <meta
          name="description"
          content="Book car rental in Coimbatore with driver for local, outstation, and airport rides. Reliable, safe, and affordable cars with CozyCabz — available 24×7."
        />
        <meta
          property="og:title"
          content="Car Rental in Coimbatore | CozyCabz with Driver"
        />
        <meta
          property="og:description"
          content="Hire a car with driver in Coimbatore for sightseeing, family trips, or business travel. Verified chauffeurs, luxury cars, and transparent pricing."
        />
        <meta property="og:image" content="/incoimbatore/Marudamalai.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/InCoimbatore"
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Coimbatore</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Coimbatore, the Manchester of South India, is known for textiles,
            temples, malls, and hill stations like Ooty. That’s why Cozy Cabz
            Car Rental in Coimbatore with driver offers safe, convenient rides,
            including luxury rentals and 7 seater car rental in Coimbatore.
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
              Must-Visit Places in Coimbatore with Cozy Cabz
            </h2>
            <p>
              With Cozy Cabz rent a car in Coimbatore, exploring the city’s
              temples, museums, parks, and shopping hubs becomes safe and
              convenient. Enjoy every landmark at your own pace with complete
              comfort.
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
            Coimbatore.
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

export default InCoimbatore;
