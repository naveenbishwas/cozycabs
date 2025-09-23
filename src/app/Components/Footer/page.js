// "use client";
// import React from "react";
// import "./footer.css";

// export default function Footer() {
//   function handleNewsletter(e) {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget).entries());
//     console.log("Newsletter:", data);
//     alert("Thanks! (Check console for captured data)");
//   }

//   return (
//     <footer className="site-footer" aria-labelledby="footer-cta">
//       <div className="ft-container">
//         {/* Big headline */}
//         <h2 id="footer-cta" className="ft-hero">
//           Elevate Your Car’s Look With A
//           <br /> Fresh Wash
//         </h2>

//         {/* 4-column grid */}
//         <div className="ft-grid">
//           {/* Address */}
//           <section
//             className="ft-col ft-col--border"
//             aria-labelledby="ft-address-h"
//           >
//             <h3 id="ft-address-h" className="ft-title">
//               Address
//             </h3>

//             <address className="ft-address">
//               1353 locust st, kansas
//               <br /> city mo 6452 berline
//               <br /> 81566
//             </address>

//             <a href="mailto:abc@gmail.com" className="ft-link">
//               abc@gmail.com
//             </a>
//             <br />
//             <a href="tel:+18001231234" className="ft-link">
//               +1800-123-1234
//             </a>
//           </section>

//           {/* Navigation */}
//           <nav className="ft-col ft-col--border" aria-labelledby="ft-nav-h">
//             <h3 id="ft-nav-h" className="ft-title">
//               Navigation
//             </h3>
//             <ul className="ft-list">
//               <li>
//                 <a href="#" className="ft-link">
//                   Style Guide
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="ft-link">
//                   License
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="ft-link">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="ft-link">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </nav>

//           {/* Social */}
//           <section
//             className="ft-col ft-col--border"
//             aria-labelledby="ft-social-h"
//           >
//             <h3 id="ft-social-h" className="ft-title">
//               Social Media
//             </h3>
//             <ul className="ft-list">
//               <li>
//                 <a href="#" className="ft-link">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="ft-link">
//                   YouTube
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="ft-link">
//                   Dribble
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="ft-link">
//                   Instagram
//                 </a>
//               </li>
//             </ul>
//           </section>

//           {/* Newsletter */}
//           <section className="ft-col" aria-labelledby="ft-news-h">
//             <h3 id="ft-news-h" className="ft-title">
//               Newsletter
//             </h3>

//             <form className="ft-newsform" onSubmit={handleNewsletter}>
//               <label className="ft-input">
//                 <span className="ft-input-icon">
//                   <MailIcon />
//                 </span>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Your Email"
//                   required
//                 />
//               </label>

//               <label className="ft-check">
//                 <input type="checkbox" name="agree" required />
//                 <span className="ft-checkbox" aria-hidden="true" />
//                 <span className="ft-checktext">
//                   I Agree{" "}
//                   <a href="#" className="ft-link ft-link--underline">
//                     Privacy Policy
//                   </a>
//                 </span>
//               </label>

//               <button className="ft-submit" type="submit">
//                 Submit
//               </button>
//             </form>
//           </section>
//         </div>

//         {/* Bottom bar */}
//         <div className="ft-bottom">
//           <small>
//             © Powered by{" "}
//             <a className="ft-link" href="https://webflow.com">
//               Webflow
//             </a>{" "}
//             created by{" "}
//             <a className="ft-link" href="https://peacefulqode.com">
//               PeacefulQode
//             </a>
//           </small>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* tiny mail icon */
// function MailIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// components/SiteFooter.jsx
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
          {/* Brand / About */}
          <div className="footer__brand">
            <div className="brand__row">
              <div className="brand__logo" aria-hidden="true">
                {/* Example Image for logo */}
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
                <Link href="tel:+919876543210">+91 98765-43210</Link>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  {/* mail icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18v14H3z" />
                    <path d="M3 5l9 7 9-7" />
                  </svg>
                </span>
                <Link href="mailto:info@carrental.com">info@carrental.com</Link>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  {/* pin icon */}
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s7-6.1 7-12A7 7 0 105 10c0 5.9 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>123 Business Hub, Delhi, India</span>
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
              {[
                "Corporate Car Rental",
                "Employee Transport Solutions",
                "Global Car Rental",
                "Hotel Travel Desk",
                "Conference & Delegation",
                "Event Transportation",
                "Self Drive",
                "Wedding Car Rental",
                "Self Drive Solutions",
                "Travel Partners Program",
                "Chauffeured Car Rental Services",
              ].map((t) => (
                <li key={t}>
                  <Link
                    href={`/services/${t.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="City Guides">
            <h4>City Guides</h4>
            <ul className="linklist">
              <li>
                <Link href="/InternalOne">Car Rental in Mumbai</Link>
              </li>
              <li>
                <Link href="/InDelhi">Car Rental in Delhi</Link>
              </li>
              <li>
                <Link href="/city/bangalore">Car Rental in Bangalore</Link>
              </li>
              <li>
                <Link href="/city/chennai">Car Rental in Chennai</Link>
              </li>
              <li>
                <Link href="/city/hyderabad">Car Rental in Hyderabad</Link>
              </li>
              <li>
                <Link href="/city/pune">Car Rental in Pune</Link>
              </li>
              <li>
                <Link href="/city/kolkata">Car Rental in Kolkata</Link>
              </li>
              <li>
                <Link href="/city/ahmedabad">Car Rental in Ahmedabad</Link>
              </li>
              <li>
                <Link className="link--accent" href="/city/jaipur">
                  Car Rental in Jaipur
                </Link>
              </li>
              <li>
                <Link href="/city/chandigarh">Car Rental in Chandigarh</Link>
              </li>
              <li>
                <Link href="/city/lucknow">Car Rental in Lucknow</Link>
              </li>
              <li>
                <Link href="/city/indore">Car Rental in Indore</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="More Cities">
            {/* <h4>More Cities</h4> */}
            <ul className="linklist">
              <li>
                <Link href="/city/surat">Car Rental in Surat</Link>
              </li>
              <li>
                <Link href="/city/nagpur">Car Rental in Nagpur</Link>
              </li>
              <li>
                <Link href="/city/coimbatore">Car Rental in Coimbatore</Link>
              </li>
              <li>
                <Link href="/city/vijayawada">Car Rental in Vijayawada</Link>
              </li>
              <li>
                <Link href="/city/vadodara">Car Rental in Vadodara</Link>
              </li>
              <li>
                <Link href="/city/bhopal">Car Rental in Bhopal</Link>
              </li>
              <li>
                <Link href="/city/visakhapatnam">
                  Car Rental in Visakhapatnam
                </Link>
              </li>
              <li>
                <Link href="/city/rajkot">Car Rental in Rajkot</Link>
              </li>
              <li>
                <Link href="/city/kanpur">Car Rental in Kanpur</Link>
              </li>
              <li>
                <Link href="/city/patna">Car Rental in Patna</Link>
              </li>
              <li>
                <Link href="/city/guwahati">Car Rental in Guwahati</Link>
              </li>
              <li>
                <Link href="/city/mysore">Car Rental in Mysore</Link>
              </li>
            </ul>
            {/* <Link className="viewall" href="/cities">
              View All Cities <span>→</span>
            </Link> */}
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
