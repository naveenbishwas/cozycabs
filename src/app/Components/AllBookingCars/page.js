"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoCarSport } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { fetchToSuggestions, fetchFromSuggestions } from "@/app/lib/mapbox";
import "./allbookingcars.css";
import carListings from "../../data/carListings.json";
const TABS = [
  { id: 0, name: "Dzire", key: "dzire", imgIdx: 2 },
  { id: 1, name: "Ertiga", key: "ertiga", imgIdx: 0 },
  { id: 2, name: "Crysta", key: "crysta", imgIdx: 1 },
];

// Fixed tab images (fallback if JSON image array missing)
const TAB_FALLBACK_IMAGES = ["/Ertiga.webp", "/crysta-1.png", "/maruti.avif"];

const HEADER_HEIGHT = 64;

const AllBookingCars = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
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

  const handleViewCab = async (destination) => {
    try {
      const parts = destination.toLowerCase().split("to");
      const toCity = parts.length > 1 ? parts[1].trim() : null;

      if (!toCity) {
        alert("Invalid destination");
        return;
      }

      // Delhi fixed (no API dependency)
      const from = {
        name: "Delhi",
        coords: [77.1025, 28.7041],
      };

      const toRes = await fetchToSuggestions(toCity);

      if (!toRes || toRes.length === 0) {
        alert("Location not found");
        return;
      }

      const to = toRes[0];

      const slug = destination.toLowerCase().replace(/\s+/g, "-");

      router.push(
        `/cabs/${slug}?from=${encodeURIComponent(from.name)}&to=${encodeURIComponent(to.name)}&fromCoords=${from.coords[0]},${from.coords[1]}&toCoords=${to.coords[0]},${to.coords[1]}`,
      );
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // Get image for a car entry at current tab index
  const getTabImage = (car) => {
    const imgs = car.image;
    if (Array.isArray(imgs) && imgs[activeTab.imgIdx])
      return imgs[activeTab.imgIdx];
    return TAB_FALLBACK_IMAGES[activeTab.imgIdx];
  };

  // Get price data for active tab
  const getPriceData = (car) => {
    const data = car[activeTab.key];
    if (!data) return { finalPrice: "N/A", perKm: "N/A", seat: 4 };
    return data;
  };
  const getOriginal = (finalPrice) => {
    const num = parseInt(String(finalPrice).replace(/,/g, ""), 10);
    if (isNaN(num)) return null;
    return Math.round((num * 1.22) / 100) * 100;
  };

  const listings = carListings.filter((car) => car[activeTab.key]);

  return (
    <section
      className="vsel-section"
      style={{ "--header-h": `${HEADER_HEIGHT}px` }}
    >
      {/* ══ STICKY SELECTOR BAR ══ */}
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
              {TABS.map((tab) => {
                const active = activeTab.id === tab.id;
                // Get image from first listing that has this tab
                const sampleCar = carListings.find((c) => c[tab.key]);
                const tabImg = sampleCar
                  ? Array.isArray(sampleCar.image)
                    ? sampleCar.image[tab.imgIdx]
                    : TAB_FALLBACK_IMAGES[tab.imgIdx]
                  : TAB_FALLBACK_IMAGES[tab.imgIdx];

                return (
                  <button
                    key={tab.id}
                    className={`vsel-tab ${active ? "vsel-tab--active" : ""}`}
                    onClick={() => setActiveTab(tab)}
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
                        src={tabImg}
                        alt={tab.name}
                        className="vsel-tab__img"
                      />
                    </div>
                    <span className="vsel-tab__name">{tab.name}</span>
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
      {/* END SELECTOR BAR */}

      {/* CAR LISTINGS */}
      <div className="vsel-listings">
        <div className="vsel-listings__inner">
          {/* Column headers */}
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

          {/* Car rows */}
          {listings.map((car) => {
            const priceData = getPriceData(car);
            const rawPrice = parseInt(
              String(priceData.finalPrice).replace(/,/g, ""),
              10,
            );
            const original = getOriginal(rawPrice);
            const discount = original
              ? Math.round((1 - rawPrice / original) * 100)
              : 0;

            return (
              <div key={car.id} className="vsel-row">
                {/* COL 1 — Destination */}
                <div className="vsel-row__col vsel-row__col--dest">
                  <div className="vsel-row__dest-info">
                    <h3 className="vsel-row__dest">{car.destination} Cab</h3>
                    <p className="vsel-row__meta">{car.duration} (appx.)</p>
                  </div>
                </div>

                {/* COL 2 — Included km + extra fare */}
                <div className="vsel-row__col vsel-row__col--fare">
                  <h3 className="vsel-row__dest">{car.included} kms</h3>
                  <div className="vsel-fare__info">
                    <span className="vsel-row__extra-tag">⚡ Extra fare</span>
                    <p className="vsel-row__extra">
                      ₹{priceData.perKm}/km after {car.included} kms
                    </p>
                  </div>
                </div>

                {/* COL 3 — Price + VIEW Cab */}
                <div className="vsel-row__col vsel-row__col--price">
                  <div className="vsel-row__price-wrap">
                    <div className="vsel-row__price-top">
                      <span className="vsel-row__price">
                        ₹{priceData.finalPrice}
                      </span>
                      {original && (
                        <span className="vsel-row__original">
                          ₹{original.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <p className="vsel-row__tax">Parking charges may apply</p>
                  </div>
                  <button
                    className="vsel-row__btn"
                    onClick={() => handleViewCab(car.destination)}
                  >
                    VIEW Cab
                  </button>
                </div>
              </div>
            );
          })}

          {/* Disclaimer */}
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
      {/* ══ END LISTINGS ══ */}
    </section>
  );
};

export default AllBookingCars;
