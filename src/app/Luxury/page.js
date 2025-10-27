"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Luxury.css";
import { FaUsers, FaSuitcase, FaGasPump } from "react-icons/fa";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import { FaCouch, FaUserTie, FaClock, FaShieldAlt } from "react-icons/fa";
import CityForm from "../Components/CityForm/page";

const slides = [
  {
    id: 1,
    image: "/banner1.png",
    heading: "Luxury at Every Turn",
    subtext: "Experience the elegance of premium cars that define perfection.",
  },
  {
    id: 2,
    image: "/banner2.png",
    heading: "Performance Meets Power",
    subtext: "Engineered for thrill — crafted for excellence.",
  },
  {
    id: 3,
    image: "/banner3.png",
    heading: "Drive the Dream",
    subtext: "From streets to highways, own the road with style.",
  },
];

const cars = [
  {
    id: 1,
    title: "Audi A6",
    subtitle: "Sophistication in motion",
    image: "/AudiA6.png",
    description:
      "Experience German luxury with seamless comfort, cutting-edge design, and quiet confidence. The Audi A6 turns every drive into a statement of style and class.",
    seating: 5,
    luggage: 3,
    fuel: "Petrol",
    price: "₹25/km",
  },
  {
    id: 2,
    title: "Audi Q7",
    subtitle: " Power meets prestige",
    image: "/AudiQ6.png",
    description:
      "Command attention with the Audi Q7 — a full-size luxury SUV built for those who demand performance, space, and unmistakable elegance wherever they go.",
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
      "The BMW 5 Series blends executive refinement with thrilling dynamics. Ideal for high-profile meetings, city rides, and making every arrival unforgettable.",
    seating: 5,
    luggage: 4,
    fuel: "Petrol",
    price: "₹35/km",
  },
  {
    id: 4,
    title: "Mercedes-Benz GLS",
    subtitle: "The S-Class of SUVs.",
    image: "/MercedesBenzGLS.png",
    description:
      "Commanding presence meets first-class luxury. The GLS delivers effortless power, unmatched comfort, and a cabin so refined it might just make you late because you won’t want to get out.",
    seating: 7,
    luggage: 5,
    fuel: "Diesel",
    price: "₹35/km",
  },

  {
    id: 5,
    title: "Mercedes-Benz E Class",
    subtitle: "Business luxury, perfected",
    image: "/MercedesBenzE]class.png",
    description:
      "A timeless sedan that blends grace with intelligence. The E-Class offers plush interiors, smooth performance, and the kind of quiet confidence executives wish they could rent permanently.",
    seating: 5,
    luggage: 4,
    fuel: "Petrol",
    price: "₹35/km",
  },
];

const features = [
  {
    id: 1,
    icon: <FaCouch />,
    title: "Seamless Experience",
    desc: "From booking to drop-off, every detail is handled with precision and care.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Safety & Reliability",
    desc: "Every ride meets top safety standards and undergoes regular maintenance checks.",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "Style That Moves",
    desc: "Make an impression with world-class vehicles built for elegance and presence.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "24/7 Concierge Support",
    desc: "Our support team is always available for last-minute changes or special requests.",
  },
];

const faqs = [
  {
    q: "Can I personalize my ride experience?",
    a: "Absolutely — from preferred music and temperature to specific routes or stops, your comfort comes first.",
  },
  {
    q: "What amenities are offered in luxury vehicles?",
    a: "Expect premium leather interiors, Wi-Fi, bottled water, phone chargers, and quiet luxury throughout your journey.",
  },
  {
    q: "Do you provide luxury cars for special events?",
    a: "Yes, our fleet is frequently booked for weddings, corporate travel, red-carpet arrivals, and private transfers.",
  },
  {
    q: " Can I rent a luxury vehicle for a full day or multiple days?",
    a: "Yes, flexible hourly, daily, and multi-day packages are available upon request.",
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
            Luxury <span className="red-black">Vehicles</span>
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
            Why Ride <span className="red-black">Luxury?</span>
          </h2>
          <p>
            Because luxury isn’t just a label—it’s how every ride should feel.
          </p>
        </div>

        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="icon-wrapper">{feature.icon}</div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
            </div>
            <h3>Corporate Rides</h3>
            <p>
              Professional chauffeur service for business meetings, client
              visits, and executive travel.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plane w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </div>
            <h3>Airport Transfers</h3>
            <p>
              Punctual pickups and drop-offs with flight tracking and
              meet-and-greet service.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Group Travel</h3>
            <p>
              Spacious vehicles for family trips, team outings, and group
              adventures.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
            </div>
            <h3>Special Events</h3>
            <p>
              Make your weddings, parties, and celebrations memorable with
              luxury transportation.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Outstation Trips</h3>
            <p>
              Comfortable long-distance travel with experienced drivers who know
              the routes.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
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
