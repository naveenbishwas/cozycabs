"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoCarSport } from "react-icons/io5";
import { useRouter } from "next/navigation";
import "./allbookingcars.css";
import carListings from "../../data/carListings.json";

/* ── Vehicle type tabs — same as before, don't touch ─────────── */
const vehicleTypes = [
  { id: 1, name: "Sedan", image: "/sweden-1.png" },
  { id: 2, name: "Ertiga", image: "/Ertiga.webp" },
  { id: 3, name: "Crysta", image: "/crysta-1.png" },
];

const HEADER_HEIGHT = 64;

/* ── Price helpers ────────────────────────────────────────────── */
// Actual price = extraFare * included
// Original (strikethrough) = ~20% higher
const getPrice = (car) => car.extraFare * car.included;
const getOriginal = (car) =>
  Math.round((car.extraFare * car.included * 1.22) / 10) * 10;
const getTax = (car) =>
  Math.round((car.extraFare * car.included * 0.18) / 10) * 10;

const AllBookingCars = () => {
  const [selectedType, setSelectedType] = useState(vehicleTypes[0]);
  const [isSticky, setIsSticky] = useState(false);
  const anchorRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (!anchorRef.current) return;
      setIsSticky(
        anchorRef.current.getBoundingClientRect().top <= HEADER_HEIGHT,
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Filter all cars matching selected vehicle type */
  const listings = carListings.filter(
    (l) =>
      l.title[0].trim().toLowerCase() ===
      selectedType.name.trim().toLowerCase(),
  );

  return (
    <section
      className="vsel-section"
      style={{ "--header-h": `${HEADER_HEIGHT}px` }}
    >
      {/* ══════════ STICKY SELECTOR BAR — unchanged ══════════ */}
      <div ref={anchorRef} className="vsel-anchor">
        <div className={`vsel-bar ${isSticky ? "vsel-bar--sticky" : ""}`}>
          <div className="vsel-bar__inner">
            <div className="vsel-bar__label">
              <div className="vsel-bar__label-icon-wrap">
                <IoCarSport size={22} />
              </div>
              <div className="vsel-bar__label-text">
                <span className="vsel-bar__label-heading">
                  Select Vehicle Type
                </span>
                <span className="vsel-bar__label-note">
                  <svg viewBox="0 0 12 12" fill="none">
                    <circle
                      cx="6"
                      cy="6"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M6 5.5v3M6 4v.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Extra fare applies beyond included km
                </span>
              </div>
              <span className="vsel-bar__divider" />
            </div>

            <div className="vsel-tabs">
              {vehicleTypes.map((type) => {
                const active = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    className={`vsel-tab ${active ? "vsel-tab--active" : ""}`}
                    onClick={() => setSelectedType(type)}
                  >
                    <span
                      className={`vsel-tab__tick ${active ? "vsel-tab__tick--show" : ""}`}
                    >
                      <svg viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5.2l2.2 2.2 3.8-4"
                          stroke="#fff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="vsel-tab__imgbox">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="vsel-tab__img"
                      />
                    </div>
                    <span className="vsel-tab__name">{type.name}</span>
                    <span
                      className={`vsel-tab__radio ${active ? "vsel-tab__radio--on" : ""}`}
                    >
                      {active && <span className="vsel-tab__radio-dot" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* ══════════ END SELECTOR BAR ══════════ */}

      {/* ══════════ CAR LISTINGS — ref image layout ══════════ */}
      <div className="vsel-listings">
        <div className="vsel-listings__inner">
          {/* ── Column header row ── */}
          <div className="vsel-col-header">
            <div className="vsel-col-header__cell vsel-col-header__cell--left">
              Cab from Delhi
            </div>
            <div className="vsel-col-header__cell vsel-col-header__cell--center">
              Included kms &amp; Extra fare
            </div>
            <div className="vsel-col-header__cell vsel-col-header__cell--right">
              Cab Price
            </div>
          </div>

          {/* ── Car rows ── */}
          {listings.map((car) => {
            const price = getPrice(car);
            const original = getOriginal(car);

            return (
              <div key={car.id} className="vsel-row">
                {/* COL 1 — Destination + duration */}
                <div className="vsel-row__col vsel-row__col--dest">
                  <div className="vsel-row__dest-info">
                    <p className="vsel-row__dest">{car.destination} Cab</p>
                    <p className="vsel-row__meta">{car.duration} (appx.)</p>
                  </div>
                </div>

                {/* COL 2 — Extra fare only */}
                <div className="vsel-row__col vsel-row__col--fare">
                  <p className="vsel-row__dest">{car.included} kms</p>
                  <div className="vsel-fare__info">
                    <span className="vsel-row__extra-tag">⚡ Extra fare</span>
                    <p className="vsel-row__extra">
                      ₹{car.extraFare}/km after {car.included} kms
                    </p>
                  </div>
                </div>

                {/* COL 3 — Price + VIEW Cab */}
                <div className="vsel-row__col vsel-row__col--price">
                  <div className="vsel-row__price-wrap">
                    <div className="vsel-row__price-top">
                      <span className="vsel-row__price">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className="vsel-row__original">
                        ₹{original.toLocaleString()}
                      </span>
                    </div>
                    <p className="vsel-row__tax">
                      + Toll tax as per govt. rules
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const slug = car.destination
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      // router.push(`/cabs/${slug}?type=${selectedType.name}`);
                      router.push(`/cabs/${slug}`);
                    }}
                    className="vsel-row__btn"
                  >
                    VIEW Cab
                  </button>
                </div>
              </div>
            );
          })}

          {/* ── Disclaimer ── */}
          <div className="vsel-disclaimer">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="vsel-disclaimer__icon"
            >
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M8 7v4M8 5.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p>
              All fares are approximate and subject to change based on road
              conditions, distance, and trip duration. Extra km charges apply
              beyond included kilometers.
            </p>
          </div>
        </div>
      </div>
      {/* ══════════ END LISTINGS ══════════ */}
    </section>
  );
};

export default AllBookingCars;
