"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const InGuwahati = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc:
        "Every chauffeur is trained, background-checked, and experienced with city and outstation routes.",
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
        "Economy hatchbacks, premium sedans, SUVs, tempo travelers, and rental cars in Guwahati for all occasions.",
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
        "No hidden costs. You get clear car rental price in Guwahati before booking.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Flexible Rentals",
      desc:
        "Choose hourly, daily, or outstation packages with options for car hire or self-drive rentals.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc:
        "Early morning pickup or late-night drop—our Guwahati car rental service is always available.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kamakhya Temple",
      img: "/inguwahati/Kamakhya.png",
      alt: "Kamakhya Temple Nilachal Hill Guwahati",
      paragraphs: [
        "One of the most revered pilgrimage sites in India, Kamakhya Temple is perched atop Nilachal Hill. Known for its spiritual significance and grand architecture, it is a must-visit for devotees and tourists alike.",
      ],
    },
    {
      title: "Umananda Island",
      img: "/inguwahati/Umananda.png",
      alt: "Umananda Island Brahmaputra river temple",
      paragraphs: [
        "Set in the middle of the Brahmaputra River, Umananda is a small island temple dedicated to Lord Shiva. Its natural beauty and serene surroundings make it perfect for a peaceful day trip",
      ],
    },
    {
      title: "Assam State Zoo & Botanical Garden",
      img: "/inguwahati/Assam.png",
      alt: "Assam State Zoo and Botanical Garden one-horned rhino",
      paragraphs: [
        "A favorite among families, this zoo is home to the one-horned rhinoceros, tigers, and exotic birds. Combined with a botanical garden, it offers both wildlife encounters and greenery to enjoy.",
      ],
    },
    {
      title: "Pobitora Wildlife Sanctuary",
      img: "/inguwahati/Pobitora.png",
      alt: "Pobitora Wildlife Sanctuary rhino day trip from Guwahati",
      paragraphs: [
        "Just a short drive from Guwahati, Pobitora is famous for having one of the highest populations of one-horned rhinos. With rental cars in Guwahati, it’s an ideal spot for a day trip into nature.",
      ],
    },
    // {
    //   title: "Fancy Bazaar",
    //   img: "/g3.webp",
    //   alt: "Fancy Bazaar shopping Guwahati handicrafts",
    //   paragraphs: [
    //     "The bustling heart of Guwahati’s shopping scene, Fancy Bazaar is filled with traditional Assamese handicrafts, clothing, jewelry, and souvenirs. A must-visit for shoppers and food lovers.",
    //   ],
    // },
    // {
    //   title: "Srimanta Sankardev Kalakshetra",
    //   img: "/g4.webp",
    //   alt: "Srimanta Sankardev Kalakshetra cultural complex",
    //   paragraphs: [
    //     "Cultural center with museums, art galleries, and open-air theaters—celebrating Assam’s art, culture, and traditions.",
    //     "With Cozy Cabz rent a car in Guwahati, explore these comfortably and stress-free.",
    //   ],
    // },
  ];

  const faqs = [
    {
      q: "What is the car rental price in Guwahati?",
      a: "Prices vary by vehicle type and duration. We ensure transparent pricing with no hidden charges.",
    },
    {
      q: "Can I book a car on rent in Guwahati with driver for one day?",
      a: "Yes. Our car hire includes hourly, daily, and outstation packages.",
    },
    {
      q: "Do you provide luxury car rental in Guwahati?",
      a: "Absolutely. Luxury cars for weddings, business trips, and special occasions are available.",
    },
    {
      q: "Can I rent a car in Guwahati for outstation trips?",
      a: "Yes. We cover Shillong, Cherrapunji, Kaziranga, and more.",
    },
    {
      q: "How do I book a car rental in Guwahati?",
      a: "Use our website for booking or call our team for instant confirmation.",
    },
  ];

  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path d="M6 2h4l1 5-3 2a14 14 0 007 7l2-3 5 1v4c0 1-1 2-2 2A18 18 0 014 4C4 3 5 2 6 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5v5h-2a2 2 0 01-4 0H9a2 2 0 01-4 0H3v-5z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
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
          <h1 className="heroeco__title">Car Rental in Guwahati</h1>
          <span className="small-head">
            <br />
            <h4>Comfortable, Safe & Reliable</h4>
          </span>
          <p className="heroeco__sub">
            Guwahati, the gateway to Northeast India, blends temples, wildlife sanctuaries, and modern city life. Yet traffic makes travel hectic. Cozy Cabz Car Rental in Guwahati with driver ensures safe, reliable journeys with well-maintained cars—covering luxury rentals, affordable rides, airport transfers.
          </p>
        </div>
      </section>

      <section className="booking-form" aria-labelledby="booking-form-title">
        <div className="booking-form__container">
          <h2 id="booking-form-title" className="booking-form__title">Book Your <span>Car</span></h2>
          <form className="booking-form__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label className="sr-only" htmlFor="bf-name">Your Name</label>
              <input id="bf-name" name="name" type="text" placeholder="Enter Your Name" autoComplete="name" required aria-required="true" />
              <label className="sr-only" htmlFor="bf-email">Email</label>
              <input id="bf-email" name="email" type="email" placeholder="Enter Email Id" autoComplete="email" required aria-required="true" />
              <div className="phone-field" role="group" aria-labelledby="bf-phone-label">
                <span id="bf-phone-label" className="sr-only">Phone Number</span>
                <select className="styled-select" name="dial-code" defaultValue="+91" aria-label="Country code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input id="bf-phone" name="phone" type="tel" inputMode="tel" placeholder="Phone No" autoComplete="tel" required aria-required="true" />
              </div>
            </div>
            <div className="form-row">
              <label className="sr-only" htmlFor="bf-date">Pickup Date</label>
              <input id="bf-date" name="date" type="date" placeholder="dd-mm-yyyy" />
              <label className="sr-only" htmlFor="bf-purpose">Rental Purpose</label>
              <select id="bf-purpose" name="purpose" className="styled-select">
                <option value="">Select Rental Purpose</option>
                <option>Business</option>
                <option>Leisure</option>
                <option>Airport Transfer</option>
                <option>Wedding/Event</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="bf-notes">Requirement Details</label>
            <textarea id="bf-notes" name="notes" placeholder="Enter Requirement Details"></textarea>
            <div className="form-footer">
              <div className="form-agree">
                <input id="bf-agree" type="checkbox" required aria-required="true" />
                <label htmlFor="bf-agree">By clicking "Send Enquiry" button, you agree to our <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></label>
              </div>
              <div className="captcha" aria-hidden="true">I'm not a robot (Captcha)</div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">Send Enquiry</button>
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
            <h2 id="attractions-title">Must-Visit Places in Guwahati with Cozy Cabz</h2>
            <p>Travel at your own pace—comfortable and stress-free.</p>
          </header>
          <div className="attractions__grid">
            {spots.map((s) => (
              <article className="spot" key={s.title}>
                <figure className="spot__figure">
                  <img className="spot__img" src={s.img} alt={s.alt} />
                </figure>
                <h3 className="spot__title">{s.title}</h3>
                {s.paragraphs.map((t, i) => (
                  <p className="spot__text" key={i}>{t}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions about our Guwahati car rentals.</p>
        </div>
        <div className="faq-list" role="list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={i} role="listitem">
                <button className="faq-question" aria-expanded={open} aria-controls={`faq-panel-${i}`} id={`faq-control-${i}`} onClick={() => toggle(i)}>
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-control-${i}`} className="faq-answer" style={{ maxHeight: open ? "300px" : "0px" }}>
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

export default InGuwahati;


