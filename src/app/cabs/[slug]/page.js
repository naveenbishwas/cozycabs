"use client";
import React, { useState, useCallback, useRef, memo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MapboxRoute from "@/app/our-services/out-of-station/MapBoxRoute";
import Header from "@/app/Components/Header/page";
import "./cabPage.css";
import { FaRegClock, FaStar } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import {
  MdAirlineSeatReclineExtra,
  MdLuggage,
  MdCall,
  MdOutlineLoop,
  MdCheckCircle,
  MdVerified,
  MdExpandMore,
  MdClose,
} from "react-icons/md";
import { FaCar, FaWindowMaximize, FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowRight, FiZap, FiChevronDown } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoShieldCheckmark } from "react-icons/io5";
import { auth } from "@/app/lib/firebase";
import { getDistance } from "@/app/lib/mapbox";
import SiteFooter from "@/app/Components/Footer/page";

/*  Helpers */
function formatDuration(minutes) {
  if (!minutes || isNaN(minutes)) return "N/A";
  const hrs = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  if (hrs === 0) return `${mins} min`;
  if (mins === 0) return `${hrs} hr`;
  return `${hrs} hr ${mins} min`;
}

/*  Inclusions/Exclusions config */
const INCLUSIONS_MAP = {
  ECONOMY: {
    included: [
      "Driver Allowance",
      "Base Fare and Fuel Charges",
      "State Tax & Toll",
      "Only One Pickup and Drop",
      "GST (5%)",
      "1-2 Bag",
      "AC",
    ],
    excluded: [
      "Beyond package km charged at ₹11/km",
      "Airport Entry / Parking",
    ],
  },
  COMFORT: {
    included: [
      "Driver Allowance",
      "State Tax & Toll",
      "Base Fare and Fuel Charges",
      "Only One Pickup and Drop",
      "GST (5%)",
      "1-2 Bags",
      "AC",
    ],
    excluded: [
      "Beyond package km charged at ₹14/km",
      "Airport Entry / Parking",
    ],
  },
  PREMIUM: {
    included: [
      "Driver Allowance",
      "Base Fare and Fuel Charges",
      "State Tax & Toll",
      "Only One Pickup and Drop",
      "GST (5%)",
      "2-3 Bags",
      "AC + Extra Legroom",
    ],
    excluded: [
      "Beyond package km charged at ₹18/km",
      "Airport Entry / Parking",
      "Hill station surcharge (if applicable)",
    ],
  },
};

