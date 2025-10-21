"use client";
import React, { useState, useEffect, useRef } from "react";
import "./premium.css";
import { FaUsers, FaSuitcase, FaGasPump } from "react-icons/fa";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import { FaCouch, FaUserTie, FaClock, FaShieldAlt } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=80",
    heading: "Luxury at Every Turn",
    subtext: "Experience the elegance of premium cars that define perfection.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1500&q=80",
    heading: "Performance Meets Power",
    subtext: "Engineered for thrill — crafted for excellence.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c8b3cce98?auto=format&fit=crop&w=1500&q=80",
    heading: "Drive the Dream",
    subtext: "From streets to highways, own the road with style.",
  },
];

const cars = [
  {
    id: 1,
    title: "Toyota Fortuner",
    subtitle: "Crysta",
    image: "ty1.jpg",
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
    image: "ty2.jpg",
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
    image: "ty3.jpg",
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
    icon: <FaCouch />,
    title: "Luxurious Comfort",
    desc: "Leather interiors, whisper-quiet rides, space to unwind.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Professional Drivers",
    desc: "Courteous, trained, and always punctual.",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "On-Time Guarantee",
    desc: "Precision scheduling to keep your plans on track.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Verified Safety",
    desc: "Background-checked drivers and fully insured rides.",
  },
];

const faqs = [
  {
    q: "What services are included in the Corporate Program?",
    a: "We cover everything from daily office commutes and airport transfers to outstation rentals, event transportation, and monthly packages. Each account also gets a dedicated manager and customized reporting.",
  },
  {
    q: "Can we get consolidated monthly invoices?",
    a: "Yes. We provide a single monthly invoice with complete trip details, usage summaries, and expense breakdowns to make your finance team’s job easier.",
  },
  {
    q: "Do you offer volume or long-term discounts?",
    a: "Absolutely. Companies with high booking volumes or long-term partnerships benefit from tailored pricing plans and flexible payment terms.",
  },
  {
    q: "How does our team manage and track bookings?",
    a: "Bookings can be made via web, app, or WhatsApp. You’ll also have an account manager for urgent changes, plus dashboards to track trips and expenses in real time.",
  },
  {
    q: "Are vehicles and drivers reliable and certified?",
    a: "All vehicles are regularly serviced and fully insured. Drivers go through background verification, corporate etiquette training, and follow strict safety and punctuality standards.",
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
              <div className="overlay"></div>
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

      <section className="fleet-section">
        <div className="fleet-header">
          <h2>
            Premium <span className="red-black">Vehicles</span>
          </h2>
          <p>
            From business travel to weekend getaways, find the right ride for
            your journey.
          </p>
        </div>

        <div className="fleet-grid">
          {cars.map((car) => (
            <div key={car.id} className="fleet-card">
              <div className="image-wrapper">
                <img src={car.image} alt={car.title} />
                {car.badge && <div className="badge">{car.badge}</div>}
              </div>

              <div className="premium-info">
                <h3>Why Choose Our Premium Service?</h3>
                <ul>
                  <li>
                    ✔️ 24/7 availability with instant booking confirmation
                  </li>
                  <li>
                    ✔️ Professional, courteous, and background-verified drivers
                  </li>
                  <li>
                    ✔️ Well-maintained, luxury vehicles with premium amenities
                  </li>
                  <li>✔️ Transparent pricing with no hidden charges</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-premium-section">
        <div className="why-header">
          <h2>
            Why Ride <span className="red-black">Premium</span>
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

      {/* Services */}
      <section className="faq">
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

      <section className="ride-booking-section">
        <div className="ride-booking-content">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80"
              alt="Premium Car"
            />
          </div>

          <div className="premium-info">
            <h3>Why Choose Our Premium Service?</h3>
            <ul>
              <li>✔️ 24/7 availability with instant booking confirmation</li>
              <li>
                ✔️ Professional, courteous, and background-verified drivers
              </li>
              <li>
                ✔️ Well-maintained, luxury vehicles with premium amenities
              </li>
              <li>✔️ Transparent pricing with no hidden charges</li>
            </ul>
          </div>
        </div>

        <div className="form-wrapper">
          <h2>Book Your Premium Ride</h2>
          <p>We'll get back to you within 10 minutes</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number *</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                placeholder="+91 XXXXX XXXXX"
                onChange={handleInputChange}
              />
              {errors.contact && <p className="error">{errors.contact}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="pickup">Pickup Location *</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                value={formData.pickup}
                placeholder="Enter pickup address"
                onChange={handleInputChange}
              />
              {errors.pickup && <p className="error">{errors.pickup}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="drop">Drop Location *</label>
              <input
                type="text"
                id="drop"
                name="drop"
                value={formData.drop}
                placeholder="Enter drop address"
                onChange={handleInputChange}
              />
              {errors.drop && <p className="error">{errors.drop}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="date">Date & Time *</label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Any special requirements or notes..."
                onChange={handleInputChange}
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn-primary">
                Book Now
              </button>
              <p className="privacy">
                We respect your privacy and never share your data. Your
                information is secure and will only be used to process your
                booking.
              </p>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </>
  );
};

export default Premium;
