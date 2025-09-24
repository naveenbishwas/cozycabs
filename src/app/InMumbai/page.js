"use client";

import React, { useState } from "react";
import "./InternalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional, Verified Drivers",
      desc: " Our chauffeurs are trained, polite, and know every corner of the city—from the lanes of Andheri to the sea breeze of Marine Drive. If you’re searching for rent a car in Mumbai with driver or car hire in Mumbai with driver, Cozy Cabz provides you with the most reliable option.",
      icon: (
        // Shield check
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Well-Maintained Fleet",
      desc: "Choose from hatchbacks, sedans, SUVs, and premium cars. Whether you need an economy rental car in Mumbai, a 7 seater car on rent in Mumbai, or a luxury car rental Mumbai with driver, we’ve got it covered.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "Get clear estimates with no hidden charges. From eco car rental to monthly car rental Mumbai, we share all details on per km rates, tolls, and driver allowances upfront.",
      icon: (
        // Tag
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "24×7 Availability",
      desc: " Mumbai never sleeps—and neither do we. Be it airport pickups at night or one day car rental Mumbai, our services are available around the clock.",
      icon: (
        // Clock + tick
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Safety & Hygiene First",
      desc: " Every ride is sanitized, insured, and GPS-enabled. From private car rental in Mumbai to car with driver Mumbai, your safety and comfort remain our top priority.",
      icon: (
        // Headset
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Gateway of India & Colaba Causeway",
      img: "/g1.webp",
      alt: "The Gateway of India at sunrise",
      paragraphs: [
        "Standing tall by the Arabian Sea, the Gateway of India is Mumbai’s most iconic landmark. Built during the British era, it’s not just a tourist attraction but a piece of history. Just a short walk away lies Colaba Causeway, a bustling market street filled with trendy clothes, antique jewelry, handicrafts, and cozy cafés. With our car rental with driver, you can explore both spots in one go—without the stress of crowded lanes or parking issues",
      ],
    },
    {
      title: "Marine Drive & Girgaon Chowpatty",
      img: "/g2.webp",
      alt: "Marine Drive during a colorful sunset",
      paragraphs: [
        "Known as the Queen’s Necklace because of its glittering night view, Marine Drive is perfect for long seaside walks, photography, and sunset views. Close by is Girgaon Chowpatty, a popular beach where you can indulge in Mumbai’s famous street food like pav bhaji, bhel puri, and ice gola. Booking a car on rent in Mumbai ensures you enjoy the evening at your own pace, without worrying about transport after dark.",
      ],
    },
    {
      title: "Siddhivinayak Temple & Haji Ali Dargah",
      img: "/g3.webp",
      alt: "Golden sanctum of Shree Siddhivinayak Temple",
      paragraphs: [
        "Mumbai is as spiritual as it is fast-paced. The Siddhivinayak Temple, dedicated to Lord Ganesha, attracts lakhs of devotees every week. Equally famous is the Haji Ali Dargah, located on a small islet in the Arabian Sea, offering both peace and breathtaking views. With our car rental service in Mumbai, you can plan your visit conveniently, avoiding long waits and ensuring you reach at the best times of the day.",
      ],
    },
    {
      title: "Elephanta Caves & Sanjay Gandhi National Park",
      img: "/g4.webp",
      alt: "Rock-cut Elephanta Caves surrounded by greenery",
      paragraphs: [
        "If you want to step away from the chaos of the city, Elephanta Caves and Sanjay Gandhi National Park are perfect day trips. The Elephanta Caves, a UNESCO World Heritage site, house ancient rock-cut temples dedicated to Lord Shiva. Meanwhile, Sanjay Gandhi National Park offers greenery, trekking trails, and a mini train ride, making it a favorite for nature lovers and families. By booking a rental car in Mumbai with driver, you can comfortably plan a full-day outing, knowing your car and driver will be with you throughout the trip.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a cab cost in Mumbai per km?",
      a: "Economy rides start at ₹12/km, premium cars at ₹25/km, and luxury at ₹35/km. Whether you need a cheap car rental Mumbai or a luxury car rental in Mumbai, we provide a transparent fare estimate before booking.",
    },
    {
      q: " Can I book a cab from Mumbai to other cities?",
      a: "Yes. Popular outstation routes include Mumbai–Pune, Mumbai–Nashik, Lonavala, Shirdi, and Mumbai–Goa. Our car rental in Mumbai for outstation offers both one-way and round-trip options.",
    },
    {
      q: "Do you provide airport pickups at night?",
      a: "Absolutely. Our Mumbai airport cab service runs 24×7 for both Domestic (T1) and International (T2) terminals.",
    },
    {
      q: "Is there a package for full-day Mumbai sightseeing?",
      a: "Yes, we offer 8 hr / 80 km full day car rental in Mumbai with driver, ideal for sightseeing tours covering all major attractions.",
    },
  ];

  /* ===== Inline SVG Icons ===== */
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
          <h1 className="heroeco__title">Car Rental in Mumbai </h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Comfortable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Exploring Mumbai can be exciting but also overwhelming with traffic,
            long distances, and the city’s non-stop energy. That’s where Cozy
            Cabz Car Rental in Mumbai makes your journey easier.
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
            {/* Row 1 */}
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

            {/* Row 2 */}
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

            {/* Requirement */}
            <label className="sr-only" htmlFor="bf-notes">
              Requirement Details
            </label>
            <textarea
              id="bf-notes"
              name="notes"
              placeholder="Enter Requirement Details"
            ></textarea>

            {/* Footer row */}
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

              {/* Captcha placeholder (hide until you wire the real widget) */}
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

      {/* <section className="trust">
        <div className="trust__container">
          <h2 className="trust__title">
            Why Ride <span>CozyCabs</span>
          </h2>
          <p className="trust__sub">
            Everything we build is focused on safe, reliable and fairly-priced
            rides.
          </p>

          <div className="trust__grid">
            {items.map((it, i) => (
              <article className="trust__card" key={i}>
                <div className="trust__icon">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}
      <section className="trustcc">
        <div className="trustcc__container">
          <h2 className="trustcc__title">
            Why Choose Cozy Cabz in<span> Mumbai?</span>
          </h2>
          {/* <p className="trustcc__sub">
            Everything we build is focused on safe, reliable and fairly-priced
            rides.
          </p> */}

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
          <h2 className="howtoTitle">How to Book Your Ride</h2>
          <p className="howtoSubtitle">
            Simple and straightforward booking process. Follow these easy steps
            to book your ride.
          </p>

          {/* Connector line behind badges */}
          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard
              color="#2563EB"
              icon={<PhoneIcon />}
              step={1}
              title="Contact Our Team"
              text="Contact our team or register on our website to get started with your booking process."
            />
            <StepCard
              color="#16A34A"
              icon={<PinIcon />}
              step={2}
              title="Share Your Details"
              text="Share your destination & departure timing along with any specific requirements."
            />
            <StepCard
              color="#8B5CF6"
              icon={<CarIcon />}
              step={3}
              title="Select Car Model"
              text="Select your preferred car model from our fleet and calculate the fare instantly."
            />
            <StepCard
              color="#F97316"
              icon={<CheckIcon />}
              step={4}
              title="Get Confirmation"
              text="Get confirmation in few seconds with booking details and driver information."
            />
            <StepCard
              color="#EF4444"
              icon={<ClockIcon />}
              step={5}
              title="Wait for Arrival"
              text="Relax and wait for your cab to arrive at your place at the scheduled time."
            />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Easy Booking Process</h2>
          <p className="howrent__intro">
            Booking a rental car in Mumbai with Cozy Cabz takes just a few steps
          </p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Enter Your Trip Details</h3>
              <p>
                Add pickup, drop, timings, and trip type—whether it’s local,
                outstation, or airport
              </p>
            </li>

            <li className="howrent__item">
              <h3>Choose Your Vehicle</h3>
              <p>
                From economy rental cars to luxury car hire in Mumbai with
                driver, select what suits your budget and comfort.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Get Instant Confirmation</h3>
              <p>
                Receive driver details, car model, and arrival time instantly.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Enjoy a Stress-Free Ride</h3>
              <p>
                Sit back, relax, and let our driver handle Mumbai’s traffic
                while you travel in comfort.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Mumbai with Cozy Cabz
            </h2>
            <p>
              Mumbai is a city that blends history, culture, glamour, and
              nature—all in one. From colonial-era monuments to vibrant markets,
              spiritual centers, and Bollywood hotspots, there’s so much to
              explore. With Cozy Cabz car hire in Mumbai, you can cover these
              places comfortably, without the hassle of traffic, parking, or
              last-minute cab hunting.
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
            Answers to the most common questions about our corporate
            transportation program.
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

export default InMumbai;
