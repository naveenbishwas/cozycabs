"use client";

import Image from "next/image";
import "./page.css";
import Header from "./Components/Header/page";
import { useState, useEffect, useRef } from "react";
import Footer from "./Components/Footer/page";

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
      name: "Banglore",
      status: "Car Rental Available",
      desc: "Professional car rental services available 24/7 in Agra. Book now for reliable transportation solutions.",
      cta: "Book in Banglore",
      href: "/Inbanglore",
      img: "./banglore.jpg",
      alt: "India Gate, Delhi",
    },
    {
      name: "Mumbai",
      status: "Car Rental Available",
      desc: "Professional car rental services available 24/7 in Mumbai. Book now for reliable transportation solutions.",
      cta: "Book in Mumbai",
      href: "/InMumbai",
      img: "Mumbai2.png",
      alt: "Marine Drive, Mumbai",
    },
    {
      name: "Jaipur",
      status: "Car Rental Available",
      desc: "Professional car rental services available 24/7 in Jaipur. Book now for reliable transportation solutions.",
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
      href: "/Inhyderabad",
      img: "HYDERABAD.png",
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

  return (
    <>
      <Header />

      {/* Hero Section */}
      {/* <section className="hero">
        <div className="overlay">
          <p className="welcome-text">Welcome To Best Cabs</p>
          <h1>
            Book Reliable & Affordable Cabs in 200+ Cities Across India CTA
          </h1>
          <button className="hero-btn">Book Now</button>

          <div className="red-car">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <g clipPath="url(#clip0_1109_117)">
                <path
                  d="M5.46875 9.84375C6.33404 9.84375 7.1799 9.58716 7.89937 9.10643C8.61883 8.6257 9.17959 7.94242 9.51072 7.14299C9.84186 6.34356 9.9285 5.4639 9.75969 4.61523C9.59088 3.76657 9.1742 2.98701 8.56234 2.37516C7.95049 1.76331 7.17094 1.34663 6.32227 1.17782C5.4736 1.00901 4.59394 1.09565 3.79451 1.42678C2.99508 1.75791 2.3118 2.31867 1.83107 3.03813C1.35034 3.7576 1.09375 4.60346 1.09375 5.46875C1.09505 6.62867 1.55641 7.74072 2.3766 8.56091C3.19679 9.38109 4.30883 9.84245 5.46875 9.84375ZM5.46875 3.28125C5.9014 3.28125 6.32433 3.40955 6.68406 3.64991C7.04379 3.89028 7.32417 4.23192 7.48974 4.63163C7.6553 5.03135 7.69862 5.47118 7.61422 5.89551C7.52981 6.31985 7.32147 6.70962 7.01555 7.01555C6.70962 7.32148 6.31984 7.52981 5.89551 7.61422C5.47118 7.69863 5.03134 7.65531 4.63163 7.48974C4.23192 7.32417 3.89028 7.04379 3.64991 6.68406C3.40954 6.32433 3.28125 5.9014 3.28125 5.46875C3.2819 4.88879 3.51258 4.33277 3.92267 3.92268C4.33277 3.51258 4.88879 3.2819 5.46875 3.28125Z"
                  fill="white"
                />
                <path
                  d="M69.4311 5.42337L66.293 3.70701L64.5768 0.568902C64.4826 0.396681 64.3438 0.252979 64.175 0.152872C64.0061 0.0527636 63.8135 -6.10352e-05 63.6172 -6.10352e-05C63.4209 -6.10352e-05 63.2282 0.0527636 63.0594 0.152872C62.8905 0.252979 62.7517 0.396681 62.6576 0.568902L60.9413 3.70701L57.8032 5.42337C57.631 5.51757 57.4874 5.65636 57.3873 5.82519C57.2872 5.99402 57.2344 6.18667 57.2344 6.38294C57.2344 6.5792 57.2872 6.77185 57.3873 6.94068C57.4874 7.10951 57.631 7.2483 57.8032 7.3425L60.9413 9.05886L62.6576 12.197C62.7517 12.3692 62.8905 12.5129 63.0594 12.613C63.2282 12.7131 63.4209 12.7659 63.6172 12.7659C63.8135 12.7659 64.0061 12.7131 64.175 12.613C64.3438 12.5129 64.4826 12.3692 64.5768 12.197L66.293 9.05886L69.4311 7.3425C69.6033 7.2483 69.747 7.10951 69.8471 6.94068C69.9472 6.77185 70 6.5792 70 6.38294C70 6.18667 69.9472 5.99402 69.8471 5.82519C69.747 5.65636 69.6033 5.51757 69.4311 5.42337ZM64.9622 7.29341C64.7787 7.39378 64.6278 7.54467 64.5274 7.72818L63.617 9.39259L62.7068 7.72804C62.6064 7.54453 62.4555 7.39365 62.272 7.29328L60.6074 6.383L62.272 5.47259C62.4555 5.37222 62.6064 5.22134 62.7068 5.03783L63.617 3.37328L64.5274 5.03783C64.6278 5.22134 64.7787 5.37222 64.9622 5.47259L66.6268 6.383L64.9622 7.29341Z"
                  fill="white"
                />
                <path
                  d="M30.1993 60.9411L28.4831 57.803C28.3889 57.6308 28.2501 57.4871 28.0812 57.387C27.9124 57.2869 27.7197 57.2341 27.5234 57.2341C27.3271 57.2341 27.1345 57.2869 26.9656 57.387C26.7968 57.4871 26.658 57.6308 26.5638 57.803L24.8476 60.9411L21.7095 62.6575C21.5373 62.7517 21.3936 62.8905 21.2935 63.0593C21.1934 63.2282 21.1406 63.4208 21.1406 63.6171C21.1406 63.8133 21.1934 64.006 21.2935 64.1748C21.3936 64.3436 21.5373 64.4824 21.7095 64.5766L24.8476 66.293L26.5638 69.4311C26.658 69.6033 26.7968 69.747 26.9656 69.8471C27.1345 69.9472 27.3271 70.0001 27.5234 70.0001C27.7197 70.0001 27.9124 69.9472 28.0812 69.8471C28.2501 69.747 28.3889 69.6033 28.4831 69.4311L30.1993 66.293L33.3374 64.5766C33.5096 64.4824 33.6532 64.3436 33.7533 64.1748C33.8534 64.006 33.9062 63.8133 33.9062 63.6171C33.9062 63.4208 33.8534 63.2282 33.7533 63.0593C33.6532 62.8905 33.5096 62.7517 33.3374 62.6575L30.1993 60.9411ZM28.8686 64.5274C28.6851 64.6278 28.5342 64.7787 28.4338 64.9622L27.5234 66.6267L26.6132 64.9622C26.5128 64.7787 26.3619 64.6278 26.1784 64.5274L24.5137 63.617L26.1783 62.7066C26.3618 62.6062 26.5126 62.4553 26.613 62.2718L27.5233 60.6073L28.4337 62.2718C28.5341 62.4553 28.685 62.6062 28.8685 62.7066L30.533 63.617L28.8686 64.5274Z"
                  fill="white"
                />
                <path
                  d="M42.8216 16.3609L39.6835 14.6445L37.9674 11.5064C37.8732 11.3342 37.7345 11.1905 37.5656 11.0904C37.3968 10.9903 37.2041 10.9374 37.0078 10.9374C36.8115 10.9374 36.6188 10.9903 36.45 11.0904C36.2811 11.1905 36.1424 11.3342 36.0482 11.5064L34.3319 14.6445L31.1938 16.3609C31.0217 16.4551 30.878 16.5939 30.7779 16.7627C30.6778 16.9315 30.625 17.1242 30.625 17.3204C30.625 17.5167 30.6778 17.7094 30.7779 17.8782C30.878 18.047 31.0217 18.1858 31.1938 18.28L34.3319 19.9964L36.0482 23.1345C36.1424 23.3067 36.2811 23.4504 36.45 23.5505C36.6188 23.6506 36.8115 23.7034 37.0078 23.7034C37.2041 23.7034 37.3968 23.6506 37.5656 23.5505C37.7345 23.4504 37.8732 23.3067 37.9674 23.1345L39.6837 19.9964L42.8218 18.28C42.994 18.1858 43.1376 18.047 43.2377 17.8782C43.3378 17.7094 43.3906 17.5167 43.3906 17.3204C43.3906 17.1242 43.3378 16.9315 43.2377 16.7627C43.1376 16.5939 42.994 16.4551 42.8218 16.3609H42.8216ZM38.3527 18.2309C38.1692 18.3313 38.0183 18.4822 37.9179 18.6657L37.0078 20.3301L36.0974 18.6655C35.997 18.482 35.8461 18.3311 35.6626 18.2308L33.9981 17.3204L35.6626 16.41C35.8461 16.3096 35.997 16.1587 36.0974 15.9752L37.0078 14.3106L37.9181 15.9752C38.0184 16.1587 38.1693 16.3096 38.3528 16.41L40.0174 17.3204L38.3527 18.2309Z"
                  fill="white"
                />
                <path
                  d="M27.3438 3.28125H25.1562V5.46875H27.3438V3.28125Z"
                  fill="white"
                />
                <path
                  d="M9.84375 63.4375H7.65625V65.625H9.84375V63.4375Z"
                  fill="white"
                />
                <path
                  d="M5.19531 53.5938H6.5625V56.3281C6.56362 57.3431 6.9673 58.3161 7.68497 59.0338C8.40264 59.7514 9.37569 60.1551 10.3906 60.1562H16.9531C17.9681 60.1551 18.9411 59.7514 19.6588 59.0338C20.3764 58.3161 20.7801 57.3431 20.7812 56.3281V53.5938H40.6738C40.8537 53.8239 41.0482 54.0422 41.2563 54.2473L40.604 57.0739C40.4282 57.8354 40.4266 58.6268 40.5991 59.389C40.7716 60.1512 41.1138 60.8647 41.6003 61.4764C42.0869 62.088 42.7051 62.582 43.409 62.9215C44.1129 63.2611 44.8843 63.4374 45.6658 63.4375H50.8338C51.3386 64.0294 51.8963 64.5739 52.5 65.0644V70H54.6875V64.5312C54.6875 64.3615 54.648 64.194 54.572 64.0421C54.4961 63.8902 54.3858 63.7581 54.25 63.6562C50.3993 60.7682 50.3143 57.027 50.3125 56.875C50.3125 56.6564 50.247 56.4428 50.1245 56.2618C50.0019 56.0808 49.8279 55.9406 49.6249 55.8595L44.2001 53.6895C41.9482 52.5453 41.482 50.7075 41.4403 49.5236L52.2123 52.4613C52.3879 52.5092 52.5725 52.5125 52.7497 52.4711C52.9268 52.4296 53.0908 52.3445 53.2268 52.2237L59.9713 46.2286C60.1738 46.0486 60.4178 45.9215 60.6814 45.8588C60.945 45.796 61.22 45.7995 61.4819 45.869C61.7438 45.9385 61.9844 46.0718 62.1823 46.2569C62.3801 46.4421 62.529 46.6733 62.6157 46.9301L65.5367 56.08C65.538 56.0845 65.5396 56.0889 65.5411 56.0937C65.6139 56.3126 65.6398 56.5444 65.6171 56.774C65.5944 57.0036 65.5235 57.2259 65.4091 57.4263C65.4039 57.4353 65.3989 57.4446 65.3939 57.4536L62.4729 62.9223C62.3882 63.0808 62.3438 63.2578 62.3438 63.4375V70H64.5312V63.7109L67.3165 58.4963C67.5793 58.0311 67.742 57.5161 67.794 56.9842C67.846 56.4524 67.7862 55.9156 67.6185 55.4083L65.625 49.1641V30.3516C65.6234 28.9742 65.0756 27.6536 64.1016 26.6796C63.1276 25.7057 61.8071 25.1578 60.4297 25.1562H58.8227L58.5493 24.0625H65.625C65.9151 24.0625 66.1933 23.9473 66.3984 23.7421C66.6035 23.537 66.7188 23.2588 66.7188 22.9687V17.5C66.7188 17.2099 66.6035 16.9317 66.3984 16.7266C66.1933 16.5215 65.9151 16.4062 65.625 16.4062H60.1562C59.9403 16.4063 59.7293 16.4702 59.5496 16.59L57.091 18.2291L55.4833 11.7988C55.1889 10.6149 54.5064 9.56368 53.5448 8.81285C52.5832 8.06203 51.3978 7.65484 50.1778 7.65625H16.3414C15.1751 7.65252 14.0384 8.0234 13.0987 8.71426C12.159 9.40512 11.466 10.3795 11.1217 11.4938L9.12228 17.8922L7.16926 16.5903C6.98961 16.4704 6.77849 16.4063 6.5625 16.4062H1.09375C0.803669 16.4062 0.52547 16.5215 0.320352 16.7266C0.115234 16.9317 0 17.2099 0 17.5L0 22.9687C0 23.2588 0.115234 23.537 0.320352 23.7421C0.52547 23.9473 0.803669 24.0625 1.09375 24.0625H7.194L6.85221 25.1562H5.19531C3.81791 25.1578 2.49736 25.7057 1.52339 26.6796C0.549417 27.6536 0.001556 28.9742 0 30.3516V48.3984C0.001556 49.7758 0.549417 51.0964 1.52339 52.0704C2.49736 53.0443 3.81791 53.5922 5.19531 53.5938ZM18.5938 56.3281C18.5933 56.7631 18.4203 57.1801 18.1127 57.4877C17.8051 57.7953 17.3881 57.9683 16.9531 57.9688H10.3906C9.95565 57.9683 9.53862 57.7953 9.23105 57.4877C8.92347 57.1801 8.75047 56.7631 8.75 56.3281V53.5938H18.5938V56.3281ZM48.1865 57.6406C48.3649 58.9022 48.7604 60.1234 49.3555 61.25H45.6658C45.2134 61.25 44.7667 61.1479 44.3591 60.9514C43.9516 60.7548 43.5936 60.4688 43.3119 60.1147C43.0303 59.7606 42.8321 59.3475 42.7322 58.9062C42.6323 58.4649 42.6333 58.0067 42.735 57.5658L43.183 55.6244C43.2094 55.6381 43.2342 55.6518 43.2608 55.6655C43.2875 55.6791 43.3155 55.6914 43.3437 55.7026L48.1865 57.6406ZM40.7559 47.0698C40.6154 47.0315 40.4687 47.0216 40.3244 47.0407C40.1801 47.0599 40.041 47.1076 39.9154 47.1812C39.7898 47.2547 39.6801 47.3526 39.5928 47.4691C39.5055 47.5856 39.4423 47.7184 39.407 47.8596C39.3861 47.9432 39.3673 48.0327 39.3496 48.1249H7.65625V45.9375H42.1641L42.5128 47.4487C42.5209 47.4838 42.5273 47.5192 42.534 47.5546L40.7559 47.0698ZM52.2155 50.1951L44.7754 48.166C44.7791 47.7592 44.7351 47.3534 44.6443 46.9569L42.7353 38.6843C42.6335 38.2434 42.6325 37.7853 42.7324 37.3439C42.8323 36.9026 43.0304 36.4895 43.3121 36.1354C43.5937 35.7813 43.9517 35.4953 44.3592 35.2987C44.7667 35.1021 45.2134 35 45.6658 35H56.1353C56.5878 35 57.0345 35.1021 57.442 35.2986C57.8496 35.4952 58.2076 35.7812 58.4892 36.1353C58.7709 36.4894 58.9691 36.9025 59.069 37.3438C59.1689 37.7851 59.1679 38.2433 59.0662 38.6842C59.0601 38.711 59.0549 38.7379 59.0507 38.7651L58.1055 44.9604L52.2155 50.1951ZM40.5338 37.1875H20.7812V35H41.43C40.9663 35.6501 40.6595 36.3989 40.5338 37.1875ZM56.1353 32.8125H54.4296C54.8559 32.3362 55.4119 31.9948 56.0294 31.8301C56.647 31.6655 57.2992 31.6847 57.9059 31.8856C58.5127 32.0864 59.0476 32.4601 59.4449 32.9607C59.8422 33.4613 60.0847 34.0671 60.1426 34.7036C59.6567 34.1109 59.0451 33.6337 58.352 33.3066C57.6589 32.9795 56.9017 32.8107 56.1353 32.8125ZM60.4875 18.5937H64.5312V21.875H58.0024L57.6543 20.4825L60.4875 18.5937ZM2.1875 21.875V18.5937H6.23137L8.44238 20.0677L7.8776 21.875H2.1875ZM13.2096 12.1462C13.4163 11.4777 13.8321 10.8931 14.3959 10.4787C14.9597 10.0642 15.6417 9.8416 16.3414 9.84375H50.1778C50.9099 9.84287 51.6211 10.0872 52.1981 10.5377C52.7751 10.9882 53.1846 11.6189 53.3613 12.3293L56.5679 25.1562H9.14389L13.2096 12.1462ZM2.1875 30.3516C2.1884 29.5541 2.50559 28.7896 3.06947 28.2257C3.63335 27.6618 4.39787 27.3447 5.19531 27.3437H60.4297C61.2271 27.3447 61.9917 27.6618 62.5555 28.2257C63.1194 28.7896 63.4366 29.5541 63.4375 30.3516V44.4542C63.0297 44.131 62.5602 43.8943 62.0578 43.7588C61.5554 43.6233 61.0306 43.5918 60.5155 43.6662L61.2073 39.1336C61.277 38.8179 61.3173 38.4966 61.3278 38.1735C61.7722 37.5497 62.0805 36.8395 62.2329 36.0889C62.3854 35.3384 62.3784 34.5641 62.2126 33.8164C62.0467 33.0687 61.7257 32.3641 61.2702 31.7484C60.8147 31.1327 60.235 30.6195 59.5686 30.242C58.9021 29.8646 58.1638 29.6314 57.4015 29.5574C56.6392 29.4835 55.8698 29.5705 55.1433 29.8128C54.4167 30.0551 53.7492 30.4474 53.1839 30.9641C52.6186 31.4809 52.1681 32.1106 51.8617 32.8125H19.6875C19.3974 32.8125 19.1192 32.9277 18.9141 33.1328C18.709 33.338 18.5938 33.6162 18.5938 33.9062V38.2812C18.5938 38.5713 18.709 38.8495 18.9141 39.0546C19.1192 39.2598 19.3974 39.375 19.6875 39.375H40.6495L41.6592 43.75H6.5625C6.27242 43.75 5.99422 43.8652 5.7891 44.0704C5.58398 44.2755 5.46875 44.5537 5.46875 44.8438V49.2188C5.46875 49.5088 5.58398 49.787 5.7891 49.9921C5.99422 50.1973 6.27242 50.3125 6.5625 50.3125H39.3094C39.36 50.6827 39.4396 51.0484 39.5473 51.4062H5.19531C4.39787 51.4053 3.63335 51.0882 3.06947 50.5243C2.50559 49.9604 2.1884 49.1959 2.1875 48.3984V30.3516Z"
                  fill="white"
                />
                <path
                  d="M9.84375 40.4688C10.9254 40.4688 11.9827 40.148 12.882 39.5471C13.7814 38.9462 14.4823 38.0921 14.8962 37.0928C15.3101 36.0935 15.4184 34.9939 15.2074 33.9331C14.9964 32.8723 14.4756 31.8978 13.7107 31.133C12.9459 30.3682 11.9715 29.8473 10.9107 29.6363C9.84982 29.4253 8.75023 29.5336 7.75095 29.9475C6.75167 30.3615 5.89756 31.0624 5.29665 31.9617C4.69574 32.8611 4.375 33.9184 4.375 35C4.37666 36.4499 4.95337 37.8399 5.9786 38.8652C7.00383 39.8904 8.39386 40.4671 9.84375 40.4688ZM9.84375 31.7188C10.4927 31.7188 11.1271 31.9112 11.6667 32.2717C12.2063 32.6323 12.6269 33.1448 12.8752 33.7443C13.1236 34.3439 13.1886 35.0036 13.062 35.6401C12.9353 36.2766 12.6228 36.8613 12.1639 37.3202C11.7051 37.7791 11.1204 38.0916 10.4839 38.2182C9.84739 38.3448 9.18764 38.2798 8.58807 38.0315C7.9885 37.7831 7.47604 37.3626 7.11549 36.823C6.75494 36.2834 6.5625 35.649 6.5625 35C6.56348 34.1301 6.90949 33.296 7.52464 32.6809C8.13978 32.0657 8.97381 31.7197 9.84375 31.7188Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </section> */}
      <section className="hero">
        <div className="overlay">
          <p className="welcome-text">Welcome To Best Cabs</p>
          <h1>
            Book Reliable & Affordable Cabs in 200+ Cities Across India CTA
          </h1>
          <button className="hero-btn">Book Now</button>

          <div className="red-car">{/* your SVG */}</div>
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

      {/* About Section */}
      <section className="about" id="about">
        <div className="about__toprow">
          <h3 className="about__eyebrow">About Us</h3>
          <div className="about__rule">
            <span className="about__dot" />
          </div>
        </div>

        <div className="about__grid">
          <div className="about__left">
            <h2 className="about__title">
              Master The Essentials
              <br />
              For Expanding Ideas
            </h2>

            <div className="about__imagewrap">
              <Image
                src="/ab3.png"
                alt="car-image"
                fill
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
            </p>

            <hr className="about__divider" />

            <a href="#contact" className="about__cta">
              <span>Read More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-wrap" aria-labelledby="pricing-title">
        <div className="container">
          <div className="ba__toprow">
            <h3 className="ba__eyebrow">Pricing Plan</h3>
            <div className="ba__rule">
              <span className="ba__dot" />
            </div>
          </div>
          <h2 id="pricing-title" className="title">
            The Most Competitive Pricing Options
          </h2>

          <div className="cards">
            {/* Basic */}
            <article className="plan-card">
              <figure className="card-media">
                <Image
                  src="/f-day.jpeg"
                  alt="car-img"
                  width={0}
                  height={0}
                  unoptimized
                />
              </figure>

              <div className="card-body">
                <h3 className="plan-name">Full Day Booking</h3>
                <p>
                  Travel worry-free across the city with our 8 hrs/80 km
                  full-day service, available 24x7 for shopping, meetings,
                  hospital visits, or sightseeing.
                </p>

                <ul className="features">
                  <div className="price-row">
                    <span className="price">Features:</span>
                  </div>
                  <li>8 hrs / 80 km coverage</li>
                  <li>Available 24x7</li>
                  <li>
                    Ideal for city tours, shopping, business & personal trips
                  </li>
                </ul>

                <a href="#" className="btn">
                  Choose Plan
                </a>
              </div>
            </article>

            {/* Standard */}
            <article className="plan-card">
              <figure className="card-media">
                <Image
                  src="/h-day.jpeg"
                  alt="car-img"
                  width={0}
                  height={0}
                  unoptimized
                />
              </figure>

              <div className="card-body">
                <h3 className="plan-name">Half Day Booking</h3>
                <p>
                  Perfect for shorter commitments, our 4 hrs/40 km package is
                  great for airport/railway transfers, office meetings, or
                  interviews. Extra time/kms available at minimal charges.
                </p>

                <ul className="features">
                  <div className="price-row">
                    <span className="price">Features:</span>
                  </div>
                  <li>4 hrs / 40 km coverage</li>
                  <li>Affordable & flexible</li>
                  <li>Best for airport, office, hospital & local trips</li>
                </ul>

                <a href="#" className="btn">
                  Choose Plan
                </a>
              </div>
            </article>

            {/* Premium */}
            <article className="plan-card">
              <figure className="card-media">
                <Image
                  src="/out1.jpeg"
                  alt="car-img"
                  width={0}
                  height={0}
                  unoptimized
                />
              </figure>

              <div className="card-body">
                <h3 className="plan-name">Outstation Travels</h3>
                <p>
                  Customized for weekend getaways or family leisure trips
                  outside city limits. Choose from One-way, Roundtrip, or
                  Multi-city travel.
                </p>

                <ul className="features">
                  <div className="price-row">
                    <span className="price">Features:</span>
                  </div>
                  <li>
                    One-way Trip: Single drop to one or multiple destinations
                  </li>
                  <li>Roundtrip: To & fro journey with flexible stops</li>
                  <li>
                    Multi-city Trip: Travel across multiple cities in one
                    booking
                  </li>
                </ul>

                <a href="#" className="btn">
                  Choose Plan
                </a>
              </div>
            </article>

            {/* Premium */}
            <article className="plan-card">
              <figure className="card-media">
                <Image
                  src="/c-travel.jpeg"
                  alt="car-img"
                  width={0}
                  height={0}
                  unoptimized
                />
              </figure>

              <div className="card-body">
                <h3 className="plan-name">Corporate Travel</h3>
                <p>
                  Tailored packages for corporate clients to ensure timely
                  travel for meetings, conferences, and delegations. Cars &
                  buses available as per group size.
                </p>

                <ul className="features">
                  <div className="price-row">
                    <span className="price">Features:</span>
                  </div>
                  <li>Fixed-time travel arrangements</li>
                  <li>Vehicles for conferences & meetings</li>
                  <li>Options for small or large delegations</li>
                </ul>

                <a href="#" className="btn">
                  Choose Plan
                </a>
              </div>
            </article>

            {/* Premium */}
            <article className="plan-card">
              <figure className="card-media">
                <Image
                  src="/tp-1.jpeg"
                  alt="car-img"
                  width={0}
                  height={0}
                  unoptimized
                />
              </figure>

              <div className="card-body">
                <h3 className="plan-name">Customized Tour Packages</h3>
                <p>
                  Specially designed trips by travel experts to suit your
                  needs—be it leisure, adventure, or spirituality.
                </p>

                <ul className="features">
                  <div className="price-row">
                    <span className="price">Features:</span>
                  </div>
                  <li>Adventure tours & eco-tours</li>
                  <li>Honeymoon & family packages</li>
                  <li>Pilgrimage & sightseeing trips</li>
                  <li>Fully personalized on request</li>
                </ul>

                <a href="#" className="btn">
                  Choose Plan
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <h2 className="wrap-title">10 Years of Trust</h2>
          <p className="wrap-subtitle">
            A decade of excellence in transportation services. We have built our
            reputation through consistent quality, reliability, and customer
            satisfaction across India.
          </p>

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

      <section className="city-grid">
        <div className="city-grid-df">
          <div className="cg-header">
            <h2>Explore India on Wheels</h2>
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

      {/* Portfolio */}
      <section className="fleet" id="fleet">
        {/* Header */}
        <div className="fleet-header">
          <h2>Browse Our Fleet</h2>
          <p>
            Choose from our diverse fleet of well-maintained vehicles. From
            economy to luxury, we have the perfect car for every need and
            budget.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="fleet-grid">
          {/* Premium */}
          <div className="fleet-card">
            <div className="fleet-image">
              <Image
                src="/pr1.jpeg"
                alt="car-images"
                width={0}
                height={0}
                unoptimized
              ></Image>
              <span className="rating">⭐ 4.8</span>
            </div>
            <div className="fleet-body">
              <h3>Premium</h3>
              <p>Luxury vehicles for executive travel and special occasions</p>
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

          {/* Luxury */}
          <div className="fleet-card">
            <div className="fleet-image">
              <Image
                src="/luxury3.jpeg"
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

          {/* Economy */}
          <div className="fleet-card">
            <div className="fleet-image">
              <Image
                src="/economy2.jpeg"
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

          {/* Buses & Coaches */}
          <div className="fleet-card">
            <div className="fleet-image">
              <Image
                src="/bus2.jpeg"
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
              <button className="btn-primary">View Buses & Coaches Cars</button>
            </div>
          </div>
        </div>
      </section>

      <section className="teamShowcase">
        <div className="teamShowcase-container">
          <div className="teamShowcase-content">
            <div className="teamShowcase-text" id="meet-title">
              <h2 className="teamShowcase-title">The People Behind CozyCabz</h2>
              <p className="teamShowcase-description">
                Every smooth ride begins with a passionate team. At CozyCabz,
                our strength lies in the people who work tirelessly to make
                travel stress-free and dependable. From expert chauffeurs to
                dedicated support staff, each member brings skill,
                responsibility, and commitment to delivering safe and punctual
                journeys.
              </p>
              <p>
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

              <div className="teamShowcase-btn">
                <button>Know More</button>
              </div>
            </div>

            <div className="teamShowcase-image">
              <div className="teamShowcase-imageWrapper">
                <Image
                  src="/team.png"
                  width={0}
                  height={0}
                  alt="team-img"
                  unoptimized
                />
                <div className="teamShowcase-overlay">
                  <p>Together we achieve more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="corporate-program">
        {/* Top Section */}
        <div className="program-header">
          <h1>Corporate Program Rental</h1>
          <p>
            Comprehensive transportation solutions designed specifically for
            businesses. From daily employee transport to executive travel and
            event management.
          </p>
          <button className="btn-primary" id="program-btn">
            WHAT DOES OUR CORPORATE PROGRAM OFFER?
          </button>
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
          <h2>Our Corporate Services</h2>
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
          </div>
        </div>

        {/* Bottom Features */}
        <div className="program-features-box">
          <div className="program-features">
            <div className="feature">
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

            <div className="feature">
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

            <div className="feature">
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
            <button className="btn-primary" id="btn-two">
              Get Corporate Quote
            </button>
            <button className="btn-outline">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Stats ribbon */}
      <div className="why-stats" role="group" aria-label="Key stats">
        <div className="stat">
          <div className="stat-num">1200+</div>
          <div className="stat-label">Vendors Covering Entire Nation</div>
        </div>
        <div className="stat">
          <div className="stat-num">50,000+</div>
          <div className="stat-label">Happy Customers</div>
        </div>
        <div className="stat">
          <div className="stat-num">99.8%</div>
          <div className="stat-label">Customer Satisfaction</div>
        </div>
        <div className="stat">
          <div className="stat-num">24/7</div>
          <div className="stat-label">Customer Support</div>
        </div>
      </div>

      <section className="why">
        <div className="why-wrap">
          <header className="why-head">
            <h2>What Makes Us the Best Choice</h2>
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
              title="Well Known for Quality Services"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Earned Positive Reviews from All Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="The Largest Network of Drivers"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>

          {/* Optional second row — uncomment if you want 3 more cards */}
          <div className="why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
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

      <section className="howto">
        <div className="howtoWrap">
          <h2 className="howtoTitle">How to Book Your Ride</h2>
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

      <section className="prestigious-section section-container">
        <div className="prestigious-wrap">
          {/* Image First */}
          <div className="prestigious-image">
            <Image
              src="/pr1.jpeg"
              alt="DRDO G20 Summit"
              width={600}
              height={400}
              className="image"
            />
          </div>

          {/* Content Second */}
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
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
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

      {/* Testimonial A */}
      <section className="t-wrap" aria-labelledby="t-title">
        <div className="t-container">
          <p className="t-eyebrow">Testimonial</p>
          <div className="ba__rule">
            <span className="ba__dot"></span>
          </div>
          <h2 id="t-title" className="t-title">
            What Our Clients Love <br /> About Us
          </h2>

          <div className="t-frame">
            {/* Left: hero image */}
            <figure className="t-hero">
              <Image
                src={activePrimary.hero}
                alt="testimonial"
                unoptimized
                width={0}
                height={0}
              />
              <div className="t-quote">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <path
                    d="M9 7H5a1 1 0 0 0-1 1v8h6V8a1 1 0 0 0-1-1Zm10 0h-4a1 1 0 0 0-1 1v8h6V8a1 1 0 0 0-1-1Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </figure>

            {/* Right: content */}
            <div className="t-content">
              {/* avatars selector */}
              <div
                className="t-avatars"
                role="tablist"
                aria-label="Select testimonial"
              >
                {TESTIMONIALS_PRIMARY.map((person, avatarIdx) => (
                  <button
                    key={person.id}
                    className={`t-avatar ${
                      avatarIdx === primaryIndex ? "is-active" : ""
                    }`}
                    role="tab"
                    aria-selected={avatarIdx === primaryIndex}
                    onClick={() => setPrimaryIndex(avatarIdx)}
                  >
                    <img src={person.avatar} alt={`${person.name} avatar`} />
                  </button>
                ))}
              </div>

              {/* text */}
              <p className="t-text">{activePrimary.text}</p>

              {/* rating */}
              <div
                className="t-stars"
                aria-label={`${activePrimary.rating} out of 5 stars`}
              >
                {Array.from({ length: activePrimary.rating }).map((_, k) => (
                  <svg
                    key={k}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path
                      d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73-1.64 7.03L12 17.27Z"
                      fill="#f0b90b"
                    />
                  </svg>
                ))}
              </div>

              {/* person */}
              <div className="t-person">
                <Image
                  className="t-person-avatar"
                  src={activePrimary.avatar}
                  alt="client"
                  width={0}
                  height={0}
                />
                <div>
                  <div className="t-person-name">{activePrimary.name}</div>
                  <div className="t-person-role">{activePrimary.role}</div>
                </div>
              </div>

              {/* arrows */}
              <div className="t-arrows">
                <button
                  className="t-arrow"
                  aria-label="Previous testimonial"
                  onClick={goPrimaryPrev}
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  className="t-arrow"
                  aria-label="Next testimonial"
                  onClick={goPrimaryNext}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-wrap"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-container">
          {/* Eyebrow + rule */}
          <div className="contact-toprow">
            <h3 className="contact-eyebrow">Location</h3>
            <div className="contact-rule">
              <span className="contact-dot" />
            </div>
          </div>

          <h2 id="contact-title" className="contact-title">
            Car Washing &amp; Car Point
          </h2>

          <div className="contact-grid">
            {/* LEFT : map + info */}
            <div className="contact-left">
              <h3 className="contact-subtitle">Get In Touch</h3>
              <p className="contact-lead">
                It is a long established fact that a reader will be distracted
                of a page when looking at its layout. The point of
                using&nbsp;more–or–less.
              </p>

              <a href="tel:+0208571234" className="contact-phone">
                + (020) 857 1234
              </a>

              <ul className="contact-social">
                <li>
                  <a href="#" aria-label="Facebook" className="soc soc--fb">
                    <FbIcon />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter/X" className="soc soc--tw">
                    <TwIcon />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="soc soc--in">
                    <InIcon />
                  </a>
                </li>
              </ul>

              {/* World map bg + pins */}
              <div className="contact-map">
                <img src="/images/world-map-light.svg" alt="" />
                <span className="pin pin-1" />
                <span className="pin pin-2" />
                <span className="pin pin-3" />
                <span className="pin pin-4" />
              </div>
            </div>

            {/* RIGHT : form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="field">
                  <span className="field-icon">
                    <UserIcon />
                  </span>
                  <input name="name" type="text" placeholder="Name" required />
                </label>

                <label className="field">
                  <span className="field-icon">
                    <MailIcon />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span className="field-icon">
                    <svg
                      id="phone-no"
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                  <input name="phone" type="tel" placeholder="Phone" />
                </label>

                <label className="field">
                  <span className="field-icon">
                    <DocIcon />
                  </span>
                  <input name="subject" type="text" placeholder="Subject" />
                </label>
              </div>

              <label className="field field--full">
                <span className="field-icon">
                  <MsgIcon />
                </span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How Can I Help You?"
                />
              </label>

              <button className="contact-submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
