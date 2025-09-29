"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const Inhyderabad = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs know Hyderabad’s roads inside out—whether it’s the crowded lanes of Charminar, the IT corridors of Hitech City, or the fast route to Shamshabad Airport. Every driver is trained, background-checked, and committed to safe travel. If you’re looking to rent a car with driver in Hyderabad, cozy cabz is your reliable choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "From budget sedans to spacious SUVs and luxury cars, our fleet suits every purpose. Whether you want a 7 seater car for rent in Hyderabad for family outings, an economy car for daily commutes, or a premium vehicle for business trips, cozy cabz has the perfect option.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges—ever. Upfront estimates cover per km charges, driver fees, parking, and tolls. Whether you need a car on hire for one day or a long outstation trip, you’ll always know what you’re paying for.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Available 24×7",
      desc: "Hyderabad is always on the move, and so are we. From early-morning airport drops to late-night pickups, our Hyderabad car rental with driver is available round the clock.",
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
      desc: "Every car is GPS-enabled, sanitized after every ride, and insured for passenger safety. Families, tourists, and corporate travelers trust cozy cabz for secure and comfortable rides across Hyderabad.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Charminar",
      img: "/g1.webp",
      alt: "Charminar monument",
      paragraphs: [
        "The heart of Old Hyderabad, Charminar is a 16th-century monument and the city’s most recognized landmark. Surrounded by Laad Bazaar and other vibrant markets, it’s the perfect place to shop for pearls, bangles, and handicrafts while tasting authentic Hyderabadi street food.",
      ],
    },
    {
      title: "Golconda Fort",
      img: "/g2.webp",
      alt: "Golconda Fort view",
      paragraphs: [
        "A majestic structure from the medieval Golconda Sultanate, Golconda Fort is famous for its unique acoustics and breathtaking views of the city. The evening light-and-sound show adds life to its rich history, making it a must-visit for culture and history lovers.",
      ],
    },
    {
      title: "Hussain Sagar Lake & Tank Bund",
      img: "/g3.webp",
      alt: "Hussain Sagar Buddha statue",
      paragraphs: [
        "Connecting Hyderabad and Secunderabad, Hussain Sagar Lake is a serene spot known for its giant Buddha statue standing tall in the middle of the water. Tank Bund, along the lake, offers beautiful evening views and is a popular hangout for families and couples alike",
      ],
    },
    {
      title: "Chowmahalla Palace",
      img: "/g4.webp",
      alt: "Chowmahalla Palace interiors",
      paragraphs: [
        "Once the residence of the Nizams, Chowmahalla Palace reflects Mughal and Persian influences in its grand courtyards, halls, and chandeliers. The palace showcases royal artifacts and gives visitors a glimpse into Hyderabad’s regal past.",
      ],
    },
    {
      title: "Ramoji Film City",
      img: "/g1.webp",
      alt: "Ramoji Film City sets",
      paragraphs: [
        "Spread over 2,000 acres, Ramoji Film City is the world’s largest integrated film studio complex. With movie sets, adventure rides, live shows, and gardens, it’s a paradise for cinema lovers and families looking for a fun-filled day.",
      ],
    },
    {
      title: "Birla Mandir",
      img: "/g2.webp",
      alt: "Birla Mandir temple",
      paragraphs: [
        "Built entirely from white marble, Birla Mandir sits atop Naubat Pahad hill and is dedicated to Lord Venkateswara. The temple not only offers spiritual peace but also provides panoramic views of Hyderabad city, especially beautiful at sunset",
      ],
    },
    {
      title: "Salar Jung Museum",
      img: "/g3.webp",
      alt: "Salar Jung Museum gallery",
      paragraphs: [
        "One of the largest museums in India, the Salar Jung Museum houses rare collections of art, manuscripts, weapons, and sculptures gathered by the Salar Jung family. From Persian carpets to European clocks, it’s a treasure trove for history and art enthusiasts.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Hyderabad cost per km?",
      a: "Economy rides start at ₹12–₹15 per km, premium cars at ₹25 per km, and luxury cars from ₹35 per km. With cozy cabz, all fares are transparent, whether for car hire in Hyderabad or outstation trips.",
    },
    {
      q: "Can I rent a car in Hyderabad for outstation travel?",
      a: "Yes. Our Hyderabad car travels service covers nearby cities and tourist spots with both one-way and round-trip options.",
    },
    {
      q: "Do you provide 24×7 airport transfers in Hyderabad?",
      a: "Absolutely. Our car rental Hyderabad with driver is available round the clock for Rajiv Gandhi International Airport.",
    },
    {
      q: "Can I book a car for just one day in Hyderabad?",
      a: "Yes. We offer one day car rental in Hyderabad with driver (8 hrs/80 km) for city tours, business meetings, or events.",
    },
    {
      q: "Do you have 7-seater or luxury cars available in Hyderabad?",
      a: "Yes, our fleet includes SUVs, tempo travelers, and luxury cars with driver—ideal for family trips, weddings, or corporate needs.",
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
          <h1 className="heroeco__title">Car Rental in Hyderabad</h1>
          <span className="small-head">
            <br />
            <h4>Reliable, Safe & Comfortable</h4>
          </span>
          <p className="heroeco__sub">
            Hyderabad, the City of Pearls, blends history, culture, and
            modernity—from centuries-old monuments and bazaars to IT hubs and
            luxury malls. Navigating the traffic can be stressful. Cozy cabz
            offers car rental in Hyderabad with driver for smooth, safe, and
            hassle-free journeys—local, outstation, or airport.
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
     <Howto/>
    <Howrent />
      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Hyderabad with Cozy Cabz
            </h2>
            <p>
              Explore Hyderabad’s royal heritage and modern charm with cozy
              cabz. Travel comfortably without worrying about traffic or
              parking.
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
            Answers to the most common questions about our Hyderabad services.
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

export default Inhyderabad;
