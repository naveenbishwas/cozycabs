"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Economy.css";
import { FaUsers, FaSuitcase, FaGasPump } from "react-icons/fa";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import { FaCouch, FaUserTie, FaClock, FaShieldAlt } from "react-icons/fa";
import CityForm from "../Components/CityForm/page";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/economy1.png",
    heading: "Luxury at Every Turn",
    subtext: "Experience the elegance of premium cars that define perfection.",
  },
  {
    id: 2,
    image: "/economy2png.png",
    heading: "Performance Meets Power",
    subtext: "Engineered for thrill — crafted for excellence.",
  },
  {
    id: 3,
    image: "/economy3.png",
    heading: "Drive the Dream",
    subtext: "From streets to highways, own the road with style.",
  },
];

const cars = [
  {
    id: 1,
    title: "Honda City",
    subtitle: "Comfort with class.",
    image: "/Honda-City.png",
    description:
      " A favorite among business travelers, the Honda City blends elegant design with smooth performance. Spacious, efficient, and perfect for daily commutes or city-to-city transfers.",
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
      "For those who value comfort and economy, the Ciaz offers a refined ride, ample cabin space, and impressive fuel efficiency — ideal for long business drives or family outings.",
    seating: 5,
    luggage: 3,
    fuel: "Petrol / Diesel",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "Maruti Swift Dzire",
    subtitle: "Simple, efficient, reliable.",
    image: "/Maruti-Swift.png",
    description:
      " Compact, comfortable, and effortlessly economical. The Swift Dzire is India’s go-to sedan for everyday trips, airport transfers, and budget-friendly rides without compromise.",
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
    desc: "Travel smart without burning a hole in your pocket.",
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
    title: " Wide Availability",
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
    q: "Are economy cars available for outstation or long-distance travel?",
    a: "Yes, economy options can be booked for intercity trips at affordable rates.",
  },
  {
    q: "Can I request a specific driver or car model?",
    a: "Requests are welcome, but assignments depend on real-time availability.",
  },
  {
    q: "Do economy rides include air conditioning?",
    a: " Yes, every economy vehicle is air-conditioned and well-maintained.",
  },
  {
    q: "What’s the cancellation policy for economy rides?",
    a: "Free cancellation is available up to 2 hours before pickup time.",
  },
  {
    q: "Are pets or luggage allowed in economy cars?",
    a: "Small pets and standard luggage are welcome — just mention it when booking",
  },
];

const Premium = () => {
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    pickup: "",
    drop: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.contact || !/^\+91\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Valid contact number is required (+91 XXXXXXXXXX).";
    }
    if (!formData.pickup) newErrors.pickup = "Pickup location is required.";
    if (!formData.drop) newErrors.drop = "Drop location is required.";
    if (!formData.date) newErrors.date = "Please select a valid date and time.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted: ", formData);
      // Handle successful form submission (e.g., API call)
    } else {
      setErrors(validationErrors);
    }
  };

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  // Counter animation function
  function runCounter(el, to) {
    const duration = 1400;
    let startTs = null;

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const val = Math.floor(to * eased);
      el.textContent = val + "+";
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  // Custom hook for About section counters
  const useAboutCountersObserver = () => {
    const rootRef = useRef(null);
    const fired = useRef(false);

    useEffect(() => {
      if (!rootRef.current) return;

      const io = new IntersectionObserver(
        (entries) => {
          if (!fired.current && entries.some((e) => e.isIntersecting)) {
            fired.current = true;
            rootRef.current
              .querySelectorAll("[data-counter-to]")
              .forEach((node) => {
                const to =
                  parseInt(node.getAttribute("data-counter-to"), 10) || 0;
                runCounter(node, to);
              });
          }
        },
        { threshold: 0.35 }
      );

      io.observe(rootRef.current);
      return () => io.disconnect();
    }, []);

    return rootRef;
  };

  const aboutCountersRef = useAboutCountersObserver();

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <section className="slideshow-section">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
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

          {/* Navigation Arrows */}
          <button className="arrow left" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="arrow right" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active-dot" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="number-stats" ref={aboutCountersRef} id="about">
        <div className="about__stats">
          <div className="stat">
            <div className="stat__num" data-counter-to="250">
              0+
            </div>
            <div className="stat__label">Cities Covered Around India</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="1000">
              0+
            </div>
            <div className="stat__label">Cabs Available Everyday</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="10">
              0+
            </div>
            <div className="stat__label">
              Years of Experience in the Industry
            </div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="5000">
              0+
            </div>
            <div className="stat__label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat__num" data-counter-to="1200">
              0+
            </div>
            <div className="stat__label">Vendor Covering the Entire Nation</div>
          </div>
        </div>
      </section>

      <CityForm />

      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Economy <span className="red-black">Vehicles</span>
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
                {car.badge && <div className="badge">{car.badge}</div>}
              </div>

              <div className="fleet-content">
                <h3>{car.title}</h3>
                <div className="subtitle">{car.subtitle}</div>
                <div className="desc">{car.description}</div>

                <div className="icons">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    {car.seating}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    {car.luggage}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>
                    {car.fuel}
                  </span>
                </div>

                <div className="bottom-row">
                  <div className="price">{car.price}</div>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-premium-section">
        <div className="why-header">
          <h2>
            Why Ride <span className="red-black">Economy</span>
          </h2>
          <p>
            Because luxury isn’t just a label—it’s how every ride should feel.
          </p>
        </div>

        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="icon-wrapper">
                <Image
                  src={feature.image}
                  alt="Economy"
                  width={50}
                  height={50}
                  unoptimized
                ></Image>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-title">
          Perfect For Every <span className="red-black">Occasion</span>
        </h2>
        <div className="features-row" id="occasion">
          <div className="feature-box" id="occasion-box">
            <div className="icon-wrapper">
              <Image
                src="/corporate-rides.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Corporate Rides</h3>
            <p>
              Professional chauffeur service for business meetings, client
              visits, and executive travel.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <Image
                src="/Airport-transfers.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Airport Transfers</h3>
            <p>
              Punctual pickups and drop-offs with flight tracking and
              meet-and-greet service.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <Image
                src="/group-travel-1.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Group Travel</h3>
            <p>
              Spacious vehicles for family trips, team outings, and group
              adventures.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <Image
                src="/special-event.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Special Events</h3>
            <p>
              Make your weddings, parties, and celebrations memorable with
              luxury transportation.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <Image
                src="/outstation-trips.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Outstation Trips</h3>
            <p>
              Comfortable long-distance travel with experienced drivers who know
              the routes.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <Image
                src="/daily-commute.png"
                alt="premium"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3>Daily Commute</h3>
            <p>
              Reliable everyday transportation for work, shopping, or personal
              errands.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="faq" id="premium-faq">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="red-black">Questions</span>
          </h2>
          <p>
            Answers to the most common questions about our corporate
            transportation program.
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

      <SiteFooter />
    </>
  );
};

export default Premium;
