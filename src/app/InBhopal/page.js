"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InBhopal = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc:
        "Our drivers are experienced, background-checked, and familiar with Bhopal’s roads—from New Market and MP Nagar to old city routes. For dependable Bhopal car rental service, Cozy Cabz ensures safe and timely rides.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc:
        "Choose from hatchbacks, sedans, SUVs, tempo travelers, and premium cars. Whether you need rental cars in Bhopal for a day, car hire in Bhopal for business, or self drive cars in Bhopal for privacy, we have it all.",
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
        "With Cozy Cabz, what you see is what you pay. Our Bhopal car rental rates include driver charges, fuel, tolls, and parking—no hidden costs.",
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
        "From airport transfers to late-night trips, our car rental service in Bhopal is available round the clock to suit your schedule.",
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
        "All vehicles are sanitized after each trip, GPS-enabled, and insured for your safety. Families, corporates, and tourists trust Cozy Cabz for car rental in Bhopal.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Upper Lake & Lower Lake",
      img: "/g1.webp",
      alt: "Upper Lake Bhojtal and Lower Lake in Bhopal",
      paragraphs: [
        "Known as Bhojtal, Upper Lake is one of the oldest man-made lakes in India—ideal for boating, sunsets, and peaceful surroundings. The adjoining Lower Lake enhances the city’s charm, making the twin lakes a must-visit.",
      ],
    },
    {
      title: "Taj-ul-Masajid",
      img: "/g2.webp",
      alt: "Taj-ul-Masajid mosque architecture in Bhopal",
      paragraphs: [
        "Among the largest mosques in Asia, admired for Mughal-style domes, tall minarets, and sprawling courtyards—a spiritual and architectural landmark of Bhopal.",
      ],
    },
    {
      title: "Van Vihar National Park",
      img: "/g3.webp",
      alt: "Van Vihar National Park wildlife near Upper Lake",
      paragraphs: [
        "A protected reserve beside Upper Lake, home to tigers, leopards, crocodiles, and exotic birds—animals live in near-natural habitats.",
      ],
    },
    {
      title: "Bharat Bhavan",
      img: "/g4.webp",
      alt: "Bharat Bhavan multi-arts complex in Bhopal",
      paragraphs: [
        "A multi-arts complex celebrating creativity with galleries, libraries, theaters, and workshops—a cultural hotspot in Bhopal.",
      ],
    },
    {
      title: "Shaukat Mahal & Sadar Manzil",
      img: "/g3.webp",
      alt: "Shaukat Mahal and Sadar Manzil heritage architecture",
      paragraphs: [
        "19th-century architectural wonders mixing Indo-Islamic and European influences—Gothic and post-Renaissance styles with royal durbar history.",
      ],
    },
    {
      title: "State Museum Bhopal",
      img: "/g4.webp",
      alt: "State Museum artifacts and exhibits in Bhopal",
      paragraphs: [
        "Artifacts, sculptures, coins, and manuscripts reflecting Madhya Pradesh’s rich past—from prehistoric findings to tribal art.",
        "With Cozy Cabz rent a car in Bhopal, exploring the city’s lakes, mosques, and cultural centers becomes simple and comfortable.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Bhopal cost?",
      a: "Economy rentals start at ₹12/km, sedans from ₹25/km, and premium cars from ₹35/km. Cozy Cabz offers transparent rates for car rent in Bhopal.",
    },
    {
      q: "Can I book a car on rent in Bhopal with driver for one day?",
      a: "Yes. Cozy Cabz provides flexible car on rent in Bhopal packages, including daily and hourly rentals.",
    },
    {
      q: "Do you provide self drive cars in Bhopal?",
      a: "Yes. We offer self drive cars in Bhopal and self drive rental cars in Bhopal for privacy and convenience.",
    },
    {
      q: "Can I rent cars for outstation trips from Bhopal?",
      a: "Absolutely. Cozy Cabz offers car rental in Bhopal for nearby getaways like Sanchi, Pachmarhi, and Indore.",
    },
    {
      q: "Is driver-only service available in Bhopal?",
      a: "Yes. Cozy Cabz also provides driver on hire in Bhopal for your personal car.",
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
          <h1 className="heroeco__title">Car Rental in Bhopal</h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Bhopal, the City of Lakes, blends heritage, culture, and natural beauty. From Upper Lake to Taj-ul-Masajid, the city offers attractions for everyone. Cozy Cabz provides car rental in Bhopal with well-maintained vehicles and professional chauffeurs—covering car on rent with driver and self drive car rental options for a stress-free journey.
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
            Why Choose Cozy Cabz in<span> Bhopal?</span>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Bhopal</h2>
          <p className="howtoSubtitle">Follow these steps to book your ride in Bhopal.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Our Team" text="Call us or book online to begin your car rental in Bhopal quickly and without hassle." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Share Your Trip Details" text="Enter pickup & drop points, travel date, and time to plan your journey." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Select Your Car" text="Choose from sedans, SUVs, or self drive rental cars in Bhopal for more freedom and comfort." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Confirmation" text="Receive instant booking details with car information, driver contact, and estimated arrival time." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Enjoy the Ride" text="Sit back and relax while our professional chauffeurs manage the journey smoothly and safely." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Bhopal</h2>
          <p className="howrent__intro">Our car rental services in Bhopal are designed to cover every travel need:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>Hourly and daily rentals for shopping, meetings, or sightseeing.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>Hassle-free pickups and drops from Raja Bhoj Airport with easy car booking in Bhopal.</p>
            </li>
            <li className="howrent__item">
              <h3>Outstation Trips</h3>
              <p>Book rental cars in Bhopal for nearby cities like Indore, Sanchi, and Pachmarhi.</p>
            </li>
            <li className="howrent__item">
              <h3>Self-Drive Cars</h3>
              <p>Flexible self drive car rental Bhopal for those who prefer privacy.</p>
            </li>
            <li className="howrent__item">
              <h3>Corporate Travel</h3>
              <p>Affordable car hire in Bhopal for offices and client meetings.</p>
            </li>
            <li className="howrent__item">
              <h3>Driver on Hire</h3>
              <p>Need just a driver? Cozy Cabz offers professional car and driver rental options in Bhopal.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Bhopal with Cozy Cabz</h2>
            <p>Enjoy Bhopal’s heritage and natural beauty at your own pace without travel hassles.</p>
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
          <p>Answers to common questions about our car rental services in Bhopal.</p>
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

export default InBhopal;


