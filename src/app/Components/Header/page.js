"use client";
import { useEffect, useState } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";
import ourServiceRoute from "../../data/ourServiceRoutes.json";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FiLogOut, FiUser } from "react-icons/fi";
import { auth } from "@/app/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileAccOpen, setMobileAccOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsOpen(false);
    setMobileAccOpen(false);
    router.push("/");
  };

  /* ── Reusable dropdown menu ── */
  const AccountMenu = ({ name }) => (
    <div className="acc-dropdown-menu">
      {name && <div className="acc-dd-user">Hi, {name.split(" ")[0]}</div>}
      {/* <Link href="/profile" onClick={() => setIsOpen(false)}>
        <FiUser size={15} /> Profile
      </Link> */}
      <Link
        href="/track-your-ride"
        className={`${pathname === "/track-your-ride" ? "activepath" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <MdOutlineTrackChanges size={15} /> Track Your Ride
      </Link>
      <div className="acc-dd-divider" />
      <button className="acc-dd-logout" onClick={handleLogout}>
        <FiLogOut size={15} /> Logout
      </button>
    </div>
  );

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <Link href="/">
          <div className="logo">
            <Image
              src="/Cozy-cabz-logo.png"
              width={0}
              height={0}
              unoptimized
              alt="logo"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
              <span className="dropbtn">Our Services ▾</span>
              <ul className="dropdown-content">
                <li>
                  <Link href="/our-services/out-of-station">
                    Out of Station
                  </Link>
                </li>
                {ourServiceRoute.map((item) => (
                  <li key={item.id}>
                    <Link href={`/our-services/${item.route}`}>
                      {item.route
                        .split("-")
                        .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                        .join(" ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <span className="dropbtn">Our Fleet ▾</span>
              <ul className="dropdown-content">
                <li>
                  <Link href="/our-fleet/premium">Premium</Link>
                </li>
                <li>
                  <Link href="/our-fleet/luxury">Luxury</Link>
                </li>
                <li>
                  <Link href="/our-fleet/economy">Economy</Link>
                </li>
                <li>
                  <Link href="/our-fleet/buses-and-coach">Buses & Coach</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/track-your-ride">Track Your Ride</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta">
          <div className="acc-dropdown-wrap">
            <div className="user-acc">
              {user ? (
                <img
                  className="user-profile"
                  src={
                    user?.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.displayName || user?.email || "User",
                    )}&background=d80117&color=fff`
                  }
                />
              ) : (
                <Link href="/account">
                  <FaRegUserCircle size={20} />
                </Link>
              )}
              <span>
                {user
                  ? user.displayName?.split(" ")[0] || "Account"
                  : "Account"}
              </span>
            </div>
            {user && <AccountMenu name={user.displayName || user.email} />}
          </div>

          <Link href="tel:+919899132460">
            <button className="contact-btn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <span>+91 9899132460</span>
            </button>
          </Link>
        </div>

        {/* Mobile right side */}
        {/* Mobile right side */}
        <div className="acc-wrraper">
          <div className="acc-dropdown-wrap">
            <div
              className="user-acc"
              onClick={() => {
                if (!user) router.push("/account");
                else setMobileAccOpen(!mobileAccOpen);
              }}
            >
              {/* ✅ Desktop jaisa hi photo logic mobile pe bhi */}
              {user ? (
                <img
                  className="user-profile"
                  src={
                    user?.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.displayName || user?.email || "User",
                    )}&background=d80117&color=fff`
                  }
                  alt="profile"
                />
              ) : (
                <FaRegUserCircle size={20} />
              )}
              <span>
                {user ? user.displayName?.split(" ")[0] || "Hi" : "Account"}
              </span>
            </div>
            {user && mobileAccOpen && (
              <AccountMenu name={user.displayName || user.email} />
            )}
          </div>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <ul>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <button
              className="submenu-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services {servicesOpen ? "▴" : "▾"}
            </button>
            {servicesOpen && (
              <ul className="submenu">
                <li>
                  <Link href="/our-services/out-of-station">
                    Out of Station
                  </Link>
                </li>
                {ourServiceRoute.map((item) => (
                  <li key={item.id}>
                    <Link href={`/our-services/${item.route}`}>
                      {item.route
                        .split("-")
                        .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                        .join(" ")}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              className="submenu-toggle"
              onClick={() => setFleetOpen(!fleetOpen)}
            >
              Our Fleet {fleetOpen ? "▴" : "▾"}
            </button>
            {fleetOpen && (
              <ul className="submenu">
                <li>
                  <Link href="/our-fleet/premium">Premium</Link>
                </li>
                <li>
                  <Link href="/our-fleet/luxury">Luxury</Link>
                </li>
                <li>
                  <Link href="/our-fleet/economy">Economy</Link>
                </li>
                <li>
                  <Link href="/our-fleet/buses-and-coach">Buses & Coach</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/track-your-ride" onClick={() => setIsOpen(false)}>
              Track Your Ride
            </Link>
          </li>

          {/* ── Drawer account section ── */}
          {user ? (
            <>
              {/* <li>
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  <FiUser size={14} /> Profile
                </Link>
              </li> */}
              <li>
                <Link href="/track-your-ride" onClick={() => setIsOpen(false)}>
                  <MdOutlineTrackChanges size={14} /> Track Your Ride
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} style={{ color: "#d80117" }}>
                  <FiLogOut size={14} /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/account" onClick={() => setIsOpen(false)}>
                Login / Sign Up
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
