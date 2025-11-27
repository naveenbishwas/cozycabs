"use client";
import React, { useState, useEffect } from "react";
// import "./Premium.css";
import "./premium.css";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import CityForm from "@/app/Components/CityForm/page";
import Image from "next/image";
import NumberCounter from "@/app/Components/NumberCounter/page";
import Link from "next/link";

// Desktop slides
const desktopSlides = [
  {
    id: 1,
    image: "/premium.png",
    heading: "Luxury at Every Turn",
    subtext: "Experience the elegance of premium cars that define perfection.",
  },
  {
    id: 2,
    image: "/premium-banner2.png",
    heading: "Performance Meets Power",
    subtext: "Engineered for thrill — crafted for excellence.",
  },
  {
    id: 3,
    image: "/premium-banner3.png",
    heading: "Drive the Dream",
    subtext: "From streets to highways, own the road with style.",
  },
];

// Mobile slides
const mobileSlides = [
  {
    id: 1,
    image: "/premium-m1.png",
    heading: "Ride Smart, Ride Premium",
    subtext: "Comfort and class in every journey.",
  },
  {
    id: 2,
    image: "/premium-m2.png",
    heading: "Book, Relax, Arrive",
    subtext: "Luxury that moves with you.",
  },
  {
    id: 3,
    image: "/premium-m3.png",
    heading: "Your Comfort, Our Priority",
    subtext: "Every trip feels first-class.",
  },
];

const cars = [
  {
    id: 1,
    title: "Toyota Fortuner",
    subtitle: "Crysta",
    image: "/premium-toyota-fortuner.png",
    badge: "Top Choice",
    description:
      "Perfect for family trips and group travel. Spacious, comfortable, and reliable.",
    seating: 7,
    luggage: 4,
    fuel: "Diesel",
    price: "₹25/km",
  },
  {
    id: 2,
    title: "Toyota Innova Crysta",
    subtitle: "Honda City / Verna",
    image: "/premium-toyota-innove-crysta.png",
    badge: "Best for Business Trips",
    description:
      "Ideal for business meetings and airport transfers. Elegant, stylish, and efficient.",
    seating: 4,
    luggage: 3,
    fuel: "Petrol",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "Toyota Innova Hycross",
    subtitle: "Fortuner / Endeavour",
    image: "/premium-toyota-innova-hycros.png",
    description:
      "Make a statement with our premium SUVs. Perfect for special occasions and long drives.",
    seating: 7,
    luggage: 5,
    fuel: "Diesel",
    price: "₹35/km",
  },
];

const features = [
  {
    id: 1,
    image: "/premium-luxorious_comfort.png",
    title: "Luxurious Comfort",
    desc: "Leather interiors, whisper-quiet rides, space to unwind.",
  },
  {
    id: 2,
    image: "/Premium-profssional_driver.png",
    title: "Professional Drivers",
    desc: "Courteous, trained, and always punctual.",
  },
  {
    id: 3,
    image: "/premium-ontime-guarntee.png",
    title: "On-Time Guarantee",
    desc: "Precision scheduling to keep your plans on track.",
  },
  {
    id: 4,
    image: "/premium-verified-safety.png",
    title: "Verified Safety",
    desc: "Background-checked drivers and fully insured rides.",
  },
];

const faqs = [
  {
    q: "Can I choose a specific car model?",
    a: "You can request your preferred model, and we’ll do our best to accommodate it based on availability.",
  },
  {
    q: "Is Wi-Fi available in premium vehicles?",
    a: "Yes, complimentary Wi-Fi is available in all premium cars.",
  },
  {
    q: "How early should I book a premium car?",
    a: "We recommend booking at least 24 hours in advance for the best availability.",
  },
  {
    q: "What is the cancellation policy for premium rides?",
    a: "You can cancel for free up to 12 hours before the pickup time.",
  },
  {
    q: "Do you offer hourly or full-day bookings?",
    a: "Yes, you can hire a premium vehicle by the hour or for the entire day.",
  },
];

const Premium = () => {
  const [current, setCurrent] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

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

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentMobile((prev) =>
          prev === mobileSlides.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(interval);
  }, [currentMobile]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <>
      <head>
        <title>Premium Car Rental | Luxury Cars with Chauffeurs</title>
        <meta
          name="description"
          content="Rent luxury cars like Fortuner, Innova Crysta, and Vellfire with CozyCabz. Enjoy comfort, safety & style with professional chauffeurs and on-time service."
        />
        <meta
          property="og:title"
          content="Premium Car Rental | Luxury Cars with Chauffeurs"
        />
        <meta
          property="og:description"
          content="Book high-end cars for business, family trips, or special occasions. Premium comfort, reliable chauffeurs & nationwide service with CozyCabz."
        />
        <meta property="og:image" content="/premium-banner1.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/Premium" />
      </head>

      <Header />
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

      <NumberCounter />

      <CityForm />

      {/* Fleet Section */}
      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Premium <span className="red-black">Vehicles</span>
          </h2>
          <p>Find the right ride for your journey.</p>
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

      {/* Why Premium */}
      <section className="why-premium-section">
        <div className="why-header">
          <h2>
            Why Ride <span className="red-black">Premium?</span>
          </h2>
          <p>Because comfort, safety, and class should come standard.</p>
        </div>
        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <Image
                src={feature.image}
                width={50}
                height={50}
                alt={feature.title}
                unoptimized
              />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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

export default Premium;
