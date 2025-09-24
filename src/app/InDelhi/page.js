"use client";

import React, { useState } from "react";
import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InDelhi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers know Delhi’s roads inside out—whether it’s the bustling lanes of Chandni Chowk, the wide stretches of Rajpath, or the quick routes to Gurugram and Noida. Every chauffeur is background-checked, trained, and committed to making your ride smooth and safe. If you’re looking for driver services in Delhi or want to hire a car in Delhi, Cozy Cabz is here to help.",
      icon: (
        // Shield check
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Need a small car for rent in Delhi for short trips, a premium sedan for corporate meetings, or a 7-seater SUV for family outings? We’ve got you covered. From budget-friendly options to luxury car hire in Delhi, our fleet includes the right vehicle for every occasion.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing – No Hidden Costs",
      desc: "You’ll always know what you’re paying for. We provide fare estimates up front, covering per km rates, driver charges, parking, and tolls. Whether it’s a car on hire in Delhi for one day or a long car rental from Delhi to other cities, you’ll never face hidden costs.",
      icon: (
        // Tag
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Available 24×7, Anytime You Need",
      desc: "Delhi never stops, and neither do we. Be it an early-morning airport drop, a late-night pickup from Connaught Place, or a last-minute car booking in Delhi for outstation travel, our service is available round the clock.",
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
      desc: "Every vehicle is sanitized, GPS-enabled, and insured. Your safety matters to us, so we follow strict hygiene and security protocols—perfect for families, business travelers, and tourists who depend on reliable Delhi car service.",
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
      title: "Red Fort & Chandni Chowk",
      img: "/g1.webp",
      alt: "Historic Red Fort and bustling Chandni Chowk",
      paragraphs: [
        "Begin your journey at the majestic Red Fort, a UNESCO World Heritage site that symbolizes India’s rich history. Just nearby is Chandni Chowk, one of Delhi’s oldest and busiest markets—perfect for heritage lovers and foodies alike.",
      ],
    },
    {
      title: "Qutub Minar & Humayun’s Tomb",
      img: "/g2.webp",
      alt: "Qutub Minar complex and Humayun’s Tomb gardens",
      paragraphs: [
        "For architecture admirers, Qutub Minar and Humayun’s Tomb are must-visits. The tallest brick minaret and the Mughal-era tomb that inspired the Taj Mahal make for stunning photography spots.",
      ],
    },
    {
      title: "India Gate & Rajpath",
      img: "/g3.webp",
      alt: "India Gate illuminated in the evening",
      paragraphs: [
        "At the heart of the city, India Gate stands tall as a war memorial. An evening walk along Rajpath with glowing lights is truly memorable and iconic.",
      ],
    },
    {
      title: "Lotus Temple & Akshardham",
      img: "/g4.webp",
      alt: "Lotus Temple and Akshardham complex",
      paragraphs: [
        "Seek peace at the Lotus Temple or explore the grand Akshardham Temple—both blend spirituality, art, and culture, ideal for travelers seeking calm and beauty.",
      ],
    },
    {
      title: "Connaught Place & Khan Market",
      img: "/g1.webp",
      alt: "Connaught Place market circles and shops",
      paragraphs: [
        "For shopping and city vibes, Connaught Place is packed with branded stores and eateries, while Khan Market offers upscale cafés, bookstores, and boutiques.",
      ],
    },
    {
      title: "Lodhi Gardens & Hauz Khas Village",
      img: "/g2.webp",
      alt: "Lodhi Gardens greenery and Hauz Khas fort",
      paragraphs: [
        "Enjoy a natural and cultural mix at Lodhi Gardens and Hauz Khas Village—perfect for walks, heritage tombs, art galleries, cafés, and nightlife.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a car rental in Delhi cost per km?",
      a: "Economy rides start from around ₹12–₹15/km, premium cars from ₹25/km, and luxury cars from ₹35/km. Whether you choose a car rental service in Delhi for local trips or a car hire Delhi with driver for longer journeys, you’ll always get a transparent fare estimate.",
    },
    {
      q: "Can I book a cab from Delhi to other cities?",
      a: "Yes. Popular routes include Delhi to Agra, Jaipur, Rishikesh, Shimla, and Manali. Our car rentals New Delhi also provide one-way and round-trip options.",
    },
    {
      q: "Do you provide 24×7 airport transfers in Delhi?",
      a: "Absolutely. We cover all terminals at Indira Gandhi International Airport. Our premium taxi service in Delhi and luxury taxi service in Delhi ensure timely pickups and drops, even during late nights or early mornings.",
    },
    {
      q: "Is there a package for Delhi sightseeing?",
      a: "Yes. We provide half-day and full-day rental packages, such as 8 hrs/80 km, where you can cover Delhi’s top attractions in comfort.",
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
          <h1 className="heroeco__title">Car Rental in Delhi</h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Comfortable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Delhi, the capital city of India, is a place where history meets
            modernity. From ancient forts and UNESCO heritage sites to buzzing
            markets, high-rise business hubs, and cultural hotspots, every
            corner of Delhi has something unique to offer. But moving around the
            city can often feel overwhelming—traffic jams, crowded metro routes,
            and unpredictable autos. That’s why Cozy Cabz Car Rental in Delhi is
            your perfect travel companion. With our car rental in Delhi with
            driver, you get safe rides, verified chauffeurs, transparent
            pricing, and 24×7 availability—so your journey is as comfortable as
            the destination.
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
            Why Choose Cozy Cabz in<span> Delhi?</span>
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
            Booking your ride with cozy cabz is quick, simple, and completely
            hassle-free. Just follow four easy steps:
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
              <h3>Choose Your Car</h3>
              <p>
                From economy cars to SUVs, premium sedans, or luxury taxis. You
                can even rent a car in Delhi with driver or opt for car rentals
                in New Delhi for city tours.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Get Instant Confirmation</h3>
              <p>
                Receive driver details, car model, and estimated arrival time
                right away.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Enjoy the Ride</h3>
              <p>
                Our experienced drivers handle the traffic so you can relax and
                travel stress-free.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Delhi with Cozy Cabz
            </h2>
            <p>
              Delhi is a city where every street has a story to tell. From
              centuries-old Mughal forts to modern shopping hubs, the capital is
              a mix of history, culture, spirituality, and vibrant city life.
              With cozy cabz car rental in Delhi with driver, exploring becomes
              stress-free—you just sit back and enjoy while we take care of
              traffic, routes, and parking.
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

export default InDelhi;
