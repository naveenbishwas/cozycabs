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
import { fetchFromSuggestions, getDistance } from "@/app/lib/mapbox";
import { fetchToSuggestions } from "@/app/lib/mapbox";

// ── Icons ──
const IconLocation = ({ color = "#aaa", size = 15 }) => (
  <svg
    className="oos-f__ico"
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
    className="oos-f__ico"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const IconCalendar = ({ size = 15 }) => (
  <svg
    className="oos-f__cal-ico"
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
const IconClock = ({ size = 15 }) => (
  <svg
    className="oos-f__cal-ico"
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

// ── Helpers ──
const formatDate = (val) => {
  if (!val) return null;
  const d = new Date(val + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
const formatTime = (val) => {
  if (!val) return null;
  const [h, m] = val.split(":");
  const hr = parseInt(h);
  return `${hr % 12 || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;
};

// ── Reusable city input field ──
function CityField({
  label,
  icon,
  value,
  onChange,
  onSelect,
  suggestions,
  loading,
  fieldRef,
  show,
  onFocus,
}) {
  return (
    <div className="oos-f oos-f--grow" ref={fieldRef}>
      <label className="oos-f__lbl">{label}</label>
      <div className="oos-f__wrap">
        {icon}
        <input
          className="oos-f__inp"
          value={value}
          placeholder={`Enter ${label.toLowerCase()}`}
          autoComplete="off"
          onChange={onChange}
          onFocus={onFocus}
        />
        {loading && <span className="oos-spinner" />}
      </div>
      {show && suggestions.length > 0 && (
        <ul className="oos-drop">
          {suggestions.map((s) => (
            <li key={s.id} onMouseDown={() => onSelect(s)}>
              <IconLocationFill color="#d80117" size={11} />
              <span>
                <strong>{s.name}</strong>
                <small
                  style={{ color: "#aaa", fontSize: "11px", marginLeft: "6px" }}
                >
                  {s.full.split(",").slice(1).join(",").trim()}
                </small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Main component ──
export default function OutOfStation() {
  const [tripType, setTripType] = useState("oneway");

  // From state
  const [fromValue, setFromValue] = useState("");
  const [fromCoords, setFromCoords] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [fromLoading, setFromLoading] = useState(false);
  const [showFrom, setShowFrom] = useState(false);

  // To state
  const [toValue, setToValue] = useState("");
  const [toCoords, setToCoords] = useState(null);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [toLoading, setToLoading] = useState(false);
  const [showTo, setShowTo] = useState(false);

  // Date / time
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [time, setTime] = useState("07:00");

  const router = useRouter();
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const returnDateRef = useRef(null);
  const fromDebounce = useRef(null);
  const toDebounce = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  // Close dropdowns on outside click
  useEffect(() => {
    const close = (e) => {
      if (!fromRef.current?.contains(e.target)) setShowFrom(false);
      if (!toRef.current?.contains(e.target)) setShowTo(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleFromChange = (e) => {
    const val = e.target.value;
    setFromValue(val);
    setShowFrom(true);
    setShowTo(false);

    clearTimeout(fromDebounce.current);
    fromDebounce.current = setTimeout(async () => {
      setFromLoading(true);
      const results = await fetchFromSuggestions(val);
      setFromSuggestions(results);
      setFromLoading(false);
    }, 300);
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    setToValue(val);
    setShowTo(true);
    setShowFrom(false);

    clearTimeout(toDebounce.current);
    toDebounce.current = setTimeout(async () => {
      setToLoading(true);
      const results = await fetchToSuggestions(val);
      setToSuggestions(results);
      setToLoading(false);
    }, 300);
  };

  const handleFromSelect = (s) => {
    setFromValue(s.name);
    setFromCoords(s.coords);
    setFromSuggestions([]);
    setShowFrom(false);
  };

  const handleToSelect = (s) => {
    setToValue(s.name);
    setToCoords(s.coords);
    setToSuggestions([]);
    setShowTo(false);
  };

  const handleSwap = () => {
    setFromValue(toValue);
    setToValue(fromValue);
    setFromSuggestions([]);
    setToSuggestions([]);
    setShowFrom(false);
    setShowTo(false);
  };

  const handleSearch = async () => {
    if (!fromValue.trim()) {
      alert("Please enter a pickup city");
      return;
    }
    if (!toValue.trim()) {
      alert("Please enter a drop city");
      return;
    }
    if (!fromCoords || !toCoords) {
      alert("Please select pickup and drop locations");
      return;
    }
    try {
      const slug = `${fromValue}-to-${toValue}`
        .toLowerCase()
        .replace(/\s+/g, "-");
      router.push(
        `/cabs/${slug}?from=${encodeURIComponent(fromValue)}&to=${encodeURIComponent(toValue)}&fromCoords=${fromCoords[0]},${fromCoords[1]}&toCoords=${toCoords[0]},${toCoords[1]}`,
      );
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <section className="oos-hero">
        <div className="oos-hero__bg">
          <Image
            src="../station.png"
            fill
            className="oos-hero__img"
            alt="Out of Station"
            unoptimized
            priority
          />
          <div className="oos-hero__dim" />
        </div>

        <div className="oos-hero__body">
          <div className="oos-text">
            <span className="oos-pill">✦ Trusted by 10 Lakh+ Travelers</span>
            <h1 className="oos-h1">
              Your Trusted <br />
              Partner <br />
              From Here to Anywhere.
            </h1>
            <p className="oos-sub">
              Professional drivers · Clean cabs · On-time pickup · Pan India
              coverage
            </p>
          </div>

          <div className="oos-widget">
            <div className="oos-tabs">
              <button
                className={`oos-tab ${tripType === "oneway" ? "active" : ""}`}
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

            <div className="oos-fields">
              {/* FROM */}
              <CityField
                label="Delhi location"
                icon={<IconLocation color="#d80117" size={15} />}
                value={fromValue}
                onChange={handleFromChange}
                onSelect={handleFromSelect}
                suggestions={fromSuggestions}
                loading={fromLoading}
                fieldRef={fromRef}
                show={showFrom}
                onFocus={() => {
                  setShowFrom(true);
                  setShowTo(false);
                }}
              />

              {/* SWAP */}
              <button className="oos-swap" onClick={handleSwap}>
                <IconSwap />
              </button>

              {/* TO */}
              <CityField
                label="TO Drop Location"
                icon={<IconLocationFill color="#d80117" size={14} />}
                value={toValue}
                onChange={handleToChange}
                onSelect={handleToSelect}
                suggestions={toSuggestions}
                loading={toLoading}
                fieldRef={toRef}
                show={showTo}
                onFocus={() => {
                  setShowTo(true);
                  setShowFrom(false);
                }}
              />

              {/* PICKUP DATE */}
              <div
                className="oos-f oos-f--dt"
                onClick={() => dateRef.current?.showPicker()}
              >
                <label className="oos-f__lbl">PICKUP DATE</label>
                <div className="oos-f__wrap">
                  <IconCalendar size={15} />
                  <span
                    className={`oos-f__dtxt ${!date ? "oos-f__dtxt--ph" : ""}`}
                  >
                    {date ? formatDate(date) : "Select date"}
                  </span>
                </div>
                <input
                  ref={dateRef}
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* PICKUP TIME */}
              <div
                className="oos-f oos-f--dt"
                onClick={() => timeRef.current?.showPicker()}
              >
                <label className="oos-f__lbl">PICKUP TIME</label>
                <div className="oos-f__wrap">
                  <IconClock size={15} />
                  <span
                    className={`oos-f__dtxt ${!time ? "oos-f__dtxt--ph" : ""}`}
                  >
                    {time ? formatTime(time) : "Select time"}
                  </span>
                </div>
                <input
                  ref={timeRef}
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              {/* RETURN DATE */}
              {tripType === "roundtrip" && (
                <div
                  className="oos-f oos-f--dt oos-f--return"
                  onClick={() => returnDateRef.current?.showPicker()}
                >
                  <label className="oos-f__lbl">RETURN DATE</label>
                  <div className="oos-f__wrap">
                    <IconCalendar size={15} />
                    <span
                      className={`oos-f__dtxt ${!returnDate ? "oos-f__dtxt--ph" : ""}`}
                    >
                      {returnDate ? formatDate(returnDate) : "Select date"}
                    </span>
                  </div>
                  <input
                    ref={returnDateRef}
                    type="date"
                    value={returnDate}
                    min={date || today}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              )}

              {/* SEARCH */}
              <button onClick={handleSearch} className="oos-btn">
                Search Cab
              </button>
            </div>
          </div>

          <div className="oos-trust">
            <span>✓ Free Cancellation</span>
            <span className="oos-trust-dot" />
            <span>✓ No Hidden Charges</span>
            <span className="oos-trust-dot" />
            <span>✓ 24/7 Customer Support</span>
            <span className="oos-trust-dot" />
            <span>✓ 10 Lakh+ Happy Customers</span>
          </div>
        </div>
      </section>

      <NumberCounter />
      <AllBookingCars />
      <SiteFooter />
    </>
  );
}
