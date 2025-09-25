"use client";

import React, { useState } from "react";
// import "./InternalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InSurat = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our drivers are trained, background-checked, and know Surat’s roads—from Ring Road and textile markets to Dumas Beach and the airport. For secure car hire in Surat, Cozy Cabz is your trusted partner.",
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
      desc: "Choose from hatchbacks, sedans, SUVs, tempo travelers, and luxury cars. Whether it’s a self drive car on rent in Surat for privacy or a luxury car rental in Surat for events, we provide vehicles for every purpose.",
      icon: (
        // Sedan
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H3v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "Our Surat car rental services come with clear, upfront pricing—covering fuel, tolls, driver charges, and parking. No hidden costs, just honest fares.",
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
      desc: "From early-morning airport transfers to late-night pickups, Cozy Cabz provides car rental Surat services round the clock.",
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
      desc: "Every car is sanitized, GPS-enabled, and insured for passenger safety. Families, corporates, and tourists trust Cozy Cabz for rental cars in Surat.",
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
      title: "Surat Castle",
      img: "/g1.webp",
      alt: "Surat Castle, Surat",
      paragraphs: [
        "Built in the 16th century by Sultan Mahmud III, Surat Castle is a grand fort that once protected the city from invasions. Its massive stone walls and strategic riverside location reflect the city’s historic importance. Today, it stands as a popular tourist landmark and heritage site.",
      ],
    },
    {
      title: "Sarthana Nature Park & Zoo",
      img: "/g2.webp",
      alt: "Sarthana Nature Park and Zoo, Surat",
      paragraphs: [
        "Spread over a large green area, this zoo is home to lions, tigers, leopards, and exotic birds. It’s one of the best fun places in Surat for families, offering both entertainment and learning for children. The natural surroundings make it a refreshing getaway within the city.",
      ],
    },
    {
      title: "Dumas Beach",
      img: "/g3.webp",
      alt: "Dumas Beach, Surat",
      paragraphs: [
        "Famous for its unique black sand, Dumas Beach along the Arabian Sea is a favorite evening spot for locals and tourists. Visitors enjoy seaside snacks, sunset views, and the cool breeze. It’s perfect for a peaceful walk or a lively outing with friends and family.",
      ],
    },
    {
      title: "Ambika Niketan Temple",
      img: "/g4.webp",
      alt: "Ambika Niketan Temple, Surat",
      paragraphs: [
        "Dedicated to Goddess Ashtabhuja Ambika, this riverside temple is one of Surat’s most spiritual places. Its calm setting along the Tapi River attracts devotees and tourists seeking peace. Festivals here are celebrated with great devotion, adding to the temple’s charm.",
      ],
    },
    {
      title: "Gopi Talav",
      img: "/g1.webp",
      alt: "Gopi Talav, Surat",
      paragraphs: [
        "Originally built in the 16th century, Gopi Talav is now a lively recreational hub. With boating, gardens, fountains, and food courts, it’s a fun destination for families. The blend of history and modern development makes it a popular attraction in Surat.",
      ],
    },
    {
      title: "Dutch Garden",
      img: "/g2.webp",
      alt: "Dutch Garden, Surat",
      paragraphs: [
        "Known for its colonial influence, Dutch Garden is a beautifully landscaped park with historical tombs of Dutch and Armenian traders. Its peaceful lawns and serene atmosphere make it an ideal place for relaxation. It’s a perfect mix of heritage and greenery.",
        "With Surat car rental services from Cozy Cabz, you can explore these landmarks without hassle, enjoying comfort and flexibility throughout your journey.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Surat cost per day?",
      a: "Economy rides start at ₹12/km, with options for car on rent for one day or long trips. Luxury cars and SUVs are also available.",
    },
    {
      q: "Can I book self drive cars in Surat?",
      a: "Yes. Cozy Cabz offers self drive car rental in Surat for those who prefer independence.",
    },
    {
      q: "Do you provide airport transfers in Surat?",
      a: "Absolutely. Our car hire Surat service includes 24×7 pickups and drops to Surat Airport.",
    },
    {
      q: "Are luxury cars available in Surat?",
      a: "Yes. Cozy Cabz offers luxury car rental in Surat for weddings, events, and VIP transfers.",
    },
    {
      q: "Do you offer cars for outstation travel?",
      a: "Yes. We provide rental cars in Surat for nearby destinations like Daman, Silvassa, Mumbai, and Ahmedabad.",
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
          <h1 className="heroeco__title">Car Rental in Surat </h1>
          <span className="small-head">
            <br />
            <h4>– Safe, Reliable & Affordable
            </h4>
          </span>
          <p className="heroeco__sub">
          Surat, popularly known as the Diamond City of India, is a vibrant mix of history, trade, and modern living. Famous for being one of the world’s largest diamond polishing hubs and a leading textile center, Surat attracts business travelers, tourists, and families alike. The city offers a unique blend of heritage monuments, buzzing markets, seaside getaways, and modern malls. From exploring Surat Castle and Dutch Garden to shopping in textile markets or relaxing at Dumas Beach, there’s always something to experience here.
          <br/><br/>
          But moving around in the city can be tricky with heavy traffic and crowded roads. That’s why Cozy Cabz provides car rental in Surat with driver and self drive car rental in Surat options to make your journey smooth and stress-free. Whether you’re looking for a car on rent in Surat for one day, planning car rental in Surat for outstation trips, or need a luxury car rental in Surat for special occasions, Cozy Cabz has the right solution for you.
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

      <section className="trustcc">
        <div className="trustcc__container">
          <h2 className="trustcc__title">
            Why Choose Cozy Cabz in<span> Surat?</span>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Surat</h2>
          <p className="howtoSubtitle">
            Simple and straightforward. Follow these steps to book your ride in Surat.
          </p>

          {/* Connector line behind badges */}
          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard
              color="#2563EB"
              icon={<PhoneIcon />}
              step={1}
              title="Contact Our Team"
              text="Call us or book online to start your car rental in Surat quickly and easily."
            />
            <StepCard
              color="#16A34A"
              icon={<PinIcon />}
              step={2}
              title="Share Your Trip Details"
              text="Provide pickup & drop locations, travel date, time, and trip type—local, airport, or outstation."
            />
            <StepCard
              color="#8B5CF6"
              icon={<CarIcon />}
              step={3}
              title="Select Your Car"
              text="Choose from economy cars, SUVs, tempo travelers, or 1 day car rental with driver in Surat for flexibility."
            />
            <StepCard
              color="#F97316"
              icon={<CheckIcon />}
              step={4}
              title="Get Confirmation"
              text="Receive instant booking details, including driver info, vehicle details, and estimated arrival time."
            />
            <StepCard
              color="#EF4444"
              icon={<ClockIcon />}
              step={5}
              title="Enjoy the Ride"
              text="Sit back and relax while our experienced chauffeurs handle Surat’s traffic, ensuring a safe and comfortable journey."
            />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Surat</h2>
          <p className="howrent__intro">
          At Cozy Cabz, our car rental services in Surat are designed to meet every travel need:
          </p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>
              Hourly or daily packages for shopping, office work, or sightseeing.
              </p>
            </li>

            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>
              On-time pickups and drops with easy car booking with driver.

              </p>
            </li>

            <li className="howrent__item">
              <h3>Outstation Trips </h3>
              <p>
              Book car rental in Surat for outstation journeys to nearby cities like Ahmedabad, Vadodara, Daman, or Mumbai.
              </p>
            </li>

            <li className="howrent__item">
              <h3>

Self-Drive Options –</h3>
              <p>
              Affordable self drive cars in Surat for customers who want privacy and independence.


              </p>
            </li>
            <li className="howrent__item">
              <h3>Luxury Cars</h3>
              <p>
              Premium sedans and SUVs for weddings, events, or luxury car on rent in Surat.
              </p>
            </li>
            <li className="howrent__item">
              <h3>Group Travel</h3>
              <p>
              Tempo travelers and 8 seater car booking for family trips, events, and weekend getaways.
              </p>
            </li>
          
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
            Must-Visit Places in Surat with Cozy Cabz
            </h2>
            <p>
            With Cozy Cabz rent a car in Surat, exploring the city’s top attractions becomes easy and comfortable. From historic forts to beaches and gardens, you can enjoy every corner of the city at your own pace.
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

export default InSurat;


