"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Bus-Coach.css";
import { FaUsers, FaSuitcase, FaGasPump } from "react-icons/fa";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import { FaCouch, FaUserTie, FaClock, FaShieldAlt } from "react-icons/fa";
import CityForm from "../Components/CityForm/page";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/Buscouch1.png",
    heading: "Luxury at Every Turn",
    subtext: "Experience the elegance of premium cars that define perfection.",
  },
  {
    id: 2,
    image: "/Buscouch2.png",
    heading: "Performance Meets Power",
    subtext: "Engineered for thrill — crafted for excellence.",
  },
  {
    id: 3,
    image: "/Buscouch3.png",
    heading: "Drive the Dream",
    subtext: "From streets to highways, own the road with style.",
  },
];

const cars = [
  {
    id: 1,
    title: "45 Seater Volvo",
    subtitle: " Comfort for every seat",
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
    subtitle: "Luxury on wheels.",
    image: "MercedesBenz.png",
    description:
      " The Mercedes Sprinter combines European craftsmanship with modern amenities — reclining captain seats, rear AC vents, and a ride so smooth your passengers might forget it’s a bus.",
    seating: 12 - 15,
    luggage: 6 - 8,
    fuel: "Diesel",
    price: "₹18/km",
  },
  {
    id: 3,
    title: "Toyota Commuter",
    subtitle: "Dependable travel, every time.",
    image: "/ToyotaCommuter.png",
    description:
      " A proven favorite for reliable group transportation. The Toyota Commuter offers generous space, powerful air conditioning, and smooth handling for outstation or airport transfers.",
    seating: 9 - 12,
    luggage: 5 - 6,
    fuel: "Diesel",
    price: "₹35/km",
  },

  {
    id: 4,
    title: "Toyota Vellfire",
    subtitle: "The definition of elite travel",
    image: "/Toyota-vell.png",
    description:
      " Step inside a first-class lounge on wheels. The Toyota Vellfire delivers unmatched luxury with executive seating, ambient lighting, and cutting-edge tech for VIP journeys.",
    seating: 4 - 6,
    luggage: 4,
    fuel: "Diesel",
    price: "₹35/km",
  },

  {
    id: 4,
    title: "Toyota Ventury (V-Class Equivalent)",
    subtitle: "Business meets comfort.",
    image: "/Toyota-Ventury.png",
    description:
      "  Elegant, versatile, and designed for executives on the move. The Toyota Ventury offers generous legroom, smooth performance, and an interior that feels more boardroom than bus.",
    seating: 7 - 9,
    luggage: 5,
    fuel: "Diesel",
    price: "₹35/km",
  },
];

const features = [
  {
    id: 1,
    image: "/buses-comfortable-seating.png",
    title: "Comfortable Seating",
    desc: "Stretch out and relax with spacious seats on every journey.",
  },
  {
    id: 2,
    image: "/Buses-safe&reliable.png",
    title: "Safe & Reliable",
    desc: "Travel with confidence knowing safety is our priority.",
  },
  {
    id: 3,
    image: "/buses-scenic-routes.png",
    title: "Scenic Routes",
    desc: "Enjoy the view while you travel—comfort meets adventure.",
  },
  {
    id: 4,
    image: "/buses-perfect-for-group.png",
    title: "Perfect for Groups",
    desc: "Travel together with friends, family, or colleagues.",
  },
];

const faqs = [
  {
    q: "How many passengers can each vehicle accommodate?",
    a: "Depending on the model, our buses and coaches can seat from 12 up to 50 passengers comfortably.",
  },
  {
    q: "Are air conditioning and Wi-Fi available?",
    a: "Yes, all vehicles come with air conditioning, and select models offer onboard Wi-Fi.",
  },
  {
    q: "Can I book a bus or coach for private events?",
    a: "Yes, we cater to weddings, tours, corporate functions, school trips, and special events.",
  },
  {
    q: "Do you provide drivers for all bus and coach bookings?",
    a: " Yes, every vehicle is operated by a licensed, experienced, and uniformed driver.",
  },
  {
    q: "Are refreshments or amenities provided onboard?",
    a: "Bottled water is provided, and additional amenities can be arranged upon request.",
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
            Buses and
            <span className="red-black">Coaches</span>
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
            Why Ride <span className="red-black">Buses and Coaches ?</span>
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
                  width={50}
                  height={50}
                  alt="Buses And Coach"
                  unoptimized
                />
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
