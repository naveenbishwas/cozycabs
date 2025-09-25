"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const InCoimbatore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc:
        "Our chauffeurs are trained, background-checked, and know Coimbatore’s routes well—from Gandhipuram to Peelamedu, RS Puram to the airport. For dependable car rental in Coimbatore with driver, Cozy Cabz is your best choice.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc:
        "We provide hatchbacks, sedans, SUVs, tempo travelers, and luxury cars for rent in Coimbatore. Need a family ride? Our 7 seater car rental in Coimbatore and 8 seater car for rent in Coimbatore are perfect for group travel.",
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
        "No hidden charges. Our Coimbatore car rentals include fuel, tolls, and driver fees in your quote. Whether you need a car for rent in Coimbatore for one day or long trips, pricing is upfront and fair.",
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
        "From early-morning airport drops to late-night pickups, our car hire in Coimbatore is available round the clock.",
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
      desc:
        "Every car is sanitized, GPS-enabled, and insured. Families, corporates, and tourists rely on Cozy Cabz for secure rental cars in Coimbatore.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-3v-4h3v-3a6 6 0 10-12 0v3h3v4H6a2 2 0 01-2-2v-5z" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Marudamalai Temple",
      img: "/g1.webp",
      alt: "Marudamalai Temple hilltop in Coimbatore",
      paragraphs: [
        "Situated on a scenic hilltop, Marudamalai Temple is dedicated to Lord Murugan and is one of Coimbatore’s most sacred sites. The temple’s peaceful atmosphere and panoramic city views make it a favourite for devotees and tourists alike.",
      ],
    },
    {
      title: "Gass Forest Museum",
      img: "/g2.webp",
      alt: "Gass Forest Museum exhibits in Coimbatore",
      paragraphs: [
        "Gass Forest Museum offers a fascinating collection of preserved animals, birds, and plants. It’s an educational hotspot where students, researchers, and families can learn about biodiversity.",
      ],
    },
    {
      title: "VOC Park & Zoo",
      img: "/g3.webp",
      alt: "VOC Park and Zoo family attraction in Coimbatore",
      paragraphs: [
        "A lively recreation spot, VOC Park & Zoo is home to animal enclosures, lush gardens, and children’s play areas—perfect for families spending a relaxed day outdoors.",
      ],
    },
    {
      title: "Perur Pateeswarar Temple",
      img: "/g4.webp",
      alt: "Perur Pateeswarar Temple pillars in Coimbatore",
      paragraphs: [
        "Perur Temple, dedicated to Lord Shiva, is a centuries-old shrine renowned for its beautifully carved pillars and spiritual ambiance—one of the most significant pilgrimage spots in Coimbatore.",
      ],
    },
    {
      title: "Black Thunder Water Park",
      img: "/g3.webp",
      alt: "Black Thunder Water Park slides near Coimbatore",
      paragraphs: [
        "Located near Mettupalayam, Black Thunder is one of India’s largest water parks with thrilling slides, wave pools, and entertainment zones—a hotspot for youngsters and families.",
      ],
    },
    {
      title: "Brookefields Mall",
      img: "/g4.webp",
      alt: "Brookefields Mall shopping and leisure in Coimbatore",
      paragraphs: [
        "Brookefields Mall is Coimbatore’s top shopping and entertainment hub with branded outlets, restaurants, and a multiplex—perfect to unwind after sightseeing.",
        "With Cozy Cabz rent a car in Coimbatore, exploring these places becomes safe, comfortable, and convenient.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does car rental in Coimbatore cost?",
      a: "Economy rides start at ₹12/km, sedans from ₹25/km, and luxury cars from ₹35/km. Cozy Cabz offers clear car rental Coimbatore rates.",
    },
    {
      q: "Can I rent a car in Coimbatore with driver for outstation trips?",
      a: "Yes. We provide car rental in Coimbatore with driver for both one-way and round-trip journeys.",
    },
    {
      q: "Do you provide luxury cars in Coimbatore?",
      a: "Absolutely. Cozy Cabz offers luxury car rental in Coimbatore for weddings, VIP events, and corporate travel.",
    },
    {
      q: "Are group vehicles available?",
      a: "Yes. We provide 7 seater car rental in Coimbatore, 8-seater cars, and tempo travelers for families and large groups.",
    },
    {
      q: "Do you also provide taxi and travel services?",
      a: "Yes. Cozy Cabz covers both car hire in Coimbatore and car travels in Coimbatore, catering to local and outstation needs.",
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
          <h1 className="heroeco__title">Car Rental in Coimbatore</h1>
          <span className="small-head">
            <br />
            <h4>– Reliable, Safe & Affordable</h4>
          </span>
          <p className="heroeco__sub">
            Coimbatore, often called the Manchester of South India, is famous for its textile industries, temples, and scenic surroundings. From the iconic Marudamalai Temple and Gass Forest Museum to modern malls and nearby hill stations like Ooty, the city offers something for every traveler. To explore it all without stress, Cozy Cabz provides car rental in Coimbatore with driver, along with options for luxury car rental in Coimbatore and 7 seater car rental in Coimbatore. Whether you need a vehicle for local travel, business, or family trips, Cozy Cabz ensures safe, affordable, and convenient rides.
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
            Why Choose Cozy Cabz in<span> Coimbatore?</span>
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
          <h2 className="howtoTitle">Easy Booking Process – Car Rental in Coimbatore</h2>
          <p className="howtoSubtitle">Simple and straightforward. Follow these steps to book your ride in Coimbatore.</p>

          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard color="#2563EB" icon={<PhoneIcon />} step={1} title="Contact Our Team" text="Call us or book online to begin your car rental in Coimbatore quickly and hassle-free." />
            <StepCard color="#16A34A" icon={<PinIcon />} step={2} title="Share Your Trip Details" text="Enter pickup & drop locations, date, time, and trip type—local, airport transfer, or outstation." />
            <StepCard color="#8B5CF6" icon={<CarIcon />} step={3} title="Select Your Car" text="Choose from sedans, SUVs, luxury vehicles, or Coimbatore travels car options to suit your needs." />
            <StepCard color="#F97316" icon={<CheckIcon />} step={4} title="Get Confirmation" text="Receive instant booking details with car model, driver information, and estimated arrival time." />
            <StepCard color="#EF4444" icon={<ClockIcon />} step={5} title="Enjoy the Ride" text="Sit back and relax while our professional chauffeurs handle your journey safely and comfortably." />
          </div>
        </div>
      </section>

      <section className="howrent" aria-labelledby="howrent-title">
        <div className="howrent__container">
          <h2 id="howrent-title">Car Rental Services in Coimbatore</h2>
          <p className="howrent__intro">At Cozy Cabz, our car rental services in Coimbatore are designed to suit every traveler’s needs:</p>

          <ul className="howrent__list">
            <li className="howrent__item">
              <h3>Local Rentals</h3>
              <p>Hourly and full-day packages for sightseeing, shopping, and business.</p>
            </li>
            <li className="howrent__item">
              <h3>Airport Transfers</h3>
              <p>On-time pickups and drops with easy Coimbatore car booking.</p>
            </li>
            <li className="howrent__item">
              <h3>Outstation Trips</h3>
              <p>Hire a rental car in Coimbatore for Ooty, Coonoor, Pollachi, or Palakkad.</p>
            </li>
            <li className="howrent__item">
              <h3>Luxury Cars</h3>
              <p>Premium sedans and SUVs for weddings, events, or luxury car rental in Coimbatore.</p>
            </li>
            <li className="howrent__item">
              <h3>Group Travel</h3>
              <p>7 seater car rental in Coimbatore and tempo travelers for families and corporates.</p>
            </li>
            <li className="howrent__item">
              <h3>Taxi & Travel Services</h3>
              <p>We also provide Coimbatore car rental & taxi services for local and long-distance travel.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">Must-Visit Places in Coimbatore with Cozy Cabz</h2>
            <p>With Cozy Cabz rent a car in Coimbatore, exploring the city’s temples, museums, parks, and shopping hubs becomes safe and convenient. Enjoy every landmark at your own pace with complete comfort.</p>
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
          <p>Answers to common questions about our car rental services in Coimbatore.</p>
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

export default InCoimbatore;


