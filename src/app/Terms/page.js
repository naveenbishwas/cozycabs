"use client";
import React from "react";
import "./term.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Terms = () => {
  return (
    <>
      <head>
        <title>
          Terms & Conditions | Cozy Cabz – Reliable Car Rental in India
        </title>
        <meta
          name="description"
          content="Read the official Terms & Conditions of Cozy Cabz. Learn about our booking policy, payments, cancellations, and travel guidelines for safe car rentals across India."
        />
        <meta
          property="og:title"
          content="Cozy Cabz Terms & Conditions – Transparent Car Rental Policies"
        />
        <meta
          property="og:description"
          content="Before booking your next ride with Cozy Cabz, read our updated terms covering usage, payments, liability, and customer support for a seamless travel experience."
        />
        <meta property="og:image" content="/terms-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cozycabz.com/terms" />
        <meta name="robots" content="index, follow" />
      </head>

      <Header />

      {/* ---- Hero Section ---- */}
      <section className="terms-hero">
        <div className="overlay">
          <h1>Terms & Conditions</h1>
          <p>
            Please read our terms carefully before submitting any enquiry or
            booking. Your continued use of our services constitutes acceptance
            of these terms.
          </p>
        </div>
      </section>

      {/* ---- Terms Wrapper ---- */}
      <section className="terms-wrapper terms-single">
        <h2>Understanding Our Policy</h2>
        <p className="intro-text">
          By using Cozy Cabz services or visiting our website, you agree to
          comply with our policies and operational guidelines. Please review the
          following terms before using our services.
        </p>

        <div className="terms-content-full">
          <h3>General Terms</h3>
          <p>
            All bookings are subject to vehicle availability, route feasibility,
            and company confirmation. Prices displayed may vary depending on
            distance, vehicle category, and real-time conditions. Bookings are
            confirmed only after verification by Cozy Cabz, and we reserve the
            right to modify or decline bookings based on operational
            feasibility.
          </p>

          <h3>Usage Guidelines</h3>
          <p>
            Passengers are expected to maintain appropriate behavior during
            travel. Any damage caused to the vehicle or its components due to
            passenger negligence will be chargeable. Smoking, consuming alcohol,
            or carrying illegal substances inside the vehicle is strictly
            prohibited.
          </p>

          <h3>Liability</h3>
          <p>
            Cozy Cabz will not be held responsible for delays, cancellations, or
            disruptions caused by events beyond our control, such as heavy
            traffic, weather conditions, or technical issues. Our liability is
            limited to the extent of the booking cost and does not cover
            indirect losses.
          </p>

          <h3>Payment and Refunds</h3>
          <p>
            Payments must be made through approved channels only. Refunds, if
            applicable, will be processed as per the cancellation policy and may
            take up to 7–10 business days. Additional charges may apply for
            waiting time, tolls, or changes in destination.
          </p>

          <h3>Customer Support</h3>
          <p>
            For clarification, concerns, or support, reach out to us via email
            at <b>info@cozycabz.com</b> or call our helpline at{" "}
            <b>+91 7387382383</b>. Our support team is available 24/7 to assist
            you with your travel needs.
          </p>

          <div className="terms-footer">
            <p>
              Thank you for choosing <strong>Cozy Cabz Pvt Ltd</strong>. Your
              comfort, safety, and satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Terms;
