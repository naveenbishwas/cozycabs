"use client";
import React, { useState, useEffect } from "react";
// import "./Premium.css";
import "./premium.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import CityForm from "../Components/CityForm/page";
import Image from "next/image";
import NumberCounter from "../Components/NumberCounter/page";

// Desktop slides
const desktopSlides = [
  {
    id: 1,
    image: "/premium-banner1.png",
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

  return (
    <>
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
                  <button>Book Now</button>
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
      <section className="faq" id="premium-faq">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="red-black">Questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
              </button>
              {openIndex === i && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Premium;