/* SVG Showcase Items  */
const ShowcaseSVGs = [
  {
    id: "driver",
    label: "Driver",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="28"
          cy="18"
          r="9"
          stroke="#d80117"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M10 46c0-9.94 8.06-18 18-18s18 8.06 18 18"
          stroke="#d80117"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="28" cy="18" r="4" fill="#ffd5d9" />
      </svg>
    ),
  },
  {
    id: "ac",
    label: "Full AC",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10"
          y="16"
          width="36"
          height="22"
          rx="4"
          stroke="#d80117"
          strokeWidth="2"
          fill="none"
        />
        <rect x="14" y="20" width="28" height="14" rx="2" fill="#ffd5d9" />
        <path
          d="M18 36v4M28 36v4M38 36v4"
          stroke="#d80117"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 27h12"
          stroke="#d80117"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 30h16"
          stroke="#d80117"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "luggage",
    label: "Boot Space",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="13"
          y="20"
          width="30"
          height="22"
          rx="3"
          stroke="#d80117"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="20"
          y="14"
          width="16"
          height="8"
          rx="2"
          stroke="#d80117"
          strokeWidth="2"
          fill="none"
        />
        <rect x="14" y="21" width="28" height="8" rx="1" fill="#ffd5d9" />
        <path
          d="M28 32v4"
          stroke="#d80117"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "toll",
    label: "Toll Incl.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="28"
          cy="28"
          r="16"
          stroke="#d80117"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="28" cy="28" r="10" fill="#ffd5d9" />
        <path
          d="M24 28l3 3 5-5"
          stroke="#d80117"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 12v4M28 40v4M12 28h4M40 28h4"
          stroke="#d80117"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/*  Left Panel Showcase  */
const LeftShowcase = ({ expanded }) => (
  <div className={`cc__showcase ${expanded ? "cc__showcase--open" : ""}`}>
    <div className="cc__showcase-fade" />
    <div className="cc__showcase-grid">
      {ShowcaseSVGs.map((item) => (
        <div className="cc__showcase-tile" key={item.id}>
          <div className="cc__showcase-icon">{item.svg}</div>
          <span className="cc__showcase-label">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

/*Inclusions Accordion*/
const InclusionsAccordion = ({ badge, perKm, km, expanded, setExpanded }) => {
  const config = INCLUSIONS_MAP[badge] || INCLUSIONS_MAP.ECONOMY;
  const exclusions = config.excluded.map((ex) =>
    ex.includes("charged at") && perKm
      ? ex
          .replace(/₹\d+\/km/, `₹${perKm}/km`)
          .replace(/after \d+ km/, `after ${km} km`)
      : ex,
  );
  const toggle = () => setExpanded((v) => !v);

  return (
    <div className="cc__accordion">
      <button
        className={`cc__accordion-trigger ${expanded ? "cc__accordion-trigger--open" : ""}`}
        onClick={toggle}
        type="button"
        aria-expanded={expanded}
      >
        <span className="cc__accordion-label">
          <svg
            className={`cc__accordion-icon ${expanded ? "cc__accordion-icon--minus" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="7" cy="7" r="6.25" stroke="#d80117" strokeWidth="1.3" />
            <path
              className="cc__accordion-icon-plus"
              d="M4.5 7h5M7 4.5v5"
              stroke="#d80117"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              className="cc__accordion-icon-minus"
              d="M4.5 7h5"
              stroke="#d80117"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          View Inclusions &amp; Exclusions
        </span>
        <span
          className={`cc__accordion-chevron ${expanded ? "cc__accordion-chevron--up" : ""}`}
        >
          <FiChevronDown />
        </span>
      </button>
      <div
        className={`cc__accordion-body ${expanded ? "cc__accordion-body--open" : ""}`}
      >
        <div className="cc__inclusions">
          <p className="cc__inclusions-heading">Inclusions &amp; Exclusions</p>
          <div className="cc__inclusions-list">
            {config.included.map((item, i) => (
              <div className="cc__inc-row" key={`inc-${i}`}>
                <span className="cc__inc-icon cc__inc-icon--yes">
                  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="#16a34a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cc__inc-text">{item}</span>
              </div>
            ))}
            {exclusions.map((item, i) => (
              <div className="cc__inc-row" key={`exc-${i}`}>
                <span className="cc__inc-icon cc__inc-icon--no">
                  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
                    <path
                      d="M3 3l8 8M11 3l-8 8"
                      stroke="#d80117"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="cc__inc-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* Booking Form */
const BookingForm = memo(
  ({
    selectedCab,
    routeDataRef,
    fromCity,
    toCity,
    fromCoords,
    toCoords,
    onClose,
  }) => {
    const router = useRouter();
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

    const handleFormChange = (e) => {
      const { name, value } = e.target;
      if (name === "phone")
        setForm((s) => ({
          ...s,
          phone: value.replace(/\D/g, "").slice(0, 10),
        }));
      else if (name === "name")
        setForm((s) => ({ ...s, name: value.replace(/[^a-zA-Z\s]/g, "") }));
      else setForm((s) => ({ ...s, [name]: value }));
    };

    const handleBookingSubmit = async (e) => {
      e.preventDefault();
      const rd = routeDataRef.current;
      setSending(true);
      try {
        const payload = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          travellers: form.travellers,
          message: form.message || "",
          userId: auth.currentUser?.uid || "",
          cabName: selectedCab?.cabName || "",
          route: selectedCab?.route || "",
          price: selectedCab?.price || 0,
          type: selectedCab?.type || "",
          pickup: fromCity || "",
          drop: toCity || "",
          pickupLat: fromCoords?.[1] ?? null,
          pickupLng: fromCoords?.[0] ?? null,
          dropLat: toCoords?.[1] ?? null,
          dropLng: toCoords?.[0] ?? null,
          distanceKm: rd?.distanceKm ?? null,
          durationMin: rd?.durationMin ?? null,
          routeGeoJSON: rd?.routeGeoJSON ?? null,
        };
        const res = await fetch("/api/send-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.error || "Failed");
        setSent(true);
        setTimeout(() => {
          onClose();
          router.push("/thank-you-page");
        }, 1200);
      } catch (err) {
        console.log("Booking error:", err);
        alert("Something went wrong. Please try again.");
      } finally {
        setSending(false);
      }
    };

    if (sent)
      return (
        <div className="cbp-success">
          <div className="cbp-success__icon">✓</div>
          <p className="cbp-success__title">Enquiry Sent!</p>
          <p className="cbp-success__msg">Redirecting…</p>
        </div>
      );

    return (
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
            <label className="cbp-form__lbl">No. of Travellers *</label>
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
          <label className="cbp-form__lbl">Specific Requirement</label>
          <textarea
            className="cbp-form__textarea"
            name="message"
            placeholder="Any specific requirement or itinerary details…"
            rows={3}
            value={form.message}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit" className="cbp-form__submit" disabled={sending}>
          {sending ? "Sending…" : "Send Enquiry →"}
        </button>
      </form>
    );
  },
);
BookingForm.displayName = "BookingForm";

/*Memoized Map  */
const MemoMap = memo(({ fromCoords, toCoords, onRouteData }) => (
  <MapboxRoute
    fromCoords={fromCoords}
    toCoords={toCoords}
    onRouteData={onRouteData}
  />
));
MemoMap.displayName = "MemoMap";

/* Skeleton Card */
const CardSkeleton = () => (
  <div className="cc cc--skeleton">
    <div className="cc__left cc__left--sk" />
    <div className="cc__right">
      <div className="sk-line sk-line--title" />
      <div className="sk-line sk-line--sub" />
      <div className="sk-chips">
        <div className="sk-chip" />
        <div className="sk-chip" />
        <div className="sk-chip" />
      </div>
      <div className="sk-line sk-line--fare" />
      <div className="sk-footer">
        <div className="sk-line sk-line--price" />
        <div className="sk-btn" />
      </div>
    </div>
  </div>
);
// Main Page.................
const Page = () => {
  const searchParams = useSearchParams();
  const fromCity = searchParams.get("from") || "";
  const toCity = searchParams.get("to") || "";
  const token = searchParams.get("q");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);
  const [km, setKm] = useState(0);
  const [duration, setDuration] = useState("Calculating...");
  const [durationMin, setDurationMin] = useState(0);
  const [loading, setLoading] = useState(true);

  const fromCoords = searchParams.get("fromCoords")
    ? searchParams.get("fromCoords").split(",").map(Number)
    : null;
  const toCoords = searchParams.get("toCoords")
    ? searchParams.get("toCoords").split(",").map(Number)
    : null;

  /* Price engine */
  const dzirePerMin = 2.5,
    ertigaPerMin = 3.5,
    crystaPerMin = 5.5;
  const dzireKm = 13,
    ertigaKm = 18,
    crystaKm = 21;
  const dzirePrice = km
    ? Math.round(km * dzireKm) + Math.round(durationMin * dzirePerMin)
    : 0;
  const ertigaPrice = km
    ? Math.round(km * ertigaKm) + Math.round(durationMin * ertigaPerMin)
    : 0;
  const crystaPrice = km
    ? Math.round(km * crystaKm) + Math.round(durationMin * crystaPerMin)
    : 0;
  const extraServiceDzire = Math.round(dzirePrice * 0.01);
  const extraServiceErtiga = Math.round(ertigaPrice * 0.02);
  const extraServiceCrysta = Math.round(crystaPrice * 0.05);
  const tollRatePerKm = 0.7;
  const GST = 0.05;
  const dzireTaxes = km
    ? Math.round(km * tollRatePerKm) +
      Math.round(dzirePrice * GST) +
      (km < 50
        ? extraServiceDzire + 60
        : km < 120
          ? extraServiceDzire + 130
          : extraServiceDzire)
    : 0;

  const ertigaTaxes = km
    ? Math.round(km * tollRatePerKm) +
      Math.round(ertigaPrice * GST) +
      (km < 50
        ? extraServiceErtiga + 70
        : km < 120
          ? extraServiceErtiga + 140
          : extraServiceErtiga)
    : 0;
  const crystaTaxes = km
    ? Math.round(km * tollRatePerKm) +
      Math.round(crystaPrice * GST) +
      (km < 50
        ? extraServiceCrysta + 80
        : km < 120
          ? extraServiceCrysta + 157
          : extraServiceCrysta)
    : 0;

  /* fetch distance */
  useEffect(() => {
    async function loadDistance() {
      if (!fromCoords || !toCoords) {
        setLoading(false);
        return;
      }
      try {
        const result = await getDistance(fromCoords, toCoords);
        setKm(Number(result.distance));
        setDurationMin(Number(result.duration));
        setDuration(formatDuration(Number(result.duration)));
      } catch (err) {
        console.log("Distance error:", err);
        setDuration("N/A");
      } finally {
        setLoading(false);
      }
    }
    loadDistance();
  }, []);

  const routeDataRef = useRef(null);
  const handleRouteData = useCallback((data) => {
    routeDataRef.current = data;
  }, []);

  const openModal = (cabName, price, type, extra = {}) => {
    setSelectedCab({
      cabName,
      price,
      type,
      route: token ? `${toCity} to ${fromCity}` : `${fromCity} to ${toCity}`,
      ...extra,
    });
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCab(null);
    document.body.style.overflow = "";
  };

  if (!fromCity || !toCity)
    return (
      <>
        <Header />
        <div className="cbp-notfound">
          <span>🚫</span>
          <h2>No cabs found for this route</h2>
        </div>
      </>
    );

  const prices = [dzirePrice, ertigaPrice, crystaPrice].filter(Boolean);
  const fromPrice = prices.length ? Math.min(...prices) : 0;

  /* ── Car Card ── */
  const CarCard = ({
    label,
    price,
    taxes,
    perKm,
    seats,
    imgSrc,
    stars = 4.3,
    ratingCnt = "150+",
    badge = "ECONOMY",
    type,
    discountPct = 19,
  }) => {
    const [expanded, setExpanded] = useState(false);
    if (!price) return null;
    const origPrice = Math.round(price / (1 - discountPct / 100));

    return (
      <div className={`cc ${expanded ? "cc--expanded" : ""}`}>
        <div className="cc__left">
          <div className="cc__main-img-wrap">
            <img src={imgSrc} className="cc__img" alt={label} />
          </div>
          <div className="cc__badge">
            <FaCar />
            <span>{badge}</span>
          </div>
          <div className="cc__rating">
            <FaStar />
            {stars}
            <span className="cc__rating-cnt">({ratingCnt} rides)</span>
          </div>
          <LeftShowcase expanded={expanded} />
        </div>
        <div className="cc__right">
          <div className="cc__head">
            <h3 className="cc__name">{label}</h3>
            <span className="cc__avail-tag">Available</span>
          </div>
          <p className="cc__route">
            {fromCity} → {toCity} · {duration}
          </p>
          <div className="cc__chips">
            <span className="cc__chip">
              <MdAirlineSeatReclineExtra /> {seats} Seater
            </span>
            <span className="cc__chip">
              <FaWindowMaximize /> AC
            </span>
            <span className="cc__chip">
              <MdLuggage /> Compact Boot
            </span>
            <span className="cc__chip">
              <GiPathDistance /> MapBox Route
            </span>
          </div>
          <div className="cc__fare-box">
            <div className="cc__fare-row">
              <span className="cc__fare-row__left">
                <MdCheckCircle /> {km} kms included
              </span>
              <span className="cc__fare-row__right cc__fare-row__right--free">
                Free
              </span>
            </div>
            <div className="cc__fare-row">
              <span className="cc__fare-row__left">
                <FiZap /> Extra per km
              </span>
              <span className="cc__fare-row__right">
                ₹{perKm}/km after {km}
              </span>
            </div>
          </div>
          <InclusionsAccordion
            badge={badge}
            perKm={perKm}
            km={km}
            expanded={expanded}
            setExpanded={setExpanded}
          />
          <div className="cc__footer">
            <div className="cc__price-block">
              <div className="cc__price-row">
                <span className="cc__price">₹{price.toLocaleString()}</span>
                <span className="cc__price-original">
                  ₹{origPrice.toLocaleString()}
                </span>
                <span className="cc__discount-tag">{discountPct}% OFF</span>
              </div>
              <p className="cc__price-note">
                {taxes
                  ? `+ ₹${taxes} Taxes & Charges`
                  : "+ Toll extra · GST incl."}
              </p>
            </div>
            <button
              className="cc__btn"
              onClick={() =>
                openModal(label, price, type || badge, {
                  imgSrc,
                  badge,
                  seats,
                  stars,
                  ratingCnt,
                  discountPct,
                  origPrice,
                  taxes,
                })
              }
            >
              Book Now <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ── derive individual tax components for modal ── */
  const getTaxBreakdown = (price, taxesTotal) => {
    if (!price || !taxesTotal) return null;
    const toll = Math.round(km * tollRatePerKm);
    const gst = Math.round(price * GST);
    const svc = Math.round(price * 0.01);
    return { toll, gst, svc };
  };

  /* ════════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════════ */
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="cbp-hero">
        <div className="cbp-hero__inner">
          <p className="cbp-breadcrumb">
            Home / Outstation /{" "}
            <span>
              {token ? `${toCity} → ${fromCity}` : `${fromCity} → ${toCity}`}
            </span>
          </p>
          <div className="cbp-route-header">
            <span className="cbp-city">{token ? toCity : fromCity}</span>
            <div className="cbp-arrow-wrap">
              <span className="cbp-arrow-line">
                <svg viewBox="0 0 48 14" fill="none" width="44" height="13">
                  <path
                    d="M0 7h44M36 2l8 5-8 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="cbp-arrow-label">ONE WAY</span>
            </div>
            <span className="cbp-city cbp-city--dest">
              {token ? fromCity : toCity}
            </span>
          </div>
          <div className="cbp-meta-row">
            <div className="cbp-meta-pill">
              <div className="cbp-meta-pill__icon">
                <FaRegClock size={17} />
              </div>
              <div className="cbp-meta-pill__text">
                <strong>{duration}</strong>
                <span>Duration</span>
              </div>
            </div>
            <div className="cbp-meta-pill">
              <div className="cbp-meta-pill__icon">
                <GiPathDistance size={17} />
              </div>
              <div className="cbp-meta-pill__text">
                <strong>{loading ? "—" : `${km} km`}</strong>
                <span>Included</span>
              </div>
            </div>
            <div className="cbp-meta-pill">
              <div className="cbp-meta-pill__icon">
                <MdAirlineSeatReclineExtra size={17} />
              </div>
              <div className="cbp-meta-pill__text">
                <strong>Up to 7 Seats</strong>
                <span>Capacity</span>
              </div>
            </div>
            <div className="cbp-meta-pill">
              <div className="cbp-meta-pill__icon">
                <FaWindowMaximize size={17} />
              </div>
              <div className="cbp-meta-pill__text">
                <strong>Full AC</strong>
                <span>All Cabs</span>
              </div>
            </div>
          </div>
          <div className="cbp-trust-row">
            <span className="cbp-trust-badge">
              <MdCheckCircle /> Free Cancellation
            </span>
            <span className="cbp-trust-badge">
              <MdCheckCircle /> No Hidden Charges
            </span>
            <span className="cbp-trust-badge">
              <MdCheckCircle /> GST Included
            </span>
            <span className="cbp-trust-badge">
              <MdCheckCircle /> 24/7 Support
            </span>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="cbp-main">
        <div className="cbp-cards-col">
          <div className="cbp-section-header">
            <div className="cbp-section-header__left">
              <span className="cbp-available-tag">
                <FaCar /> AVAILABLE CABS
              </span>
              <h2 className="cbp-section-title">
                Cabs —{" "}
                {token
                  ? `${toCity} to ${fromCity}`
                  : `${fromCity} to ${toCity}`}
              </h2>
              <p className="cbp-section-sub">
                Dzire · Ertiga · Innova Crysta · All AC · On-time pickup
              </p>
            </div>
            {!loading && fromPrice > 0 && (
              <div className="cbp-section-header__right">
                <span>From</span>
                <div className="cbp-from-price">
                  ₹{fromPrice.toLocaleString()}
                </div>
              </div>
            )}
          </div>

          {loading ? (
            <div className="cbp-loading-wrap">
              <div className="cbp-finding-route">
                <div className="cbp-finding-route__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="cbp-finding-route__text">
                  Finding best route &amp; calculating fares…
                </p>
              </div>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : (
            <>
              <CarCard
                label="Swift Dzire"
                price={dzirePrice}
                taxes={dzireTaxes}
                perKm={dzireKm + 4}
                seats={4}
                imgSrc="/maruti.png"
                badge="ECONOMY"
                stars={4.3}
                ratingCnt="150+"
                type="Economy"
                discountPct={19}
              />
              <CarCard
                label="Toyota Ertiga"
                price={ertigaPrice}
                taxes={ertigaTaxes}
                perKm={ertigaKm + 4}
                seats={7}
                imgSrc="/Ertiga1.png"
                badge="COMFORT"
                stars={4.5}
                ratingCnt="200+"
                type="Comfort"
                discountPct={15}
              />
              <CarCard
                label="Toyota Innova Crysta"
                price={crystaPrice}
                taxes={crystaTaxes}
                perKm={crystaKm + 5}
                seats={7}
                imgSrc="/crysta-1.png"
                badge="PREMIUM"
                stars={4.7}
                ratingCnt="300+"
                type="Premium"
                discountPct={12}
              />
              <CarCard
                label="Toyota Fortuner"
                price={crystaPrice}
                taxes={crystaTaxes}
                perKm={crystaKm}
                seats={7}
                imgSrc="/premium-toyota-fortuner.png"
                badge="PREMIUM"
                stars={4.7}
                ratingCnt="320+"
                type="Premium"
                discountPct={12}
              />
              <CarCard
                label="Toyota Innova Hycross"
                price={crystaPrice}
                taxes={crystaTaxes}
                perKm={crystaKm}
                seats={7}
                imgSrc="/premium-toyota-innova-hycros.png"
                badge="PREMIUM"
                stars={4.7}
                ratingCnt="270+"
                type="Premium"
                discountPct={12}
              />
            </>
          )}
        </div>

        {/* Sticky map */}
        <div className="cbp-map-col">
          <div className="cbp-map-card">
            <MemoMap
              fromCoords={fromCoords}
              toCoords={toCoords}
              onRouteData={handleRouteData}
            />
            <div className="cbp-map-info">
              <div className="cbp-map-route-label">
                <FaMapMarkerAlt />
                {token ? `${toCity} → ${fromCity}` : `${fromCity} → ${toCity}`}
              </div>
              <div className="cbp-map-stats">
                <div className="cbp-map-stat">
                  <div className="cbp-map-stat__val">
                    {loading ? "—" : `${km} km`}
                  </div>
                  <div className="cbp-map-stat__lbl">Distance</div>
                </div>
                <div className="cbp-map-stat">
                  <div className="cbp-map-stat__val">{duration}</div>
                  <div className="cbp-map-stat__lbl">Duration</div>
                </div>
                <div className="cbp-map-stat">
                  <div className="cbp-map-stat__val">NH-44</div>
                  <div className="cbp-map-stat__lbl">Via</div>
                </div>
              </div>
              <div className="cbp-map-highlights">
                <div className="cbp-map-highlight">
                  <IoShieldCheckmark /> Verified drivers
                </div>
                <div className="cbp-map-highlight">
                  <MdOutlineLoop /> Free cancellation
                </div>
                <div className="cbp-map-highlight">
                  <CiCreditCard1 /> Pay online or cash
                </div>
                <div className="cbp-map-highlight">
                  <MdCall /> 24/7 support
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Why CozyCabz */}
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

      {/* ══════════════════════════════════════════════════
          MODAL — only this section is new
      ══════════════════════════════════════════════════ */}
      {modalOpen &&
        selectedCab &&
        (() => {
          const p =
            typeof selectedCab.price === "number" ? selectedCab.price : 0;
          const orig =
            typeof selectedCab.origPrice === "number"
              ? selectedCab.origPrice
              : 0;
          const taxes = selectedCab.taxes || 0;
          const tb = getTaxBreakdown(p, taxes);
          const saved = orig > 0 ? orig - p : 0;
          const total = p + taxes;

          return (
            <div className="cbp-modal-overlay" onClick={closeModal}>
              <div className="cbp-modal" onClick={(e) => e.stopPropagation()}>
                {/* ── Top bar ── */}
                <div className="cbp-modal__topbar">
                  <h3 className="cbp-modal__topbar-title">
                    Complete Your Booking
                  </h3>
                  <button className="cbp-modal__close" onClick={closeModal}>
                    ✕
                  </button>
                </div>

                {/* ── Two-col body ── */}
                <div className="cbp-modal__cols">
                  {/* LEFT */}
                  <div className="cbp-modal__left-col">
                    {/* Car strip */}
                    <div className="cbp-modal__car-strip">
                      <img
                        src={selectedCab.imgSrc}
                        alt={selectedCab.cabName}
                        className="cbp-modal__car-img"
                      />
                      <div className="cbp-modal__car-info">
                        <div className="cbp-modal__car-name">
                          {selectedCab.cabName}
                        </div>
                        <div className="cbp-modal__car-meta">
                          <span>{selectedCab.seats} Seater</span>
                          <span className="cbp-modal__sep">·</span>
                          <span className="cbp-model__ratingss">
                            <FaStar
                              style={{
                                color: "#f5a623",
                                fontSize: 11,
                                verticalAlign: "middle",
                              }}
                            />{" "}
                            {selectedCab.stars} ({selectedCab.ratingCnt} rides)
                          </span>
                        </div>
                        <div className="cbp-modal__car-route">
                          <span>Route:&nbsp;</span>
                          <strong>{selectedCab.route}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Payment details */}
                    <div className="cbp-modal__payment">
                      <p className="cbp-modal__payment-heading">
                        Payment Details
                      </p>

                      {/* Base fare */}
                      <div className="cbp-modal__pay-row">
                        <span className="cbp-modal__pay-label">Base Fare</span>
                        <span className="cbp-modal__pay-val">
                          ₹{p.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* Tax breakdown — only if tb exists */}
                      {tb && (
                        <>
                          <div className="cbp-modal__pay-row cbp-modal__pay-row--indent">
                            <span className="cbp-modal__pay-label cbp-modal__pay-label--sub">
                              ↳ Toll Charges ({km} km × ₹{tollRatePerKm})
                            </span>
                            <span className="cbp-modal__pay-val cbp-modal__pay-val--sub">
                              ₹{tb.toll.toLocaleString("en-IN")}
                            </span>
                          </div>
                          <div className="cbp-modal__pay-row cbp-modal__pay-row--indent">
                            <span className="cbp-modal__pay-label cbp-modal__pay-label--sub">
                              ↳ GST (5%)
                            </span>
                            <span className="cbp-modal__pay-val cbp-modal__pay-val--sub">
                              ₹{tb.gst.toLocaleString("en-IN")}
                            </span>
                          </div>
                          <div className="cbp-modal__pay-row cbp-modal__pay-row--indent">
                            <span className="cbp-modal__pay-label cbp-modal__pay-label--sub">
                              ↳ Service Fee (1%)
                            </span>
                            <span className="cbp-modal__pay-val cbp-modal__pay-val--sub">
                              ₹{tb.svc.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </>
                      )}

                      {/* Taxes subtotal */}
                      {taxes > 0 && (
                        <div className="cbp-modal__pay-row cbp-modal__pay-row--subtotal">
                          <span className="cbp-modal__pay-label">
                            Taxes &amp; Charges
                          </span>
                          <span className="cbp-modal__pay-val">
                            ₹{taxes.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}

                      {/* Discount */}
                      {saved > 0 && (
                        <div className="cbp-modal__pay-row">
                          <span className="cbp-modal__pay-label">
                            Discount ({selectedCab.discountPct}% OFF)
                          </span>
                          <span className="cbp-modal__pay-val cbp-modal__pay-val--green">
                            − ₹{saved.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}

                      <div className="cbp-modal__pay-divider" />

                      {/* Total */}
                      <div className="cbp-modal__pay-row cbp-modal__pay-row--total">
                        <span className="cbp-modal__pay-label">
                          Total Payable
                        </span>
                        <span className="cbp-modal__pay-val cbp-modal__pay-val--total">
                          ₹{total.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {saved > 0 && (
                        <p className="cbp-modal__pay-saving">
                          🎉 You save ₹{saved.toLocaleString("en-IN")} on this
                          booking
                        </p>
                      )}
                    </div>
                  </div>

                  {/* RIGHT — form */}
                  <div className="cbp-modal__right-col">
                    <p className="cbp-modal__form-heading">Traveller Details</p>
                    <BookingForm
                      selectedCab={selectedCab}
                      routeDataRef={routeDataRef}
                      fromCity={fromCity}
                      toCity={toCity}
                      fromCoords={fromCoords}
                      toCoords={toCoords}
                      onClose={closeModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
};

export default Page;
