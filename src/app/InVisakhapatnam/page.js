"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InVisakhapatnam = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Expert Drivers",
      desc:
        "Our chauffeurs are familiar with Visakhapatnam’s roads, including beach roads, hills, and forest stretches.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Vehicle Range",
      desc:
        "From economy cars to SUVs, luxury vehicles, or self drive cars in Visakhapatnam, we have what you need.",
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
        "Estimates include everything—fuel, tolls, driver charges. No hidden costs.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Service",
      desc:
        "Early flights or late-hour rides—our rental cars in Visakhapatnam are available anytime.",
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
        "Cars are sanitized, GPS-enabled, and insured—trusted for both local rides and long trips.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kailasagiri Hill",
      img: "/g1.webp",
      alt: "Kailasagiri Hill viewpoint over Vizag",
      paragraphs: [
        "Perched above the city, Kailasagiri offers panoramic views of mountains and sea. Ropeway rides, gardens, and giant statues make it a favourite for all ages.",
      ],
    },
    {
      title: "Submarine Museum & INS Kursura",
      img: "/g2.webp",
      alt: "INS Kursura Submarine Museum in Vizag",
      paragraphs: [
        "A decommissioned submarine turned museum where you can walk through compartments and learn about naval life—adjacent to a maritime museum.",
      ],
    },
    {
      title: "Simhachalam Temple",
      img: "/g3.webp",
      alt: "Simhachalam Temple hill shrine in Visakhapatnam",
      paragraphs: [
        "Dedicated to Lord Narasimha, this ancient hill temple combines spiritual significance with scenic beauty, set amidst lush green hills.",
      ],
    },
    {
      title: "Thotlakonda & Pavuralakonda",
      img: "/g4.webp",
      alt: "Buddhist sites Thotlakonda Pavuralakonda near Vizag",
      paragraphs: [
        "Ancient Buddhist monastic complexes on hilltops near Vizag—ruins, stupas, and coastal views ideal for history and nature lovers.",
      ],
    },
    {
      title: "Yarada & Rushikonda Beaches",
      img: "/g3.webp",
      alt: "Yarada and Rushikonda beaches in Vizag",
      paragraphs: [
        "Soft sands, clear waters, and water activities draw families and tourists alike—top coastal relaxation spots.",
      ],
    },
    {
      title: "Dwaraka Tirumala & ISKCON Vizag",
      img: "/g4.webp",
      alt: "Hilltop temple and ISKCON in Vizag",
      paragraphs: [
        "A tranquil hilltop spiritual center offering sunrise views and peaceful worship ambience—an escape from the city bustle.",
        "With Cozy Cabz rent a car in Visakhapatnam, visiting these attractions is comfortable and logistics-free.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Visakhapatnam cost?",
      a: "Rates vary by car type, distance, and duration. Economy starts low; luxury and longer trips cost more. You’ll see full pricing when you book.",
    },
    {
      q: "Can I hire a car in Visakhapatnam with driver for one day?",
      a: "Yes. We offer car on rent in Visakhapatnam with driver even for day trips and local tours.",
    },
    {
      q: "Are self-drive cars available in Visakhapatnam?",
      a: "Absolutely. We provide self drive cars in Visakhapatnam for customers wanting flexibility and privacy.",
    },
    {
      q: "Do you offer outstation trips from Visakhapatnam?",
      a: "Yes. Cozy Cabz covers car rental for nearby destinations like Araku, Vizag coast, and hill regions.",
    },
    {
      q: "Does the fare include all charges?",
      a: "Yes, your estimate includes tolls, parking, driver fees, and basic fuel—no hidden surprises.",
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
          <h1 className="heroeco__title">Car Rental in Visakhapatnam</h1>
          <span className="small-head">
            <br />
            <h4>– Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Visakhapatnam (Vizag) blends beaches, hills, heritage temples, and modern life. From Kailasagiri overlooking the Bay of Bengal to ancient Buddhist sites and verdant sanctuaries, the city offers many experiences. Cozy Cabz provides car rental in Visakhapatnam with driver as well as self drive options—safe, convenient, and stress-free.
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
            Why Choose Cozy Cabz in<span> Visakhapatnam?</span>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Visakhapatnam</h2>
          <p className="howtoSubtitle">Follow these steps to book your ride in Vizag.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Our Team" text="Call us or book online to start your car rental in Visakhapatnam quickly and easily." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Share Your Trip Details" text="Provide pickup & drop points, date, time, and trip type—local, outstation, or airport transfer." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Select Your Car" text="Choose from economy cars, SUVs, luxury vehicles, or self-drive options in Visakhapatnam." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Confirmation" text="Receive instant booking details including car model, driver info, and ETA." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Enjoy the Ride" text="Relax while our professional chauffeurs handle the traffic and routes of Vizag." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Visakhapatnam</h2>
          <p className="howrent__intro">Cozy Cabz offers flexible car rental in Visakhapatnam services to suit every traveler:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>Hourly or full-day car hire in Visakhapatnam for city sightseeing, shopping, or meetings.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>Punctual rides to and from Visakhapatnam Airport.</p>
            </li>
            <li className="howrent__item">
              <h3>Outstation Trips</h3>
              <p>Book a rental car for Araku Valley, Paderu, or adjacent hill regions.</p>
            </li>
            <li className="howrent__item">
              <h3>Luxury Cars</h3>
              <p>Hire high-end vehicles for events, weddings, or VIP travel.</p>
            </li>
            <li className="howrent__item">
              <h3>Self-Drive Options</h3>
              <p>Prefer control? Opt for self drive car rental in Visakhapatnam.</p>
            </li>
            <li className="howrent__item">
              <h3>Group Travel</h3>
              <p>SUVs or multi-seater cars for families, friends, or corporate groups.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Visakhapatnam with Cozy Cabz</h2>
            <p>Visit top attractions comfortably, without worrying about parking or logistics.</p>
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
          <p>Answers to common questions about our car rental services in Vizag.</p>
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

export default InVisakhapatnam;


