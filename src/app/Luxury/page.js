"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Luxury.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import CityForm from "../Components/CityForm/page";
import Image from "next/image";
import NumberCounter from "../Components/NumberCounter/page";
import Link from "next/link";

// ===== Desktop Slides =====
const desktopSlides = [
  {
    id: 1,
    image: "/banner1.png",
    heading: "Where Prestige Meets Power",
    subtext: "Elegance built to move.",
  },
  {
    id: 2,
    image: "/banner2.png",
    heading: "Ride Like Royalty",
    subtext: "Comfort with class.",
  },
  {
    id: 3,
    image: "/banner3.png",
    heading: "Elegance in Motion",
    subtext: "Every journey, refined.",
  },
];

// ===== Mobile Slides =====
const mobileSlides = [
  {
    id: 1,
    image: "/Luxury-m1.png",
    heading: "Where Prestige Meets Power",
    subtext: "Elegance built to move.",
  },
  {
    id: 2,
    image: "/Luxury-m2.png",
    heading: "Ride Like Royalty",
    subtext: "Comfort with class.",
  },
  {
    id: 3,
    image: "/Luxury-m3.png",
    heading: "Elegance in Motion",
    subtext: "Every journey, refined.",
  },
];

const cars = [
  {
    id: 1,
    title: "Audi A6",
    subtitle: "Sophistication in motion",
    image: "/AudiA6.png",
    description:
      "Experience German luxury with seamless comfort, cutting-edge design, and quiet confidence. The Audi A6 turns every drive into a statement of class.",
    seating: 5,
    luggage: 3,
    fuel: "Petrol",
    price: "₹25/km",
  },
  {
    id: 2,
    title: "Audi Q7",
    subtitle: "Power meets prestige",
    image: "/AudiQ6.png",
    description:
      "Command attention with the Audi Q7 — a full-size luxury SUV built for those who demand performance, space, and elegance wherever they go.",
    seating: 7,
    luggage: 4,
    fuel: "Diesel",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "BMW 5 Series",
    subtitle: "Drive brilliance",
    image: "/BMW5series.png",
    description:
      "The BMW 5 Series blends executive refinement with thrilling performance. Ideal for high-profile meetings, city rides, and elegant arrivals.",
    seating: 5,
    luggage: 4,
    fuel: "Petrol",
    price: "₹35/km",
  },
  {
    id: 4,
    title: "Mercedes-Benz GLS",
    subtitle: "The S-Class of SUVs",
    image: "/MercedesBenzGLS.png",
    description:
      "Commanding presence meets first-class luxury. The GLS delivers effortless power, unmatched comfort, and a cabin so refined you won’t want to leave.",
    seating: 7,
    luggage: 5,
    fuel: "Diesel",
    price: "₹35/km",
  },
  {
    id: 5,
    title: "Mercedes-Benz E-Class",
    subtitle: "Business luxury, perfected",
    image: "/MercedesBenzEClass.png",
    description:
      "A timeless sedan that blends grace with technology. The E-Class offers plush interiors, smooth performance, and quiet confidence for every ride.",
    seating: 5,
    luggage: 4,
    fuel: "Petrol",
    price: "₹35/km",
  },
];

const features = [
  {
    id: 1,
    image: "/luxury-seamless-experience.png",
    title: "Seamless Experience",
    desc: "From booking to drop-off, every detail is handled with care and precision.",
  },
  {
    id: 2,
    image: "/luxury-safe&reliable.png",
    title: "Safety & Reliability",
    desc: "Every ride meets top safety standards and undergoes regular inspections.",
  },
  {
    id: 3,
    image: "/luxury-Style-that-moves.png",
    title: "Style That Moves",
    desc: "Make an impression with vehicles built for elegance and performance.",
  },
  {
    id: 4,
    image: "/luxury-24-7.png",
    title: "24/7 Concierge Support",
    desc: "Our support team is available round-the-clock for any special requests.",
  },
];

const faqs = [
  {
    q: "Can I personalize my ride experience?",
    a: "Yes — choose your music, temperature, routes, and more for your comfort.",
  },
  {
    q: "What amenities are offered in luxury vehicles?",
    a: "Premium leather interiors, Wi-Fi, bottled water, chargers, and quiet elegance.",
  },
  {
    q: "Do you provide luxury cars for events?",
    a: "Yes, our fleet is booked for weddings, corporate events, and red-carpet arrivals.",
  },
  {
    q: "Can I rent for a full day or multiple days?",
    a: "Absolutely, flexible hourly, daily, and multi-day packages are available.",
  },
];

const Luxury = () => {
  const [current, setCurrent] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  // Slider controls
  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? desktopSlides.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === desktopSlides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobile((prev) =>
        prev === mobileSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentMobile]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <>
      <head>
        <title>
          Luxury Car Rental | Premium Chauffeur & Business Rides – CozyCabz
        </title>
        <meta
          name="description"
          content="Experience elegance and comfort with CozyCabz luxury car rentals. Choose from Audi, BMW, and Mercedes vehicles for corporate travel, weddings, and VIP events across India."
        />
      </head>

      <Header />

      {/* ===== SLIDESHOW ===== */}
      <section className="slideshow-section">
        {/* Desktop Slider */}
        <div className="slideshow-container desktop-slider">
          {desktopSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="premium-overlay"></div>
              <div className="slide-content">
                <h2>{slide.heading}</h2>
                <p>{slide.subtext}</p>
                <button>Book Your Ride</button>
              </div>
            </div>
          ))}

          <button className="arrow left" onClick={handlePrev}>
            ‹
          </button>
          <button className="arrow right" onClick={handleNext}>
            ›
          </button>

          <div className="dots">
            {desktopSlides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active-dot" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="slideshow-container mobile-slider">
          {mobileSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentMobile ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="premium-overlay"></div>
              <div className="slide-content">
                <h2>{slide.heading}</h2>
                <p>{slide.subtext}</p>
                <button>Book Now</button>
              </div>
            </div>
          ))}

          <div className="dots">
            {mobileSlides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentMobile ? "active-dot" : ""}`}
                onClick={() => setCurrentMobile(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <NumberCounter />
      <CityForm />

      {/* Vehicles */}
      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Luxury <span className="red-black">Vehicles</span>
          </h2>
          <p>Find your premium ride for business, travel, or celebration.</p>
        </div>

        <div className="fleet-grid">
          {cars.map((car) => (
            <div key={car.id} className="fleet-card">
              <div className="image-wrapper-premium">
                <img src={car.image} alt={car.title} />
              </div>
              <div className="fleet-content">
                <h3>{car.title}</h3>
                <div className="subtitle">{car.subtitle}</div>
                <p className="desc">{car.description}</p>
                <div className="bottom-row">
                  <div className="price">{car.price}</div>
                  <Link href="#book-your-car">
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Luxury */}
      <section className="why-premium-section" id="luxury">
        <div className="why-header">
          <h2>
            Why Ride <span className="red-black">Luxury?</span>
          </h2>
          <p>Because perfection should be part of every journey.</p>
        </div>

        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="icon-wrapper">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="red-black">Questions</span>
          </h2>
          <p>Answers to your most common queries about luxury rides.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                <button
                  className="faq-question"
                  aria-expanded={open}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div
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

      <SiteFooter />
    </>
  );
};

export default Luxury;
