"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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
import { FaCar, FaCartPlus, FaWindowMaximize } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import SiteFooter from "@/app/Components/Footer/page";
import Link from "next/link";

const PREMIUM_IMAGES = {
  "Toyota Fortuner": "/premium-toyota-fortuner.png",
  "Toyota Innova Hycross": "/premium-toyota-innova-hycros.png",
  "Toyota Innova Crysta": "/crysta-1.png",
};
const getPremiumImage = (title) => PREMIUM_IMAGES[title] || "/crysta-1.png";

const Page = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("q");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);

  // Mini form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travellers: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const openModal = (cabName, price, type) => {
    setSelectedCab({ cabName, price, type, route: route });
    setSent(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      travellers: "",
      message: "",
    });
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCab(null);
    document.body.style.overflow = "";
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone")
      setForm((s) => ({ ...s, phone: value.replace(/\D/g, "").slice(0, 10) }));
    else if (name === "name")
      setForm((s) => ({ ...s, name: value.replace(/[^a-zA-Z\s]/g, "") }));
    else setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cabName: selectedCab?.cabName,
          route: selectedCab?.route,
          price: selectedCab?.price,
          type: selectedCab?.type,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed");
      setSent(true);
      setTimeout(() => {
        closeModal();
        router.push("/thank-you-page");
      }, 1200);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // slug → "delhi to dehradun"
  const formatedSlug = slug.split("-").join(" ");

  // Find single entry matching this destination
  const car = carListings.find(
    (c) => c.destination?.toLowerCase() === formatedSlug.toLowerCase(),
  );

  if (!car) {
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

  const fromCity = car.destination.split(" to ")[0];
  const toCity = car.destination.split(" to ")[1];
  const route = `${token ? `${toCity} to ${fromCity}` : `${fromCity} to ${toCity}`}`;

  // Safe image getter
  const getImg = (idx) =>
    Array.isArray(car.image)
      ? car.image[idx] || "/Ertiga.webp"
      : car.image || "/Ertiga.webp";

  // Parse price string "2,100" → number 2100
  const parsePrice = (str) => parseInt(String(str).replace(/,/g, ""), 10) || 0;

  // Discount calc
  const calcDiscount = (price, mul = 1.22) => {
    const orig = Math.round((price * mul) / 100) * 100;
    return { orig, discount: Math.round((1 - price / orig) * 100) };
  };

  /* ────────────────────────────────────────────────
     ECONOMY CARD — Dzire or Ertiga
  ──────────────────────────────────────────────── */
  const EconomyCard = ({ keyName, imgIdx, stars, ratingNum, ratingCnt }) => {
    const data = car[keyName];
    if (!data) return null;
    const price = parsePrice(data.finalPrice);
    const { orig, discount } = calcDiscount(price, 1.22);

    return (
      <div className="cc cc--economy">
        <div className="cc__left cc__left--e">
          <div className="cc__img-wrap">
            <img src={getImg(imgIdx)} alt={data.carName} className="cc__img" />
          </div>
          <div className="cc__left-meta">
            <span className="cc__type-tag cc__type-tag--e">
              <FaCar /> Economy
            </span>
            <div className="cc__rating">
              <span className="cc__stars">{stars}</span>
              <span className="cc__rating-num">{ratingNum}</span>
              <span className="cc__rating-cnt">({ratingCnt}+ rides)</span>
            </div>
          </div>
        </div>

        <div className="cc__right">
          <div className="cc__head">
            <div>
              <h3 className="cc__name">{data.carName}</h3>
              <p className="cc__route">
                {fromCity} → {toCity} · {car.duration}
              </p>
            </div>
            <span className="cc__avail cc__avail--e">Available</span>
          </div>

          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {data.seat} Seater
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
                {car.included} kms included
              </span>
              <span className="cc__fare-val cc__fare-val--green">Free</span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-val">
                ₹{data.perKm}/km after {car.included} km
              </span>
            </div>
            {/* <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <SiToll /> Toll / State tax
              </span>
              <span className="cc__fare-val cc__fare-val--muted">
                As per govt. rules
              </span>
            </div> */}
          </div>

          <div className="cc__footer">
            <div className="cc__price-block">
              <div className="cc__price-row">
                <span className="cc__price">₹{data.finalPrice}</span>
                <span className="cc__orig">
                  ₹{orig.toLocaleString("en-IN")}
                </span>
                <span className="cc__disc cc__disc--e">{discount}% OFF</span>
              </div>
              <span className="cc__tax">+ Toll extra · GST incl.</span>
            </div>
            <button
              className="cc__btn cc__btn--e"
              onClick={() => openModal(data.carName, price, "Economy")}
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ────────────────────────────────────────────────
     CRYSTA CARD
  ──────────────────────────────────────────────── */
  const CrystaCard = () => {
    const data = car.crysta;
    if (!data) return null;
    const price = parsePrice(data.finalPrice);
    const { orig, discount } = calcDiscount(price, 1.2);

    return (
      <div className="cc cc--economy">
        <div className="cc__left">
          <div className="cc__img-wrap">
            <img src={getImg(1)} alt={data.carName} className="cc__img" />
          </div>
          <div className="cc__left-meta">
            <span className="cc__type-tag cc__type-tag--p">
              <FaCar /> Crysta
            </span>
            <div className="cc__rating">
              <span className="cc__stars">★★★★★</span>
              <span className="cc__rating-num">4.7</span>
              <span className="cc__rating-cnt">(200+ rides)</span>
            </div>
          </div>
        </div>

        <div className="cc__right">
          <div className="cc__head">
            <div>
              <h3 className="cc__name">{data.carName}</h3>
              <p className="cc__route">
                {fromCity} → {toCity} · {car.duration}
              </p>
            </div>
            <span className="cc__avail cc__avail--e">Available</span>
          </div>

          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {data.seat} Seater
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
                {car.included} kms included
              </span>
              <span className="cc__fare-val cc__fare-val--green">Free</span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-lbl">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-val">
                ₹{data.perKm}/km after {car.included} km
              </span>
            </div>
          </div>

          <div className="cc__footer">
            <div className="cc__price-block">
              <div className="cc__price-row">
                <span className="cc__price">₹{data.finalPrice}</span>
                <span className="cc__orig">
                  ₹{orig.toLocaleString("en-IN")}
                </span>
                <span className="cc__disc cc__disc--e">{discount}% OFF</span>
              </div>
              <span className="cc__tax">+ Toll extra · GST incl.</span>
            </div>
            <button
              className="cc__btn cc__btn--e"
              onClick={() => openModal(data.carName, price, "Crysta")}
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ────────────────────────────────────────────────
     PREMIUM CARD — Fortuner, Hycross
  ──────────────────────────────────────────────── */
  const PremiumCard = ({ variant }) => (
    <div className="cc cc--premium">
      <div className="cc__left">
        <div className="cc__img-wrap">
          <img
            src={getPremiumImage(variant.title)}
            alt={variant.title}
            className="cc__img"
          />
        </div>
        <div className="cc__left-meta">
          <span className="cc__type-tag cc__type-tag--p">
            <FaCar /> Premium
          </span>
          <div className="cc__rating">
            <span className="cc__stars">★★★★★</span>
            <span className="cc__rating-num">4.9</span>
            <span className="cc__rating-cnt">(320+ rides)</span>
          </div>
        </div>
      </div>

      <div className="cc__right">
        <div className="cc__head">
          <div>
            <h3 className="cc__name">{variant.title}</h3>
            <p className="cc__route">
              {fromCity} → {toCity} · {car.duration}
            </p>
          </div>
          <span className="cc__avail">Available</span>
        </div>

        <div className="cc__chips">
          <span className="cc__chip">
            <MdAirlineSeatReclineExtra /> {variant.seat} Seater
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
              {car.included} kms included
            </span>
            <span className="cc__fare-val cc__fare-val--green">Free</span>
          </div>
          <div className="cc__fare-row">
            <span className="cc__fare-lbl">
              <FiZap /> Extra per km
            </span>
            <span className="cc__fare-val cc__fare-val--muted">
              Call to confirm
            </span>
          </div>
        </div>

        <div className="cc__footer">
          <div className="cc__price-block">
            <div className="cc__price-row">
              <span
                className="cc__price"
                style={{ fontSize: "18px", letterSpacing: 0 }}
              >
                Call to Discuss
              </span>
            </div>
            <span className="cc__tax">Price on request · GST incl.</span>
          </div>
          <button
            className="cc__btn cc__btn--p"
            onClick={() =>
              openModal(variant.title, "Call to Discuss", "Premium")
            }
          >
            Enquire Now →
          </button>
        </div>
      </div>
    </div>
  );

  // Economy lowest price
  const economyPrices = ["dzire", "ertiga"]
    .map((k) => parsePrice(car[k]?.finalPrice))
    .filter(Boolean);
  const lowestEconomy = economyPrices.length ? Math.min(...economyPrices) : 0;
  const crystaPrice = parsePrice(car.crysta?.finalPrice);

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="cbp-hero">
        <div className="cbp-hero__inner">
          <p className="cbp-crumb">
            <Link href="/">Home /</Link>
            <Link href="/our-services/out-of-station"> Outstation / </Link>
            <span>
              {token ? `${toCity} → ${fromCity}` : `${fromCity} → ${toCity}`}
            </span>
          </p>

          <div className="cbp-route">
            <div className="cbp-route__city">
              <span className="cbp-route__lbl">FROM</span>
              <span className="cbp-route__name">
                {token ? toCity : fromCity}
              </span>
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
              <span className="cbp-route__name">
                {token ? fromCity : toCity}
              </span>
            </div>
          </div>

          <div className="cbp-stats">
            {[
              { icon: <FaRegClock />, val: car.duration, lbl: "Duration" },
              {
                icon: <GiPathDistance />,
                val: `${car.included} km`,
                lbl: "Included",
              },
              {
                icon: <MdAirlineSeatReclineExtra />,
                val: "Up to 7 Seats",
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
        {/* ── ALL CABS — Dzire + Ertiga + Crysta ek section mein ── */}
        {(car.dzire || car.ertiga || car.crysta) && (
          <div className="cbp-sec">
            <div className="cbp-sec__hd">
              <div>
                <span className="cbp-badge cbp-badge--e">
                  <FaCar /> Available Cabs
                </span>
                <h2 className="cbp-sec__title">
                  Cabs — {fromCity} to {toCity}
                </h2>
                <p className="cbp-sec__sub">
                  Dzire · Ertiga · Innova Crysta · All AC · On-time pickup
                </p>
              </div>
              {lowestEconomy > 0 && (
                <div className="cbp-sec__from">
                  <span className="cbp-sec__from-lbl">From</span>
                  <span className="cbp-sec__from-val cbp-sec__from-val--e">
                    ₹{lowestEconomy.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
            </div>
            <div className="cbp-cards">
              <EconomyCard
                keyName="dzire"
                imgIdx={2}
                stars="★★★★☆"
                ratingNum="4.3"
                ratingCnt="150"
                seatLabel="4"
              />
              <EconomyCard
                keyName="ertiga"
                imgIdx={0}
                stars="★★★★☆"
                ratingNum="4.5"
                ratingCnt="180"
                seatLabel="7"
              />
              <CrystaCard />
            </div>
          </div>
        )}

        {/* ── PREMIUM — Fortuner + Hycross — niche ── */}
        {car.premium?.length > 0 && (
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
                  {car.premium.length} vehicles
                </p>
              </div>
              <div className="cbp-sec__from">
                <span className="cbp-sec__from-lbl">Price</span>
                <span
                  className="cbp-sec__from-val"
                  style={{ fontSize: "16px" }}
                >
                  On Request
                </span>
              </div>
            </div>
            <div className="cbp-cards">
              {car.premium.map((variant, i) => (
                <PremiumCard key={i} variant={variant} />
              ))}
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

      {/* BOOKING MODAL */}
      {modalOpen && (
        <div className="cbp-modal-overlay" onClick={closeModal}>
          <div className="cbp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cbp-modal__hd">
              <div className="cbp-modal__hd-left">
                <h3 className="cbp-modal__title">Complete Your Booking</h3>
                {selectedCab && (
                  <div className="cbp-modal__meta">
                    <span
                      className={`cbp-modal__badge ${selectedCab.type === "Premium" ? "cbp-modal__badge--p" : "cbp-modal__badge--e"}`}
                    >
                      {selectedCab.type === "Premium"
                        ? "⭐ Premium"
                        : selectedCab.type === "Crysta"
                          ? "🚗 Crysta"
                          : "💰 Economy"}
                    </span>
                    <span className="cbp-modal__cab">
                      {selectedCab.cabName}
                    </span>
                    <span className="cbp-modal__sep">·</span>
                    <span className="cbp-modal__route">
                      {token
                        ? `${toCity} to ${fromCity}`
                        : `${fromCity} to ${toCity}`}
                    </span>
                    <span className="cbp-modal__sep">·</span>
                    <span className="cbp-modal__price">
                      {typeof selectedCab.price === "number"
                        ? `₹${selectedCab.price.toLocaleString("en-IN")}`
                        : selectedCab.price}
                    </span>
                  </div>
                )}
              </div>
              <button className="cbp-modal__close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="cbp-modal__body">
              {sent ? (
                <div className="cbp-success">
                  <div className="cbp-success__icon">✓</div>
                  <p className="cbp-success__msg">Enquiry sent! Redirecting…</p>
                </div>
              ) : (
                <form className="cbp-form" onSubmit={handleBookingSubmit}>
                  <div className="cbp-form__row">
                    <div className="cbp-form__field">
                      <label className="cbp-form__lbl">Full Name *</label>
                      <input
                        className="cbp-form__inp"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="cbp-form__field">
                      <label className="cbp-form__lbl">Email *</label>
                      <input
                        className="cbp-form__inp"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={form.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="cbp-form__row">
                    <div className="cbp-form__field">
                      <label className="cbp-form__lbl">Phone *</label>
                      <div className="cbp-form__phone">
                        <span className="cbp-form__phone-code">+91</span>
                        <input
                          className="cbp-form__inp cbp-form__inp--phone"
                          type="tel"
                          name="phone"
                          placeholder="10-digit number"
                          value={form.phone}
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="cbp-form__field">
                      <label className="cbp-form__lbl">Pickup Date *</label>
                      <input
                        className="cbp-form__inp cbp-form__inp--date"
                        type="date"
                        name="date"
                        value={form.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="cbp-form__row cbp-form__row--single">
                    <div className="cbp-form__field">
                      <label className="cbp-form__lbl">
                        No. of Travellers *
                      </label>
                      <input
                        className="cbp-form__inp"
                        type="number"
                        name="travellers"
                        placeholder="e.g. 2"
                        value={form.travellers}
                        min={1}
                        max={50}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="cbp-form__field">
                    <label className="cbp-form__lbl">
                      Specific Requirement
                    </label>
                    <textarea
                      className="cbp-form__textarea"
                      name="message"
                      placeholder="Any specific requirement or itinerary details…"
                      rows={3}
                      value={form.message}
                      onChange={handleFormChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="cbp-form__submit"
                    disabled={sending}
                  >
                    {sending ? "Sending…" : "Send Enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
