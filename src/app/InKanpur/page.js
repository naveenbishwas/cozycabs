"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InKanpur = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Verified & Experienced Drivers",
      desc:
        "Our chauffeurs are well versed with Kanpur’s traffic, lanes, and best routes, making your journeys safe and timely.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Fleet Selection",
      desc:
        "From hatchbacks and sedans to SUVs and luxury cars, we also offer self drive cars in Kanpur and multi-seater options.",
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
        "All quotes include fuel, tolls, parking, and driver charges. No hidden costs—ever.",
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
        "Early morning airport transfers or late-night city rides—our Kanpur car rental service is at your disposal.",
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
        "Each vehicle is thoroughly sanitized, GPS-monitored, and insured, ensuring peace of mind for every trip.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Kanpur Zoological Park (Allen Forest Zoo)",
      img: "/g1.webp",
      alt: "Kanpur Zoological Park Allen Forest Zoo",
      paragraphs: [
        "Covering more than 110 hectares, this open-air wildlife sanctuary features big cats, exotic birds, and serene nature walks amid the city.",
      ],
    },
    {
      title: "Nana Rao Park",
      img: "/g2.webp",
      alt: "Nana Rao Park green oasis in Kanpur",
      paragraphs: [
        "A historic city park on Mall Road—great for morning walks, quiet reflection, and enjoying the urban greenery tied to India’s freedom struggle.",
      ],
    },
    {
      title: "Moti Jheel",
      img: "/g3.webp",
      alt: "Moti Jheel lake and gardens in Kanpur",
      paragraphs: [
        "An artificial lake with gardens and play areas—perfect for boating and evening strolls along landscaped banks.",
      ],
    },
    {
      title: "JK Temple",
      img: "/g4.webp",
      alt: "JK Temple architecture in Kanpur",
      paragraphs: [
        "Blending ancient and modern styles, JK Temple offers a calm spiritual ambiance and a glimpse into Kanpur’s architectural diversity.",
      ],
    },
    {
      title: "Kanpur Memorial Church",
      img: "/g3.webp",
      alt: "Kanpur Memorial Church Gothic style",
      paragraphs: [
        "Built in Gothic style with elegant stained-glass windows, this serene memorial honors soldiers from the 1857 uprising.",
      ],
    },
    {
      title: "Blue World Theme Park",
      img: "/g4.webp",
      alt: "Blue World Theme Park rides and water attractions",
      paragraphs: [
        "A top family destination on the outskirts—rides, water attractions, and themed zones for thrill-seekers and kids alike.",
        "With Cozy Cabz rent a car in Kanpur, exploring these attractions is comfortable and hassle-free.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Kanpur cost?",
      a: "Rates depend on car type and distance. You’ll always receive a clear, transparent quote before booking.",
    },
    {
      q: "Can I book a car on rent in Kanpur with driver for one day?",
      a: "Yes. We offer flexible car on rent in Kanpur with driver packages for both short trips and full-day travel.",
    },
    {
      q: "Do you provide self-drive cars in Kanpur?",
      a: "Absolutely. Cozy Cabz offers self drive cars in Kanpur with convenient plans for privacy and independence.",
    },
    {
      q: "Are there amusement or family attractions in Kanpur?",
      a: "Yes. Blue World Theme Park is a popular choice with rides, water fun, and themed zones.",
    },
    {
      q: "Can I book a car for outstation trips from Kanpur?",
      a: "Of course. We provide rental cars for Bithoor, Lucknow, Allahabad, and other nearby cities.",
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
          <h1 className="heroeco__title">Car Rental in Kanpur</h1>
          <span className="small-head">
            <br />
            <h4>– Comfortable, Reliable & Flexible</h4>
          </span>
          <p className="heroeco__sub">
            Kanpur, the industrial and cultural hub of Uttar Pradesh, offers riverside ghats, historical monuments, markets, and diverse neighborhoods. Cozy Cabz provides car rental in Kanpur with driver and self drive options—ideal for local commuting, full-day sightseeing, or independent travel.
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
            Why Choose Cozy Cabz in<span> Kanpur?</span>
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
          <h2 className="howtoTitle">Easy Booking Process with Cozy Cabz</h2>
          <p className="howtoSubtitle">Booking your ride with Cozy Cabz is quick and effortless.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#16A34A" icon={<PinIcon />} step={1} title="Enter Trip Details" text="Share your pickup and drop locations, travel date, and time." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={2} title="Select Your Car" text="Choose sedans, SUVs, luxury models, or a self drive car in Kanpur." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={3} title="Instant Confirmation" text="Get complete booking details, including car and driver information, right away." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={4} title="Enjoy the Journey" text="Relax while we handle the traffic, routes, and navigation." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Kanpur</h2>
          <p className="howrent__intro">Cozy Cabz provides a variety of car rental services in Kanpur tailored to your needs:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>Hourly or daily packages for shopping, office work, or city tours.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>Reliable pickup and drop-off at Kanpur Airport.</p>
            </li>
            <li className="howrent__item">
              <h3>Outstation Trips</h3>
              <p>Rent a car for destinations like Bithoor, Lucknow, or Allahabad.</p>
            </li>
            <li className="howrent__item">
              <h3>Luxury & Premium Cars</h3>
              <p>Hire high-end vehicles for special occasions or VIP travel.</p>
            </li>
            <li className="howrent__item">
              <h3>Self-Drive Cars</h3>
              <p>Choose self drive car in Kanpur for a more independent travel experience.</p>
            </li>
            <li className="howrent__item">
              <h3>Group Travel</h3>
              <p>Larger vehicles and multi-seater options for group outings.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Kanpur with Cozy Cabz</h2>
            <p>Explore heritage spots, gardens, and entertainment venues without parking or navigation stress.</p>
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
          <p>Answers to common questions about our car rental services in Kanpur.</p>
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

export default InKanpur;


