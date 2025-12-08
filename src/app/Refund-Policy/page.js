"use client";
import React from "react";
import "./refund.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const RefundPolicy = () => {
  return (
    <>
      <head>
        <title>
          Refund & Cancellation Policy | CozyCabz Pvt Ltd – Transparent Travel
          Refunds
        </title>
        <meta
          name="description"
          content="Read CozyCabz Pvt Ltd’s refund and cancellation policy. Understand refund timelines, cancellation terms, and how we ensure transparent and fair travel bookings for all customers."
        />
      </head>

      <Header />

      {/* ---- Hero Section ---- */}
      <section className="refund-hero">
        <div className="overlay">
          <h1>Refund & Cancellation Policy</h1>
          <p>
            We value your trust and aim for a transparent, customer-friendly
            policy to handle refunds and cancellations efficiently.
          </p>
        </div>
      </section>

      {/* ---- Main Wrapper ---- */}
      <section className="refund-wrapper">
        <h2>Our Policy Guidelines</h2>
        <p className="intro-text">
          We strive for transparency and fairness in every booking. The refund
          and cancellation process depends on the service type and the timing of
          your cancellation request.
        </p>

        <div className="refund-content-full">
          <h3>Cancellation Terms</h3>
          <p>
            To ensure a fair and consistent process, our cancellation policy is
            based on notice time and service status at the time of cancellation:
          </p>
          <ul>
            <li>
              Cancellations made <strong>24 hours before pickup</strong> are
              eligible for a full or partial refund.
            </li>
            <li>
              Cancellations made <strong>within 24 hours</strong> of pickup may
              incur administrative charges.
            </li>
            <li>
              <strong>No refunds</strong> will be provided for no-shows or
              cancellations made after the vehicle has been dispatched.
            </li>
          </ul>

          <h3>Refund Processing</h3>
          <p>
            Refunds are processed through the original payment method within{" "}
            <strong>7–10 business days</strong>. The actual time may vary
            depending on your bank or payment gateway’s processing speed.
          </p>

          <h3>Service Cancellations by CozyCabz</h3>
          <p>
            In rare cases, if CozyCabz cancels a confirmed booking due to
            unforeseen operational reasons, we will either provide an equivalent
            vehicle category at no extra charge or issue a full refund
            immediately.
          </p>

          <h3>Contact for Assistance</h3>
          <p>
            For any refund-related queries or clarifications, please contact us
            at <b>bookings@cozycabz.com</b>. Our team is available to assist you
            throughout the process.
          </p>

          <div className="refund-footer">
            <p>
              Thank you for choosing <strong>CozyCabz Pvt Ltd</strong>. Your
              satisfaction and comfort remain our top priorities.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default RefundPolicy;
