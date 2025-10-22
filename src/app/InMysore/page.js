"use client";

import React, { useState } from "react";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const InMysore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const items = [
    {
      title: "Experienced Drivers",
      desc: "Our chauffeurs know Mysore’s roads, shortcuts, and tourist circuits intimately.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
          <path d="M9.2 12.6l2.1 2.1 4.5-4.5" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Wide Vehicle Choice",
      desc: "From economy sedans and SUVs to luxury cars or self drive rental cars in Mysore, we’ve got you covered.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13l1.2-3.6A3 3 0 017.1 7h9.8a3 3 0 012.9 2.4L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5z" />
          <path d="M6 13h12" className="stroke" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      desc: "Get clear car rental in Mysore price details upfront—no surprises later.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="15" cy="9" r="1.6" className="hole" />
        </svg>
      ),
    },
    {
      title: "Flexible Packages",
      desc: "Hourly, daily, or outstation trips are available depending on your plan.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M10.5 6.5v4.2l3.2 2" className="stroke" />
        </svg>
      ),
    },
    {
      title: "24×7 Service",
      desc: "Early morning temple visits or night airport transfers—car hire in Mysore is always on.",
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
      img: "/mysore-palace.jpeg",
      alt: "Mysore Palace illuminated Indo-Saracenic architecture",
      paragraphs: [
        "The heart of Mysore’s identity, Mysore Palace is an Indo-Saracenic architectural masterpiece. Known for its ornate halls, stained glass windows, and royal artifacts, it offers a glimpse into the grandeur of the Wadiyar dynasty. On Sundays and during festivals like Dussehra, the palace glows under thousands of lights, creating a magical spectacle that attracts visitors worldwide.",
      ],
    },
    {
      title: "Chamundi Hills & Chamundeshwari Temple",
      img: "./Chamundi-Hills&Chamundeshwari-Temple.jpeg",
      alt: "Chamundi Hills Chamundeshwari Temple Nandi statue",
      paragraphs: [
        "Located 13 km from the city center, Chamundi Hills is a spiritual and scenic landmark. Atop the hill stands the Chamundeshwari Temple, dedicated to Goddess Chamundi. The panoramic views of Mysore city from here are breathtaking, especially at sunset. A giant Nandi statue carved from a single granite block also sits halfway up the hill, adding to the site’s charm.",
      ],
    },
    {
      title: "Brindavan Gardens & KRS Dam",
      img: "/Brindavan-Gardens&KRS-Dam.jpeg",
      alt: "Brindavan Gardens musical fountain KRS Dam",
      paragraphs: [
        "Just outside Mysore lies the iconic Brindavan Gardens, adjoining the Krishnarajasagara (KRS) Dam. Spread over terraces, the gardens are famous for their musical fountain shows, colorful flower beds, and serene walking paths. Evenings here are especially enchanting, making it one of Mysore’s most visited attractions.",
      ],
    },
    {
      title: "Sri Chamarajendra Zoological Gardens (Mysore Zoo)",
      img: "/Sri-Chamarajendra-Zoological-Gardens.jpeg",
      alt: "Mysore Zoo wildlife and greenery",
      paragraphs: [
        "Established in 1892, Mysore Zoo is one of India’s oldest and most well-maintained zoological parks. It houses a wide variety of animals, including big cats, elephants, reptiles, and exotic birds. Families love its spacious enclosures, greenery, and educational exhibits, making it an ideal outing for kids and wildlife enthusiasts.",
      ],
    },
    {
      title: "Jaganmohan Palace & Art Gallery",
      img: "/Jaganmohan-Palace&Art-Gallery.jpeg",
      alt: "Jaganmohan Palace Art Gallery Raja Ravi Varma works",
      paragraphs: [
        "A former royal residence, Jaganmohan Palace now functions as an art gallery displaying one of the largest collections of South Indian traditional art. Visitors can admire works by renowned artists like Raja Ravi Varma, along with rare paintings, artifacts, and antiques that narrate Mysore’s artistic heritage.",
      ],
    },
    {
      title: "Devaraja Market",
      img: "/g4.webp",
      alt: "Devaraja Market spices flowers silk",
      paragraphs: [
        "A bustling bazaar in the heart of Mysore, Devaraja Market is a sensory delight. Known for fresh produce, spices, flowers, silk sarees, and handicrafts, it’s the perfect place to experience the city’s local life. The colorful stalls and lively atmosphere make it a photographer’s favorite as well as a shopper’s paradise",
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
          <h1 className="heroeco__title">Car Rental in Mysore</h1>
          <span className="small-head">
            <br />
            <h4>Comfortable, Reliable & Safe</h4>
          </span>
          <p className="heroeco__sub">
            Mysore, the city of palaces and gardens, blends royal heritage,
            temples, and bustling markets. From Mysore Palace to Chamundi Hills,
            there’s much to explore. Cozy Cabz Car Rental in Mysore with driver
            and self drive options ensures safe, stress-free travel.
          </p>
        </div>
      </section>

      <CityForm />

      <Trustcc />
      <Howto />
      <Howrent />

      <section className="attractions" aria-labelledby="attractions-title">
        <div className="attractions__container">
          <header className="attractions__head">
            <h2 id="attractions-title">
              Must-Visit Places in Mysore with Cozy Cabz
            </h2>
            <p>
              Cover palaces, gardens, temples, and markets comfortably at your
              pace.
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
          <p>Answers to common questions about our Mysore rentals.</p>
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

export default InMysore;
