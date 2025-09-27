"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const Inchennai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Well Known for Quality Services",
      desc: "Recognized across India for our commitment to excellence and premium service standards.",
      image: "/known.png",
    },
    {
      title: "Earned Positive Reviews from All Clients",
      desc: "Consistent 5-star ratings and testimonials from thousands of satisfied customers.",
      image: "/postive.png",
    },
    {
      title: "The Largest Network of Drivers",
      desc: "Extensive network of professional, verified drivers covering every major city in India.",
      image: "/ntework.png",
    },
    {
      title: "Safe & Secure",
      desc: "Background-verified partners and insured moves for complete peace of mind.",
      image: "/safe.png",
    },
    {
      title: "Nationwide Coverage",
      desc: "Strong presence with on-ground support in metros and tier‑2/3 cities.",
      image: "/nationwide.png",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear quotes, no hidden charges—ever.",
      image: "/transparent.png",
    },
  ];

  const spots = [
    {
      title: "Marina Beach",
      img: "/g1.webp",
      alt: "Waves and shoreline at Marina Beach",
      paragraphs: [
        "Stretching for over 13 km, Marina Beach is India’s longest urban beach. Perfect for sunrise walks and breezy evenings with lively food stalls and local vendors.",
      ],
    },
    {
      title: "Kapaleeshwarar Temple",
      img: "/g2.webp",
      alt: "Colorful gopuram of Kapaleeshwarar Temple",
      paragraphs: [
        "A stunning example of Dravidian architecture in Mylapore. Its towering gopuram and spiritual ambiance make it a must-visit for culture seekers.",
      ],
    },
    {
      title: "Fort St. George",
      img: "/g3.webp",
      alt: "Historic Fort St. George complex",
      paragraphs: [
        "Built in 1644, this colonial-era fort marks the beginning of British rule in India and houses a museum of rare artifacts and relics.",
      ],
    },
    {
      title: "Government Museum",
      img: "/g4.webp",
      alt: "Government Museum building in Chennai",
      paragraphs: [
        "Founded in 1851, one of India’s oldest museums featuring vast collections in art, archaeology, and anthropology, including rare South Indian bronzes.",
      ],
    },
    {
      title: "Kalakshetra Foundation",
      img: "/g1.webp",
      alt: "Kalakshetra cultural campus",
      paragraphs: [
        "A renowned cultural academy preserving classical dance, music, and arts of South India—offering performances and enriching experiences.",
      ],
    },
    {
      title: "T. Nagar & Express Avenue Mall",
      img: "/g2.webp",
      alt: "T. Nagar shopping area and mall",
      paragraphs: [
        "Shop silk sarees and jewelry in T. Nagar’s bustling markets, or enjoy a modern retail and entertainment experience at Express Avenue Mall.",
      ],
    },
    {
      title: "Mahabalipuram",
      img: "/g3.webp",
      alt: "Shore Temple at Mahabalipuram",
      paragraphs: [
        "A UNESCO World Heritage destination 60 km from Chennai, famous for rock-cut temples like the Shore Temple, Pancha Rathas, and Arjuna’s Penance.",
      ],
    },
    {
      title: "Guindy National Park",
      img: "/g4.webp",
      alt: "Greenery inside Guindy National Park",
      paragraphs: [
        "One of the few national parks within a metro city—home to blackbucks, deer, and diverse birdlife—ideal for nature lovers and families.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a car rental in Chennai cost per km?",
      a: "Economy rides start at ₹12–₹15 per km, premium cars from ₹25 per km, and luxury cars from ₹35 per km. With cozy cabz, whether you choose car hire in Chennai for a short trip or an outstation journey, you’ll always get transparent pricing.",
    },
    {
      q: "Can I book a car in Chennai for outstation travel?",
      a: "Yes. We offer rental cars in Chennai with driver for trips to Pondicherry, Mahabalipuram, Kanchipuram, and more—available as one-way or round-trip packages.",
    },
    {
      q: "Do you provide airport pickups and drops in Chennai?",
      a: "Absolutely. Our Chennai car rental service operates 24×7 for Chennai International Airport, ensuring timely pickups and drops.",
    },
    {
      q: "Can I rent a car in Chennai for one day?",
      a: "Yes. cozy cabz offers one day car rental in Chennai with driver packages (8 hrs/80 km) that are perfect for sightseeing or business meetings.",
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
          <h1 className="heroeco__title">Car Rental in Chennai</h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Comfortable & Reliable</h4>
          </span>
          <p className="heroeco__sub">
            Chennai, the cultural capital of South India, blends ancient temples
            and colonial landmarks with Marina Beach and buzzing IT corridors.
            With busy roads and long distances, moving around can feel
            stressful. That’s where cozy cabz car rental in Chennai with driver
            comes in—making every journey smooth, safe, and convenient.
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

            <label className="sr-only" htmlFor="bf-notes">
              Requirement Details
            </label>
            <textarea
              id="bf-notes"
              name="notes"
              placeholder="Enter Requirement Details"
            ></textarea>

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

      <section className="trustcc">
        <div className="trustcc__container">
          <h2 className="trustcc__title">
            Why Choose <span>Cozy Cabz</span>
          </h2>

          <div className="trustcc__grid">
            {items.map((it, i) => (
              <article className="trustcc__card" key={i}>
                <div className="trustcc__icon">
                  {/* {it.icon} */}
                  <Image
                    src={it.image}
                    width={0}
                    height={0}
                    alt="Images"
                    unoptimized
                  ></Image>
                </div>
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
            Booking your ride with cozy cabz is fast and hassle-free:
          </p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Enter Trip Details</h3>
              <p>
                Pickup & drop location, date, time, and trip type—local,
                outstation, or airport.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Choose Your Car</h3>
              <p>
                Economy cars, premium sedans, SUVs, tempo travelers, or luxury
                cars.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Get Instant Confirmation</h3>
              <p>
                Driver details, car info, and estimated arrival time shared
                right away.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Enjoy the Ride</h3>
              <p>
                Sit back while our experienced driver takes care of Chennai’s
                traffic.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Chennai with Cozy Cabz
            </h2>
            <p>
              Chennai beautifully blends spirituality, history, and modern
              culture. Explore the city’s best attractions at your own pace
              while our professional drivers ensure a smooth ride.
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
            Answers to the most common questions about our Chennai services.
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

export default Inchennai;
