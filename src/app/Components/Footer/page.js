"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  function handleNewsletter(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Newsletter:", data);
    alert("Thanks! (Check console for captured data)");
  }

  return (
    <footer className="site-footer" aria-labelledby="footer-cta">
      <div className="ft-container">
        {/* Big headline */}
        <h2 id="footer-cta" className="ft-hero">
          Elevate Your Car’s Look With A
          <br /> Fresh Wash
        </h2>

        {/* 4-column grid */}
        <div className="ft-grid">
          {/* Address */}
          <section
            className="ft-col ft-col--border"
            aria-labelledby="ft-address-h"
          >
            <h3 id="ft-address-h" className="ft-title">
              Address
            </h3>

            <address className="ft-address">
              1353 locust st, kansas
              <br /> city mo 6452 berline
              <br /> 81566
            </address>

            <a href="mailto:abc@gmail.com" className="ft-link">
              abc@gmail.com
            </a>
            <br />
            <a href="tel:+18001231234" className="ft-link">
              +1800-123-1234
            </a>
          </section>

          {/* Navigation */}
          <nav className="ft-col ft-col--border" aria-labelledby="ft-nav-h">
            <h3 id="ft-nav-h" className="ft-title">
              Navigation
            </h3>
            <ul className="ft-list">
              <li>
                <a href="#" className="ft-link">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="ft-link">
                  License
                </a>
              </li>
              <li>
                <a href="#about" className="ft-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="ft-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <section
            className="ft-col ft-col--border"
            aria-labelledby="ft-social-h"
          >
            <h3 id="ft-social-h" className="ft-title">
              Social Media
            </h3>
            <ul className="ft-list">
              <li>
                <a href="#" className="ft-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="ft-link">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="ft-link">
                  Dribble
                </a>
              </li>
              <li>
                <a href="#" className="ft-link">
                  Instagram
                </a>
              </li>
            </ul>
          </section>

          {/* Newsletter */}
          <section className="ft-col" aria-labelledby="ft-news-h">
            <h3 id="ft-news-h" className="ft-title">
              Newsletter
            </h3>

            <form className="ft-newsform" onSubmit={handleNewsletter}>
              <label className="ft-input">
                <span className="ft-input-icon">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </label>

              <label className="ft-check">
                <input type="checkbox" name="agree" required />
                <span className="ft-checkbox" aria-hidden="true" />
                <span className="ft-checktext">
                  I Agree{" "}
                  <a href="#" className="ft-link ft-link--underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button className="ft-submit" type="submit">
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <small>
            © Powered by{" "}
            <a className="ft-link" href="https://webflow.com">
              Webflow
            </a>{" "}
            created by{" "}
            <a className="ft-link" href="https://peacefulqode.com">
              PeacefulQode
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

/* tiny mail icon */
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8"
        fill="currentColor"
      />
    </svg>
  );
}
