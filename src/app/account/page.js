"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./account.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";
import { db, auth } from "../lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // forgot password
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // otp
  const [otpSent, setOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const otpRefs = useRef([]);

  const [fullName, setFullName] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const forgotEmailRef = useRef(null);
  const router = useRouter();

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
  };

  const switchTab = (newTab) => {
    if (forgotOpen) return;
    resetFields();
    setTab(newTab);
  };

  const openForgot = () => {
    setForgotOpen(true);
    setForgotEmail("");
    setResetSent(false);
    setTimeout(() => forgotEmailRef.current?.focus(), 420);
  };

  const closeForgot = () => {
    setForgotOpen(false);
    setForgotEmail("");
    setResetSent(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      const snap = await getDoc(doc(db, "users", user.uid));
      const role = snap.data()?.role;
      if (role === "admin") router.push("/Admin-Dashboard");
      else if (role === "user") router.push("/track-your-ride");
    });
    return unsubscribe;
  });

  /* ── Forgot Password ── */
  const handleForgotPassword = async () => {
    if (!forgotEmail.trim()) {
      showToast("Please enter your email.", "error");
      return;
    }
    setResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, forgotEmail.trim());
      setResetSent(true);
    } catch (error) {
      const msg =
        error.code === "auth/user-not-found"
          ? "No account found with this email."
          : error.code === "auth/invalid-email"
            ? "Please enter a valid email."
            : "Failed to send reset link. Try again.";
      showToast(msg, "error");
    } finally {
      setResetLoading(false);
    }
  };

  /* ── Sign Up — sends OTP via API ── */
  const handleSignUp = async () => {
    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      showToast("All fields are required.", "error");
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters.", "error");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }
    setSignupLoading(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "otp", email: email.trim() }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "OTP send failed");
      setOtpValues(["", "", "", "", "", ""]);
      setOtpError("");
      setOtpSent(true);
      showToast("OTP sent to your email 📩", "success");
    } catch (error) {
      console.error(error);
      showToast("Failed to send OTP. Try again.", "error");
    } finally {
      setSignupLoading(false);
    }
  };

  /* ── OTP input handlers ── */
  const handleOtpChange = (index, val) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otpValues];
    next[index] = val.slice(-1);
    setOtpValues(next);
    setOtpError("");
    if (val && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const next = [...otpValues];
    pasted.split("").forEach((ch, i) => {
      next[i] = ch;
    });
    setOtpValues(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  /* ── Verify OTP via server ── */
  const handleVerifyOtp = async () => {
    const entered = otpValues.join("");
    if (entered.length < 6) {
      setOtpError("Please enter all 6 digits.");
      return;
    }
    setOtpLoading(true);
    try {
      // Server-side verify — safe, no direct Firestore client read
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "verify-otp",
          email: email.trim(),
          otp: entered,
        }),
      });
      const data = await res.json();

      if (!data.success) {
        setOtpError(data.error || "Incorrect OTP. Please try again.");
        setOtpLoading(false);
        return;
      }

      // OTP verified — create Firebase account
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      await setDoc(doc(db, "users", userCred.user.uid), {
        fullName: fullName.trim(),
        email: email.trim(),
        role: "user",
        createdAt: new Date().toISOString(),
      });

      resetFields();
      setOtpSent(false);
      setTab("login");
      showToast("Account created! You can now log in.", "success");
    } catch (err) {
      const msg =
        err.code === "auth/email-already-in-use"
          ? "Email already registered. Try logging in."
          : "Account creation failed. Try again.";
      setOtpError(msg);
    } finally {
      setOtpLoading(false);
    }
  };

  /* ── Resend OTP ── */
  const handleResendOtp = async () => {
    setOtpValues(["", "", "", "", "", ""]);
    setOtpError("");
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "otp", email: email.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("OTP resent to your email 📩", "success");
      } else {
        showToast("Failed to resend OTP. Try again.", "error");
      }
    } catch {
      showToast("Failed to resend OTP. Try again.", "error");
    }
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  /* ── Login ── */
  const handleLogin = async () => {
    if (!email.trim() || !password) {
      showToast("Please enter email and password.", "error");
      return;
    }
    setLoginLoading(true);
    try {
      const findUser = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      const user = findUser.user;
      const snap = await getDoc(doc(db, "users", user.uid));
      if (!snap.exists()) {
        showToast("User not found. Please check your credentials.", "error");
        setLoginLoading(false);
        return;
      }
      const role = snap.data().role;
      if (role === "admin") router.push("/Admin-Dashboard");
      else if (role === "user") router.push("/track-your-ride");
    } catch (error) {
      const msg =
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
          ? "Incorrect email or password."
          : "Login failed. Please try again.";
      showToast(msg, "error");
      setLoginLoading(false);
    }
  };

  /* ── Google ── */
  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await setDoc(
        doc(db, "users", result.user.uid),
        {
          fullName: result.user.displayName || "",
          email: result.user.email || "",
          role: "user",
        },
        { merge: true },
      );
      router.push("/track-your-ride");
    } catch {
      showToast("Google sign-in failed. Try again.", "error");
      setGoogleLoading(false);
    }
  };

  const GoogleIcon = () => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  const showLoginSignup = !forgotOpen && !otpSent;
  const showForgot = forgotOpen && !resetSent;
  const showResetDone = forgotOpen && resetSent;
  const showOtp = otpSent;

  return (
    <>
      <Header />

      {/* Toast */}
      {toast && (
        <div className="acc-toast-wrap">
          <div className={`acc-toast ${toast.type}`}>
            <span className="acc-toast__icon">
              {toast.type === "success" ? "✓" : "✕"}
            </span>
            <span className="acc-toast__msg">{toast.msg}</span>
            <button
              type="button"
              className="acc-toast__close"
              onClick={() => setToast(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="acc-page">
        {/* Left brand panel */}
        <div className="acc-panel">
          <div className="acc-panel__logo">
            <Image
              src="/Cozy-cabz-logo.png"
              width={130}
              height={0}
              unoptimized
              alt="CozyCabz"
            />
          </div>
          <div className="acc-panel__body">
            <span className="acc-panel__tag">Outstation Cabs</span>
            <h2 className="acc-panel__headline">
              Your journey,<span>our promise.</span>
            </h2>
            <ul className="acc-panel__perks">
              <li>Verified, professional drivers</li>
              <li>No hidden charges — GST included</li>
              <li>Free cancellation up to 1 hr</li>
              <li>24/7 customer support</li>
              <li>Pay cash, UPI or card</li>
            </ul>
          </div>
          <p className="acc-panel__footer">
            © {new Date().getFullYear()} CozyCabz. All rights reserved.
          </p>
        </div>

        {/* Right form side */}
        <div className="acc-form-side">
          <div className="acc-box">
            {/* Tabs */}
            <div
              className={`acc-tabs ${forgotOpen || otpSent ? "acc-tabs--hidden" : ""}`}
            >
              <button
                className={`acc-tab ${tab === "login" ? "active" : ""}`}
                onClick={() => switchTab("login")}
                disabled={signupLoading || loginLoading || googleLoading}
              >
                Login
              </button>
              <button
                className={`acc-tab ${tab === "signup" ? "active" : ""}`}
                onClick={() => switchTab("signup")}
                disabled={signupLoading || loginLoading || googleLoading}
              >
                Create Account
              </button>
            </div>

            <div className="acc-slide-wrap">
              {/* ══ LOGIN / SIGNUP PANEL ══ */}
              <div
                className={`acc-card acc-slide-panel ${showLoginSignup ? "acc-slide-panel--active" : "acc-slide-panel--exit-left"}`}
              >
                <h1 className="acc-card__title">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="acc-card__sub">
                  {tab === "login"
                    ? "Login to manage your bookings and trips."
                    : "Sign up free and book your first ride in minutes."}
                </p>

                {tab === "login" ? (
                  <>
                    <div className="acc-divider">Login with email</div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                      }}
                    >
                      <div className="acc-field">
                        <label>Email address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          disabled={loginLoading || googleLoading}
                        />
                      </div>
                      <div className="acc-field">
                        <label>Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          disabled={loginLoading || googleLoading}
                        />
                      </div>
                      <div className="acc-forgot-row">
                        <button
                          type="button"
                          className="acc-forgot-link"
                          onClick={openForgot}
                          disabled={loginLoading}
                        >
                          Forgot password?
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="acc-submit-btn"
                        disabled={loginLoading || googleLoading}
                      >
                        {loginLoading ? "Logging in…" : "Login"}
                      </button>
                    </form>
                    <div className="acc-divider" style={{ marginTop: "18px" }}>
                      or
                    </div>
                    <button
                      className="acc-google-btn"
                      onClick={handleGoogle}
                      disabled={loginLoading || googleLoading}
                    >
                      <GoogleIcon />
                      {googleLoading ? "Connecting…" : "Continue with Google"}
                    </button>
                    <p className="acc-switch">
                      Don&apos;t have an account?
                      <button
                        onClick={() => switchTab("signup")}
                        disabled={loginLoading || googleLoading}
                      >
                        Create one free
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="acc-divider">Sign up with email</div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSignUp();
                      }}
                    >
                      <div className="acc-field">
                        <label>Full name</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          disabled={signupLoading}
                        />
                      </div>
                      <div className="acc-field">
                        <label>Email address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          disabled={signupLoading}
                        />
                      </div>
                      <div className="acc-field">
                        <label>Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Create a password"
                          disabled={signupLoading}
                        />
                      </div>
                      <div className="acc-field">
                        <label>Confirm password</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm password"
                          disabled={signupLoading}
                        />
                      </div>
                      <button
                        type="submit"
                        className="acc-submit-btn"
                        disabled={signupLoading}
                      >
                        {signupLoading ? "Sending OTP…" : "Create Account"}
                      </button>
                    </form>
                    <button
                      className="acc-google-btn"
                      onClick={handleGoogle}
                      disabled={signupLoading || googleLoading}
                    >
                      <GoogleIcon />
                      {googleLoading ? "Connecting…" : "Continue with Google"}
                    </button>
                    <p className="acc-switch">
                      Already have an account?
                      <button
                        onClick={() => switchTab("login")}
                        disabled={signupLoading || googleLoading}
                      >
                        Login
                      </button>
                    </p>
                  </>
                )}
              </div>

              {/* ══ FORGOT PASSWORD PANEL ══ */}
              <div
                className={`acc-card acc-slide-panel ${showForgot ? "acc-slide-panel--active" : showResetDone ? "acc-slide-panel--exit-left" : "acc-slide-panel--enter-right"}`}
              >
                <button className="acc-back-btn" onClick={closeForgot}>
                  <span className="acc-back-arrow">&#8592;</span>Back to login
                </button>
                <h1 className="acc-card__title">Reset password</h1>
                <p className="acc-card__sub">
                  Enter your registered email and we&apos;ll send you a reset
                  link.
                </p>
                <div className="acc-field" style={{ marginTop: "8px" }}>
                  <label>Email address</label>
                  <input
                    ref={forgotEmailRef}
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="Your registered email"
                    disabled={resetLoading}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleForgotPassword()
                    }
                  />
                </div>
                <button
                  className="acc-submit-btn"
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                >
                  {resetLoading ? "Sending…" : "Send reset link"}
                </button>
                <p className="acc-switch" style={{ marginTop: "14px" }}>
                  Remember your password?
                  <button onClick={closeForgot}>Login</button>
                </p>
              </div>

              {/* ══ RESET SUCCESS PANEL ══ */}
              <div
                className={`acc-card acc-slide-panel ${showResetDone ? "acc-slide-panel--active" : "acc-slide-panel--enter-right"}`}
              >
                <div className="acc-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" width={28} height={28}>
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#1a7a45"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 12.5l3.5 3.5 6.5-7"
                      stroke="#1a7a45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="acc-card__title">Check your inbox</h1>
                <p className="acc-card__sub" style={{ marginBottom: "6px" }}>
                  We&apos;ve sent a reset link to
                </p>
                <p className="acc-sent-email">{forgotEmail}</p>
                <p className="acc-info-text">
                  Link valid for 15 minutes. Check spam if not received.
                </p>
                <button className="acc-submit-btn" onClick={closeForgot}>
                  Back to login
                </button>
                <p className="acc-switch" style={{ marginTop: "14px" }}>
                  Didn&apos;t receive?
                  <button onClick={() => setResetSent(false)}>
                    Resend link
                  </button>
                </p>
              </div>

              {/* ══ OTP VERIFICATION PANEL ══ */}
              <div
                className={`acc-card acc-slide-panel ${showOtp ? "acc-slide-panel--active" : "acc-slide-panel--enter-right"}`}
              >
                <button
                  className="acc-back-btn"
                  onClick={() => {
                    setOtpSent(false);
                    setOtpError("");
                    setOtpValues(["", "", "", "", "", ""]);
                  }}
                >
                  <span className="acc-back-arrow">&#8592;</span>Back
                </button>

                <div className="otp-header">
                  <div className="otp-header__icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="3"
                        stroke="#d80117"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M2 8l10 6 10-6"
                        stroke="#d80117"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h1 className="acc-card__title">Verify your email</h1>
                  <p className="acc-card__sub">
                    We sent a 6-digit OTP to{" "}
                    <strong style={{ color: "#1a1a2e" }}>{email}</strong>
                  </p>
                </div>

                <div className="otp-boxes" onPaste={handleOtpPaste}>
                  {otpValues.map((val, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      className={`otp-box ${otpError ? "otp-box--error" : ""} ${val ? "otp-box--filled" : ""}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={val}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      autoFocus={i === 0 && otpSent}
                      disabled={otpLoading}
                    />
                  ))}
                </div>

                {otpError && (
                  <p className="otp-error">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 8v4M12 16h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {otpError}
                  </p>
                )}

                <button
                  className="acc-submit-btn"
                  onClick={handleVerifyOtp}
                  disabled={otpLoading || otpValues.join("").length < 6}
                  style={{ marginTop: "22px" }}
                >
                  {otpLoading ? "Verifying…" : "Verify & Create Account"}
                </button>

                <p className="acc-switch" style={{ marginTop: "16px" }}>
                  Didn&apos;t receive the OTP?
                  <button onClick={handleResendOtp} disabled={otpLoading}>
                    Resend OTP
                  </button>
                </p>

                <p className="otp-hint">OTP expires in 10 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
