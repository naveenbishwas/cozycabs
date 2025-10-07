"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function SiteFooter() {
  const [showInnova, setShowInnova] = useState(false);

  const cityGuides = [
    "Mumbai",
    "Delhi",
    "Bangalore",
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

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="footer__accent" aria-hidden="true"></div>

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
                <Link href="mailto:Support@cozycabz.com">
                  Support@cozycabz.com
                </Link>
              </li>
              <li>
                Address: 2nd Floor, Plot No-37, behind HDFC Bank, Block A,
                Sector 12 Dwarka, New Delhi, Delhi, 110078
              </li>
            </ul>

            <div className="footer__social">
              <Link href="#">Fb</Link>
              <Link href="#">X</Link>
              <Link href="#">In</Link>
            </div>
          </div>

          {/* ---- Services ---- */}
          <nav className="footer__col" aria-label="Services">
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

          {/* ---- City Guides + Filter ---- */}
          <div className="footer__col" aria-label="City Guides">
            <div className="footer__header">
              <h4>{showInnova ? "Innova Car Rental" : "City Guides"}</h4>
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
            </div>

            <div
              className={`city-lists ${showInnova ? "fade-in" : "fade-out"}`}
            >
              <div className="city-column">
                {cityGuides.slice(0, 11).map((city) => (
                  <li key={city}>
                    <Link href={`/${showInnova ? "Innova" : "In"}${city}`}>
                      {showInnova
                        ? `Innova Car Rental in ${city}`
                        : `Car Rental in ${city}`}
                    </Link>
                  </li>
                ))}
              </div>

              <div className="city-column">
                {cityGuides.slice(11).map((city) => (
                  <li key={city}>
                    <Link href={`/${showInnova ? "Innova" : "In"}${city}`}>
                      {showInnova
                        ? `Innova Car Rental in ${city}`
                        : `Car Rental in ${city}`}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="footer__rule" />
        <div className="footer__bottom">
          <p className="copyright">© 2024 CozyCabz. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
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
