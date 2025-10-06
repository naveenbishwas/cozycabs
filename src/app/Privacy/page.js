import React from "react";
import "./privacy.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="legal-page">
        <h1>Privacy Policy</h1>
        <p>
          At Cozy Cabz, we respect your privacy and are committed to protecting
          your personal information. This policy explains how we collect, use,
          and safeguard your data.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Name, contact number, and email provided during enquiry.</li>
          <li>Trip details such as city, date, and preferred vehicle type.</li>
        </ul>
        <h2>How We Use Information</h2>
        <p>
          We use your information to respond to enquiries, process bookings, and
          improve our service experience. We never sell or misuse your data.
        </p>
        <h2>Data Security</h2>
        <p>
          We maintain strict technical and administrative safeguards to protect
          your information. Data is stored securely and retained only as
          required by law.
        </p>
        <p className="legal-footer">
          For data requests, email us at <b>support@cozycabz.com</b>.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};

export default PrivacyPolicy;
