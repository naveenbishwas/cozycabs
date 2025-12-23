"use client";
import React from "react";
import "./support.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Support = () => {
  return (
    <>
      <head>
        <title>Customer Support | 24×7 Help & Assistance – CozyCabz</title>
        <meta
          name="description"
          content="Need help with your CozyCabz booking, refund, or travel query? Contact our 24×7 customer support via call, WhatsApp, or email for fast, friendly assistance."
        />
      </head>

      <Header />

      {/* ---- Hero Section ---- */}
      <section className="support-hero">
        <div className="overlay">
          <h1>Customer Support</h1>
          <p>
            Need help? Our support team is available 24/7 to make your CozyCabz
            experience smooth, safe, and stress-free.
          </p>
        </div>
      </section>

      {/* ---- Main Section ---- */}
      <section className="support-wrapper">
        <h2>We’re Here to Help</h2>
        <p className="intro-text">
          Whether it’s about booking, refund, or feedback — we’re just a message
          away.
        </p>

        <div className="support-main">
          {/* ---- Left Info ---- */}
          <div className="support-info">
            <h3>Common Support Topics</h3>
            <ul>
              <li>🔹 Modify or cancel your booking</li>
              <li>🔹 Request refund or trip invoice</li>
              <li>🔹 Report a lost item</li>
              <li>🔹 Feedback about drivers or service</li>
            </ul>

            <p>
              Our goal is to resolve every query quickly and effectively so that
              you can focus on your journey while we handle the rest.
            </p>
          </div>

          {/* ---- Right Grid ---- */}
          <div className="support-grid">
            <div className="support-card">
              <h4>📞 Quick Help</h4>
              <p>
                Call us anytime at <b>+91 9899132460</b>
              </p>
            </div>

            <div className="support-card">
              <h4>💬 Chat Assistance</h4>
              <p>
                WhatsApp us: <b>+91 9899132460</b>
              </p>
            </div>

            <div className="support-card">
              <h4>✉️ Email Support</h4>
              <p>
                Reach us at <b>support@cozycabz.com</b>
              </p>
            </div>
          </div>
        </div>

        <div className="support-footer">
          <p>
            CozyCabz Support —{" "}
            <strong>Fast, Friendly, and Always Available.</strong>
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Support;
