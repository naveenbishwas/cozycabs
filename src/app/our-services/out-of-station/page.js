"use client";
import Header from "@/app/Components/Header/page";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./OutOfStation.css";
import NumberCounter from "@/app/Components/NumberCounter/page";
import AllBookingCars from "@/app/Components/AllBookingCars/page";
import SiteFooter from "@/app/Components/Footer/page";
import carListings from "../../data/carListings.json";

const CITIES = [
  "Amritsar",
  "Pathankot",
  "Manali",
  "Kasol",
  "Kullu",
  "Dharamshala",
  "McLeodganj",
  "Dalhousie",
  "Badrinath",
  "Joshimath",
  "Auli",
  "Udaipur",
  "Jodhpur",
  "Lucknow",
  "Kanpur",
  "Murthal",
  "Panipat",
  "Rohtak",
  "Meerut",
  "Bulandshahr",
  "Muzaffarnagar",
  "Aligarh",
  "Mathura",
  "Vrindavan",
  "Mehandipur",
  "Balaji",
  "Neemrana",
  "Alwar",
  "Karnal",
  "Ambala",
  "Saharanpur",
  "Agra",
  "Bharatpur",
  "Roorkee",
  "Kashipur",
  "Chandigarh",
  "Haridwar",
  "Rishikesh",
  "Dehradun",
  "Mussoorie",
  "Jaipur",
  "Patiala",
  "Ludhiana",
  "Haldwani",
  "Rudrapur",
  "Ramnagar",
  "Jim",
  "Corbett",
  "Lansdowne",
  "Kotdwar",
  "Bhimtal",
  "Nainital",
  "Kasauli",
  "Zirakpur",
  "Bareilly",
  "Moradabad",
  "Gwalior",
  "Ajmer",
  "Moga",
  "Kota",
  "Jalandhar",
  "Almora",
  "Ranikhet",
  "Shimla",
];

