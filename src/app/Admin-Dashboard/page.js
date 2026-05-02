"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./AdminPage.module.css";
import { db } from "../lib/firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { IoBookOutline } from "react-icons/io5";
import { FaBan, FaCar, FaRegCalendarAlt } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdOutlineIncompleteCircle, MdStarBorder } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";
import BookingChart from "../lib/BookingChart";
import { GiPathDistance } from "react-icons/gi";

const LOCK_CONFIG = [
  { level: 1, duration: 30 },
  { level: 2, duration: 5 * 60 },
  { level: 3, duration: 24 * 60 * 60 },
];
const MAX_ATTEMPTS = 2;
const LS_KEY = "cc_admin_lock";

function loadState() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? null;
  } catch {
    return null;
  }
}
function saveState(s) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(s));
}
function clearState() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LS_KEY);
}
function getInitialLockState() {
  const saved = loadState();
  if (!saved) return { attempts: 0, level: 1, lockUntil: null };
  if (saved.lockUntil && Date.now() > saved.lockUntil) {
    const nextLevel =
      saved.level >= LOCK_CONFIG.length ? null : saved.level + 1;
    if (!nextLevel) {
      clearState();
      return { attempts: 0, level: 1, lockUntil: null };
    }
    const ns = { attempts: 0, level: nextLevel, lockUntil: null };
    saveState(ns);
    return ns;
  }
  return saved;
}

