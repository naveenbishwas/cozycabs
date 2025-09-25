"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InRajkot = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc:
        "Our trained drivers know every corner of Rajkot, from Kalavad Road to Jubilee Garden. For safe and punctual Rajkot car rental services, Cozy Cabz is a trusted name.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Cars",
      desc:
        "We offer sedans, SUVs, hatchbacks, tempo travelers, and premium vehicles. Whether it’s a self drive car in Rajkot, car hire for business, or a 10 seater rental car for family outings, we have the right choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc:
        "No hidden charges. Our Rajkot car rental fares include driver charges, tolls, parking, and fuel. Whether booking for a few hours or multiple days, you get fair, upfront rates.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc:
        "We’re available round the clock—be it early-morning airport transfers or late-night pickups.",
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
      desc:
        "Every vehicle is sanitized, GPS-enabled, and insured. Families, corporates, and tourists rely on Cozy Cabz for secure car hire in Rajkot.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kaba Gandhi No Delo",
      img: "/g1.webp",
      alt: "Kaba Gandhi No Delo museum in Rajkot",
      paragraphs: [
        "Mahatma Gandhi’s childhood home, now a museum with photographs, writings, and personal belongings—offering deep insights into India’s freedom movement.",
      ],
    },
    {
      title: "Watson Museum",
      img: "/g2.webp",
      alt: "Watson Museum in Jubilee Garden, Rajkot",
      paragraphs: [
        "Inside Jubilee Garden, this museum showcases sculptures, coins, artifacts, and paintings from different eras—highlighting Rajkot’s cultural heritage.",
      ],
    },
    {
      title: "Rotary Dolls Museum",
      img: "/g3.webp",
      alt: "Rotary Dolls Museum international dolls collection",
      paragraphs: [
        "With 1,500+ dolls from 100+ countries, this colorful museum introduces diverse cultures through miniature costumes and displays—fun and educational.",
      ],
    },
    {
      title: "Nyari Dam",
      img: "/g4.webp",
      alt: "Nyari Dam green retreat near Rajkot",
      paragraphs: [
        "A calm retreat surrounded by greenery—ideal for picnics, evening outings, and nature photography away from the city buzz.",
      ],
    },
    {
      title: "Prem Mandir",
      img: "/g3.webp",
      alt: "Prem Mandir temple architecture in Rajkot",
      paragraphs: [
        "A beautiful temple known for intricate carvings and peaceful ambiance, drawing devotees and tourists alike.",
      ],
    },
    {
      title: "Aji Dam & Garden",
      img: "/g4.webp",
      alt: "Aji Dam and Garden family spot in Rajkot",
      paragraphs: [
        "A popular recreational spot with lush gardens, fountains, and play areas—great for picnics, boating, and evening strolls, especially scenic during monsoon.",
        "With Cozy Cabz rent a car in Rajkot, exploring these attractions is easy, comfortable, and convenient.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Rajkot cost?",
      a: "Economy cars start at ₹12/km, sedans at ₹25/km, and premium SUVs from ₹35/km. Cozy Cabz provides transparent Rajkot car rental rates.",
    },
    {
      q: "Can I book a car on rent in Rajkot with driver for one day?",
      a: "Yes, we provide car on rent in Rajkot with driver for both daily and long-term needs.",
    },
    {
      q: "Are self drive cars available in Rajkot?",
      a: "Absolutely. We offer self drive cars in Rajkot with clear packages and affordable prices.",
    },
    {
      q: "Do you provide cars for outstation trips?",
      a: "Yes, our car rental in Rajkot includes one-way and round-trip options for nearby cities like Dwarka, Somnath, and Junagadh.",
    },
    {
      q: "Do you provide group travel vehicles?",
      a: "Yes, we have 10 seater rental cars and tempo travelers for large groups.",
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
      <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke="#fff" strokeWidth="2" />
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
      <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
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
          <h1 className="heroeco__title">Car Rental in Rajkot</h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Rajkot blends cultural heritage, business opportunities, and modern living. From Kaba Gandhi No Delo to lakes, temples, and bustling markets, there’s much to explore. Cozy Cabz offers car rental in Rajkot with driver and self drive options—making travel simple, safe, and stress-free.
          </p>
        </div>
      </section>

      <section className="booking-form" aria-labelledby="booking-form-title">
        <div className="booking-form__container">
          <h2 id="booking-form-title" className="booking-form__title">
            Book Your <span>Car</span>
          </h2>

          <form className="booking-form__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label className="sr-only" htmlFor="bf-name">
                Your Name
              </label>
              <input id="bf-name" name="name" type="text" placeholder="Enter Your Name" autoComplete="name" required aria-required="true" />

              <label className="sr-only" htmlFor="bf-email">
                Email
              </label>
              <input id="bf-email" name="email" type="email" placeholder="Enter Email Id" autoComplete="email" required aria-required="true" />

              <div className="phone-field" role="group" aria-labelledby="bf-phone-label">
                <span id="bf-phone-label" className="sr-only">
                  Phone Number
                </span>
                <select className="styled-select" name="dial-code" defaultValue="+91" aria-label="Country code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input id="bf-phone" name="phone" type="tel" inputMode="tel" placeholder="Phone No" autoComplete="tel" required aria-required="true" />
              </div>
            </div>

            <div className="form-row">
              <label className="sr-only" htmlFor="bf-date">
                Pickup Date
              </label>
              <input id="bf-date" name="date" type="date" placeholder="dd-mm-yyyy" />

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
            <textarea id="bf-notes" name="notes" placeholder="Enter Requirement Details"></textarea>

            <div className="form-footer">
              <div className="form-agree">
                <input id="bf-agree" type="checkbox" required aria-required="true" />
                <label htmlFor="bf-agree">
                  By clicking "Send Enquiry" button, you agree to our <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>

              <div className="captcha" aria-hidden="true">I'm not a robot (Captcha)</div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="trustcc">
        <div className="trustcc__container">
          <h2 className="trustcc__title">
            Why Choose Cozy Cabz in<span> Rajkot?</span>
          </h2>
          <div className="trustcc__grid">
            {items.map((it, i) => (
              <article className="trustcc__card" key={i}>
                <div className="trustcc__icon">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="howto">
        <div className="howtoWrap">
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Rajkot</h2>
          <p className="howtoSubtitle">Follow these steps to book your ride in Rajkot.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Our Team" text="Call us or book online to start your car rental in Rajkot quickly and hassle-free." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Share Your Trip Details" text="Enter pickup & drop points, travel date, time, and trip type—local, outstation, or airport transfer." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Select Your Vehicle" text="Pick from sedans, SUVs, luxury cars, or self drive cars in Rajkot depending on your comfort and budget." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Instant Confirmation" text="Receive complete booking details instantly, including car model, driver info, and estimated arrival time." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Enjoy a Smooth Ride" text="Relax while our professional chauffeurs handle Rajkot’s traffic and navigation." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Rajkot</h2>
          <p className="howrent__intro">Our car rental in Rajkot covers every travel need:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>Flexible hourly or daily car hire for shopping, business, and sightseeing.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>On-time rides to and from Rajkot Airport.</p>
            </li>
            <li className="howrent__item">
              <h3>Outstation Trips</h3>
              <p>Comfortable rental cars for travel to Dwarka, Somnath, Junagadh, and more.</p>
            </li>
            <li className="howrent__item">
              <h3>Self Drive Cars</h3>
              <p>Choose self drive cars in Rajkot for independence with transparent pricing.</p>
            </li>
            <li className="howrent__item">
              <h3>Luxury Cars & SUVs</h3>
              <p>Premium options for weddings, VIP travel, and events.</p>
            </li>
            <li className="howrent__item">
              <h3>Group Travel</h3>
              <p>SUVs, tempo travelers, and 10 seater rental cars for family or corporate tours.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Rajkot with Cozy Cabz</h2>
            <p>Explore cultural landmarks, museums, temples, and scenic spots at your own pace.</p>
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
          <p>Answers to common questions about our car rental services in Rajkot.</p>
        </div>

        <div className="faq-list" role="list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={i} role="listitem">
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

export default InRajkot;


