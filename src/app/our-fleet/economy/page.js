"use client";
import React, { useState, useEffect } from "react";
import "./Economy.css";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import CityForm from "@/app/Components/CityForm/page";
import Image from "next/image";
import NumberCounter from "@/app/Components/NumberCounter/page";
import Link from "next/link";

// ===== Desktop Slides =====
const desktopSlides = [
  {
    id: 1,
    image: "/economy-banner3.png",
    heading: "Smart Travel, Smarter Prices”",
    subtext: "Comfort that fits your budget.",
  },
  {
    id: 2,
    image: "/economy-banner2.png",
    heading: "Everyday Journeys, Elevated",
    subtext: "Simple. Reliable. Affordable",
  },
  {
    id: 3,
    image: "/economy1.png",
    heading: "Value You Can Feel",
    subtext: "“Low cost, high trust.",
  },
];

// ===== Mobile Slides =====
const mobileSlides = [
  {
    id: 1,
    image: "/Economy3-m.png",
    heading: "Smart Travel, Smarter Prices”",
    subtext: "Comfort that fits your budget.",
  },
  {
    id: 2,
    image: "/Economy2-m.png",
    heading: "Everyday Journeys, Elevated",
    subtext: "Simple. Reliable. Affordable",
  },
  {
    id: 3,
    image: "/Economy1-m.png",
    heading: "Value You Can Feel",
    subtext: "“Low cost, high trust.",
  },
];

const cars = [
  {
    id: 1,
    title: "Honda City",
    subtitle: "Comfort with class.",
    image: "/Honda-City.png",
    description:
      "A favorite among travelers, the Honda City blends elegance with smooth performance. Spacious, efficient, and ideal for both city rides and long-distance journeys.",
    seating: 5,
    luggage: 3,
    fuel: "Petrol",
    price: "₹25/km",
  },
  {
    id: 2,
    title: "Maruti Ciaz",
    subtitle: "Smart, stylish, and dependable.",
    image: "/Maruti-Ciaz.png",
    badge: "Best for Business Trips",
    description:
      "For those who value comfort and economy, the Ciaz offers a refined ride, ample cabin space, and great fuel efficiency — ideal for work or family rides.",
    seating: 5,
    luggage: 3,
    fuel: "Petrol / Diesel",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "Swift Dzire",
    subtitle: "Simple, efficient, reliable.",
    image: "/Maruti-Swift.png",
    description:
      "Compact and comfortable, the Swift Dzire is India’s go-to for everyday travel — airport drops, office rides, and more at an unbeatable price.",
    seating: 5,
    luggage: 2,
    fuel: "Petrol / CNG",
    price: "₹35/km",
  },
];

const features = [
  {
    id: 1,
    image: "/economy-affordable travel.png",
    title: "Affordable Travel",
    desc: "Smart rides that save your money and time.",
  },
  {
    id: 2,
    image: "/economy-comfortable seating.png",
    title: "Comfortable Journey",
    desc: "Enjoy a smooth and cozy ride, even on a budget.",
  },
  {
    id: 3,
    image: "/economy-wide-availabiltiy.png",
    title: "Wide Availability",
    desc: "Economy rides available wherever you need them, anytime.",
  },
  {
    id: 4,
    image: "/economy-Quick-&easy-booking.png",
    title: "Quick & Easy Booking",
    desc: "Get moving fast with instant ride booking.",
  },
];

const faqs = [
  {
    q: "Are economy cars available for outstation trips?",
    a: "Yes, economy cars can be booked for intercity and long-distance travel.",
  },
  {
    q: "Can I choose a specific driver or car model?",
    a: "Requests are welcome, subject to real-time availability.",
  },
  {
    q: "Do economy rides have air conditioning?",
    a: "Yes, all economy cars are fully air-conditioned and well-maintained.",
  },
  {
    q: "What’s the cancellation policy?",
    a: "Free cancellation is available up to 2 hours before your pickup.",
  },
  {
    q: "Are pets and luggage allowed?",
    a: "Yes, small pets and standard luggage are welcome. Please mention while booking.",
  },
];

const Economy = () => {
  const [current, setCurrent] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  // === Desktop Slider Handlers ===
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? desktopSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === desktopSlides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevMob = () => {
    setCurrentMobile((prev) =>
      prev === 0 ? mobileSlides.length - 1 : prev - 1
    );
  };

  const handleNextMob = () => {
    setCurrentMobile((prev) =>
      prev === mobileSlides.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide for desktop
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  // Auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobile((prev) =>
        prev === mobileSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentMobile]);

  return (
    <>
      <head>
        <title>
          Economy Car Rental | Affordable & Reliable Rides Across India –
          CozyCabz
        </title>
        <meta
          name="description"
          content="Book affordable economy car rentals with CozyCabz. Choose from Swift Dzire, Honda City, and Maruti Ciaz for daily commutes or weekend trips. Comfortable, reliable, and budget-friendly rides in 200+ cities."
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

          <button className="arrow left" onClick={handlePrevMob}>
            ‹
          </button>
          <button className="arrow right" onClick={handleNextMob}>
            ›
          </button>

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

      {/* === Counter + Form + Rest Sections === */}
      <NumberCounter />
      <CityForm />

      {/* Vehicle Section */}
      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Economy <span className="red-black">Vehicles</span>
          </h2>
          <p>
            From daily commutes to weekend getaways, find the perfect car for
            your journey.
          </p>
        </div>

        <div className="fleet-grid">
          {cars.map((car) => (
            <div key={car.id} className="fleet-card">
              <div className="image-wrapper-premium">
                <img src={car.image} alt={car.title} />
                {car.badge && <div className="badge">{car.badge}</div>}
              </div>

              <div className="fleet-content">
                <h3>{car.title}</h3>
                <div className="subtitle">{car.subtitle}</div>
                <div className="desc">{car.description}</div>
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

      {/* Why Choose Economy */}
      <section className="why-premium-section" id="economy">
        <div className="why-header">
          <h2>
            Why Ride <span className="red-black">Economy?</span>
          </h2>
          <p>Because comfort, reliability, and savings belong together.</p>
        </div>

        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="icon-wrapper">
                <Image
                  src={feature.image}
                  alt="Economy Feature"
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

      {/* FAQ Section */}
      <section className="faq" id="economy-faq">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="red-black">Questions</span>
          </h2>
          <p>
            Common queries about booking, availability, and service quality.
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
                  onClick={() => setOpenIndex(open ? null : i)}
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

      <SiteFooter />
    </>
  );
};

export default Economy;
