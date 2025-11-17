"use client";

import Image from "next/image";
import "./page.css";
import Header from "./Components/Header/page";
import { useState, useEffect, useRef } from "react";
import Footer from "./Components/Footer/page";
import Link from "next/link";
import CityForm from "./Components/CityForm/page";
import NumberCounter from "./Components/NumberCounter/page";

/* ------------------------------------------------------------------ */
/* Small inline icon components (single set used by both sliders)     */
/* ------------------------------------------------------------------ */
function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M15 6 9 12l6 6"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  /* ---------------------------------------------------------------- */
  /* Hover + before/after comparator                                  */
  /* ---------------------------------------------------------------- */
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const trackRef = useRef(null);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [openIndex, setOpenIndex] = useState(null); // single-open; set to -1 for none
  const [showBubble, setShowBubble] = useState(true);
  const [bounce, setBounce] = useState(true);

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

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let dragging = false;

    const getX = (e) => ("touches" in e ? e.touches[0].clientX : e.clientX);

    const onDown = (e) => {
      dragging = true;
      onMove(e);
      e.preventDefault();
    };

    const onMove = (e) => {
      if (!dragging) return;
      const rect = el.getBoundingClientRect();
      const x = Math.min(Math.max(getX(e) - rect.left, 0), rect.width);
      const pct = (x / rect.width) * 100;
      setBeforeAfterPos(pct);
    };

    const onUp = () => (dragging = false);

    el.addEventListener("mousedown", onDown);
    el.addEventListener("touchstart", onDown, { passive: false });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("touchstart", onDown);

      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // keyboard accessibility (← → arrows)
  const handleBeforeAfterKey = (e) => {
    if (e.key === "ArrowLeft") setBeforeAfterPos((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setBeforeAfterPos((p) => Math.min(100, p + 2));
  };

  // === Feature Card Component ===
  function TrustFeature({ image, title, text }) {
    return (
      <div className="card">
        <div className="iconWrap">
          <Image
            src={image}
            width={0}
            height={0}
            unoptimized
            alt={title}
          ></Image>
        </div>
        <div className="cardTitle">{title}</div>
        <div className="cardText">{text}</div>
      </div>
    );
  }

  // === Icon Components ===
  function TrustShieldIcon() {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V5l7-3z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function TrustClockIcon() {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
        <path
          d="M12 7v5l3 2"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  function TrustDriverIcon() {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3" stroke="#fff" strokeWidth="2" />
        <path d="M6 19a6 6 0 0112 0" stroke="#fff" strokeWidth="2" />
      </svg>
    );
  }

  function TrustFleetIcon() {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="8"
          width="18"
          height="7"
          rx="2"
          stroke="#fff"
          strokeWidth="2"
        />
        <path d="M6 8l2-3h8l2 3" stroke="#fff" strokeWidth="2" />
        <circle cx="7" cy="17" r="2" fill="#fff" />
        <circle cx="17" cy="17" r="2" fill="#fff" />
      </svg>
    );
  }

  // About counters ref
  const aboutCountersRef = useAboutCountersObserver();

  /* ---------------------------------------------------------------- */
  /* Static content                                                   */
  /* ---------------------------------------------------------------- */
  const services = [
    {
      title: "Ceramic Coating And Protection",
      icon: "/svg1.png",
      img: "/svg1.png",
      link: "/services/ceramic-coating",
    },
    {
      title: "Engine Bay Cleaning Service",
      icon: "/svg2.png",
      img: "/svg2.png",
      link: "/services/engine-cleaning",
    },
    {
      title: "Waterless Eco-Friendly Car Wash",
      icon: "/svg3.png",
      img: "/svg3.png",
      link: "/services/waterless-wash",
    },
    {
      title: "Express Car Wash Package",
      icon: "/svg4.png",
      img: "/svg4.png",
      link: "/services/express-wash",
    },
    {
      title: "Headlight Restoration Service",
      icon: "/svg5.png",
      img: "/svg5.png",
      link: "/services/headlight-restoration",
    },
  ];

  /* ---------------------------------------------------------------- */
  /* Testimonial slider A (two-column with avatar row)                 */
  /* ---------------------------------------------------------------- */
  const TESTIMONIALS_PRIMARY = [
    {
      id: 1,
      name: "James Hughes",
      role: "Business Traveler",
      avatar: "/tt1.png",
      hero: "/tt1.png",
      text: "Booked a rental at the last minute and the process was super easy. The car was clean, ready on time, and perfect for my meetings around the city. Really smooth experience.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ethan Lewis",
      role: "Weekend Traveler",
      avatar: "/tt2.png",
      hero: "/tt2.png",
      text: "Rented an SUV for a family trip — pickup was quick and the car was in great condition. No hidden charges, just straight-up good service. Will definitely rent again.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sara Patel",
      role: "Frequent Renter",
      avatar: "/tt3.png",
      hero: "/tt3.png",
      text: "I’ve used their rentals a few times now and it’s always reliable. Cars are well-maintained and customer support is quick to respond if you need anything. Highly recommend!",
      rating: 5,
    },
    {
      id: 4,
      name: "Marco Díaz",
      role: "Holiday Traveler",
      avatar: "/tt4.png",
      hero: "/tt4.png",
      text: "Rented a compact car for a week-long vacation. It was fuel efficient, clean, and pickup/drop-off took less than 10 minutes. Very convenient service.",
      rating: 4, // added a realistic 4-star for authenticity
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

  const [primaryIndex, setPrimaryIndex] = useState(0);
  const activePrimary = TESTIMONIALS_PRIMARY[primaryIndex];

  const goPrimaryPrev = () =>
    setPrimaryIndex(
      (i) => (i - 1 + TESTIMONIALS_PRIMARY.length) % TESTIMONIALS_PRIMARY.length
    );
  const goPrimaryNext = () =>
    setPrimaryIndex((i) => (i + 1) % TESTIMONIALS_PRIMARY.length);

  /* ---------------------------------------------------------------- */
  /* Testimonial slider B (image notch + big quote)                    */
  /* ---------------------------------------------------------------- */
  const TESTIMONIALS_ALT = [
    {
      id: 1,
      name: "Ethan Lewis",
      role: "EQUIPMENT TECHNICIANS",
      hero: "/images/testimonials/hero-2.jpg",
      avatar: "/images/people/ethan.jpg",
      text: "The technician must adhere to safety protocols when performing maintenance work, ensuring that all procedures are done in compliance with industry regulations and safety standards. By keeping all equipment in top shape, the maintenance team helps create a reliable, high-quality service experience for customers.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Hughes",
      role: "TEAM LEADER",
      hero: "/images/testimonials/hero-1.jpg",
      avatar: "/images/people/james.jpg",
      text: "The Car Wash team works in harmony to provide a seamless, high-quality service that meets customer needs every time. Trained to handle various vehicle types and cleaning techniques with professionalism and care.",
      rating: 5,
    },
  ];

  const cities = [
    {
      name: "Bangalore",
      status: "Car Rental Available",
      desc: "Explore hassle-free rides with 24/7 car rental—perfect for daily commutes or weekend getaways.",
      cta: "Book in Bangalore",
      href: "/InBangalore",
      img: "./bangalore123.jpeg",
      alt: "India Gate, Delhi",
    },
    {
      name: "Mumbai",
      status: "Car Rental Available",
      desc: "Experience seamless travel with our reliable and affordable car —available round the clock.",
      cta: "Book in Mumbai",
      href: "/InMumbai",
      img: "Mumbai2.png",
      alt: "Marine Drive, Mumbai",
    },
    {
      name: "Jaipur",
      status: "Car Rental Available",
      desc: "Discover the Pink City in comfort with our premium car rental services—available anytime, anywhere in Jaipur.",
      cta: "Book in Jaipur",
      href: "/InJaipur",
      img: "Jaipur2.png", // no image → shows placeholder state
      alt: "Jaipur",
    },
    {
      name: "Chandigarh",
      status: "Car Rental Available",
      desc: "Comfortable and reliable rides across Chandigarh with 24/7 support.",
      cta: "Book in Chandigarh",
      href: "/InChandigarh",
      img: "chd.png",
      alt: "Hills near Chandigarh",
    },
    {
      name: "Kolkata",
      status: "Car Rental Available",
      desc: "On-time pickups and well-maintained cars for business and family travel.",
      cta: "Book in Kolkata",
      href: "/InKolkata",
      img: "Kolkata2.png",
      alt: "Mountains",
    },
    //Hyderababd///
    {
      name: "Hyderabad",
      status: "Car Rental Available",
      desc: "Safe, clean, and comfortable travel across Hyderabad—available round the clock.",
      cta: "Book in Hyderabad",
      href: "/in-hyderabad",
      img: "hyderabad221.jpeg",
      alt: "Hyderabad",
    },
  ];

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

  /* ===== Inline SVG Icons ===== */
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

  function IconStar() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.9 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9L12 3z" />
      </svg>
    );
  }
  function IconCheck() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        />
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  function IconUsers() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3" />
        <path d="M4 20c0-3.3 3.6-5 8-5s8 1.7 8 5" />
      </svg>
    );
  }
  function IconShield() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V5l7-3z" />
      </svg>
    );
  }
  function IconPin() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 017 7c0 5.1-7 13-7 13S5 14.1 5 9a7 7 0 017-7z" />
        <circle cx="12" cy="9" r="2.5" fill="#fff" />
      </svg>
    );
  }
  function IconCard() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <rect x="4" y="9" width="8" height="2" fill="#fff" />
      </svg>
    );
  }

  const [altIndex, setAltIndex] = useState(0);
  const activeAlt = TESTIMONIALS_ALT[altIndex];

  const goAltPrev = () =>
    setAltIndex(
      (x) => (x - 1 + TESTIMONIALS_ALT.length) % TESTIMONIALS_ALT.length
    );
  const goAltNext = () => setAltIndex((x) => (x + 1) % TESTIMONIALS_ALT.length);

  /* ---------------------------------------------------------------- */
  /* RENDER                                                           */
  /* ---------------------------------------------------------------- */

  /* ---------- tiny inline icons (SVG) ---------- */

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form:", data);
    alert("Thanks! Your message was captured in the console.");
  }

  function UserIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  function MailIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  function DocIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6"
          fill="currentColor"
        />
      </svg>
    );
  }
  function MsgIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v12H7l-3 3V4Z" fill="currentColor" />
      </svg>
    );
  }
  function FbIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"
          fill="#fff"
        />
      </svg>
    );
  }
  function TwIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M21 5.5c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A3.7 3.7 0 0 0 12 7.9a10.5 10.5 0 0 1-7.6-3.9A3.7 3.7 0 0 0 5 10c-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A7.4 7.4 0 0 1 3 18.6 10.4 10.4 0 0 0 8.7 20c6.6 0 10.3-5.5 10.3-10.3v-.5c.7-.5 1.3-1.1 1.8-1.7Z"
          fill="#fff"
        />
      </svg>
    );
  }
  function InIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 6.94A2.06 2.06 0 1 0 2.8 6.94a2.06 2.06 0 0 0 4.12 0ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.16 4.16 0 0 1 18 8.73c4.4 0 5.2 2.9 5.2 6.6V21H19v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21H10V9Z"
          fill="#fff"
        />
      </svg>
    );
  }

  function Feature({ image, title, text }) {
    return (
      <div className="why-card">
        <div className="why-icon">
          <Image
            src={image}
            width={0}
            height={0}
            unoptimized
            alt={title}
          ></Image>
        </div>
        <h3 className="why-card-title">{title}</h3>
        <p className="why-card-text">{text}</p>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travellers: "",
    date: "",
  });

  // Prevent past date
  const today = new Date().toISOString().split("T")[0];

  // Allow only letters for name
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  // Allow only digits up to 15
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, phone: value });
  };

  // Prevent negative travellers
  const handleTravellerChange = (e) => {
    const val = Math.max(1, Number(e.target.value));
    setFormData({ ...formData, travellers: val });
  };

  const handleSubmitBookCar = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Header />

      <section className="hero desktop">
        <div className="overlay">
          <p className="welcome-text">Welcome To Best Cabs</p>
          <h1>Book Reliable & Affordable Cabs in 200+ Cities</h1>

          <Link href="#book-your-car">
            <button className="hero-btn">Book Now</button>
          </Link>

          <div className="red-car"></div>
        </div>
      </section>

      <section className="hero mobile">
        <div className="overlay">
          <p className="welcome-text">Welcome To Best Cabs</p>
          <h1>Book Reliable & Affordable Cabs in 200+ Cities</h1>

          <Link href="#book-your-car" className="hero-btn-df">
            <button className="hero-btn">Book Now</button>
          </Link>

          <div className="red-car">{/* your SVG */}</div>
        </div>
      </section>

      <NumberCounter />

      {/* About Section */}
      <section className="about" id="about">
        <div className="about__toprow">
          <h3 className="about__eyebrow">About Us</h3>
          <div className="about__rule">
            <span className="about__dot" />
          </div>
        </div>
        <h2 className="about__title">
          We Drive You Safely, Wherever Life Takes
          <span className="red-black"> You</span>
        </h2>
        <div className="about__grid">
          <div className="about__left">
            <div className="about__imagewrap">
              <Image
                src="/about123.jpeg"
                alt="car-image"
                width={0}
                height={0}
                priority
                sizes="(min-width:1200px) 560px, (min-width:900px) 48vw, 100vw"
                className="about__image"
                unoptimized
              />
            </div>
          </div>

          <div className="about__right">
            <p className="about__lead">
              Kuldeep Cozy Cabz Pvt Ltd is a renowned online cab service
              provider in India. After helping thousands of people reach their
              destinations on time safely through its offline services, it has
              made its presence online to provide easy 'online cab booking',
              anytime, anywhere. Online cab booking has never been so easy. You
              can book a cab/car online in just a few clicks by visiting our
              website on your mobile or through desktop/laptop.
              <br /> <br /> With its efficient and reliable services, Kuldeep
              Cozy Cabz has left competitions miles behind when it comes to
              online cab/taxi booking. Cozy Cabz services are available in over
              200 + Indian cities which help you reach your destination on time.
              Our experienced team with in-depth information are available 24x7
              to assist you, in case of any queries/help.
              <br />
              <br />
              With its efficient and reliable services, Kuldeep Cozy Cabz has
              left competitors miles behind when it comes to online cab/taxi
              booking. Cozy Cabz services are available in over 200+ Indian
              cities, helping you reach your destination on time.
            </p>

            <hr className="about__divider" />
            {/* /////Read More//////// */}
            <span className="about__cta-div">
              <Link href="/About" className="about__cta">
                <span>Read More</span>
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <CityForm />

      <section className="trust">
        <div className="wrap">
          <h2 className="wrap-title">
            10 Years of <span className="red-black"> Trust</span>
          </h2>
          <span className="wrap-subtitle">
            <p>
              A decade of excellence in transportation services. We have built
              our reputation through consistent quality, reliability, and
              customer satisfaction across India.
            </p>
          </span>

          <div className="grid">
            <TrustFeature
              // icon={<TrustShieldIcon />}
              image="secure.png"
              title="Safe & Secure"
              text="GPS tracking, verified drivers, and comprehensive insurance for your safety"
            />
            <TrustFeature
              // icon={<TrustClockIcon />}
              image="thumb.png"
              title="24/7 Service"
              text="Round-the-clock availability with instant booking and customer support"
            />
            <TrustFeature
              // icon={<TrustDriverIcon />}
              image="expert.png"
              title="Expert Drivers"
              text="Professional, courteous drivers with extensive local knowledge and experience"
            />
            <TrustFeature
              // icon={<TrustFleetIcon />}
              image="qualityy.png"
              title="Quality Fleet"
              text="Well-maintained, premium vehicles regularly serviced for optimal performance"
            />
          </div>
        </div>
      </section>

      <section className="teamShowcase">
        <div className="teamShowcase-container">
          <div className="teamShowcase-content">
            <div className="teamShowcase-text" id="meet-title">
              <h2 className="teamShowcase-title">
                The People Behind <span className="red-black">CozyCabz</span>
              </h2>
              <p className="teamShowcase-description" id="about-people-desc">
                Every smooth ride begins with a passionate team. At CozyCabz,
                our strength lies in the people who work tirelessly to make
                travel stress-free and dependable. From expert chauffeurs to
                dedicated support staff, each member brings skill,
                responsibility, and commitment to delivering safe and punctual
                journeys.
              </p>
              <p id="about-people-desc">
                We thrive on innovation, teamwork, and trust — ensuring
                businesses and individuals can count on us for reliable
                transportation, anytime, anywhere.
              </p>

              <div className="teamShowcase-stats" id="team-stats">
                <div className="teamShowcase-stat">
                  <h3>250+</h3>
                  <p>Skilled Team Members</p>
                </div>
                <div className="teamShowcase-stat">
                  <h3>12+</h3>
                  <p>Years of Service Excellence</p>
                </div>
                <div className="teamShowcase-stat">
                  <h3>200+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="teamShowcase-values">
                <h3>Our Core Values</h3>
                <ul>
                  <li>Innovation and creativity in everything we do</li>
                  <li>Commitment to quality and excellence</li>
                  <li>Collaborative spirit and teamwork</li>
                  <li>Continuous learning and growth</li>
                </ul>
              </div>
            </div>

            <div className="teamShowcase-image">
              <div className="teamShowcase-imageWrapper">
                {/* <video
                  src="/video-team.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="your-class"
                ></video> */}
                <iframe
                  // width="560"
                  // height="315"
                  src="https://www.youtube.com/embed/RlHTIpc1hbI?autoplay=1&mute=1&loop=1&controls=0&playlist=RlHTIpc1hbI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="city-grid">
        <div className="city-grid-df">
          <div className="cg-header">
            <h2>
              Explore India on <span className="red-black">Wheels</span>
            </h2>
            <p>
              Discover the beauty of India with our premium car rental services.
              We serve major cities across the nation with reliable and
              comfortable transportation.
            </p>
          </div>

          <div className="cg-grid">
            {cities.map((c) => (
              <article className="cg-card" key={c.name}>
                <div className={`cg-media ${c.img ? "" : "cg-media--empty"}`}>
                  {c.img ? (
                    <img src={c.img} alt={c.alt} loading="lazy" />
                  ) : (
                    <div className="cg-placeholder" aria-hidden="true">
                      <span className="cg-ph-icon">🖼️</span>
                    </div>
                  )}
                </div>

                <div className="cg-body">
                  <header className="cg-title">
                    <h3>{c.name}</h3>
                    <div className="cg-status">{c.status}</div>
                  </header>

                  <p className="cg-desc">{c.desc}</p>

                  <a className="cg-btn" href={c.href} aria-label={c.cta}>
                    {c.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why-wrap">
          <header className="why-head">
            <h2>
              What Makes Us the <span className="red-black">Best Choice</span>
            </h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart. Here’s why thousands of customers trust us with their
              transportation needs.
            </p>
          </header>

          {/* Top row */}
          <div className="why-grid">
            <Feature
              image="/known.png"
              title="Trusted for Top-Quality Rides"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Loved by Thousands of Riders"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="India’s Biggest Driver Network"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>

          {/* Optional second row — uncomment if you want 3 more cards */}
          <div className="why-grid">
            <Feature
              image="/safe.png"
              title="Safety You Can Count On"
              text="Background-verified partners and insured moves for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="Strong presence with on-ground support in metros and tier-2/3 cities."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Clear quotes, no hidden charges—ever."
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="fleet in-desktop" id="fleet">
        {/* Header */}
        <div className="fleet-header">
          <h2>
            Browse Our <span className="red-black">Fleet</span>
          </h2>
          <p>
            Choose from our diverse fleet of well-maintained vehicles. From
            economy to luxury, we have the perfect car for every need and
            budget.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="fleet-grid">
          {/* Premium */}
          <Link href="/Premium">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  // src="/ty2.png"
                  src="./p-cars.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.8</span>
              </div>
              <div className="fleet-body">
                <h3>Premium</h3>
                <p>
                  Luxury vehicles for executive travel and special occasions
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹25/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Leather Interiors</li>
                  <li>Climate Control</li>
                  <li>Premium Sound System</li>
                </ul>
                <button className="btn-primary">View Premium Cars</button>
              </div>
            </div>
          </Link>

          {/* Luxury */}
          <Link href="/Luxury">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/l123.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.9</span>
              </div>
              <div className="fleet-body">
                <h3>Luxury</h3>
                <p>
                  High-end vehicles with superior comfort and advanced features
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹35/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Massage Seats</li>
                  <li>Entertainment System</li>
                  <li>Mini Bar</li>
                </ul>
                <button className="btn-primary">View Luxury Cars</button>
              </div>
            </div>
          </Link>

          {/* Economy */}
          <Link href="/Economy">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/dz.avif"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.6</span>
              </div>
              <div className="fleet-body">
                <h3>Economy</h3>
                <p>
                  Comfortable and affordable options for everyday travel needs
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹12/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Air Conditioning</li>
                  <li>GPS Navigation</li>
                  <li>Clean Interiors</li>
                </ul>
                <button className="btn-primary">View Economy Cars</button>
              </div>
            </div>
          </Link>
        </div>

        <div className="fleet-grid" id="flex">
          {/* Buses & Coaches */}
          <Link href="/BusesAndCoach">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/bus22.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.8</span>
              </div>
              <div className="fleet-body">
                <h3>Buses & Coaches</h3>
                <p>Large capacity vehicles for group travel and events</p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>12-45 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹18/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Spacious Seating</li>
                  <li>Luggage Space</li>
                  <li>Group Travel</li>
                </ul>
                <button className="btn-primary">
                  View Buses & Coaches Cars
                </button>
              </div>
            </div>
          </Link>

          {/* Innova Crysta */}
          <Link href="/InnovaDelhi">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/innvo1.png"
                  alt="Innova Crysta rental car"
                  width={0}
                  height={0}
                  unoptimized
                />
                <span className="rating">⭐ 4.9</span>
              </div>

              <div className="fleet-body">
                <h3>Innova Crysta</h3>
                <p>Luxury MPV with comfort and performance.</p>

                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>7 + 1 Seater</span>
                </div>

                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹14/km</span>
                </div>

                <h4>Key Features:</h4>
                <ul>
                  <li>Premium Leather Interior</li>
                  <li>Dual-Zone Climate Control</li>
                  <li>Spacious Cabin with Reclining Seats</li>
                </ul>

                <button className="btn-primary">
                  View Innova Crysta Rentals
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="fleet in-mobile" id="fleet">
        {/* Header */}
        <div className="fleet-header">
          <h2>
            Browse Our <span className="red-black">Fleet</span>
          </h2>
          <p>
            Choose from our diverse fleet of well-maintained vehicles. From
            economy to luxury, we have the perfect car for every need and
            budget.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="fleet-grid">
          {/* Premium */}
          <Link href="/Premium">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  // src="/ty2.png"
                  src="./p-cars.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.8</span>
              </div>
              <div className="fleet-body">
                <h3>Premium</h3>
                <p>
                  Luxury vehicles for executive travel and special occasions
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹25/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Leather Interiors</li>
                  <li>Climate Control</li>
                  <li>Premium Sound System</li>
                </ul>
                <button className="btn-primary">View Premium Cars</button>
              </div>
            </div>
          </Link>

          {/* Luxury */}
          <Link href="/Luxury">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/l123.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.9</span>
              </div>
              <div className="fleet-body">
                <h3>Luxury</h3>
                <p>
                  High-end vehicles with superior comfort and advanced features
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹35/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Massage Seats</li>
                  <li>Entertainment System</li>
                  <li>Mini Bar</li>
                </ul>
                <button className="btn-primary">View Luxury Cars</button>
              </div>
            </div>
          </Link>

          {/* Economy */}
          <Link href="/Economy">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/dz.avif"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.6</span>
              </div>
              <div className="fleet-body">
                <h3>Economy</h3>
                <p>
                  Comfortable and affordable options for everyday travel needs
                </p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>4 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹12/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Air Conditioning</li>
                  <li>GPS Navigation</li>
                  <li>Clean Interiors</li>
                </ul>
                <button className="btn-primary">View Economy Cars</button>
              </div>
            </div>
          </Link>

          {/* Buses & Coaches */}
          <Link href="/BusesAndCoach">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/bus22.jpeg"
                  alt="car-images"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span className="rating">⭐ 4.8</span>
              </div>
              <div className="fleet-body">
                <h3>Buses & Coaches</h3>
                <p>Large capacity vehicles for group travel and events</p>
                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>12-45 Seater</span>
                </div>
                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹18/km</span>
                </div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Spacious Seating</li>
                  <li>Luggage Space</li>
                  <li>Group Travel</li>
                </ul>
                <button className="btn-primary">
                  View Buses & Coaches Cars
                </button>
              </div>
            </div>
          </Link>

          {/* Innova Crysta */}
          <Link href="/InnovaDelhi">
            <div className="fleet-card">
              <div className="fleet-image">
                <Image
                  src="/innvo1.png"
                  alt="Innova Crysta rental car"
                  width={0}
                  height={0}
                  unoptimized
                />
                <span className="rating">⭐ 4.9</span>
              </div>

              <div className="fleet-body">
                <h3>Innova Crysta</h3>
                <p>Luxury MPV with comfort and performance.</p>

                <div className="fleet-info">
                  <span>👥 Seating</span>
                  <span>7 + 1 Seater</span>
                </div>

                <div className="fleet-info">
                  <span>🪙 Starting at</span>
                  <span>₹14/km</span>
                </div>

                <h4>Key Features:</h4>
                <ul>
                  <li>Premium Leather Interior</li>
                  <li>Dual-Zone Climate Control</li>
                  <li>Spacious Cabin with Reclining Seats</li>
                </ul>

                <button className="btn-primary">
                  View Innova Crysta Rentals
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="corporate-program">
        {/* Top Section */}
        <div className="program-header">
          <h1>
            Corporate Program <span className="red-black">Rental</span>
          </h1>
          <p>
            Comprehensive transportation solutions designed specifically for
            businesses. From daily employee transport to executive travel and
            event management.
          </p>
        </div>
        {/* Banner */}
        <div className="program-banner-df">
          <div className="program-banner">
            <h2>Elevate Your Business Transportation</h2>
            <p>
              Professional, reliable, and cost-effective transportation
              solutions tailored for modern businesses.
            </p>
          </div>
        </div>
        {/* Services Section */}
        <div className="program-services">
          <span className="program-heading">
            <h1>
              What Does Our Corporate Programe
              <span className="red-black"> Offer?</span>
            </h1>

            <p>
              Our Corporate Program offers tailored business solutions designed
              to boost team performance and brand growth.
            </p>
          </span>
          <div className="services-grid">
            <div className="service-card">
              {/* <span className="icon">🕒</span> */}
              <Image
                src="Hourly-cab.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Hourly Cab Rentals</h3>
              <p>
                Get pick & drop service in the local area with flexible hourly
                booking options for your business needs.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="Travel-services.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Travel Services for Outstation Trips</h3>
              <p>
                One way or round-way road trips at an affordable cost with
                professional drivers and premium vehicles.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="from-airport.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>To & From Airport</h3>
              <p>
                Make your flight convenient by commuting to or from the airport
                with your luggage in a spacious cab.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="mice.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>MICE Arrangement</h3>
              <p>
                Whether it's about an office conference or exhibition, we can
                help in A-Z arrangement including travel, venue, food, etc.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="Holiday-trip.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Holiday Trip</h3>
              <p>
                We provide solutions for both local and outstation trips for
                groups as well as individuals.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="monthly-cab.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Monthly Cab Service</h3>
              <p>
                If you book a cab every day, we have amazing deals on monthly
                cab service.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="manager.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Dedicated Account Manager</h3>
              <p>
                Personal relationship manager to handle all your corporate
                transportation needs.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="monthly-reporting.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Monthly Reporting</h3>
              <p>
                Detailed monthly reports with usage analytics and cost
                optimization suggestions.
              </p>
            </div>

            <div className="service-card">
              <Image
                src="volume-discount.png"
                width={0}
                height={0}
                unoptimized
                alt=""
              ></Image>
              <h3>Volume Discounts</h3>
              <p>
                Special pricing for high-volume corporate clients with flexible
                payment terms.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="program-cta">
            <Link href="#book-your-car">
              <button className="btn-primary" id="btn-two">
                Get Corporate Quote
              </button>
            </Link>
            <button className="btn-outline">Schedule Demo</button>
          </div>
        </div>
      </section>

      <section className="howto">
        <div className="howtoWrap">
          <h2 className="howtoTitle">
            How to Book Your <span className="red-black">Ride</span>
          </h2>
          <p className="howtoSubtitle">
            Simple and straightforward booking process. Follow these easy steps
            to book your ride.
          </p>

          {/* Connector line behind badges */}
          <div className="connector" aria-hidden="true" />

          <div className="stepsGrid">
            <StepCard
              color="#2563EB"
              icon={<PhoneIcon />}
              step={1}
              title="Contact Our Team"
              text="Contact our team or register on our website to get started with your booking process."
            />
            <StepCard
              color="#16A34A"
              icon={<PinIcon />}
              step={2}
              title="Share Your Details"
              text="Share your destination & departure timing along with any specific requirements."
            />
            <StepCard
              color="#8B5CF6"
              icon={<CarIcon />}
              step={3}
              title="Select Car Model"
              text="Select your preferred car model from our fleet and calculate the fare instantly."
            />
            <StepCard
              color="#F97316"
              icon={<CheckIcon />}
              step={4}
              title="Get Confirmation"
              text="Get confirmation in few seconds with booking details and driver information."
            />
            <StepCard
              color="#EF4444"
              icon={<ClockIcon />}
              step={5}
              title="Wait for Arrival"
              text="Relax and wait for your cab to arrive at your place at the scheduled time."
            />
          </div>
        </div>
      </section>

      <section className="prestigious-section section-container desktop">
        <div className="prestigious-wrap">
          {/* Left Content */}
          <div className="prestigious-content">
            <h2>
              Prestigious <span>Associations</span>
            </h2>
            <p>
              Cozy Cabz is proud to have provided cab services for the DRDO
              department during the prestigious G20 Summit. Our reliable fleet
              and professional service ensured seamless travel support for
              dignitaries and officials.
            </p>
            {/* <button className="prestigious-btn">Read More</button> */}
          </div>

          {/* Right Images */}
          <div className="prestigious-image">
            <div className="image-box">
              <Image
                src="/partner1.jpeg"
                alt="DRDO G20 Summit"
                width={500}
                height={600}
                className="image"
              />
            </div>
            <div className="image-box">
              <Image
                src="/partner2.jpeg"
                alt="G20 Event"
                width={500}
                height={600}
                className="image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="prestigious-section section-container mobile">
        <div className="prestigious-wrap">
          {/* Left Content */}
          <div className="prestigious-content">
            <p>
              Cozy Cabz is proud to have provided cab services for the DRDO
              department during the prestigious G20 Summit. Our reliable fleet
              and professional service ensured seamless travel support for
              dignitaries and officials.
            </p>
            {/* <button className="prestigious-btn">Read More</button> */}
          </div>

          {/* Right Images */}
          <div className="prestigious-image">
            <div className="image-box">
              <Image
                src="/partner1.jpeg"
                alt="DRDO G20 Summit"
                width={500}
                height={600}
                className="image"
              />
            </div>
            <div className="image-box">
              <Image
                src="/partner2.jpeg"
                alt="G20 Event"
                width={500}
                height={600}
                className="image"
              />
            </div>
          </div>
          <h2>
            Prestigious <span className="red-black">Associations</span>
          </h2>
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

      <Footer />
    </>
  );
}
