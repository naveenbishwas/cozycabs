"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";
import { usePathname, useRouter } from "next/navigation";
import city from "../../data/citySeoKeywords.json";
import { GoEye, GoEyeClosed } from "react-icons/go";

const CITIES_MAIN = [
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
];
const CITIES_MORE = [
  "Surat",
  "Coimbatore",
  "Vadodara",
  "Rajkot",
  "Kanpur",
  "Mysore",
  "Nagpur",
  "Vijayawada",
  "Bhopal",
  "Patna",
  "Guwahati",
];

const toSlug = (c) => c.toLowerCase().replace(/\s+/g, "-");

export default function SiteFooter() {
  const [showInnova, setShowInnova] = useState(false);
  const [showMoreCities, setShowMoreCities] = useState(false);
  const [showService, setShowService] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const slug = pathname?.split("/").filter(Boolean)[0];
  const cityName = slug;
  const cityMatch = city.find((item) => item.city.toLowerCase() === cityName);

  function cityClickHandler(citie) {
    if (showInnova) {
      router.push(`/innovaRental/innova-${toSlug(citie)}`);
    } else {
      router.push(`/car-rental-in-${toSlug(citie)}`);
    }
  }

  const label = showInnova ? "Innova Car Rental in" : "Car Rental in";

  const CityList = ({ cities }) => (
    <div className="city-lists">
      <div className="city-column">
        {cities.slice(0, Math.ceil(cities.length / 2)).map((c) => (
          <li key={c}>
            <button onClick={() => cityClickHandler(c)} className="city-link">
              {label} {c}
            </button>
          </li>
        ))}
      </div>
      <div className="city-column">
        {cities.slice(Math.ceil(cities.length / 2)).map((c) => (
          <li key={c}>
            <button onClick={() => cityClickHandler(c)} className="city-link">
              {label} {c}
            </button>
          </li>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="site-footer">
      <div className="footer__accent" />
      <div className="footer__container">
        <div className="footer__grid">
          {/* ── Brand ── */}
          <div className="footer__brand">
            <Image
              src="/Cozy-cabz-logo.png"
              width={0}
              height={0}
              unoptimized
              alt="logo"
            />
            <p className="brand__about">
              India&apos;s leading car rental service with 10+ years of
              experience. We provide safe, reliable, and comfortable
              transportation across 250+ cities.
            </p>
            <ul className="footer__contacts">
              <span className="phone-number">
                <li>
                  <Link href="tel:+919220994735">+91 92209 94735</Link>
                </li>
                |
                <li>
                  <Link href="tel:+919899132460">+91 9899132460</Link>
                </li>
              </span>
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
          </div>

          {/* ── Services ── */}
          <nav className="footer__col">
            <h4>Services</h4>
            <ul className="linklist">
              {[
                ["Corporate Car Rental", "/our-services/corporate-car-rental"],
                [
                  "Employee Transport Solutions",
                  "/our-services/transport-solution",
                ],
                ["Hotel Travel Desk", "/our-services/hotel-travel-desk"],
                [
                  "Conference & Delegation",
                  "/our-services/conference-delegation-travel",
                ],
                ["Event Transportation", "/our-services/event-transportation"],
                ["Wedding Car Rental", "/our-services/wedding-car-rental"],
                [
                  "Travel Partners Program",
                  "/our-services/travel-partners-program",
                ],
                [
                  "Chauffeured Car Rental",
                  "/our-services/chauffeur-car-rental",
                ],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── City Guides ── */}
          <div className="footer__col city-col">
            <h4>City Guides</h4>
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

            <CityList cities={CITIES_MAIN} />
            {showMoreCities && <CityList cities={CITIES_MORE} />}

            <button
              className="show-more-btn"
              onClick={() => setShowMoreCities(!showMoreCities)}
            >
              {showMoreCities ? "Show Less Cities ↑" : "Show More Cities ↓"}
            </button>
          </div>
        </div>

        {/* ── SEO Keywords ── */}
        {cityName && (
          <div className="footer__seo">
            <div className="footer__service-wrapper">
              <h4 className="seo-heading">Popular Searches in {cityName}</h4>
              <span>
                {showService ? (
                  <GoEye size={25} onClick={() => setShowService(false)} />
                ) : (
                  <GoEyeClosed size={25} onClick={() => setShowService(true)} />
                )}
              </span>
            </div>
            {showService && (
              <div className="seo-content">
                {cityMatch?.service?.map((item, i) => (
                  <h5 key={i}>{item}</h5>
                ))}
              </div>
            )}
          </div>
        )}

        <hr className="footer__rule" />

        <div className="footer__bottom">
          <p className="copyright">© 2024 CozyCabz. All rights reserved.</p>
          <ul className="footer__legal">
            {[
              ["Privacy Policy", "/privacy-policy"],
              ["About us", "/about-us"],
              ["Contact us", "/contact-us"],
              ["Terms of Service", "/terms-&-condition"],
              ["Refund Policy", "/refund-policy"],
              ["Support", "/support"],
            ].map(([name, href]) => (
              <li key={href}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <p id="in-mob" className="copyright">
          © 2024 CozyCabz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
