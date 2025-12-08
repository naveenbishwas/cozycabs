"use client";
import React from "react";
import "./privacy.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const PrivacyPolicy = () => {
  return (
    <>
      <head>
        <title>
          Privacy Policy | CozyCabz – Safe & Secure Car Rental in India
        </title>
        <meta
          name="description"
          content="Read CozyCabz Privacy Policy. Learn how we collect, use, and protect your personal data while providing trusted car rental services across India."
        />
        <meta
          property="og:title"
          content="CozyCabz Privacy Policy – Your Data, Our Responsibility"
        />
        <meta
          property="og:description"
          content="At CozyCabz, your privacy matters. Explore how we safeguard customer data with transparency and industry-standard security practices."
        />
        <meta property="og:image" content="/privacy-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cozycabz.com/privacy-policy"
        />
        <meta name="robots" content="index, follow" />
      </head>

      <Header />

      {/* ---- Hero Section ---- */}
      <section className="privacy-hero">
        <div className="overlay">
          <h1>Privacy Policy</h1>
          <p>
            At CozyCabz, we value your trust and are committed to protecting
            your personal information with complete transparency.
          </p>
        </div>
      </section>

      {/* ---- Main Content ---- */}
      <section className="privacy-wrapper">
        <h2>Our Commitment to Your Privacy</h2>
        <p className="intro-text">
          Your privacy is important to us. This policy explains how we collect,
          use, and safeguard your personal data when you interact with CozyCabz
          services.
        </p>

        <div className="privacy-content">
          <h3>Information We Collect</h3>
          <p>
            We collect only the data required to provide a smooth and reliable
            experience when booking or enquiring about our services. This may
            include:
          </p>
          <ul>
            <li>
              Your name, contact number, and email address provided during
              enquiry.
            </li>
            <li>
              Trip details such as city, travel date, and preferred vehicle
              type.
            </li>
            <li>
              Feedback, support requests, or communication details submitted
              through our platform.
            </li>
          </ul>

          <h3>How We Use This Information</h3>
          <p>
            The information we collect is used solely to enhance your experience
            and ensure efficient service delivery:
          </p>
          <ul>
            <li>To respond to booking requests and customer enquiries.</li>
            <li>To manage and confirm trip schedules efficiently.</li>
            <li>
              To improve our website, customer support, and user experience.
            </li>
          </ul>
          <p>
            We do not share, sell, or rent your personal information to third
            parties under any circumstances.
          </p>

          <h3>Data Security</h3>
          <p>
            We employ advanced technical and administrative safeguards to
            protect your personal information. All data is securely stored and
            accessed only by authorized personnel for operational purposes.
          </p>

          <h3>Retention & Deletion</h3>
          <p>
            Your personal data is retained only for as long as necessary to
            fulfill the purpose it was collected for or as required by law. You
            can request data deletion or modification anytime.
          </p>

          <h3>Contact for Privacy Queries</h3>
          <p>
            If you have questions regarding your personal data, contact our
            privacy team at <b>support@cozycabz.com</b>.
          </p>

          <div className="privacy-footer">
            <p>
              Thank you for trusting <strong>CozyCabz Pvt Ltd</strong>. We are
              committed to keeping your travel experience safe and secure.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default PrivacyPolicy;
