"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const Inbanglore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Professional & Verified Drivers",
      desc: "Our chauffeurs know Bangalore’s busy roads inside out—whether it’s the traffic-heavy lanes of Silk Board, the tech parks in Whitefield, or the scenic drives to Nandi Hills. Each driver is background-checked, polite, and well-trained to ensure your journey is safe and stress-free. If you’re looking for car rental Bangalore with driver or want to hire a car in Bangalore for work or leisure, cozy cabz is your trusted partner.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Range of Vehicles",
      desc: "Need a compact car for rent in Bangalore for local travel, a premium sedan for meetings, or a 7 seater car rental Bangalore for family trips? We’ve got options for every requirement. From luxury cars rental in Bangalore, our fleet ensures the right fit for your comfort and budget.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing – No Hidden Costs",
      desc: "With cozy cabz, you always know what you’re paying for. We provide upfront estimates covering per km charges, driver fees, tolls, and parking. Whether you’re booking a car on rent in Bangalore for a day or planning a long rental car service in Bangalore for an outstation trip, there are no hidden surprises.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Available 24×7, Anytime You Need",
      desc: "Bangalore runs around the clock—and so do we. From early-morning airport drops to late-night returns after a business dinner or weekend outing, our Bangalore car rentals are available 24×7. You can rent a car in Bangalore anytime with quick confirmations and reliable service.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
          <path d="M14.5 14.5l2 2 3.5-3.5" className="stroke" />
        </svg>
      ),
    },
  ];

  const spots = [
    {
      title: "Bangalore Palace",
      img: "/g1.webp",
      alt: "Bangalore Palace exterior",
      paragraphs: [
        "An iconic landmark with Tudor-style architecture, sprawling lawns, and regal interiors from Victorian, Edwardian, and Neo-Classical periods—offering a glimpse into Bangalore’s royal past.",
      ],
    },
    {
      title: "Vidhana Soudha",
      img: "/g2.webp",
      alt: "Vidhana Soudha lit up at night",
      paragraphs: [
        "The pride of Karnataka and India’s largest legislative building. Built in Neo-Dravidian style, it glows beautifully on Sundays and public holidays—showcasing the city’s grandeur.",
      ],
    },
    {
      title: "Lalbagh Botanical Garden",
      img: "/g3.webp",
      alt: "Lalbagh Glass House and gardens",
      paragraphs: [
        "Spread across 240 acres, Lalbagh features the famed Glass House, a serene lake, rich tropical plant collections, and the ancient Lalbagh Rock—perfect for nature lovers and families.",
      ],
    },
    {
      title: "Cubbon Park & Seshadri Iyer Memorial Hall",
      img: "/g4.webp",
      alt: "Cubbon Park greenery and red library building",
      paragraphs: [
        "A peaceful green escape in the heart of the city. Wander leafy trails, then visit the striking red Seshadri Iyer Memorial Hall housing the Central Library with rare manuscripts.",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a car rental in Bangalore cost per km?",
      a: "Economy rides usually start at ₹12–₹15 per km, premium cars at ₹25 per km, and luxury cars from ₹35 per km. With cozy cabz, you’ll always get a transparent fare estimate before confirming your booking, whether it’s for a car rental in Bangalore with driver or an outstation trip.",
    },
    {
      q: "Can I rent a car in Bangalore for outstation travel?",
      a: "Yes, absolutely. cozy cabz offers car rentals in Bangalore for routes like Bangalore to Mysore, Coorg, Chikmagalur, and Nandi Hills. Choose one-way or round-trip packages as per your plan.",
    },
    {
      q: "Do you provide airport pickup and drop services in Bangalore?",
      a: "Yes. Our 24×7 car hire in Bangalore covers Kempegowda International Airport, ensuring on-time pickups and drops even during late-night or early-morning flights.",
    },
    {
      q: "Can I book a car for a full day in Bangalore?",
      a: "Definitely. We offer half-day and full-day rental packages like 8 hrs/80 km—ideal for sightseeing, business travel, or family outings. 7 seater options are available for group travel.",
    },
    {
      q: "What types of cars are available for rent in Bangalore?",
      a: "Our fleet includes economy sedans, premium sedans, SUVs, luxury cars, tempo travelers, and minibuses. Whether it’s short city trips or weekend getaways, we have you covered.",
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
          <h1 className="heroeco__title">Car Rental in Bangalore</h1>
          <span className="small-head">
            <br />
            <h4>– Comfortable, Safe & Reliable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Bangalore, also known as the Silicon Valley of India, blends modern
            IT hubs with lush gardens, historic landmarks, and buzzing
            nightlife. With heavy traffic and scattered destinations, getting
            around can be challenging. That’s why cozy cabz Car Rental in
            Bangalore is the easiest way to travel. With our car rental
            Bangalore with driver, you get clean cars, verified chauffeurs,
            transparent pricing, and 24×7 service.
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
            Why Choose cozy cabz in<span> Bangalore?</span>
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
            Booking your ride with cozy cabz in Bangalore takes just a few steps
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
                From economy cars to SUVs, premium sedans, or luxury taxis—pick
                what suits your budget and comfort.
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
              <h3>Enjoy a Stress-Free Ride</h3>
              <p>
                Sit back, relax, and let our driver handle Bangalore’s traffic
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
              Must-Visit Places in Bangalore with Cozy Cabz
            </h2>
            <p>
              Discover the charm of Bangalore with cozy cabz—your trusted travel
              partner. From grand palaces and lush gardens to buzzing shopping
              hubs and spiritual retreats, the city offers something for
              everyone.
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

      <section className="trustcc" aria-labelledby="closing-title">
        <div className="trustcc__container">
          <h2 id="closing-title">
            cozy cabz – Your Trusted Car Rental in Bangalore
          </h2>
          <p>
            Whether you need a car on rent in Bangalore for daily use, a car
            rental Bangalore with driver for corporate travel, or a 7 seater car
            for rent in Bangalore for family holidays, cozy cabz has you
            covered. With affordable rates, professional drivers, and a wide
            fleet, we are committed to being the best car rental in Bangalore.
            From cheap car rental in Bangalore to premium luxury rides, every
            journey with us is safe, reliable, and memorable.
          </p>
        </div>
      </section>

      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers to the most common questions about our Bangalore services.
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

export default Inbanglore;
