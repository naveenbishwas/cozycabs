"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const InPatna = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Verified & Experienced Drivers",
      desc:
        "Our chauffeurs are trained, background-checked, and know Patna’s roads well. For safe and timely travel, trust our Patna car rental service.",
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
        "From budget sedans and SUVs to premium vehicles, self drive cars in Patna, and even limo hire for special events—we have something for everyone.",
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
        "All fares are upfront with no hidden costs. From car rent in Patna for a few hours to long-term rentals, you know exactly what you’ll pay.",
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
        "Whether it’s early-morning airport transfers or late-night pickups, our rental cars in Patna are available anytime.",
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
      desc:
        "Every car is sanitized, GPS-enabled, and insured for passenger safety. Families, corporates, and tourists rely on Cozy Cabz for stress-free travel.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Takht Sri Patna Sahib Gurudwara",
      img: "/inpatna/Takht.png",
      alt: "Patna Sahib Gurudwara Takht Sri Patna Sahib",
      paragraphs: [
        "One of the holiest Sikh shrines, Patna Sahib is the birthplace of Guru Gobind Singh Ji. Its majestic structure, spiritual atmosphere, and rich history draw pilgrims from across the world, making it a must-visit in Patna.",
      ],
    },
    {
      title: "Golghar",
      img: "/inpatna/Golghar.png",
      alt: "Golghar granary panoramic view",
      paragraphs: [
        "Built in 1786, Golghar is a massive granary with distinctive beehive-shaped architecture. Visitors can climb its spiral staircase to enjoy panoramic views of Patna city and the Ganges River, especially stunning at sunset.",
      ],
    },
    {
      title: "Kumhrar Park",
      img: "/inpatna/Kumhrar.png",
      alt: "Kumhrar Park Mauryan ruins in Patna",
      paragraphs: [
        "This archaeological park preserves the remains of the ancient Mauryan Empire. Featuring Ashokan pillars and ruins of monasteries, Kumhrar offers a glimpse into Patna’s glorious past and is a favorite among history enthusiasts",
      ],
    },
    {
      title: "Sanjay Gandhi Biological Park (Patna Zoo)",
      img: "/inpatna/Sanjay.png",
      alt: "Patna Zoo wildlife and gardens",
      paragraphs: [
        "Spread over lush green acres, Patna Zoo is home to tigers, elephants, leopards, and many exotic species. With gardens, boating facilities, and educational exhibits, it’s a perfect outing spot for families and children.",
      ],
    },
    {
      title: "Patna Museum (Jadu Ghar)",
      img: "/inpatna/Patna.png",
      alt: "Patna Museum Jadu Ghar Didarganj Yakshi",
      paragraphs: [
        "Popularly known as Jadu Ghar, Patna Museum displays rare artifacts, sculptures, and coins, including the famous Didarganj Yakshi statue. It’s a treasure trove for art lovers and those interested in Bihar’s heritage.",
      ],
    },
    {
      title: "Gandhi Maidan",
      img: "/inpatna/Gandhi.png",
      alt: "Gandhi Maidan ground Patna events",
      paragraphs: [
        "A landmark ground associated with India’s freedom movement, Gandhi Maidan is now a hub for political rallies, cultural events, and daily recreation. Its vast open space also makes it ideal for evening walks.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Patna cost?",
      a: "Rates depend on car type and trip distance. Cozy Cabz provides transparent pricing for every Patna car rental.",
    },
    {
      q: "Can I book a car on rent in Patna with driver for one day?",
      a: "Yes. We offer car on rent in Patna with driver for hourly, daily, and long-term packages.",
    },
    {
      q: "Do you have self drive cars in Patna?",
      a: "Absolutely. Our self drive cars in Patna are available at affordable rates for those who prefer privacy.",
    },
    {
      q: "Are luxury cars available for hire in Patna?",
      a: "Yes. We provide luxury car rental in Patna, including limo hire for weddings and VIP occasions.",
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
          <h1 className="heroeco__title">Car Rental in Patna</h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Patna, Bihar’s historic capital, blends heritage, spirituality, and modern growth. From Patna Sahib Gurudwara to Golghar and busy markets, the city offers plenty to explore. Cozy Cabz provides car rental in Patna with driver, self drive car rental in Patna, and luxury options
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
            <h2 id="attractions-title">Must-Visit Places in Patna with Cozy Cabz</h2>
            <p>Explore religious landmarks, heritage sites, and cultural attractions comfortably.</p>
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
          <p>Answers to common questions about our car rental services in Patna.</p>
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

export default InPatna;