/* ── Icons ── */
const IconLocation = ({ color = "#aaa", size = 15 }) => (
  <svg
    className="wf__ico"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    width={size}
    height={size}
  >
    <circle cx="12" cy="10" r="3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);

const IconLocationFill = ({ color = "#d80117", size = 14 }) => (
  <svg
    className="wf__ico"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);

/* Calendar icon — SVG, always visible */
const IconCalendar = ({ size = 15 }) => (
  <svg
    className="wf__cal-ico"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={size}
    height={size}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

/* Clock icon */
const IconClock = ({ size = 15 }) => (
  <svg
    className="wf__cal-ico"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={size}
    height={size}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconSwap = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="16"
    height="16"
  >
    <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4" />
  </svg>
);

const IconLock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="9"
    height="9"
  >
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

/* Format date for display */
const formatDate = (val) => {
  if (!val) return null;
  const d = new Date(val + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/* Format time for display */
const formatTime = (val) => {
  if (!val) return null;
  const [h, m] = val.split(":");
  const hr = parseInt(h);
  const ampm = hr >= 12 ? "PM" : "AM";
  const hr12 = hr % 12 || 12;
  return `${hr12}:${m} ${ampm}`;
};

/* ═══════════════════════════════════════════════════════════════ */

export default function OutOfStation() {
  const [tripType, setTripType] = useState("oneway");
  const [from] = useState("Delhi");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("07:00");
  const [showTo, setShowTo] = useState(false);
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];
  const toRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!toRef.current?.contains(e.target)) setShowTo(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const fTo = CITIES.filter(
    (c) => c.toLowerCase().includes(to.toLowerCase()) && c !== from,
  );

  const handleSearch = () => {
    const carDetails = carListings.find((car) => car.destination.includes(to));
    if (!carDetails) {
      alert("No cabs available for this destination");
      setTo("");
      return;
    }
    const slug = carDetails.destination
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    router.push(`/cabs/${slug}?type=${carDetails.title[0].toLowerCase()}`);
  };

  return (
    <>
      <Header />

      <section className="hero">
        {/* Background */}
        <div className="hero__bg">
          <Image
            src="../out-of-stations.png"
            fill
            className="hero__img"
            alt="Out of Station"
            unoptimized
            priority
          />
          <div className="hero__dim" />
        </div>

        {/* Body */}
        <div className="hero__body">
          <div className="hero__text">
            <span className="hero__pill">✦ Trusted by 10 Lakh+ Travelers</span>
            <h1 className="hero__h1">
              Your Trusted <br /> Partner <br />
              <p className="hero__h1">
                From Here to<span> Anywhere.</span>
              </p>
            </h1>
            <p className="hero__sub">
              Professional drivers · Clean cabs · On-time pickup · Pan India
              coverage
            </p>
          </div>

          {/* ══ Booking Widget ══ */}
          <div className="widget">
            <div className="widget__tabs">
              <button
                className={`widget__tab ${tripType === "oneway" ? "active" : ""}`}
                onClick={() => setTripType("oneway")}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                One Way
              </button>
            </div>

            <div className="widget__fields">
              {/* ── FROM (locked) ── */}
              <div className="wf wf--grow wf--disabled">
                <span className="wf__locked-badge">
                  <IconLock /> Fixed
                </span>
                <label className="wf__lbl">FROM</label>
                <div className="wf__wrap">
                  <IconLocation color="#bbb" size={15} />
                  <input
                    className="wf__inp__dis"
                    value={from}
                    disabled
                    readOnly
                  />
                </div>
              </div>

              {/* ── Swap (disabled) ── */}
              <button
                className="wf__swap"
                disabled
                style={{ opacity: 0.4, cursor: "not-allowed" }}
              >
                <IconSwap />
              </button>

              {/* ── TO ── */}
              <div className="wf wf--grow" ref={toRef}>
                <label className="wf__lbl">TO</label>
                <div className="wf__wrap">
                  <IconLocationFill color="#d80117" size={14} />
                  <input
                    className="wf__inp"
                    placeholder="Enter drop city"
                    value={to}
                    autoComplete="off"
                    autoFocus
                    onChange={(e) => {
                      setTo(e.target.value);
                      setShowTo(true);
                    }}
                    onFocus={() => setShowTo(true)}
                  />
                </div>
                {showTo && fTo.length > 0 && (
                  <ul className="wf__drop">
                    {fTo.map((c) => (
                      <li
                        key={c}
                        onMouseDown={() => {
                          setTo(c);
                          setShowTo(false);
                        }}
                      >
                        <IconLocationFill color="#d80117" size={11} />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* ── PICKUP DATE — full area clickable ── */}
              <div className="wf wf--date">
                <label className="wf__lbl">PICKUP DATE</label>
                <div className="wf__wrap">
                  <IconCalendar size={15} />
                  <span
                    className={`wf__date-display ${!date ? "wf__date-display--placeholder" : ""}`}
                  >
                    {date ? formatDate(date) : "Select date"}
                  </span>
                </div>
                {/* Hidden input overlays entire card */}
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* ── PICKUP TIME — full area clickable ── */}
              <div className="wf wf--date">
                <label className="wf__lbl">PICKUP TIME</label>
                <div className="wf__wrap">
                  <IconClock size={15} />
                  <span
                    className={`wf__date-display ${!time ? "wf__date-display--placeholder" : ""}`}
                  >
                    {time ? formatTime(time) : "Select time"}
                  </span>
                </div>
                {/* Hidden input overlays entire card */}
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              {/* ── SEARCH ── */}
              <button onClick={handleSearch} className="wf__btn">
                Search Cabs
              </button>
            </div>
          </div>

          {/* Trust strip */}
          <div className="hero__trust">
            <span>✓ Free Cancellation</span>
            <span className="hero__trust-dot" />
            <span>✓ No Hidden Charges</span>
            <span className="hero__trust-dot" />
            <span>✓ 24/7 Customer Support</span>
            <span className="hero__trust-dot" />
            <span>✓ 10 Lakh+ Happy Customers</span>
          </div>
        </div>
      </section>

      <div style={{ position: "relative", zIndex: 10, background: "#fff" }}>
        <NumberCounter />
      </div>
      <AllBookingCars />
      <SiteFooter />
    </>
  );
}
