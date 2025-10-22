"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const InJaipur = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers are experienced and know Jaipur’s roads well—Johari Bazaar, Amer Road, and the quickest route to the airport. For reliable Jaipur car rental with driver, Cozy Cabz is your best choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "From budget cars and SUVs to tempo travelers and self-drive options—whether you need a family vehicle, premium sedan, or 7 seater car rental in Jaipur, we have it all.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "Clear, upfront pricing. You’ll know your Jaipur car rental rates before booking—covering fuel, driver charges, tolls, and parking.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "From early-morning airport transfers to late-night pickups, Cozy Cabz provides car on rent in Jaipur round the clock.",
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
      desc: "All vehicles are sanitized, GPS-enabled, and insured. Families, tourists, and corporate clients trust Cozy Cabz for safe and comfortable car rentals in Jaipur.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "Local Rentals",
      text: "Hourly and full-day packages for sightseeing, shopping, or business use.",
    },
    {
      title: "Airport Transfers",
      text: "Reliable pickups and drops at Jaipur International Airport.",
    },
    {
      title: "Outstation Trips",
      text: "One-way or round-trip options to Ajmer, Pushkar, Jodhpur, Udaipur and more.",
    },
    {
      title: "Luxury & Premium Cars",
      text: "Hire premium sedans and SUVs for weddings, VIP events, and corporate use.",
    },
    {
      title: "Self-Drive Cars",
      text: "Affordable self-drive cars in Jaipur for privacy and flexible travel.",
    },
    {
      title: "Corporate Rentals & Leasing",
      text: "Long-term vehicle rentals with competitive packages for companies.",
    },
  ];

  const spots = [
    {
      title: "Amber Fort",
      img: "/injaipur/Amber.png",
      alt: "Amber Fort and Maota Lake",
      paragraphs: [
        "Amber Fort is one of Jaipur’s grandest monuments, known for its artistic blend of Hindu and Mughal architecture. The fort features majestic gates, expansive courtyards, and the breathtaking Sheesh Mahal (Mirror Palace). Overlooking Maota Lake, it offers stunning views and cultural light shows that bring Rajasthan’s history to life.",
      ],
    },
    {
      title: "City Palace",
      img: "/injaipur/City-Palace.png",
      alt: "City Palace courtyards",
      paragraphs: [
        "Located at the center of Jaipur, City Palace showcases a fine mix of Rajput and Mughal styles. With grand courtyards, beautifully decorated museums, and a royal residence, it gives visitors a glimpse into the luxurious lifestyle of Jaipur’s rulers. It’s a must-visit for history buffs and culture enthusiasts.",
      ],
    },
    {
      title: "Hawa Mahal",
      img: "/injaipur/Hawa.png",
      alt: "Hawa Mahal facade",
      paragraphs: [
        "Known as the “Palace of Winds,” Hawa Mahal is Jaipur’s most iconic landmark. Its honeycomb façade of 953 windows was designed for royal women to observe city life unseen. Today, it is a favorite for photographers and tourists, offering both cultural significance and architectural brilliance.",
      ],
    },
    {
      title: "Jantar Mantar",
      img: "./jantar-mantar.jpeg",
      alt: "Jantar Mantar instruments",
      paragraphs: [
        "A UNESCO World Heritage Site, Jantar Mantar is an astronomical wonder built by Maharaja Jai Singh II. It houses 19 instruments, including the world’s largest stone sundial, still accurate today. The observatory is a fascinating site for those interested in science, astronomy, and Indian innovation.",
      ],
    },
    {
      title: "Jal Mahal",
      img: "/injaipur/Jal.png",
      alt: "Jal Mahal on Man Sagar Lake",
      paragraphs: [
        "Situated in the middle of Man Sagar Lake, Jal Mahal is a picturesque palace that appears to float on water. Surrounded by the Aravalli hills, it is especially stunning during sunrise and sunset. The peaceful setting makes it an ideal stop for travelers seeking relaxation and scenic views.",
      ],
    },
    {
      title: "Nahargarh Fort",
      img: "/injaipur/Nahargarh.png",
      alt: "Nahargarh Fort view",
      paragraphs: [
        "Perched high on the Aravalli hills, Nahargarh Fort provides breathtaking panoramic views of Jaipur city. Once a royal retreat, the fort is now a popular spot for evening outings. Its blend of history, architecture, and natural beauty makes it one of Jaipur’s most visited attractions.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Jaipur cost per km?",
      a: "Economy cars start at ₹12/km, sedans from ₹25/km, and luxury cars from ₹35/km. Clear and fair Jaipur car rental rates.",
    },
    {
      q: "Can I rent a car in Jaipur with driver for outstation trips?",
      a: "Yes. One-way and round-trip packages are available for nearby cities.",
    },
    {
      q: "Do you provide airport transfers in Jaipur?",
      a: "Yes. 24×7 airport pickups and drops.",
    },
    {
      q: "Are self-drive cars available in Jaipur?",
      a: "Yes, self-drive options are available for privacy and flexibility.",
    },
    {
      q: "Do you have SUVs and 7-seater cars for hire?",
      a: "Absolutely—7 seater car rental in Jaipur and SUVs for families, weddings, and group travel.",
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
          <h1 className="heroeco__title">Car Rental in Jaipur</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Jaipur, the Pink City, blends royal heritage with modern comforts.
            Cozy Cabz offers trusted car rental in Jaipur with driver—safe,
            comfortable, and affordable for sightseeing, business trips, airport
            transfers, and weekend getaways.
          </p>
        </div>
      </section>

      <section className="booking-form" aria-labelledby="booking-form-title">
        <div className="booking-form__container">
          <h2 id="booking-form-title" className="booking-form__title">
            Book Your <span>Car</span>
          </h2>
          <form
            className="booking-form__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <label className="sr-only" htmlFor="bf-name">
                Your Name
              </label>
              <input
                id="bf-name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                autoComplete="name"
                required
                aria-required="true"
              />

              <label className="sr-only" htmlFor="bf-email">
                Email
              </label>
              <input
                id="bf-email"
                name="email"
                type="email"
                placeholder="Enter Email Id"
                autoComplete="email"
                required
                aria-required="true"
              />

              <div
                className="phone-field"
                role="group"
                aria-labelledby="bf-phone-label"
              >
                <span id="bf-phone-label" className="sr-only">
                  Phone Number
                </span>
                <select
                  className="styled-select"
                  name="dial-code"
                  defaultValue="+91"
                  aria-label="Country code"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  id="bf-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone No"
                  autoComplete="tel"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="sr-only" htmlFor="bf-date">
                Pickup Date
              </label>
              <input
                id="bf-date"
                name="date"
                type="date"
                placeholder="dd-mm-yyyy"
              />

              <label className="sr-only" htmlFor="bf-purpose">
                Rental Purpose
              </label>
              <select id="bf-purpose" name="purpose" className="styled-select">
                <option value="">Select Rental Purpose</option>
                <option>Business</option>
                <option>Leisure</option>
                <option>Airport Transfer</option>
                <option>Wedding/Event</option>
              </select>
            </div>

            <label className="sr-only" htmlFor="bf-notes">
              Requirement Details
            </label>
            <textarea
              id="bf-notes"
              name="notes"
              placeholder="Enter Requirement Details"
            ></textarea>

            <div className="form-footer">
              <div className="form-agree">
                <input
                  id="bf-agree"
                  type="checkbox"
                  required
                  aria-required="true"
                />
                <label htmlFor="bf-agree">
                  By clicking "Send Enquiry" button, you agree to our{" "}
                  <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>

              <div className="captcha" aria-hidden="true">
                I'm not a robot (Captcha)
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Trustcc />
      <Howto />
      <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Jaipur with Cozy Cabz
            </h2>
            <p>
              Explore Jaipur’s rich heritage and cultural landmarks at your own
              pace, without the stress of traffic or parking.
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
          <p>Answers to common questions about our Jaipur services.</p>
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

export default InJaipur;
