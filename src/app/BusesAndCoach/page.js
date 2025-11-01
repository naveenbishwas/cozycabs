"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Bus-Coach.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import CityForm from "../Components/CityForm/page";
import Image from "next/image";
import NumberCounter from "../Components/NumberCounter/page";
import Link from "next/link";

// Desktop slides
const desktopSlides = [
  {
    id: 1,
    image: "/Buscouch1.png",
    heading: "Together on the Move",
    subtext: "Group travel made easy.",
  },
  {
    id: 2,
    image: "/Buscouch2.png",
    heading: "Ride. Relax. Repeat",
    subtext: "Room for everyone.",
  },
  {
    id: 3,
    image: "/Buscouch3.png",
    heading: "Comfort Beyond the Seats",
    subtext: "Big rides, smooth trips.",
  },
];

// ✅ Mobile slides (3 selected)
const mobileSlides = [
  {
    id: 1,
    image: "/Bus-couch.png",
    heading: "Together on the Move",
    subtext: "Group travel made easy.",
  },
  {
    id: 2,
    image: "/Bus-couch1.png",
    heading: "Ride. Relax. Repeat",
    subtext: "Room for everyone.",
  },
  {
    id: 3,
    image: "/b1.png",
    heading: "Comfort Beyond the Seats",
    subtext: "Big rides, smooth trips.",
  },
];

const cars = [
  {
    id: 1,
    title: "45 Seater Volvo",
    subtitle: "Comfort for every seat",
    image: "/45SeaterVolvo.png",
    description:
      "Spacious, air-conditioned, and built for long-haul journeys. The 45-Seater Volvo offers plush reclining seats, smooth suspension, and premium interiors that redefine group travel.",
    seating: 45,
    luggage: "Large storage compartment",
    fuel: "Diesel",
    price: "₹25/km",
  },
  {
    id: 2,
    title: "Mercedes-Benz Sprinter",
    subtitle: "Luxury on wheels",
    image: "/MercedesBenz.png",
    description:
      "The Mercedes Sprinter combines European craftsmanship with modern amenities — reclining captain seats, rear AC vents, and a ride so smooth your passengers might forget it’s a bus.",
    seating: "12 - 15",
    luggage: "6 - 8",
    fuel: "Diesel",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "Toyota Commuter",
    subtitle: "Dependable travel, every time",
    image: "/ToyotaCommuter.png",
    description:
      "A proven favorite for reliable group transportation. The Toyota Commuter offers generous space, powerful air conditioning, and smooth handling for outstation or airport transfers.",
    seating: "9 - 12",
    luggage: "5 - 6",
    fuel: "Diesel",
    price: "₹35/km",
  },
  {
    id: 4,
    title: "Toyota Vellfire",
    subtitle: "The definition of elite travel",
    image: "/Toyota-vell.png",
    description:
      "Step inside a first-class lounge on wheels. The Toyota Vellfire delivers unmatched luxury with executive seating, ambient lighting, and cutting-edge tech for VIP journeys.",
    seating: "4 - 6",
    luggage: 4,
    fuel: "Diesel",
    price: "₹35/km",
  },
  {
    id: 5,
    title: "Toyota Ventury (V-Class Equivalent)",
    subtitle: "Business meets comfort",
    image: "/Toyota-Ventury.png",
    description:
      "Elegant, versatile, and designed for executives on the move. The Toyota Ventury offers generous legroom, smooth performance, and an interior that feels more boardroom than bus.",
    seating: "7 - 9",
    luggage: 5,
    fuel: "Diesel",
    price: "₹35/km",
  },
];

const Premium = () => {
  const [current, setCurrent] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  // Slide navigation for desktop
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? desktopSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === desktopSlides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
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
      <Header />

      {/* ================= SLIDESHOW SECTION ================= */}
      <section className="slideshow-section">
        {/* ===== Desktop Slider ===== */}
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

        {/* ===== Mobile Slider ===== */}
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

      {/* COUNTER + FORM + REST OF PAGE */}
      <NumberCounter />
      <CityForm />

      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Buses and <span className="red-black">Coaches</span>
          </h2>
          <p>
            From business travel to weekend getaways, find the right ride for
            your journey.
          </p>
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

      <SiteFooter />
    </>
  );
};

export default Premium;
