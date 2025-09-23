"use client";

import React, { useState } from "react";
import "../InternalOne/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InPune = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs know Pune’s roads and shortcuts—whether it’s the bustling lanes of FC Road, IT corridors of Hinjewadi, or the highway to Mumbai. Every driver is trained, background-checked, and focused on passenger safety. For dependable Pune car rental with driver, Cozy Cabz is your trusted choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "From budget-friendly sedans to SUVs and premium cars, our fleet suits every travel need. Whether you want a 7-seater for family trips, an economy car for daily use, or a luxury car for special occasions, Cozy Cabz has the perfect option.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. Upfront estimates cover per km charges, driver fees, tolls, and parking. Whether you book a car on rent in Pune with driver for one day or long trips, you always know what you’re paying for.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Available 24×7",
      desc: "Pune never stops, and neither do we. From late-night pickups to early-morning airport drops, our rental cars in Pune with driver are available round the clock.",
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
      desc: "Every car is sanitized after each ride, GPS-enabled, and insured for passenger safety. Families, tourists, and business travelers trust Cozy Cabz for secure and comfortable rides across Pune.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    { title: "Shaniwar Wada", img: "/g1.webp", alt: "Shaniwar Wada fort", paragraphs: ["Pune’s iconic Peshwa-era fort known for its grand gates, intricate architecture, and evening light show that brings its history alive."] },
    { title: "Aga Khan Palace", img: "/g2.webp", alt: "Aga Khan Palace", paragraphs: ["A national monument of India’s freedom struggle with exhibits, photographs, and sprawling gardens—peaceful and historic."] },
    { title: "Sinhagad Fort", img: "/g3.webp", alt: "Sinhagad Fort views", paragraphs: ["Popular hill fort trek offering panoramic views and rich Maratha history—complete with local food stalls at the top."] },
    { title: "Osho Ashram, Koregaon Park", img: "/g4.webp", alt: "Osho Ashram greens", paragraphs: ["A serene meditation center amidst greenery offering yoga, wellness programs, and tranquil spaces for self-discovery."] },
    { title: "Pataleshwar Cave Temple", img: "/g1.webp", alt: "Pataleshwar Cave Temple", paragraphs: ["8th-century rock-cut temple dedicated to Lord Shiva—stone pillars and sanctum showcasing ancient craftsmanship."] },
    { title: "Raja Dinkar Kelkar Museum", img: "/g2.webp", alt: "Kelkar Museum exhibits", paragraphs: ["Fascinating collection of artifacts, instruments, and everyday objects telling stories of India’s cultural traditions."] },
    { title: "Parvati Hill", img: "/g3.webp", alt: "Parvati Hill city view", paragraphs: ["Scenic hill with temples, a museum, and sweeping views of Pune—best at sunrise or sunset."] },
  ];

  const faqs = [
    { q: "How much does car rental in Pune cost per km?", a: "Economy cars start at ₹12–₹15 per km, premium cars at ₹25 per km, and luxury cars from ₹35 per km. With Cozy Cabz, all fares are transparent." },
    { q: "Can I rent a car in Pune for outstation travel?", a: "Yes, our rental car in Pune service covers nearby destinations with both one-way and round-trip options." },
    { q: "Do you provide 24×7 airport transfers in Pune?", a: "Absolutely. Our car rental Pune with driver is available 24×7 for Pune Airport." },
    { q: "Can I book a car for just one day in Pune?", a: "Yes. We provide one-day hire car Pune packages (8 hrs/80 km) for city tours, business meetings, or events." },
    { q: "Do you have SUVs or luxury cars available in Pune?", a: "Yes, Cozy Cabz offers SUVs, tempo travelers, and luxury car rental in Pune with driver—ideal for families, weddings, and corporate needs." },
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
          <h1 className="heroeco__title">Car Rental in Pune</h1>
          <span className="small-head">
            <br />
            <h4>– Reliable, Safe & Comfortable</h4>
          </span>
          <p className="heroeco__sub">
            Pune, the cultural capital of Maharashtra, blends heritage, education hubs, IT parks, and modern living. Cozy Cabz offers car rental in Pune with driver so every ride is safe, smooth, and hassle-free—local, outstation, or airport.
          </p>
        </div>
      </section>

      <section className="booking-form" aria-labelledby="booking-form-title">
        <div className="booking-form__container">
          <h2 id="booking-form-title" className="booking-form__title">Book Your <span>Car</span></h2>

          <form className="booking-form__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label className="sr-only" htmlFor="bf-name">Your Name</label>
              <input id="bf-name" name="name" type="text" placeholder="Enter Your Name" autoComplete="name" required aria-required="true" />

              <label className="sr-only" htmlFor="bf-email">Email</label>
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

      <section className="trustcc">
        <div className="trustcc__container">
          <h2 className="trustcc__title">Why Choose Cozy Cabz in<span> Pune?</span></h2>
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
          <p className="howtoSubtitle">Simple and straightforward booking process. Follow these easy steps to book your ride.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Our Team" text="Contact our team or register on our website to get started with your booking process." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Share Your Details" text="Share your destination & departure timing along with any specific requirements." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Select Car Model" text="Select your preferred car model from our fleet and calculate the fare instantly." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Confirmation" text="Get confirmation in few seconds with booking details and driver information." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Wait for Arrival" text="Relax and wait for your cab to arrive at your place at the scheduled time." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Different Car Rental Services in Pune</h2>
          <p className="howrent__intro">Our car rental services in Pune are designed to suit every travel need:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Outstation Trips – Round Trip & One-Way Drops</h3>
              <p>Travel to Lonavala, Mahabaleshwar, Shirdi, or Mumbai. Choose one-way or round-trip packages.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>Skip taxi queues at Pune Airport. Enjoy on-time pickups and drops with professional drivers.</p>
            </li>
            <li className="howrent__item">
              <h3>Local Hourly Rentals</h3>
              <p>8 hrs/80 km and 12 hrs/120 km packages for meetings, shopping, or sightseeing. Full-day bookings for weddings and corporate events.</p>
            </li>
            <li className="howrent__item">
              <h3>Luxury & Premium Cars</h3>
              <p>Book luxury cars for weddings, VIP guests, or corporate functions.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Pune with Cozy Cabz</h2>
            <p>Explore Pune’s history, culture, and modern charm with Cozy Cabz—travel comfortably without traffic or parking worries.</p>
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
          <p>Answers to the most common questions about our Pune services.</p>
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

export default InPune;