function getRemainingTime(lockUntil) {
  if (!lockUntil) return null;
  const diff = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
  if (diff === 0) return null;
  if (diff >= 3600) {
    const h = Math.floor(diff / 3600),
      m = Math.floor((diff % 3600) / 60),
      s = diff % 60;
    return `${h}h ${m}m ${s}s`;
  }
  if (diff >= 60) {
    const m = Math.floor(diff / 60),
      s = diff % 60;
    return `${m}m ${s}s`;
  }
  return `${diff}s`;
}
function getLockLabel(level) {
  const cfg = LOCK_CONFIG.find((c) => c.level === level);
  if (!cfg) return "";
  if (cfg.duration >= 3600) return `${cfg.duration / 3600}h`;
  if (cfg.duration >= 60) return `${cfg.duration / 60}m`;
  return `${cfg.duration}s`;
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tick, setTick] = useState(0);
  const [lockState, setLockState] = useState(() => getInitialLockState());
  const inputRef = useRef(null);

  const isLocked = !!(lockState.lockUntil && Date.now() < lockState.lockUntil);

  // countdown
  useEffect(() => {
    if (!isLocked) return;
    const t = setInterval(() => {
      setTick((n) => n + 1);
      if (Date.now() > lockState.lockUntil) {
        const nextLevel =
          lockState.level >= LOCK_CONFIG.length ? null : lockState.level + 1;
        if (!nextLevel) {
          clearState();
          setLockState({ attempts: 0, level: 1, lockUntil: null });
        } else {
          const ns = { attempts: 0, level: nextLevel, lockUntil: null };
          saveState(ns);
          setLockState(ns);
        }
        setError("");
      }
    }, 1000);
    return () => clearInterval(t);
  }, [isLocked, lockState.lockUntil, lockState.level]);

  useEffect(() => {}, [isAuthenticated]);

  function triggerShake() {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  }

  function handleLock(currentState) {
    const cfg = LOCK_CONFIG.find((c) => c.level === currentState.level);
    const lockUntil = Date.now() + (cfg ? cfg.duration * 1000 : 30000);
    const ns = { ...currentState, lockUntil };
    saveState(ns);
    setLockState(ns);
    setError(
      `Locked for ${getLockLabel(currentState.level)}. Too many failed attempts.`,
    );
  }

  let ADMIN_SECRET = "cozycabs";
  async function handleLogin(e) {
    e.preventDefault();
    if (isLocked || loading) return;

    setLoading(true);
    setError("");

    try {
      if (password === ADMIN_SECRET) {
        await signInWithEmailAndPassword(
          auth,
          "reports.unnity@gmail.com",
          "unnity70",
        );
        clearState();
        setIsAuthenticated(true);
        return;
      }

      triggerShake();
      setPassword("");
      inputRef.current?.focus();

      const newAttempts = lockState.attempts + 1;

      if (newAttempts >= MAX_ATTEMPTS) {
        handleLock({ ...lockState, attempts: newAttempts });
      } else {
        const rem = MAX_ATTEMPTS - newAttempts;
        const ns = { ...lockState, attempts: newAttempts };
        saveState(ns);
        setLockState(ns);
        setError(
          `Incorrect password. ${rem} attempt${rem !== 1 ? "s" : ""} remaining.`,
        );
      }
    } catch (err) {
      console.error(err);
      setError("Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    clearState();
    setIsAuthenticated(false);
    setPassword("");
    setError("");
    setLockState({ attempts: 0, level: 1, lockUntil: null });
  }

  if (isAuthenticated) return <Dashboard onLogout={handleLogout} />;

  const rem = getRemainingTime(lockState.lockUntil);

  return (
    <div className={styles.splitRoot}>
      <div className={styles.leftPanel}>
        <div className={styles.deco1} />
        <div className={styles.deco2} />

        <div className={styles.leftInner}>
          <div className={styles.leftLogo}>
            <div className={styles.leftLogoMark}>
              <img src="/Cozy-cabz-logo.png" />
            </div>
          </div>

          <div className={styles.leftTag}>ADMIN PORTAL</div>

          <h1 className={styles.leftHeading}>
            Your fleet,
            <br />
            <span>fully controlled.</span>
          </h1>

          <ul className={styles.featureList}>
            {[
              "Manage all bookings in real-time",
              "Monitor driver activity & location",
              "Access revenue & analytics reports",
              "Handle customer support tickets",
              "Configure pricing & service zones",
            ].map((f) => (
              <li key={f} className={styles.featureItem}>
                <span className={styles.featureCheck}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#D80117"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className={styles.rightPanel}>
        <div className={`${styles.formCard} ${shaking ? styles.shake : ""}`}>
          <div className={styles.formHeadBlock}>
            <h2 className={styles.formHeading}>Admin Access</h2>
            <p className={styles.formSub}>
              {isLocked
                ? "Account temporarily locked due to failed attempts"
                : "Authorised personnel only. Enter your credentials."}
            </p>
          </div>

          <div className={styles.dividerRow}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>Secure login</span>
            <span className={styles.dividerLine} />
          </div>

          {isLocked ? (
            <LockScreen remaining={rem} level={lockState.level} />
          ) : (
            <>
              <AttemptIndicator
                attempts={lockState.attempts}
                max={MAX_ATTEMPTS}
                level={lockState.level}
              />

              <form className={styles.form} onSubmit={handleLogin} noValidate>
                <div
                  className={`${styles.fieldWrap} ${error ? styles.fieldError : ""}`}
                >
                  <label className={styles.label} htmlFor="admin-pass">
                    Admin Password
                  </label>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>
                      <LockIcon />
                    </span>
                    <input
                      ref={inputRef}
                      id="admin-pass"
                      className={styles.input}
                      type={showPass ? "text" : "password"}
                      placeholder="Enter admin password"
                      value={password}
                      autoComplete="current-password"
                      autoFocus
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                    />
                    <button
                      type="button"
                      className={styles.eyeBtn}
                      onClick={() => setShowPass((v) => !v)}
                      aria-label={showPass ? "Hide" : "Show"}
                      tabIndex={-1}
                    >
                      {showPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {error && (
                    <p className={styles.errorMsg}>
                      <AlertIcon /> {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!password.trim() || loading}
                >
                  {loading ? <Spinner /> : "Verify & Enter Dashboard"}
                </button>
              </form>

              <p className={styles.footNote}>
                CozyCabz Internal · Secured Admin Portal
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────
function AttemptIndicator({ attempts, max, level }) {
  return (
    <div className={styles.attemptRow}>
      <div className={styles.pipRow}>
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`${styles.pip} ${i < attempts ? styles.pipUsed : styles.pipFree}`}
          />
        ))}
      </div>
      <span className={styles.attemptLabel}>
        Level {level} · {max - attempts} attempt
        {max - attempts !== 1 ? "s" : ""} left
      </span>
    </div>
  );
}

function BookingPanel({ bookings }) {
  if (!bookings || bookings.length === 0) {
    return (
      <div className={styles.panel}>
        <div className={styles.panelHead}>Recent Bookings</div>
        <div className={styles.emptyState}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="#555"
              strokeWidth="1.5"
            />
            <path
              d="M16 2v4M8 2v4M3 10h18"
              stroke="#555"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p>No recent bookings yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        Recent Bookings
        <span className={styles.panelBadge}>{bookings.length}</span>
      </div>
      <div className={styles.bookingList}>
        {bookings.map((booking, idx) => (
          <BookingCard key={booking.id || idx} booking={booking} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function BookingCard({ booking, idx }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(booking.status || "pending");
  const contentRef = useRef(null);

  const statusMap = {
    pending: { label: "Pending", cls: styles.bStatusPending },
    active: { label: "Active", cls: styles.bStatusActive },
    accepted: { label: "Accepted", cls: styles.bStatusActive },
    completed: { label: "Completed", cls: styles.bStatusDone },
    done: { label: "Done", cls: styles.bStatusDone },
    cancelled: { label: "Cancelled", cls: styles.bStatusCancelled },
  };
  const badge = statusMap[status] ?? statusMap.pending;

  const displayPrice = booking.price
    ? `₹${Number(booking.price).toLocaleString("en-IN")}`
    : "N/A";

  const displayDate = booking.createdAt?.toDate
    ? booking.createdAt.toDate().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : booking.date || "—";

  async function handleStatus(next) {
    try {
      setStatus(next);
      const bookingRef = doc(db, "bookings", booking.id);
      await updateDoc(bookingRef, {
        status: next,
        updatedAt: new Date(),
      });
      console.log("Status updated:", next);
    } catch (error) {
      console.error("Error updating status:", error);
      setStatus(booking.status || "pending");
    }
  }

  return (
    <div
      className={`${styles.bCard} ${open ? styles.bCardOpen : ""}`}
      style={{ animationDelay: `${idx * 40}ms` }}
    >
      <div
        className={styles.bCardHeader}
        onClick={() => setOpen((v) => !v)}
        role="button"
        aria-expanded={open}
      >
        <div className={styles.bHeaderLeft}>
          <span className={styles.bDate}>{displayDate}</span>
          <span className={styles.bEmail}>
            {booking.email || booking.userEmail || "—"}
          </span>
        </div>

        <div className={styles.bHeaderRight}>
          <span className={styles.bPrice}>{displayPrice}</span>
          <span className={`${styles.bBadge} ${badge.cls}`}>{badge.label}</span>
          <span
            className={`${styles.bChevron} ${open ? styles.bChevronOpen : ""}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div
        ref={contentRef}
        className={styles.bCardBody}
        style={{
          maxHeight: open
            ? (contentRef.current?.scrollHeight ?? 400) + "px"
            : "0px",
        }}
      >
        <div className={styles.bBodyInner}>
          <div className={styles.bDetails}>
            <div className={styles.bDetailItem}>
              <span className={styles.bDetailLabel}>Car</span>
              <span className={styles.bDetailValue}>
                {booking.carType || booking.car || "—"}
              </span>
            </div>
            <div className={styles.bDetailItem}>
              <span className={styles.bDetailLabel}>Route</span>
              <span className={styles.bDetailValue}>
                {booking.destination || booking.route || "—"}
              </span>
            </div>
            {booking.phone && (
              <div className={styles.bDetailItem}>
                <span className={styles.bDetailLabel}>Phone</span>
                <span className={styles.bDetailValue}>{booking.phone}</span>
              </div>
            )}
            {booking.name && (
              <div className={styles.bDetailItem}>
                <span className={styles.bDetailLabel}>Name</span>
                <span className={styles.bDetailValue}>{booking.name}</span>
              </div>
            )}
          </div>

          <div className={styles.bDivider} />

          <div className={styles.bActions}>
            <span className={styles.bActionsLabel}>Mark Status</span>
            <div className={styles.bBtnRow}>
              <button
                className={`${styles.bBtn} ${styles.bBtnGreen} ${status === "completed" || status === "done" ? styles.bBtnActive : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatus("completed");
                }}
              >
                ✓ Complete
              </button>
              <button
                className={`${styles.bBtn} ${styles.bBtnBlue} ${status === "accepted" || status === "active" ? styles.bBtnActive : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatus("accepted");
                }}
              >
                <MdStarBorder /> Accept
              </button>
              <button
                className={`${styles.bBtn} ${styles.bBtnRed} ${status === "cancelled" ? styles.bBtnActive : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatus("cancelled");
                }}
              >
                ✕ Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LockScreen({ remaining, level }) {
  const cfg = LOCK_CONFIG.find((c) => c.level === level);
  return (
    <div className={styles.lockScreen}>
      <div className={styles.lockIconWrap}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="11"
            width="18"
            height="11"
            rx="2.5"
            stroke="#D80117"
            strokeWidth="2"
          />
          <path
            d="M7 11V7a5 5 0 0110 0v4"
            stroke="#D80117"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={styles.lockTitle}>Access Locked</div>
      <div className={styles.lockCountdown}>{remaining}</div>
      <div className={styles.lockMeta}>
        Level {level}
        {cfg ? ` · ${getLockLabel(level)} duration` : ""}
      </div>
      <p className={styles.lockHint}>
        {level < LOCK_CONFIG.length
          ? `Next lock will be longer. ${LOCK_CONFIG.length - level} escalation${LOCK_CONFIG.length - level > 1 ? "s" : ""} remaining.`
          : "Final lock level. System resets after this."}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────
function Dashboard({ onLogout }) {
  const [startVal, setStartVal] = useState("");
  const inputRef = useRef(null);
  const toRef = useRef(null);
  const [endVal, setEndVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [chartsData, setChartsData] = useState([]);
  const [statsValue, setStatsValue] = useState({
    total: "0",
    active: "0",
    revenue: "0",
    completed: "0",
    cancelled: "0",
    distance: "0 km",
  });

  function formatDate(val) {
    if (!val) return "Select date";
    const d = new Date(val + "T00:00:00");
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function handleFilter() {
    if (!startVal || !endVal) return;
    const start = new Date(startVal + "T00:00:00").getTime();
    const end = new Date(endVal + "T23:59:59").getTime();
    const result = bookings.filter((b) => {
      if (!b.createdAt?.seconds) return false;
      const d = new Date(b.createdAt.seconds * 1000);
      return d.getTime() >= start && d.getTime() <= end;
    });
    setFilteredData(result);
  }
  const activeData = startVal && endVal ? filteredData : bookings;
  console.log("Active data count:", activeData);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(data);
    });

    return () => unsub();
  }, []);
  useEffect(() => {
    const data = activeData;

    const groupedData = {};

    data.forEach((b) => {
      if (!b.createdAt?.seconds) return;

      const d = new Date(b.createdAt.seconds * 1000);
      const dateKey = d.toLocaleDateString("en-CA");

      if (!groupedData[dateKey]) {
        groupedData[dateKey] = {
          date: d.toLocaleDateString(),
          sortKey: dateKey,
          revenue: 0,
          bookings: 0,
        };
      }

      groupedData[dateKey].bookings += 1;

      if (b.status === "completed") {
        groupedData[dateKey].revenue += Number(b.price || 0);
      }
    });

    let chartData = Object.values(groupedData);
    chartData.sort((a, b) => new Date(a.sortKey) - new Date(b.sortKey));
    const filledData = [];

    if (chartData.length) {
      let start = new Date(chartData[0].sortKey);
      let end = new Date(chartData[chartData.length - 1].sortKey);

      while (start <= end) {
        const key = start.toISOString().split("T")[0];

        const found = chartData.find((d) => d.sortKey === key);

        filledData.push(
          found || {
            date: start.toLocaleDateString(),
            sortKey: key,
            revenue: 0,
            bookings: 0,
          },
        );

        start.setDate(start.getDate() + 1);
      }
    }
    setChartsData(filledData);
    const total = data.length;
    const completed = data.filter((b) => b.status === "completed").length;
    const cancelled = data.filter((b) => b.status === "cancelled").length;

    const revenue = data
      .filter((b) => b.status === "completed")
      .reduce((sum, b) => sum + Number(b.price || 0), 0);
    const distance = data.reduce((sum, b) => {
      const val = parseFloat(b.distanceKm);
      return sum + (isNaN(val) ? 0 : val);
    }, 0);

    setStatsValue((prev) => ({
      ...prev,
      total: total.toString(),
      completed: completed.toString(),
      revenue: `₹${revenue.toLocaleString()}`,
      cancelled: cancelled.toString(),
      distance: `${distance.toLocaleString()} km`,
    }));
  }, [activeData]);

  const stats = [
    {
      label: "Total Bookings",
      value: statsValue.total,
      icon: <IoBookOutline />,
    },
    { label: "Active Rides", value: statsValue.active, icon: <FaCar /> },
    {
      label: "Total Revenue",
      value: statsValue.revenue,
      icon: <PiCurrencyInrBold />,
    },
    {
      label: "Total Completed Rides",
      value: statsValue.completed,
      icon: <MdOutlineIncompleteCircle />,
    },
    {
      label: "Total Cancelled Rides",
      value: statsValue.cancelled,
      icon: <FaBan />,
    },
    {
      label: "Total Covered Distance",
      value: statsValue.distance,
      icon: <GiPathDistance />,
    },
  ];

  const navItems = ["Overview", "Update Pricing", "Analytics Filters"];

  return (
    <div className={styles.dashRoot}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <div className={styles.logoMark}>
            <Link href="/">
              <img src="/Cozy-cabz-logo.png" />
            </Link>
          </div>
        </div>
        <nav className={styles.sidebarNav}>
          {navItems.map((item, i) => (
            <button
              key={item}
              className={`${styles.navItem} ${i === 0 ? styles.navItemActive : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Logout
        </button>
      </aside>

      <main className={styles.dashMain}>
        <header className={styles.dashHeader}>
          <div>
            <h1 className={styles.dashHeading}>Welcome to Control Panel</h1>
            <p className={styles.dashSub}>Good to have you back, Admin</p>
          </div>
        </header>

        {/* ── Date Range Picker ── */}
        <div className={styles.dateRangeWrap}>
          {/* FROM field */}
          <div
            onClick={() =>
              inputRef.current?.showPicker?.() || inputRef.current?.click()
            }
            className={styles.dateField}
          >
            <span className={styles.dateIcon}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className={styles.dateFieldInner}>
              <span className={styles.dateFieldLabel}>From</span>
              <span
                className={`${styles.dateValueDisplay} ${!startVal ? styles.drPlaceholder : styles.drActive}`}
              >
                {formatDate(startVal)}
              </span>
            </div>
            <input
              ref={inputRef}
              type="date"
              className={styles.dateRangeInput}
              value={startVal}
              onChange={(e) => setStartVal(e.target.value)}
            />
          </div>

          <div className={styles.dateDivider} />

          {/* TO field */}
          <div
            onClick={() =>
              toRef.current?.showPicker?.() || toRef.current?.click()
            }
            className={styles.dateField}
          >
            <span className={styles.dateIcon}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className={styles.dateFieldInner}>
              <span className={styles.dateFieldLabel}>To</span>
              <span
                className={`${styles.dateValueDisplay} ${!endVal ? styles.drPlaceholder : styles.drActive}`}
              >
                {formatDate(endVal)}
              </span>
            </div>
            <input
              ref={toRef}
              type="date"
              className={styles.dateRangeInput}
              value={endVal}
              min={startVal || ""}
              onChange={(e) => setEndVal(e.target.value)}
            />
          </div>

          <button className={styles.dateFilterBtn} onClick={handleFilter}>
            <span className={styles.dateFilterDot} />
            Apply
          </button>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.stateFlex}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
              <div className={styles.statValue}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.panelGrid}>
          <BookingPanel bookings={activeData} />
          <div className={styles.panel}>
            <div className={styles.panelHead}>Revenue Performance</div>
            <BookingChart data={chartsData} />
          </div>
        </div>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────
function LockIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 11V7a5 5 0 0110 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}
function Spinner() {
  return <span className={styles.spinner} />;
}
