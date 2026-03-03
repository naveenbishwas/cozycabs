"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import Header from "@/app/Components/Header/page";
import carListings from "../../data/carListings.json";
import "./cabPage.css";
import { FaRegClock } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { SiToll } from "react-icons/si";
import { MdVerified } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineLoop } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import SiteFooter from "@/app/Components/Footer/page";

const PREMIUM_MARKUP = 1.32;

const Page = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get("type")?.toLowerCase() || "";
  const formatedSlug = slug.split("-").join(" ");

  const matchedCar = carListings.find(
    (car) =>
      car.destination.toLowerCase() === formatedSlug &&
      car.title[0].toLowerCase() === type,
  );

  if (!matchedCar) {
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

  // flex depend on vehicle
  const ecoFlex =
    matchedCar.title[0].toLowerCase() === "crysta" ||
    matchedCar.title[0].toLowerCase() === "ertiga";

  const fromCity = matchedCar.destination.split(" to ")[0];
  const toCity = matchedCar.destination.split(" to ")[1];
  const basePrice = matchedCar.extraFare * matchedCar.included;
  const premiumPrice = Math.round(basePrice * PREMIUM_MARKUP);
  const premiumExtra = premiumPrice - basePrice;

  /* ── Reusable Card Component ── */
  const CabCard = ({ cab, isPremium }) => {
    const price = isPremium ? premiumPrice : basePrice;
    const original = isPremium
      ? Math.round(premiumPrice * 1.2)
      : Math.round(basePrice * 1.22);
    const discount = Math.round((1 - price / original) * 100);

    return (
      <div className={`cc ${isPremium ? "cc--premium" : "cc--economy"}`}>
        {/* LEFT — image */}
        <div className={`cc__left ${!isPremium ? "cc__left--e" : ""}`}>
          <div className="cc__img-wrap">
            <img src={cab.image} alt={cab.title} className="cc__img" />
          </div>
          <div className="cc__left-meta">
            <span
              className={`cc__type-tag ${isPremium ? "cc__type-tag--p" : "cc__type-tag--e"}`}
            >
              {isPremium ? "⭐ Premium" : "💰 Economy"}
            </span>
            <div className="cc__rating">
              <span className="cc__stars">{isPremium ? "★★★★★" : "★★★★☆"}</span>
              <span className="cc__rating-num">
                {isPremium ? "4.8" : "4.4"}
              </span>
              <span className="cc__rating-cnt">
                ({isPremium ? "240+" : "180+"} rides)
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — info */}
        <div className="cc__right">
          <div className="cc__head">
            <div>
              <h3 className="cc__name">{cab.title}</h3>
              <p className="cc__route">
                {fromCity} → {toCity} &nbsp;·&nbsp; {matchedCar.duration}
              </p>
            </div>
            <span className={`cc__avail ${!isPremium ? "cc__avail--e" : ""}`}>
              Available
            </span>
          </div>

          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {isPremium ? matchedCar.seats : 4}{" "}
              Seater
            </span>
            <span className="cc__chip">
              <FaWindowMaximize /> AC
            </span>
            <span className="cc__chip">
              <MdLuggage /> {isPremium ? "Large" : "Compact"} Boot
            </span>
            <span className="cc__chip">
              <GiPathDistance /> Google Maps Route
            </span>
          </div>

          <div
            className={`cc__fare-box ${!isPremium ? "cc__fare-box--e" : ""}`}
          >
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
                {matchedCar.included} kms included
              </span>
              <span className="cc__fare-val cc__fare-val--green">Free</span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-val">
                ₹{matchedCar.extraFare}/km after {matchedCar.included} km
              </span>
            </div>
            {isPremium && (
              <div className="cc__fare-row">
                <span className="cc__fare-lbl">⭐ Premium charge</span>
                <span className="cc__fare-val cc__fare-val--red">
                  +₹{premiumExtra.toLocaleString("en-IN")} over base
                </span>
              </div>
            )}
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
                <span className={`cc__disc ${!isPremium ? "cc__disc--e" : ""}`}>
                  {discount}% OFF
                </span>
              </div>
              <span className="cc__tax">+ Toll extra · GST incl.</span>
            </div>
            <button
              className={`cc__btn ${isPremium ? "cc__btn--p" : "cc__btn--e"}`}
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
                val: matchedCar.duration,
                lbl: "Duration",
              },
              {
                icon: <GiPathDistance />,
                val: `${matchedCar.included} km`,
                lbl: "Included",
              },
              {
                icon: <MdAirlineSeatReclineExtra />,
                val: `${matchedCar.seats} Seats`,
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

      <main className={ecoFlex ? "cbp-main-flex" : "cbp-main"}>
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
                {matchedCar.premium.length} vehicles
              </p>
            </div>
            <div className="cbp-sec__from">
              <span className="cbp-sec__from-lbl">From</span>
              <span className="cbp-sec__from-val">
                ₹{premiumPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <div className="cbp-cards">
            {matchedCar.premium.map((cab, i) => (
              <CabCard key={i} cab={cab} isPremium={true} />
            ))}
          </div>
        </div>

        <div className="cbp-sec">
          <div className="cbp-sec__hd">
            <div>
              <span className="cbp-badge cbp-badge--e">💰 Economy</span>
              <h2 className="cbp-sec__title">
                Economy Cabs — {fromCity} to {toCity}
              </h2>
              <p className="cbp-sec__sub">
                Budget-friendly · Comfortable · On-time ·{" "}
                {matchedCar.economy.length} vehicles
              </p>
            </div>
            <div className="cbp-sec__from">
              <span className="cbp-sec__from-lbl">From</span>
              <span className="cbp-sec__from-val cbp-sec__from-val--e">
                ₹{basePrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <div className="cbp-cards">
            {matchedCar.economy.map((cab, i) => (
              <CabCard key={i} cab={cab} isPremium={false} />
            ))}
          </div>
        </div>
      </main>
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
    </>
  );
};

export default Page;
