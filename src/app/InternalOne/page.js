"use client";

import React, { useState } from "react";
import "./internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InternalOne = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Verified Drivers",
      desc: "Background-checked, trained and rated after every trip.",
      icon: (
        // Shield check
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "New, Clean Fleet",
      desc: "Regularly serviced vehicles with real-time quality checks.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "No surge surprises. See fare breakdown before you book.",
      icon: (
        // Tag
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "On-Time Guarantee",
      desc: "Punctual pick-ups with live tracking and ETA updates.",
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
      title: "24/7 Support",
      desc: "Human support over call, chat, and WhatsApp—anytime.",
      icon: (
        // Headset
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
    {
      title: "Ride Insurance",
      desc: "Every trip covered with accident & liability protection.",
      icon: (
        // Umbrella
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a8 8 0 018 8H4a8 8 0 018-8z" />
          <path d="M12 11v6a3 3 0 01-3 3" className="stroke" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "The Gateway of India",
      img: "/g1.webp",
      alt: "The Gateway of India at sunrise",
      paragraphs: [
        "An iconic monument on the Arabian Sea, the Gateway of India stands as a symbol of Mumbai’s grand history. Built to commemorate the royal visit of King George V and Queen Mary in 1911, its Indo-Saracenic arches and intricate details form a captivating silhouette.",
        "A bustling hub for locals and visitors alike, the promenade around the Gateway is especially magical at sunset. Nearby, the Taj Mahal Palace Hotel adds to the area’s blend of heritage and elegance.",
      ],
    },
    {
      title: "Marine Drive",
      img: "/g2.webp",
      alt: "Marine Drive during a colorful sunset",
      paragraphs: [
        "Often called the “Queen’s Necklace,” Marine Drive is a 3.6-km boulevard curving along the Arabian Sea. Palm trees, art-deco buildings, and the soothing sound of waves make it perfect for leisurely strolls.",
        "During monsoon and at sunset, the promenade comes alive with a glow of city lights and crashing waves — a serene, picture-perfect slice of Mumbai.",
      ],
    },
    {
      title: "Shree Siddhivinayak Temple",
      img: "/g3.webp",
      alt: "Golden sanctum of Shree Siddhivinayak Temple",
      paragraphs: [
        "Dedicated to Lord Ganesha, this revered temple draws millions each year. The gilded dome, ornate carvings, and sacred iconography create an atmosphere of devotion and calm amid the city’s bustle.",
        "Festive days like Ganesh Chaturthi transform the temple into a vibrant epicenter of celebration — a must-visit for both spiritual seekers and culture enthusiasts.",
      ],
    },
    {
      title: "Elephanta Caves",
      img: "/g4.webp",
      alt: "Rock-cut Elephanta Caves surrounded by greenery",
      paragraphs: [
        "A short ferry ride from Mumbai takes you to the UNESCO-listed Elephanta Caves on Elephanta Island. Carved into basalt between the 5th and 7th centuries, the caves showcase the zenith of rock-cut architecture.",
        "Inside, magnificent sculptures and reliefs — including the famed 20-foot Trimurti — evoke timeless artistry and spiritual depth.",
      ],
    },
  ];

  const faqs = [
    {
      q: "What services are included in the Corporate Program?",
      a: "Hourly cab rentals, airport transfers, outstation trips, MICE arrangements, monthly cab service, and holiday trips—plus a dedicated account manager and monthly reporting.",
    },
    {
      q: "Can we get invoices consolidated monthly?",
      a: "Yes. We provide consolidated monthly invoices, detailed usage analytics, and cost-saving recommendations.",
    },
    {
      q: "Do you offer volume discounts?",
      a: "High-volume and long-term contracts are eligible for special pricing and flexible payment terms.",
    },
    {
      q: "How do we manage bookings for our team?",
      a: "You’ll get a dedicated account manager and a streamlined booking flow (web/phone/WhatsApp) with priority support for changes or emergencies.",
    },
    {
      q: "Are your vehicles and drivers certified?",
      a: "All vehicles are well-maintained and insured. Drivers are verified, trained for corporate protocols, and follow punctuality and safety guidelines.",
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
          <h1 className="heroeco__title">Car Rental in Mumbai</h1>
          <p className="heroeco__sub">
            With ECO Mobility Car Rentals, have a spectacular tour of Mumbai,
            the city of dreams. At the famous Gateway of India, where history
            and the Arabian Sea converge, start your journey.
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
            Why Ride <span>CozyCabs</span>
          </h2>
          <p className="trustcc__sub">
            Everything we build is focused on safe, reliable and fairly-priced
            rides.
          </p>

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
          <h2 id="howrent-title">How to rent a car in Mumbai?</h2>
          <p className="howrent__intro">
            It only takes a few minutes to book your ride with us. Choose the
            booking method that suits you best—website, chat, email, or our 24/7
            call center. Your convenience comes first.
          </p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Website</h3>
              <p>
                Booking via our website is quick and easy—fill your details and
                submit your enquiry. Use the call and chat options on the page
                if you need help.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Chat</h3>
              <p>
                Ask questions or share requirements in the website chat window.
                Our team responds in minutes and guides you through the booking.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Email</h3>
              <p>
                Prefer email? Write to{" "}
                <a href="mailto:sales@ecosmobility.com">
                  sales@ecosmobility.com
                </a>{" "}
                with your dates, route, and car preferences—we’ll confirm with a
                quotation.
              </p>
            </li>

            <li className="howrent__item">
              <h3>24/7 Call Center</h3>
              <p>
                Call us anytime at{" "}
                <a href="tel:+919654999666">+91-9654999666</a>. Our human
                support will help you book and answer any specifics right away.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Top Attractions and Sightseeing in Mumbai
            </h2>
            <p>
              Explore Mumbai’s icons in comfort with our rental cabs — from the
              Gateway of India and Marine Drive to Siddhivinayak Temple and the
              Elephanta Caves.
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

export default InternalOne;
