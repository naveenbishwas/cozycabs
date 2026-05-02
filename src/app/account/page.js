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

  /* ── Sign Up ── */
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
      }).catch((e) => console.log("Firestore save failed:", e));
      setSignupLoading(false);
      resetFields();
      setTab("login");
      showToast("Account created! You can now log in.", "success");
    } catch (error) {
      setSignupLoading(false);
      const msg =
        error.code === "auth/email-already-in-use"
          ? "Email already registered. Try logging in."
          : error.code === "auth/invalid-email"
            ? "Please enter a valid email."
            : error.code === "auth/weak-password"
              ? "Password too weak. Use 6+ characters."
              : "Something went wrong. Please try again.";
      showToast(msg, "error");
    }
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
      if (role === "admin") {
        router.push("/Admin-Dashboard");
      } else if (role === "user") {
        router.push("/track-your-ride");
      }
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

  return (
    <>
      <Header />

      {/* ── Toast ── */}
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

        {/* ── Right form side ── */}
        <div className="acc-form-side">
          <div className="acc-box">
            <div className={`acc-tabs ${forgotOpen ? "acc-tabs--hidden" : ""}`}>
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

            {/* ── Slide wrapper: holds all 3 panels ── */}
            <div className="acc-slide-wrap">
              {/* LOGIN PANEL */}
              <div
                className={`acc-card acc-slide-panel ${
                  forgotOpen
                    ? "acc-slide-panel--exit-left"
                    : "acc-slide-panel--active"
                }`}
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
                        {signupLoading ? "Creating account…" : "Create Account"}
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

              {/* FORGOT PASSWORD PANEL */}
              <div
                className={`acc-card acc-slide-panel ${
                  forgotOpen && !resetSent
                    ? "acc-slide-panel--active"
                    : forgotOpen && resetSent
                      ? "acc-slide-panel--exit-left"
                      : "acc-slide-panel--enter-right"
                }`}
              >
                <button className="acc-back-btn" onClick={closeForgot}>
                  <span className="acc-back-arrow">&#8592;</span>
                  Back to login
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

              {/* RESET SUCCESS PANEL */}
              <div
                className={`acc-card acc-slide-panel ${
                  resetSent
                    ? "acc-slide-panel--active"
                    : "acc-slide-panel--enter-right"
                }`}
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
                  Link will be valid for 15 minutes. please check your spam
                  folder if not received.
                </p>
                <button className="acc-submit-btn" onClick={closeForgot}>
                  Back to login
                </button>
                <p className="acc-switch" style={{ marginTop: "14px" }}>
                  Didn&apos;t receive the email?
                  <button
                    onClick={() => {
                      setResetSent(false);
                    }}
                  >
                    Resend link
                  </button>
                </p>
              </div>
            </div>
            {/* end acc-slide-wrap */}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
