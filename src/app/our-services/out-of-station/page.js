"use client";
import Header from "@/app/Components/Header/page";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import "./OutOfStation.css";
import NumberCounter from "@/app/Components/NumberCounter/page";

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
  "Mehandipur ",
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

export default function OutOfStation() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("07:00");
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!fromRef.current?.contains(e.target)) setShowFrom(false);
      if (!toRef.current?.contains(e.target)) setShowTo(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const fFrom = CITIES.filter(
    (c) => c.toLowerCase().includes(from.toLowerCase()) && c !== to,
  );
  const fTo = CITIES.filter(
    (c) => c.toLowerCase().includes(to.toLowerCase()) && c !== from,
  );

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
          {/* Heading */}
          <div className="hero__text">
            <span className="hero__pill">✦ Trusted by 10 Lakh+ Travelers</span>
            <h1 className="hero__h1">
              Your Trusted <br /> Partner <br />
              <h1 className="hero__h1">
                From Here to
                <span> Anywhere.</span>
              </h1>
            </h1>
            <p className="hero__sub">
              Professional drivers · Clean cabs · On-time pickup · Pan India
              coverage
            </p>
          </div>

          {/* Booking Widget */}
          <div className="widget">
            {/* Trip type tabs */}
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

            {/* Fields */}
            <div className="widget__fields">
              {/* FROM */}
              <div className="wf wf--grow" ref={fromRef}>
                <label className="wf__lbl">FROM</label>
                <div className="wf__wrap">
                  <svg
                    className="wf__ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="2"
                    width="15"
                    height="15"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <input
                    className="wf__inp__dis"
                    placeholder="Enter pickup city"
                    value={from}
                    disabled
                    readOnly
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="wf__div" />

              {/* Swap */}
              <button
                className="wf__swap"
                title="Swap"
                // onClick={() => {
                //   const t = from;
                //   setFrom(to);
                //   setTo(t);
                // }}
              >
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
              </button>

              {/* Divider */}
              <div className="wf__div" />

              {/* TO */}
              <div className="wf wf--grow" ref={toRef}>
                <label className="wf__lbl">TO</label>
                <div className="wf__wrap">
                  <svg
                    className="wf__ico"
                    viewBox="0 0 24 24"
                    fill="#d80117"
                    width="14"
                    height="14"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <input
                    className="wf__inp"
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
                  <ul className="wf__drop">
                    {fTo.map((c) => (
                      <li
                        key={c}
                        onMouseDown={() => {
                          setTo(c);
                          setShowTo(false);
                        }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="#d80117"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider */}
              <div className="wf__div" />

              {/* PICKUP DATE */}
              <div className="wf">
                <label className="wf__lbl">PICKUP DATE</label>
                <div className="wf__wrap">
                  <svg
                    className="wf__ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="2"
                    width="14"
                    height="14"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <input
                    type="date"
                    className="wf__inp wf__inp--dt"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="wf__div" />

              {/* TIME */}
              <div className="wf">
                <label className="wf__lbl">PICKUP TIME</label>
                <div className="wf__wrap">
                  <svg
                    className="wf__ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="2"
                    width="14"
                    height="14"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <input
                    type="time"
                    className="wf__inp wf__inp--dt"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              {/* SEARCH BTN */}
              <button className="wf__btn">Search Cabs</button>
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
      <NumberCounter />
    </>
  );
}
