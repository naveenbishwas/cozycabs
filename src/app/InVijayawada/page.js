"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";

const InVijayawada = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Verified Drivers",
      desc:
        "Our chauffeurs are experienced, background-checked, and familiar with Vijayawada’s roads. For dependable Vijayawada car rental service, we guarantee safe and punctual rides every time.",
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
        "Choose from hatchbacks, sedans, SUVs, tempo travelers, and premium cars. Whether it’s car hire Vijayawada for local travel, a luxury car rental in Vijayawada for events, or self drive cars in Vijayawada for privacy, we’ve got you covered.",
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
        "With Cozy Cabz, you get upfront quotes with no hidden charges. From daily car rent in Vijayawada to rental car in Vijayawada for long trips, our prices are clear and fair.",
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
        "Need an early-morning airport drop or a late-night pickup? Our car rental services in Vijayawada are available round the clock for your convenience.",
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
        "All vehicles are sanitized, GPS-enabled, and fully insured. Families, corporates, and tourists trust Cozy Cabz for secure car hire in Vijayawada.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kanaka Durga Temple",
      img: "/g1.webp",
      alt: "Kanaka Durga Temple on Indrakeeladri Hill in Vijayawada",
      paragraphs: [
        "Perched on Indrakeeladri Hill, Kanaka Durga Temple is Vijayawada’s most famous shrine. Dedicated to Goddess Durga, it offers breathtaking views of the Krishna River. Pilgrims and tourists alike are drawn to its spirituality and scenic surroundings.",
      ],
    },
    {
      title: "Prakasam Barrage",
      img: "/g2.webp",
      alt: "Prakasam Barrage across Krishna River at night",
      paragraphs: [
        "Stretching across the Krishna River, Prakasam Barrage is both an engineering marvel and a popular tourist spot. The illuminated bridge at night is stunning—perfect for evening visits and photography.",
      ],
    },
    {
      title: "Undavalli Caves",
      img: "/g3.webp",
      alt: "Ancient Undavalli Caves rock-cut architecture",
      paragraphs: [
        "Dating back to the 4th century, the Undavalli Caves are rock-cut wonders featuring ancient sculptures and intricate carvings. Overlooking the Krishna River, they are a must-visit for history lovers and explorers.",
      ],
    },
    {
      title: "Bhavani Island",
      img: "/g4.webp",
      alt: "Green Bhavani Island on Krishna River",
      paragraphs: [
        "One of India’s largest river islands, Bhavani Island is a green retreat ideal for boating, picnics, and nature walks. Surrounded by the Krishna River, it’s an ideal weekend spot for families and couples.",
      ],
    },
    {
      title: "Gandhi Hill",
      img: "/g3.webp",
      alt: "Gandhi Hill viewpoint and memorial in Vijayawada",
      paragraphs: [
        "A memorial dedicated to Mahatma Gandhi, Gandhi Hill offers panoramic city views and houses a planetarium, library, and exhibitions. It’s both educational and scenic, making it a unique attraction in Vijayawada.",
      ],
    },
    {
      title: "Rajiv Gandhi Park",
      img: "/g4.webp",
      alt: "Rajiv Gandhi Park gardens and fountains",
      paragraphs: [
        "Located at the entrance of the city, Rajiv Gandhi Park is a landscaped garden with musical fountains and children’s play areas—a peaceful spot for evening strolls and family outings.",
        "With Cozy Cabz rent a car in Vijayawada, exploring these highlights becomes easy and enjoyable.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Vijayawada cost?",
      a: "Economy rentals start from ₹12/km, sedans from ₹25/km, and premium cars from ₹35/km. Cozy Cabz offers fair Vijayawada car rental rates.",
    },
    {
      q: "Can I book a car on rent in Vijayawada with driver for one day?",
      a: "Yes, we provide flexible car on rent in Vijayawada with driver options, including one-day and long-term packages.",
    },
    {
      q: "Do you provide self drive cars in Vijayawada?",
      a: "Absolutely. Our self drive car rental Vijayawada gives you privacy and flexibility for local and outstation trips.",
    },
    {
      q: "Can I book rental cars in Vijayawada for outstation travel?",
      a: "Yes, we offer car rental in Vijayawada for nearby places like Amaravati, Guntur, and Hyderabad with one-way or round-trip packages.",
    },
    {
      q: "Are luxury cars available in Vijayawada?",
      a: "Yes. Cozy Cabz provides luxury car rental in Vijayawada for weddings, VIP travel, and corporate needs.",
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
          <h1 className="heroeco__title">Car Rental in Vijayawada</h1>
          <span className="small-head">
            <br />
            <h4>Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Vijayawada, the Business Capital of Andhra Pradesh, blends culture, temples, and modern life. From Kanaka Durga Temple to Prakasam Barrage and Bhavani Island, the city shines. Cozy Cabz Car Rental in Vijayawada ensures safe, smooth travel for local trips, self drive, and outstation rides.
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

  
<Trustcc />
     <Howto/>
    <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Vijayawada with Cozy Cabz</h2>
            <p>With Cozy Cabz rent a car in Vijayawada, exploring the city’s temples, riverfronts, and natural escapes becomes easy and enjoyable.</p>
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
          <p>Answers to common questions about our car rental services in Vijayawada.</p>
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

export default InVijayawada;


