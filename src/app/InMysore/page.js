"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InMysore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Experienced Drivers",
      desc:
        "Our chauffeurs know Mysore’s roads, shortcuts, and tourist circuits intimately.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Vehicle Choice",
      desc:
        "From economy sedans and SUVs to luxury cars or self drive rental cars in Mysore, we’ve got you covered.",
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
        "Get clear car rental in Mysore price details upfront—no surprises later.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Flexible Packages",
      desc:
        "Hourly, daily, or outstation trips are available depending on your plan.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
        </svg>
      ),
    },
    {
      title: "24×7 Service",
      desc:
        "Early morning temple visits or night airport transfers—car hire in Mysore is always on.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Mysore Palace",
      img: "/g1.webp",
      alt: "Mysore Palace illuminated Indo-Saracenic architecture",
      paragraphs: [
        "An Indo-Saracenic architectural masterpiece with ornate halls, stained glass, and royal artifacts—glows under thousands of lights on Sundays and during Dussehra.",
      ],
    },
    {
      title: "Chamundi Hills & Chamundeshwari Temple",
      img: "/g2.webp",
      alt: "Chamundi Hills Chamundeshwari Temple Nandi statue",
      paragraphs: [
        "A spiritual and scenic landmark with panoramic city views and a giant granite Nandi statue halfway up the hill.",
      ],
    },
    {
      title: "Brindavan Gardens & KRS Dam",
      img: "/g3.webp",
      alt: "Brindavan Gardens musical fountain KRS Dam",
      paragraphs: [
        "Iconic terraced gardens famous for musical fountains, flower beds, and serene walking paths—especially enchanting in the evening.",
      ],
    },
    {
      title: "Sri Chamarajendra Zoological Gardens (Mysore Zoo)",
      img: "/g4.webp",
      alt: "Mysore Zoo wildlife and greenery",
      paragraphs: [
        "One of India’s oldest and best-maintained zoos—home to big cats, elephants, reptiles, and exotic birds with spacious enclosures and greenery.",
      ],
    },
    {
      title: "Jaganmohan Palace & Art Gallery",
      img: "/g3.webp",
      alt: "Jaganmohan Palace Art Gallery Raja Ravi Varma works",
      paragraphs: [
        "Former royal residence turned art gallery—houses South Indian traditional art, works by Raja Ravi Varma, artifacts, and antiques.",
      ],
    },
    {
      title: "Devaraja Market",
      img: "/g4.webp",
      alt: "Devaraja Market spices flowers silk",
      paragraphs: [
        "Bustling bazaar with fresh produce, spices, flowers, silk sarees, and handicrafts—a sensory delight and photographer’s favorite.",
        "With Cozy Cabz car rental in Mysore, cover these at your own pace—comfortably and hassle-free.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Mysore cost?",
      a: "Prices depend on the vehicle type and distance. We provide clear, upfront estimates with no hidden charges.",
    },
    {
      q: "Can I book a car with driver for a single day?",
      a: "Yes. Hourly, daily, or multi-day options are available.",
    },
    {
      q: "Do you provide self-drive cars in Mysore?",
      a: "Absolutely. Well-maintained self drive cars are available to explore at your pace.",
    },
    {
      q: "Can I rent a car for outstation travel?",
      a: "Yes—Coorg, Bandipur, Ooty, and more with one-way or round-trip options.",
    },
    {
      q: "How do I make a booking?",
      a: "Book on our website or call our team for instant confirmation.",
    },
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
          <h1 className="heroeco__title">Car Rental in Mysore</h1>
          <span className="small-head">
            <br />
            <h4>– Comfortable, Reliable & Safe</h4>
          </span>
          <p className="heroeco__sub">
            Mysuru is a city of palaces, gardens, temples, and royal heritage. From Mysore Palace and Chamundi Hills to lakes and bustling markets, explore it stress-free with Cozy Cabz car rental in Mysore—driver or self drive options, for sightseeing, local errands, or outstation trips.
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
          <h2 className="trustcc__title">Why Choose Cozy Cabz in<span> Mysore?</span></h2>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Mysore</h2>
          <p className="howtoSubtitle">Simple steps to get going.</p>
          <div className="connector" aria-hidden="true" />
          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Us" text="Reach out online or by phone to start your booking." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Enter Trip Details" text="Share pickup & drop locations, date, time, and trip type." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Choose Your Car" text="Economy sedans, SUVs, premium models, or self drive cars in Mysore." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Instant Confirmation" text="Receive car/driver info and ETA right away." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Enjoy a Smooth Ride" text="Relax while our chauffeurs handle the roads safely." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Mysore</h2>
          <p className="howrent__intro">Pick the package that fits your travel plan:</p>
          <ul className="howrent__list">
            <li className="howrent__item"><h3>Local Rentals</h3><p>Flexible hourly/daily rentals for sightseeing and errands.</p></li>
            <li className="howrent__item"><h3>Airport Transfers</h3><p>On-time pickups and drops for a worry-free transfer.</p></li>
            <li className="howrent__item"><h3>Outstation Trips</h3><p>Coorg, Bandipur, Ooty and more—one-way or round-trip.</p></li>
            <li className="howrent__item"><h3>Self-Drive Cars</h3><p>Well-maintained self drive options for total freedom.</p></li>
            <li className="howrent__item"><h3>Luxury Cars</h3><p>Premium models for weddings, VIP travel, and events.</p></li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Mysore with Cozy Cabz</h2>
            <p>Cover palaces, gardens, temples, and markets comfortably at your pace.</p>
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
          <p>Answers to common questions about our Mysore rentals.</p>
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

export default InMysore;


