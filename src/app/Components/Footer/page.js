"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function SiteFooter() {
  const [showInnova, setShowInnova] = useState(false);
  const [showMoreCities, setShowMoreCities] = useState(false);

  const cityGuides = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    // "chennai",
    // "hyderabad",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Lucknow",
    "Indore",
    "Surat",
    "Nagpur",
    "Coimbatore",
    "Vijayawada",
    "Vadodara",
    "Bhopal",
    "Rajkot",
    "Patna",
    "Kanpur",
    "Guwahati",
    "Mysore",
  ];

  // split visible cities for first row
  const visibleCities = cityGuides.slice(0, 12);
  const hiddenCities = cityGuides.slice(12);

  return (
    <footer className="site-footer">
      <div className="footer__accent"></div>

      <div className="footer__container">
        <div className="footer__grid">
          {/* ---- Brand Section ---- */}
          <div className="footer__brand">
            <Image
              src="/white.png"
              alt="CozyCabz Logo"
              width={150}
              height={50}
            />
            <p className="brand__about">
              India&apos;s leading car rental service with 10+ years of
              experience. We provide safe, reliable, and comfortable
              transportation across 250+ cities.
            </p>

            <ul className="footer__contacts">
              <li>
                <Link href="tel:+919220994735">+91 92209 94735</Link>
              </li>
              <li>
                <Link href="mailto:support@cozycabz.com">
                  support@cozycabz.com
                </Link>
              </li>
              <li>
                Address: 2nd Floor, Plot No-37, behind HDFC Bank, Block A,
                Sector 12 Dwarka, New Delhi, Delhi, 110078
              </li>
            </ul>

            <div className="footer__social">
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ---- Services ---- */}
          <nav className="footer__col">
            <h4>Services</h4>
            <ul className="linklist">
              <li>
                <Link href="/CorporateCarRental">Corporate Car Rental</Link>
              </li>
              <li>
                <Link href="/TransportSolution">
                  Employee Transport Solutions
                </Link>
              </li>
              <li>
                <Link href="/GcarRental">Global Car Rental</Link>
              </li>
              <li>
                <Link href="/HotelTravelDesk">Hotel Travel Desk</Link>
              </li>
              <li>
                <Link href="/ConferenceDelegationTravel">
                  Conference & Delegation
                </Link>
              </li>
              <li>
                <Link href="/EventTransportation">Event Transportation</Link>
              </li>
              <li>
                <Link href="/WeddingCarRental">Wedding Car Rental</Link>
              </li>
              <li>
                <Link href="/TravelPartnersProgram">
                  Travel Partners Program
                </Link>
              </li>
              <li>
                <Link href="/ChauffeurCarRental">Chauffeured Car Rental</Link>
              </li>
            </ul>
          </nav>

          {/* ---- City Guides ---- */}
          <div className="footer__col city-col">
            <div className="footer__header">
              <h4>{showInnova ? "Innova Car Rental" : "City Guides"}</h4>
            </div>

            <div className="footer__toggle">
              <button
                onClick={() => setShowInnova(false)}
                className={!showInnova ? "active" : ""}
              >
                City Guides
              </button>
              <button
                onClick={() => setShowInnova(true)}
                className={showInnova ? "active" : ""}
              >
                Innova Car
              </button>
            </div>

            {/* ---- Two Columns: 6 cities each ---- */}
            <div className={`city-lists ${showMoreCities ? "expanded" : ""}`}>
              <div className="city-column">
                {visibleCities.slice(0, 6).map((city) => (
                  <li key={city}>
                    <Link href={`/${showInnova ? "Innova" : "In"}${city}`}>
                      {showInnova
                        ? `Innova Car Rental in ${city}`
                        : `Car Rental in${city}`}
                    </Link>
                  </li>
                ))}
              </div>
              <div className="city-column">
                {visibleCities.slice(6, 12).map((city) => (
                  <li key={city}>
                    <Link href={`/${showInnova ? "Innova" : "In"}${city}`}>
                      {showInnova
                        ? `Innova Car Rental in ${city}`
                        : `Car Rental in ${city}`}
                    </Link>
                  </li>
                ))}
              </div>

              {/* Hidden cities toggle */}
              {showMoreCities && (
                <div className="city-more">
                  {hiddenCities.map((city) => (
                    <li key={city}>
                      <Link href={`/${showInnova ? "Innova" : "In"}${city}`}>
                        {showInnova
                          ? `Innova Car Rental in ${city}`
                          : `Car Rental in ${city}`}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </div>

            <button
              className="show-more-btn"
              onClick={() => setShowMoreCities(!showMoreCities)}
            >
              {showMoreCities ? "Show Less Cities ↑" : "Show More Cities ↓"}
            </button>
          </div>
        </div>

        <hr className="footer__rule" />
        <div className="footer__bottom">
          <p className="copyright">© 2024 CozyCabz. All rights reserved.</p>
          <nav className="footer__legal">
            <Link href="/Privacy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/About">
              <li>About us</li>
            </Link>
            <Link href="/Contact">
              <li>Contact us</li>
            </Link>
            <Link href="/Terms">
              <li>Terms of Service</li>
            </Link>
            <Link href="/Refund">
              <li>Refund Policy</li>
            </Link>
            <Link href="/Support">
              <li>Support</li>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
