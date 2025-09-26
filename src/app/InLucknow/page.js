"use client";

import React, { useState } from "react";
// import "./InternalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InLucknow = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs are trained, background-checked, and know Lucknow’s routes—from Chowk to Gomti Nagar, Hazratganj to Charbagh Railway Station. For dependable car hire in Lucknow, Cozy Cabz is the right choice.",
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
      desc: "From hatchbacks and sedans to SUVs and tempo travelers, our fleet covers all needs. Whether you’re looking for a car on rent in Lucknow for a day or a self drive car in Lucknow for privacy, Cozy Cabz has flexible options.",
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
      desc: "With Cozy Cabz, you get upfront quotes with no hidden charges. Our Lucknow car rental services include driver fees, tolls, parking, and fuel estimates—making us one of the best car rental in Lucknow.",
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
      desc: "Need a late-night pickup or early-morning airport transfer? Our rental cars in Lucknow are available round the clock to fit your schedule.",
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
      desc: "Every vehicle is sanitized after each trip, GPS-enabled, and fully insured. Families, corporates, and tourists trust Cozy Cabz for safe car rentals in Lucknow.",
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
      title: "Bara Imambara",
      img: "/g1.webp",
      alt: "Bara Imambara, Lucknow",
      paragraphs: [
        "Built in 1784 by Nawab Asaf-ud-Daula, Bara Imambara is an architectural masterpiece of the Mughal era. Famous for its central hall, which is one of the largest arched constructions without support beams, it also houses the fascinating Bhool Bhulaiya (labyrinth). It’s a must-visit for history enthusiasts and culture seekers.",
      ],
    },
    {
      title: "Chota Imambara",
      img: "/g2.webp",
      alt: "Chota Imambara, Lucknow",
      paragraphs: [
        "Often called the Hussainabad Imambara, this monument is admired for its stunning chandeliers, calligraphy, and intricate decoration. Constructed in the 19th century, it reflects Lucknow’s Nawabi culture and grandeur. At night, when lit up, the building glows beautifully, earning it the title “Palace of Lights.”",
      ],
    },
    {
      title: "Rumi Darwaza",
      img: "/g3.webp",
      alt: "Rumi Darwaza, Lucknow",
      paragraphs: [
        "Standing 60 feet tall, Rumi Darwaza is one of Lucknow’s most iconic landmarks. Built in 1784, this Mughal-style gateway is often referred to as the “Gateway to Lucknow.” Its unique design and historical charm make it one of the most photographed spots in the city.",
      ],
    },
    {
      title: "Hazratganj Market",
      img: "/g4.webp",
      alt: "Hazratganj Market, Lucknow",
      paragraphs: [
        "Hazratganj is Lucknow’s most popular shopping district, blending tradition with modernity. From chikankari clothing and jewelry to branded stores and cafés, it has something for everyone. It’s also a foodie’s delight, offering delicious street snacks and authentic Awadhi cuisine.",
      ],
    },
    {
      title: "Ambedkar Memorial Park",
      img: "/g3.webp",
      alt: "Ambedkar Memorial Park, Lucknow",
      paragraphs: [
        "Spread across 107 acres, Ambedkar Memorial Park is a grand structure built with red sandstone. Dedicated to Dr. B.R. Ambedkar and other social reformers, it features statues, museums, and impressive architecture. The park is a modern symbol of Lucknow’s cultural pride and vision.",
      ],
    },
    {
      title: "Lucknow Zoo",
      img: "/g4.webp",
      alt: "Lucknow Zoo (Nawab Wajid Ali Shah Zoological Garden)",
      paragraphs: [
        "Also known as Nawab Wajid Ali Shah Zoological Garden, Lucknow Zoo is a family favorite. Home to tigers, lions, elephants, and rare birds, it offers both education and entertainment. The zoo also has a toy train and nature museum, making it ideal for children and wildlife lovers.",
        "With Lucknow car rental services from Cozy Cabz, visiting these attractions becomes comfortable, convenient, and enjoyable, giving you the freedom to discover the city’s charm.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Lucknow cost?",
      a: "Economy rides start at ₹12/km, sedans at ₹25/km, and luxury cars at ₹35/km. Cozy Cabz offers transparent Lucknow car rental rates.",
    },
    {
      q: "Can I book a car rental in Lucknow with driver for outstation trips?",
      a: "Yes. Cozy Cabz provides one-way and round-trip rental cars in Lucknow for nearby destinations.",
    },
    {
      q: "Do you provide airport transfers in Lucknow?",
      a: "Absolutely. Our car hire Lucknow includes 24×7 airport pickups and drops.",
    },
    {
      q: "Are self-drive cars available in Lucknow?",
      a: "Yes. Cozy Cabz offers Lucknow car rental self drive options for those who prefer privacy.",
    },
    {
      q: "Do you provide drivers for personal cars?",
      a: "Yes, Cozy Cabz offers driver on rent in Lucknow, making your personal travel safe and easy.",
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
          <h1 className="heroeco__title">Car Rental in Lucknow </h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Affordable
            </h4>
          </span>
          <p className="heroeco__sub">
          Lucknow, the City of Nawabs, is known for its rich culture, Mughal-era architecture, and mouthwatering cuisine. From historic monuments like Bara Imambara to bustling Hazratganj markets, the city is a delight for travelers. But exploring it can be tough without the right transport. That’s why Cozy Cabz offers car rental in Lucknow with driver, ensuring every trip is safe, smooth, and hassle-free. Whether you’re a tourist, a corporate traveler, or a family, our fleet of rental cars in Lucknow is designed to make your journey stress-free.
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
            Why Choose Cozy Cabz in<span> Lucknow?</span>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Lucknow</h2>
          <p className="howtoSubtitle">
            Simple and straightforward. Follow these steps to book your ride in Lucknow.
          </p>

          {/* Connector line behind badges */}
          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard
              color="#2563EB"
              icon={<PhoneIcon />}
              step={1}
              title="Contact Our Team"
              text="Call us or book online to start your car rental in Lucknow quickly and easily."
            />
            <StepCard
              color="#16A34A"
              icon={<PinIcon />}
              step={2}
              title="Share Your Details"
              text="Enter pickup & drop locations, travel date, time, and trip type—local, airport, or outstation."
            />
            <StepCard
              color="#8B5CF6"
              icon={<CarIcon />}
              step={3}
              title="Select Your Car"
              text="Choose sedans, SUVs, tempo travelers, or rent a car in Lucknow with driver."
            />
            <StepCard
              color="#F97316"
              icon={<CheckIcon />}
              step={4}
              title="Get Confirmation"
              text="Receive instant booking details, including driver info, car model, and ETA."
            />
            <StepCard
              color="#EF4444"
              icon={<ClockIcon />}
              step={5}
              title="Enjoy the Ride"
              text="Sit back while our professional chauffeurs handle Lucknow’s busy traffic."
            />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Lucknow</h2>
          <p className="howrent__intro">
          At Cozy Cabz, our car rental service in Lucknow is designed to fit every travel requirement:
          </p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>
              Hourly or full-day packages for shopping, sightseeing, or work trips.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>
              Hassle-free rides to and from Chaudhary Charan Singh Airport with quick car booking in Lucknow.

              </p>
            </li>

            <li className="howrent__item">
              <h3>Outstation Trips </h3>
              <p>
              Book rent car in Lucknow for weekend getaways to Ayodhya, Varanasi, Kanpur, or Agra.
              </p>
            </li>

            <li className="howrent__item">
              <h3>

Self-Drive Cars –</h3>
              <p>
              Affordable self drive car in Lucknow for customers who prefer independence.


              </p>
            </li>
            <li className="howrent__item">
              <h3>Luxury & Premium Cars</h3>
              <p>
              Hire rental cars in Lucknow for weddings, VIP transfers, and corporate events.
              </p>
            </li>
            <li className="howrent__item">
              <h3>Driver on Hire</h3>
              <p>
              Cozy Cabz also provides driver on rent in Lucknow for your own vehicle.
              </p>
            </li>
          
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
            Must-Visit Places in Lucknow with Cozy Cabz
            </h2>
            <p>
            With Cozy Cabz car rental Lucknow, exploring the city’s cultural gems and modern attractions becomes easy and stress-free. You can travel at your own pace without worrying about parking or traffic.
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

export default InLucknow;
