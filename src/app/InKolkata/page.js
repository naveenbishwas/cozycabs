"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const InKolkata = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers know every corner of Kolkata—from the lanes of College Street to the fast routes to Netaji Subhas Chandra Bose Airport. Background-checked and trained chauffeurs ensure a secure car rental with driver experience.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Choose from economy cars, premium sedans, SUVs, tempo travelers, and luxury models. Whether for family outings or flexible self-drive needs, we have you covered.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "Clear estimates include per-km rates, driver charges, tolls, and parking. No hidden costs—only fair deals.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: "Late-night pickups, early-morning commutes, or outstation rides—our rental cars are available round the clock to fit your schedule.",
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
      desc: "Every car is sanitized after each trip, GPS-enabled, and insured. Trusted by tourists, families, and corporates for reliable car hire.",
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
      text: "Hourly and full-day packages for shopping, meetings, or sightseeing with easy online booking.",
    },
    {
      title: "Airport Transfers",
      text: "On-time pickups and drops at Netaji Subhas Chandra Bose International Airport.",
    },
    {
      title: "Outstation Trips",
      text: "One-way or round-trip options to Digha, Mandarmani, Darjeeling, Shantiniketan and more.",
    },
    {
      title: "Luxury Cars",
      text: "Premium sedans and SUVs with driver for weddings, events, or VIP guests.",
    },
    {
      title: "Self-Drive Options",
      text: "Affordable self-drive cars for privacy and flexibility.",
    },
    {
      title: "Corporate & Long-Term Leasing",
      text: "Customized monthly rental plans for companies and individuals.",
    },
  ];

  const spots = [
    {
      title: "Victoria Memorial",
      img: "/inkolkata/Victoria.png",
      alt: "Victoria Memorial",
      paragraphs: [
        "Built in memory of Queen Victoria, this marble monument is one of Kolkata’s most iconic attractions. Surrounded by lush gardens and housing an impressive museum, it offers visitors a chance to admire colonial architecture and explore art, sculptures, and historical exhibits that reflect the city’s royal past.",
      ],
    },
    {
      title: "Howrah Bridge",
      img: "/inkolkata/Howrah.png",
      alt: "Howrah Bridge",
      paragraphs: [
        "Known as Rabindra Setu, the Howrah Bridge is an engineering marvel and the lifeline of Kolkata. Stretching over the Hooghly River, it carries thousands of vehicles daily. Driving across it is a unique experience that captures the pulse of the city, making it a must for anyone exploring Kolkata",
      ],
    },
    {
      title: "Dakshineswar Kali Temple",
      img: "/inkolkata/Dakshineswar.png",
      alt: "Dakshineswar Temple",
      paragraphs: [
        "Dedicated to Goddess Kali, Dakshineswar Temple is a renowned pilgrimage spot located on the banks of the Hooghly River. Built in the 19th century, it features stunning architecture with 12 Shiva temples surrounding the main shrine. It is both a spiritual and cultural landmark that attracts visitors from across the country.",
      ],
    },
    {
      title: "Indian Museum",
      img: "/indian-museum.jpeg",
      alt: "Indian Museum",
      paragraphs: [
        "Founded in 1814, the Indian Museum is the oldest and largest museum in India. Its vast collection includes rare antiques, fossils, Mughal paintings, textiles, and even an Egyptian mummy. For history and culture enthusiasts, it provides an unmatched journey into India’s past and global heritage.",
      ],
    },
    {
      title: "Science City",
      img: "./science-city.jpeg",
      alt: "Science City",
      paragraphs: [
        "Science City is one of Asia’s largest science centers, blending education with entertainment. With interactive exhibits, 3D shows, and a space theater, it appeals to students, families, and curious minds. It’s the perfect place to enjoy hands-on learning while spending a fun-filled day.",
      ],
    },
    {
      title: "Marble Palace",
      img: "/inkolkata/Marble.png",
      alt: "Marble Palace",
      paragraphs: [
        "The Marble Palace is a 19th-century mansion showcasing exquisite neoclassical architecture and stunning art collections. Visitors can admire European paintings, statues, chandeliers, and ornamental birds in its private zoo. It offers a fascinating glimpse into Kolkata’s artistic and aristocratic legacy.",
      ],
    },
  ];

  const faqs = [
    {
      q: "What are the charges for car rental in Kolkata?",
      a: "Economy cars start at ₹12/km, premium sedans at ₹25/km, and luxury cars from ₹35/km. Transparent rates with no hidden fees.",
    },
    {
      q: "Can I rent a car in Kolkata with driver for outstation trips?",
      a: "Yes, one-way and round-trip outstation packages are available.",
    },
    {
      q: "Do you offer airport transfers in Kolkata?",
      a: "Absolutely—24×7 airport pickups and drops are available.",
    },
    {
      q: "Are self-drive cars available?",
      a: "Yes, self-drive options are available for flexibility and privacy.",
    },
    {
      q: "How do I book quickly?",
      a: "Book online in a few steps—confirmation and driver details are shared instantly.",
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
          <h1 className="heroeco__title">Car Rental in Kolkata</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Kolkata, the City of Joy, blends colonial architecture, vibrant
            culture, and modern lifestyle. Cozy Cabz provides dependable car
            rental with driver for safe, smooth, and stress-free travel—local
            trips, business, outstation, or airport.
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
              Must-Visit Places in Kolkata with Cozy Cabz
            </h2>
            <p>
              Explore Kolkata’s famous landmarks comfortably with Cozy Cabz—no
              traffic or parking worries.
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
          <p>Answers to common questions about our Kolkata services.</p>
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

export default InKolkata;
