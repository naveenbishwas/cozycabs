"use client";

import React, { useState } from "react";
// import "../InMumbai/internalOne.css";
import Image from "next/image";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import Trustcc from "../Components/Trustcc";
import Howto from "../Components/Howto";
import Howrent from "../Components/Howrent";
import CityForm from "../Components/CityForm/page";

const Inbanglore = () => {
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
      title: "Bangalore Palace",
      img: "/Bangalore-Palace.png",
      alt: "Bangalore Palace exterior",
      paragraphs: [
        "For any visitor, the iconic Bangalore Palace is one of the city’s most fascinating landmarks. Spread across sprawling grounds, the palace instantly transports you into a royal era amidst the bustling modern city. Its Tudor-style architecture, complete with turrets and battlements, makes it look like a fairytale castle right in the heart of Bangalore , Step inside, and the grandeur grows even more. The interiors are adorned with floral motifs, elegant wood carvings, and age-old paintings. Built in 1878, the palace showcases furniture and decor from Victorian, Edwardian, and Neo-Classical periods, making it a true reflection of timeless elegance. A visit here is incomplete without strolling through its lush lawns and experiencing the charm of Bangalore’s regal past ",
      ],
    },
    {
      title: "Vidhana Soudha",
      img: "/Vidhana.png",
      alt: "Vidhana Soudha lit up at night",
      paragraphs: [
        "When it comes to modern history, Vidhana Soudha is the pride of Karnataka. This majestic building, which houses the state legislature, is often described as an “architectural marvel” for its sheer scale and design. It stands as a symbol of democracy while reflecting the cultural richness of the state. Constructed in 1951, the building follows the Neo-Dravidian style of architecture, with influences of Indo-Saracenic design. Spread over 60 acres, it is the largest legislative building in India. While entry inside is restricted, the entire structure lights up beautifully every Sunday evening and on public holidays, turning into a breathtaking spectacle that highlights Bangalore’s grandeur and heritage.",
      ],
    },
    {
      title: "Lalbagh Botanical Garden",
      img: "/Lalbagh.png",
      alt: "Lalbagh Glass House and gardens",
      paragraphs: [
        "Known as the “green heart” of the city, Lalbagh Botanical Garden spreads across 240 acres and houses one of India’s richest collections of tropical plants. Commissioned by Hyder Ali and later expanded by Tipu Sultan, the garden carries Mughal influences and has been a center of horticultural excellence for centuries.The highlight of Lalbagh is the iconic Glass House, modeled after London’s Crystal Palace, which hosts the famous annual flower shows. The garden also features the historic Lalbagh Rock, dating back 3,000 million years, along with a serene lake and diverse birdlife. Whether you’re a nature enthusiast, a photographer, or a family seeking a quiet retreat, Lalbagh is an unmissable attraction in Bangalore",
      ],
    },
    {
      title: "Cubbon Park & Seshadri Iyer Memorial Hall",
      img: "/Cubbon.png",
      alt: "Cubbon Park greenery and red library building",
      paragraphs: [
        "Nestled in the heart of the city, Cubbon Park is a peaceful green escape spread across 300 acres. With walking trails, shady avenues, and beautiful landscapes, it is a favorite spot for morning joggers, families, and tourists alike. The park’s charm lies in its calm ambiance, making it a perfect place to relax amid Bangalore’s busy streets. Within Cubbon Park stands the striking Seshadri Iyer Memorial Hall, a red-colored heritage building that houses the Central Library. Built in 1915, it features classic European architecture and an extensive collection of over 2.5 lakh books, including rare manuscripts and a Braille section. For book lovers and history enthusiasts, this hall adds cultural depth to the lush greenery of Cubbon Park.",
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
      <head>
        <title>
          Car Rental in Bangalore | Affordable Taxi & Chauffeur Service –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Book reliable car rentals in Bangalore with CozyCabz. Choose economy, premium, or luxury cars with professional drivers for airport transfers, city rides, and outstation travel."
        />
      </head>

      <Header />
      <section className="heroeco" aria-label="Car Rental Hero Section">
        <div className="heroeco__copy">
          <p className="heroeco__eyebrow">India’s Trusted Car Rental</p>
          <h1 className="heroeco__title">Car Rental in Bangalore</h1>
          <span className="small-head">
            <h4>Comfortable, Safe & Reliable Rides</h4>
          </span>
          <p className="heroeco__sub">
            Bangalore, the Silicon Valley of India, blends IT hubs, gardens,
            landmarks, and nightlife. Yet traffic makes travel challenging.
            That’s where Cozy Cabz Car Rental in Bangalore helps, offering clean
            cars, verified chauffeurs, transparent pricing, 24×7 service.
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

      {/* <section className="trustcc" aria-labelledby="closing-title">
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
      </section> */}

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
