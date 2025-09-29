"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      {/* Top thin red line */}
      <div className="footer__accent" aria-hidden="true"></div>

      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="brand__row">
              <div className="brand__logo" aria-hidden="true">
                <Image
                  src="/cozy-logo.svg"
                  alt="CarRental Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 id="footer-title" className="brand__name">
                  CozyCabz
                </h3>
                <p className="brand__tag">Premium Transport Solutions</p>
              </div>
            </div>

            <p className="brand__about">
              India&apos;s leading car rental service with 10+ years of
              experience. We provide safe, reliable, and comfortable
              transportation across 250+ cities.
            </p>

            <ul className="footer__contacts">
              <li>
                <span className="ico" aria-hidden="true">
                  {/* phone icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M6 2h4l2 5-3 2a16 16 0 007 7l2-3 5 2v4a2 2 0 01-2 2A18 18 0 012 8 2 2 0 014 6z" />
                  </svg>
                </span>
                <Link href="tel:+919876543210">+91 92209 94735</Link>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  {/* mail icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18v14H3z" />
                    <path d="M3 5l9 7 9-7" />
                  </svg>
                </span>
                <Link href="mailto:info@carrental.com">
                  Support@cozycabz.com
                </Link>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  {/* pin icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s7-6.1 7-12A7 7 0 105 10c0 5.9 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  Address: 2nd Floor, Plot No-37, behind HDFC Bank, Block A,
                  Sector 12 Dwarka, Dwarka, New Delhi, Delhi, 110078
                </span>
              </li>
            </ul>

            <div className="footer__social" aria-label="Social links">
              <Link href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 9h3V6h-3a3 3 0 00-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9a1 1 0 011-1z" />
                </svg>
              </Link>
              <Link href="#" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4l7.4 8.1L4.6 20H8l5.2-6 4.3 6H20l-7-9 6.6-7H16l-4.8 5.6L7.3 4H4z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h4v16H4z" />
                  <circle cx="6" cy="3" r="1.5" />
                  <path d="M10 10h4v2a3 3 0 016 0v8h-4v-7a1.8 1.8 0 00-3.6 0V20H10z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column: City Guides */}

          {/* Column: Services */}
          <nav className="footer__col" aria-label="Services">
            <h4>Services</h4>
            <ul className="linklist">
              <li>
                <Link href="/services/corporate-car-rental">
                  Corporate Car Rental
                </Link>
              </li>
              <li>
                <Link href="/TransportSolution">
                  Employee Transport Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/global-car-rental">
                  Global Car Rental
                </Link>
              </li>
              <li>
                <Link href="/services/hotel-travel-desk">
                  Hotel Travel Desk
                </Link>
              </li>
              <li>
                <Link href="/services/conference-&-delegation">
                  Conference & Delegation
                </Link>
              </li>
              <li>
                <Link href="/services/event-transportation">
                  Event Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/self-drive">Self Drive</Link>
              </li>
              <li>
                <Link href="/services/wedding-car-rental">
                  Wedding Car Rental
                </Link>
              </li>
              <li>
                <Link href="/services/self-drive-solutions">
                  Self Drive Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/travel-partners-program">
                  Travel Partners Program
                </Link>
              </li>
              <li>
                <Link href="/services/chauffeured-car-rental-services">
                  Chauffeured Car Rental Services
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="City Guides">
            <h4>City Guides</h4>
            <ul className="linklist">
              <li>
                <Link href="/InMumbai">Car Rental in Mumbai</Link>
              </li>
              <li>
                <Link href="/InDelhi">Car Rental in Delhi</Link>
              </li>
              <li>
                <Link href="/Inbanglore">Car Rental in Bangalore</Link>
              </li>
              <li>
                <Link href="/Inchennai">Car Rental in Chennai</Link>
              </li>
              <li>
                <Link href="/Inhyderabad">Car Rental in Hyderabad</Link>
              </li>
              <li>
                <Link href="/InPune">Car Rental in Pune</Link>
              </li>
              <li>
                <Link href="/InKolkata">Car Rental in Kolkata</Link>
              </li>
              <li>
                <Link href="/InAhmedabad">Car Rental in Ahmedabad</Link>
              </li>
              <li>
                <Link className="link--accent" href="/InJaipur">
                  Car Rental in Jaipur
                </Link>
              </li>
              <li>
                <Link href="/InChandigarh">Car Rental in Chandigarh</Link>
              </li>
              <li>
                <Link href="/InLucknow">Car Rental in Lucknow</Link>
              </li>
              <li>
                <Link href="/InIndore">Car Rental in Indore</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="More Cities">
            <ul className="linklist" id="last-column">
              {/* <h4>More Cities</h4> */}

              <li>
                <Link href="/InSurat">Car Rental in Surat</Link>
              </li>
              <li>
                <Link href="/InNagpur">Car Rental in Nagpur</Link>
              </li>
              <li>
                <Link href="/InCoimbatore">Car Rental in Coimbatore</Link>
              </li>
              <li>
                <Link href="/InVijayawada">Car Rental in Vijayawada</Link>
              </li>
              <li>
                <Link href="/InVadodara">Car Rental in Vadodara</Link>
              </li>
              <li>
                <Link href="/InBhopal">Car Rental in Bhopal</Link>
              </li>
              <li>
                <Link href="/InVisakhapatnam">Car Rental in Visakhapatnam</Link>
              </li>
              <li>
                <Link href="/InRajkot">Car Rental in Rajkot</Link>
              </li>
              <li>
                <Link href="/InKanpur">Car Rental in Kanpur</Link>
              </li>
              <li>
                <Link href="/InPatna">Car Rental in Patna</Link>
              </li>
              <li>
                <Link href="/InGuwahati">Car Rental in Guwahati</Link>
              </li>
              <li>
                <Link href="/InMysore">Car Rental in Mysore</Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="footer__rule" />

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="copyright">© 2024 CarRental. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
