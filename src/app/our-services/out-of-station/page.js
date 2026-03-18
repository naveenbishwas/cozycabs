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
  const ampm = hr >= 12 ? "PM" : "AM";
  return `${hr % 12 || 12}:${m} ${ampm}`;
};

export default function OutOfStation() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [time, setTime] = useState("07:00");
  const [showTo, setShowTo] = useState(false);
  const router = useRouter();
  const toRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const returnDateRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

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
    const car = carListings.find((c) => c.destination.includes(to));
    if (!car) {
      alert("No cabs available for this destination");
      setTo("");
      return;
    }
    const slug = car.destination.trim().toLowerCase().replace(/\s+/g, "-");
    router.push(`/cabs/${slug}?type=${car.title[0].toLowerCase()}`);
  };

  return (
    <>
      <Header />
      <section className="oos-hero">
        <div className="oos-hero__bg">
          <Image
            src="../out-of-stations.png"
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
              From Here to <span>Anywhere.</span>
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
              <button
                className={`oos-tab ${tripType === "roundtrip" ? "active" : ""}`}
                onClick={() => setTripType("roundtrip")}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                Round Trip
              </button>
            </div>

            <div className="oos-fields">
              {/* FROM */}
              <div className="oos-f oos-f--grow oos-f--dis">
                <span className="oos-f__badge">
                  <IconLock /> Fixed
                </span>
                <label className="oos-f__lbl">FROM</label>
                <div className="oos-f__wrap">
                  <IconLocation color="#bbb" size={15} />
                  <input
                    className="oos-f__inp--dis"
                    value={from}
                    disabled
                    readOnly
                  />
                </div>
              </div>

              {/* Swap */}
              <button
                className="oos-swap"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
                style={{ opacity: 0.8 }}
              >
                <IconSwap />
              </button>

              {/* TO */}
              <div className="oos-f oos-f--grow" ref={toRef}>
                <label className="oos-f__lbl">TO</label>
                <div className="oos-f__wrap">
                  <IconLocationFill color="#d80117" size={14} />
                  <input
                    className="oos-f__inp"
                    placeholder="Enter drop city"
                    value={to}
                    autoComplete="off"
                    onChange={(e) => {
                      setTo(e.target.value);
                      setShowTo(true);
                    }}
                    onFocus={() => setShowTo(true)}
                  />
                </div>
                {showTo && fTo.length > 0 && (
                  <ul className="oos-drop">
                    {fTo.sort().map((c) => (
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

              {/* DATE */}
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

              {/* TIME */}
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

              {/* RETURN DATE — only for Round Trip */}
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
                Search Cabs
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
