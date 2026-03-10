"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/Components/Header/page";
import carListings from "../../data/carListings.json";
import "./cabPage.css";
import { FaRegClock, FaStar } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import {
  MdAirlineSeatReclineExtra,
  MdLuggage,
  MdVerified,
  MdCall,
  MdOutlineLoop,
} from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { SiToll } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import SiteFooter from "@/app/Components/Footer/page";
import CityForm from "@/app/Components/CityForm/page";

const Page = () => {
  const { slug } = useParams();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);

  const openModal = (cabName, price, isPremium) => {
    setSelectedCab({ cabName, price, isPremium, route: formatedSlug });
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCab(null);
  };

  // "delhi-to-amritsar" → "delhi to amritsar"
  const formatedSlug = slug.split("-").join(" ");

  /*
   * Naye JSON mein ek destination ke liye 3 entries hain:
   *   { title: ["Crysta", ...], extraFare: 18, premium: [...], economy: [...] }
   *   { title: ["Ertiga",  ...], extraFare: 14, premium: [...], economy: [...] }
   *   { title: ["Sedan",  ...], extraFare: 10, premium: [...], economy: [...] }
   *
   * Premium section → Crysta entry ka premium[] + uska price (18 × included)
   * Economy section → Ertiga + Sedan entries ka economy[], price unka apna (14×, 10×)
   */

  // Is destination ki saari entries
  const allEntries = carListings.filter(
    (car) => car.destination.toLowerCase() === formatedSlug.toLowerCase(),
  );

  if (!allEntries.length) {
    return (
      <>
        <Header />
        <div className="cbp-notfound">
          <span>🚫</span>
          <h2>No cabs found for this route</h2>
          <p>Please try a different destination.</p>
        </div>
      </>
    );
  }

  // Helper — title[0] lowercase (array ya string dono handle)
  const getType = (car) =>
    Array.isArray(car.title)
      ? car.title[0].toLowerCase()
      : car.title.toLowerCase();

  // Crysta entry → premium section
  const crystaEntry = allEntries.find((c) => getType(c) === "crysta");

  // Sedan pehle, Ertiga baad mein
  const economyEntries = allEntries
    .filter((c) => getType(c) !== "crysta")
    .sort((a, b) => {
      const order = { sedan: 0, swedan: 0, ertiga: 1 };
      const aOrder = order[getType(a)] ?? 2;
      const bOrder = order[getType(b)] ?? 2;
      return aOrder - bOrder;
    });

  // Route info from first entry
  const routeInfo = allEntries[0];
  const fromCity = routeInfo.destination.split(" to ")[0];
  const toCity = routeInfo.destination.split(" to ")[1];

  // Prices
  const crystaPrice = crystaEntry
    ? crystaEntry.extraFare * crystaEntry.included
    : 0;

  // Economy "From" = lowest among economy entries
  const economyFromPrice = economyEntries.length
    ? Math.min(...economyEntries.map((e) => e.extraFare * e.included))
    : 0;

  /* ── Card for Premium variants (all use crystaEntry price) ── */
  const PremiumCard = ({ variant }) => {
    const price = crystaPrice;
    const original = Math.round(price * 1.2);
    const discount = Math.round((1 - price / original) * 100);

    return (
      <div className="cc cc--premium">
        <div className="cc__left">
          <div className="cc__img-wrap">
            <img src={variant.image} alt={variant.title} className="cc__img" />
          </div>
          <div className="cc__left-meta">
            <span className="cc__type-tag cc__type-tag--p">⭐ Premium</span>
            <div className="cc__rating">
              <span className="cc__stars">★★★★★</span>
              <span className="cc__rating-num">4.8</span>
              <span className="cc__rating-cnt">(240+ rides)</span>
            </div>
          </div>
        </div>

        <div className="cc__right">
          <div className="cc__head">
            <div>
              <h3 className="cc__name">{variant.title}</h3>
              <p className="cc__route">
                {fromCity} → {toCity}&nbsp;·&nbsp;{crystaEntry.duration}
              </p>
            </div>
            <span className="cc__avail">Available</span>
          </div>

          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {crystaEntry.seats} Seater
            </span>
            <span className="cc__chip">
              <FaWindowMaximize /> AC
            </span>
            <span className="cc__chip">
              <MdLuggage /> Large Boot
            </span>
            <span className="cc__chip">
              <GiPathDistance /> Google Maps Route
            </span>
          </div>

          <div className="cc__fare-box">
            <div className="cc__fare-row">
              <span className="cc__fare-lbl cc__fare-lbl--green">
                <svg viewBox="0 0 12 12" fill="none" width="11" height="11">
                  <path
                    d="M2 6l2.5 2.5 5.5-5"
                    stroke="#16a34a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {crystaEntry.included} kms included
              </span>
              <span className="cc__fare-val cc__fare-val--green">Free</span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-val">
                ₹{crystaEntry.extraFare}/km after {crystaEntry.included} km
              </span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <SiToll /> Toll / State tax
              </span>
              <span className="cc__fare-val cc__fare-val--muted">
                As per govt. rules
              </span>
            </div>
          </div>

          <div className="cc__footer">
            <div className="cc__price-block">
              <div className="cc__price-row">
                <span className="cc__price">
                  {/* ₹{price.toLocaleString("en-IN")} */}
                  N/A
                </span>
                <span className="cc__orig">
                  {/* ₹{original.toLocaleString("en-IN")} */}
                </span>
                {/* <span className="cc__disc">{discount}% OFF</span> */}
              </div>
              {/* <span className="cc__tax">+ Toll extra · GST incl.</span> */}
            </div>
            <button
              className="cc__btn cc__btn--p"
              onClick={() => openModal(variant.title, price, true)}
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ── Card for Economy variants (each entry has its own price) ── */
  const EconomyCard = ({ variant, entry }) => {
    const price = entry.extraFare * entry.included;
    const original = Math.round(price * 1.22);
    const discount = Math.round((1 - price / original) * 100);

    return (
      <div className="cc cc--economy">
        <div className="cc__left cc__left--e">
          <div className="cc__img-wrap">
            <img src={variant.image} alt={variant.title} className="cc__img" />
          </div>
          <div className="cc__left-meta">
            <span className="cc__type-tag cc__type-tag--e">💰 Economy</span>
            <div className="cc__rating">
              <span className="cc__stars">★★★★☆</span>
              <span className="cc__rating-num">4.4</span>
              <span className="cc__rating-cnt">(180+ rides)</span>
            </div>
          </div>
        </div>

        <div className="cc__right">
          <div className="cc__head">
            <div>
              <h3 className="cc__name">{variant.title}</h3>
              <p className="cc__route">
                {fromCity} → {toCity}&nbsp;·&nbsp;{entry.duration}
              </p>
            </div>
            <span className="cc__avail cc__avail--e">Available</span>
          </div>

          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {entry.seats} Seater
            </span>
            <span className="cc__chip">
              <FaWindowMaximize /> AC
            </span>
            <span className="cc__chip">
              <MdLuggage /> Compact Boot
            </span>
            <span className="cc__chip">
              <GiPathDistance /> Google Maps Route
            </span>
          </div>

          <div className="cc__fare-box cc__fare-box--e">
            <div className="cc__fare-row">
              <span className="cc__fare-lbl cc__fare-lbl--green">
                <svg viewBox="0 0 12 12" fill="none" width="11" height="11">
                  <path
                    d="M2 6l2.5 2.5 5.5-5"
                    stroke="#16a34a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {entry.included} kms included
              </span>
              <span className="cc__fare-val cc__fare-val--green">Free</span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-val">
                ₹{entry.extraFare}/km after {entry.included} km
              </span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <SiToll /> Toll / State tax
              </span>
              <span className="cc__fare-val cc__fare-val--muted">
                As per govt. rules
              </span>
            </div>
          </div>

          <div className="cc__footer">
            <div className="cc__price-block">
              <div className="cc__price-row">
                <span className="cc__price">
                  ₹{price.toLocaleString("en-IN")}
                </span>
                <span className="cc__orig">
                  ₹{original.toLocaleString("en-IN")}
                </span>
                <span className="cc__disc cc__disc--e">{discount}% OFF</span>
              </div>
              <span className="cc__tax">+ Toll extra · GST incl.</span>
            </div>
            <button
              className="cc__btn cc__btn--e"
              onClick={() => openModal(variant.title, price, false)}
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="cbp-hero">
        <div className="cbp-hero__inner">
          <p className="cbp-crumb">
            Home / Outstation /{" "}
            <span>
              {fromCity} to {toCity}
            </span>
          </p>
          <div className="cbp-route">
            <div className="cbp-route__city">
              <span className="cbp-route__lbl">FROM</span>
              <span className="cbp-route__name">{fromCity}</span>
            </div>
            <div className="cbp-route__mid">
              <svg viewBox="0 0 48 14" fill="none" width="44" height="13">
                <path
                  d="M0 7h44M36 2l8 5-8 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="cbp-route__oneway">One Way</span>
            </div>
            <div className="cbp-route__city cbp-route__city--red">
              <span className="cbp-route__lbl">TO</span>
              <span className="cbp-route__name">{toCity}</span>
            </div>
          </div>

          <div className="cbp-stats">
            {[
              {
                icon: <FaRegClock />,
                val: routeInfo.duration,
                lbl: "Duration",
              },
              {
                icon: <GiPathDistance />,
                val: `${routeInfo.included} km`,
                lbl: "Included",
              },
              {
                icon: <MdAirlineSeatReclineExtra />,
                val: `${routeInfo.seats} Seats`,
                lbl: "Capacity",
              },
              { icon: <FaWindowMaximize />, val: "Full AC", lbl: "All Cabs" },
            ].map((s, i) => (
              <div className="cbp-stat" key={i}>
                <span className="cbp-stat__ico">{s.icon}</span>
                <div>
                  <span className="cbp-stat__val">{s.val}</span>
                  <span className="cbp-stat__lbl">{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cbp-pills">
            {[
              "✓ Free Cancellation",
              "✓ No Hidden Charges",
              "✓ GST Included",
              "✓ 24/7 Support",
            ].map((p, i) => (
              <span
                key={i}
                className={`cbp-pill ${i < 2 ? "cbp-pill--green" : ""}`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="cbp-main">
        {/* PREMIUM — Crysta entry ke premium[] variants */}
        {crystaEntry && crystaEntry.premium?.length > 0 && (
          <div className="cbp-sec">
            <div className="cbp-sec__hd">
              <div>
                <span className="cbp-badge cbp-badge--p">
                  <FaStar color="gold" /> Premium
                </span>
                <h2 className="cbp-sec__title">
                  Premium Cabs — {fromCity} to {toCity}
                </h2>
                <p className="cbp-sec__sub">
                  Luxury · Top-rated drivers · Extra legroom ·{" "}
                  {crystaEntry.premium.length} vehicles
                </p>
              </div>
              <div className="cbp-sec__from">
                <span className="cbp-sec__from-lbl">From</span>
                <span className="cbp-sec__from-val">
                  {/* ₹{crystaPrice.toLocaleString("en-IN")} */}
                  Call to Discuss
                </span>
              </div>
            </div>
            <div className="cbp-cards">
              {crystaEntry.premium.map((variant, i) => (
                <PremiumCard key={i} variant={variant} />
              ))}
            </div>
          </div>
        )}

        {/* ECONOMY — Ertiga + Sedan entries, har ek ka apna economy[] + apni price */}
        {economyEntries.length > 0 && (
          <div className="cbp-sec">
            <div className="cbp-sec__hd">
              <div>
                <span className="cbp-badge cbp-badge--e">💰 Economy</span>
                <h2 className="cbp-sec__title">
                  Economy Cabs — {fromCity} to {toCity}
                </h2>
                <p className="cbp-sec__sub">
                  Budget-friendly · Comfortable · On-time ·{" "}
                  {economyEntries.reduce(
                    (sum, e) => sum + (e.economy?.length || 0),
                    0,
                  )}{" "}
                  vehicles
                </p>
              </div>
              <div className="cbp-sec__from">
                <span className="cbp-sec__from-lbl">From</span>
                <span className="cbp-sec__from-val cbp-sec__from-val--e">
                  ₹{economyFromPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <div className="cbp-cards">
              {economyEntries.map((entry) =>
                (entry.economy || []).map((variant, i) => (
                  <EconomyCard
                    key={`${entry.id}-${i}`}
                    variant={variant}
                    entry={entry}
                  />
                )),
              )}
            </div>
          </div>
        )}
      </main>

      {/* WHY COZYCABZ */}
      <div className="cbp-why-sec">
        <div className="cbp-why">
          <h3 className="cbp-why__title">Why CozyCabz?</h3>
          <div className="cbp-why__grid">
            {[
              {
                ico: <MdVerified />,
                t: "Safe & Verified",
                d: "All drivers background checked",
              },
              {
                ico: <MdCall />,
                t: "24/7 Support",
                d: "Round the clock helpline",
              },
              {
                ico: <MdOutlineLoop />,
                t: "Free Cancellation",
                d: "Cancel up to 1hr before pickup",
              },
              {
                ico: <CiCreditCard1 />,
                t: "Easy Payment",
                d: "UPI, Card, Cash — your choice",
              },
            ].map((w, i) => (
              <div className="cbp-why__item" key={i}>
                <span className="cbp-why__ico">{w.ico}</span>
                <div>
                  <p className="cbp-why__t">{w.t}</p>
                  <p className="cbp-why__d">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* ── BOOKING MODAL ── */}
      {modalOpen && (
        <div className="cbp-modal-overlay" onClick={closeModal}>
          <div className="cbp-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="cbp-modal__hd">
              <div>
                <h3 className="cbp-modal__title">Complete Your Booking</h3>
                {selectedCab && (
                  <div className="cbp-modal__meta">
                    <span
                      className={
                        selectedCab.isPremium
                          ? "cbp-modal__badge cbp-modal__badge--p"
                          : "cbp-modal__badge cbp-modal__badge--e"
                      }
                    >
                      {selectedCab.isPremium ? "⭐ Premium" : "💰 Economy"}
                    </span>
                    <span className="cbp-modal__cab">
                      {selectedCab.cabName}
                    </span>
                    <span className="cbp-modal__route">
                      {fromCity} → {toCity}
                    </span>
                    <span className="cbp-modal__price">
                      ₹{selectedCab.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
              </div>
              <button className="cbp-modal__close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* CityForm inside modal */}
            <div className="cbp-modal__body">
              <CityForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
