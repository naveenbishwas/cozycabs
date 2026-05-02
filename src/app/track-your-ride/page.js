"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Components/Header/page";
import SiteFooter from "@/app/Components/Footer/page";
import "./trackRide.css";
import emptyAnimation from "../data/Cat.json";
import { auth, db } from "../lib/firebase";
import {
  where,
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  MdCheckCircle,
  MdArrowForward,
  MdOutlineCancel,
  MdEditCalendar,
  MdLocationOn,
  MdFlag,
  MdSpeed,
  MdAccessTime,
  MdDirectionsCar,
} from "react-icons/md";
import {
  FiNavigation,
  FiAlertCircle,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
} from "react-icons/fi";
import { FaCar, FaRegClock, FaStar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

/* Status config */
const STATUS_MAP = {
  pending: {
    label: "Pending Confirmation",
    color: "#b36200",
    bg: "#fff8ec",
    border: "#f5d08a",
  },
  confirmed: {
    label: "Confirmed",
    color: "#1a6e2e",
    bg: "#eafaf0",
    border: "#86d9a0",
  },
  // en_route: {
  //   label: "Driver En Route",
  //   color: "#d80117",
  //   bg: "#fff0f1",
  //   border: "#ffc4c8",
  // },
  arrived: {
    label: "Driver Arrived",
    color: "#1a6e2e",
    bg: "#eafaf0",
    border: "#86d9a0",
  },
  completed: {
    label: "Completed",
    color: "#555",
    bg: "#f4f4f4",
    border: "#ddd",
  },
  cancelled: {
    label: "Cancelled",
    color: "#999",
    bg: "#f9f9f9",
    border: "#e0e0e0",
  },
};

/*Format date */
const fmtDate = (val) => {
  if (!val) return "—";
  try {
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return val;
  }
};

/* Booking Card */
const BookingCard = ({ b, onCancel, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [editing, setEdit] = useState(false);
  const [newDate, setNewDate] = useState(b.date || "");
  const [saving, setSaving] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);

  const st = STATUS_MAP[b.status] ?? STATUS_MAP.pending;
  const canModify = !["completed", "cancelled"].includes(b.status);

  const handleUpdate = async () => {
    if (!newDate) return;
    setSaving(true);
    await onUpdate(b.id, { date: newDate });
    setSaving(false);
    setEdit(false);
  };

  const handleCancel = async () => {
    setCancelling(true);
    await onCancel(b.id);
    setCancelling(false);
    setConfirmCancel(false);
  };

  return (
    <div className={`bk-card ${open ? "bk-card--open" : ""}`}>
      {/* Card header (always visible) */}
      <div className="bk-card__top" onClick={() => setOpen(!open)}>
        <div className="bk-card__top-left">
          <div className="bk-card__route">
            <span className="bk-city">{b.pickup || "—"}</span>
            <span className="bk-arrow">
              <MdArrowForward />
            </span>
            <span className="bk-city bk-city--dest">{b.drop || "—"}</span>
          </div>
          <div className="bk-card__meta">
            <span>
              <FaRegClock /> {b.date || "—"}
            </span>
            {b.distanceKm && (
              <span>
                <GiPathDistance /> {b.distanceKm} km
              </span>
            )}
            {b.carType && (
              <span>
                <MdDirectionsCar /> {b.carType}
              </span>
            )}
          </div>
        </div>

        <div className="bk-card__top-right">
          <div
            className="bk-status-pill"
            style={{
              color: st.color,
              background: st.bg,
              border: `1px solid ${st.border}`,
            }}
          >
            {st.label}
          </div>
          {b.price && (
            <div className="bk-price">
              ₹{Number(b.price).toLocaleString("en-IN")}
            </div>
          )}
          <button className="bk-toggle" aria-label="toggle">
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      </div>

      {/*Expanded details */}
      {open && (
        <div className="bk-card__body">
          <div className="bk-detail-grid">
            {/* Route */}
            <div className="bk-detail-block bk-detail-block--full">
              <p className="bk-detail-label">Route</p>
              <div className="bk-route-visual">
                <div className="bk-route-dot bk-route-dot--from">
                  <MdLocationOn />
                </div>
                <span className="pickupp">{b.pickup}</span>
                <div className="bk-route-line" />
                <div className="bk-route-dot bk-route-dot--to">
                  <MdFlag />
                </div>
                <div className="bk-route-cities">
                  <span>{b.drop}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            {b.distanceKm && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">
                  <GiPathDistance /> Distance
                </p>
                <p className="bk-detail-val">{b.distanceKm} km</p>
              </div>
            )}
            {b.durationMin && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">
                  <MdAccessTime /> Duration
                </p>
                <p className="bk-detail-val">{b.durationMin} min</p>
              </div>
            )}
            {b.carType && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">
                  <FaCar /> Vehicle
                </p>
                <p className="bk-detail-val">{b.carType}</p>
              </div>
            )}
            {b.travellers && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">Travellers</p>
                <p className="bk-detail-val">{b.travellers}</p>
              </div>
            )}
            {b.date && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">
                  <FaRegClock /> Pickup Date
                </p>
                <p className="bk-detail-val">{b.date}</p>
              </div>
            )}
            {b.price && (
              <div className="bk-detail-block">
                <p className="bk-detail-label">Fare</p>
                <p className="bk-detail-val bk-detail-val--red">
                  ₹{Number(b.price).toLocaleString("en-IN")}
                </p>
              </div>
            )}
            {b.message && (
              <div className="bk-detail-block bk-detail-block--full">
                <p className="bk-detail-label">Note</p>
                <p className="bk-detail-val bk-detail-val--muted">
                  {b.message}
                </p>
              </div>
            )}
            <div className="bk-detail-block">
              <p className="bk-detail-label">Booking ID</p>
              <p className="bk-detail-val bk-detail-val--mono">
                {b.id?.slice(0, 12).toUpperCase()}
              </p>
            </div>
            <div className="bk-detail-block">
              <p className="bk-detail-label">Booked On</p>
              <p className="bk-detail-val">{fmtDate(b.createdAt)}</p>
            </div>
          </div>

          {/*Update date form */}
          {editing && canModify && (
            <div className="bk-edit-form">
              <p className="bk-edit-form__title">
                <MdEditCalendar /> Change Pickup Date
              </p>
              <div className="bk-edit-form__row">
                <input
                  type="date"
                  className="bk-edit-form__input"
                  value={newDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <button
                  className="bk-btn bk-btn--primary"
                  onClick={handleUpdate}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save Date"}
                </button>
                <button
                  className="bk-btn bk-btn--ghost"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Cancel confirm */}
          {confirmCancel && (
            <div className="bk-cancel-confirm">
              <FiAlertCircle />
              <p>Are you sure you want to cancel this ride?</p>
              <div className="bk-cancel-confirm__btns">
                <button
                  className="bk-btn bk-btn--danger"
                  onClick={handleCancel}
                  disabled={cancelling}
                >
                  {cancelling ? "Cancelling…" : "Yes, Cancel Ride"}
                </button>
                <button
                  className="bk-btn bk-btn--ghost"
                  onClick={() => setConfirmCancel(false)}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          {/* Action buttons */}
          {canModify && !editing && !confirmCancel && (
            <div className="bk-actions">
              <button
                className="bk-btn bk-btn--outline"
                onClick={() => setEdit(true)}
              >
                <MdEditCalendar /> Change Date
              </button>
              <button
                className="bk-btn bk-btn--danger-outline"
                onClick={() => setConfirmCancel(true)}
              >
                <MdOutlineCancel /> Cancel Ride
              </button>
              <a className="bk-btn bk-btn--call" href="tel:+919899132460">
                <FiPhone /> Call Support
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* PAGE */
const TrackRidePage = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      if (!u) {
        router.replace("/account");
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", user.uid),
        );
        const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        data.sort((a, b) => {
          const ta = a.createdAt?.toDate?.() ?? new Date(a.createdAt ?? 0);
          const tb = b.createdAt?.toDate?.() ?? new Date(b.createdAt ?? 0);
          return tb - ta;
        });
        setBookings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]);

  const handleCancel = async (id) => {
    await updateDoc(doc(db, "bookings", id), { status: "cancelled" });
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b)),
    );
  };

  const handleUpdate = async (id, updates) => {
    await updateDoc(doc(db, "bookings", id), updates);
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updates } : b)),
    );
  };

  const FILTERS = ["all", "pending", "confirmed", "completed", "cancelled"];

  const filtered =
    filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const counts = bookings.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Header />

      <div className="trp-page">
        {/* Hero */}
        <section className="trp-hero">
          <video
            className="video"
            autoPlay
            // loop
            muted
            src="/track-car.mp4"
          ></video>
          <div className="trp-hero__overlay"></div>
          <div className="trp-hero__inner">
            <div className="trp-hero__eyebrow">
              <FiNavigation /> My Bookings
            </div>
            <h1 className="trp-hero__title">
              Track Your <span>Rides</span>
            </h1>
            <p className="trp-hero__sub">
              View all your bookings, change dates, or cancel rides - all in one
              place.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        {bookings.length > 0 && (
          <div className="trp-stats-bar">
            <div className="trp-stats-bar__inner">
              <div className="trp-stat-pill">
                <span className="trp-stat-pill__num">{bookings.length}</span>
                <span className="trp-stat-pill__lbl">Total</span>
              </div>
              {counts.pending && (
                <div className="trp-stat-pill trp-stat-pill--orange">
                  <span className="trp-stat-pill__num">{counts.pending}</span>
                  <span className="trp-stat-pill__lbl">Pending</span>
                </div>
              )}
              {counts.confirmed && (
                <div className="trp-stat-pill trp-stat-pill--green">
                  <span className="trp-stat-pill__num">{counts.confirmed}</span>
                  <span className="trp-stat-pill__lbl">Confirmed</span>
                </div>
              )}
              {counts.completed && (
                <div className="trp-stat-pill trp-stat-pill--grey">
                  <span className="trp-stat-pill__num">{counts.completed}</span>
                  <span className="trp-stat-pill__lbl">Completed</span>
                </div>
              )}
              {counts.cancelled && (
                <div className="trp-stat-pill trp-stat-pill--red">
                  <span className="trp-stat-pill__num">{counts.cancelled}</span>
                  <span className="trp-stat-pill__lbl">Cancelled</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/*Main */}
        <div className="trp-main-wrap">
          {/* Filter tabs */}
          {bookings.length > 0 && (
            <div className="trp-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`trp-filter-btn ${filter === f ? "trp-filter-btn--active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All" : (STATUS_MAP[f]?.label ?? f)}
                  {f !== "all" && counts[f] ? (
                    <span className="trp-filter-count">{counts[f]}</span>
                  ) : null}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {!user ? (
            <div className="trp-empty">
              <div className="trp-empty__icon">
                <Lottie
                  animationData={emptyAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <h2 className="trp-empty__title">Login Required</h2>
              <p className="trp-empty__sub">
                Please log in to view your bookings.
              </p>
              <a
                href="/account"
                className="bk-btn bk-btn--primary"
                style={{ display: "inline-flex", marginTop: 20 }}
              >
                Login / Sign Up
              </a>
            </div>
          ) : loading ? (
            <div className="trp-loading">
              <div className="trp-loading__spinner" />
              <p>Loading your bookings…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="trp-empty">
              <div className="trp-empty__icon">
                <Lottie
                  animationData={emptyAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <h2 className="trp-empty__title">
                {filter === "all"
                  ? "No Bookings Yet"
                  : `No ${STATUS_MAP[filter]?.label} Bookings`}
              </h2>
              <p className="trp-empty__sub">
                {filter === "all"
                  ? "You haven't booked any rides yet. Start your journey with CozyCabz!"
                  : "No bookings in this category."}
              </p>
              {filter === "all" && (
                <a
                  href="/our-services/out-of-station"
                  className="bk-btn bk-btn--primary"
                  style={{ display: "inline-flex", marginTop: 20 }}
                >
                  Book a Ride <MdArrowForward />
                </a>
              )}
            </div>
          ) : (
            <div className="trp-booking-list">
              {filtered.map((b) => (
                <BookingCard
                  key={b.id}
                  b={b}
                  onCancel={handleCancel}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <SiteFooter />
    </>
  );
};

export default TrackRidePage;
