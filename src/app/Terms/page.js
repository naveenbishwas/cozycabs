import React from "react";
import "./term.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Terms = () => {
  return (
    <>
      <Header />
      <section className="legal-page">
        <h1>Terms & Conditions</h1>
        <p>
          By using Cozy Cabz services or visiting our website, you agree to
          comply with our policies and operational guidelines. Please read these
          terms carefully before submitting any enquiry or booking.
        </p>
        <h2>General Terms</h2>
        <p>
          All bookings are subject to vehicle availability, route feasibility,
          and company confirmation. Prices shown may vary depending on distance,
          vehicle category, and real-time conditions.
        </p>
        <h2>Usage Guidelines</h2>
        <p>
          Passengers are expected to maintain proper behavior during travel. Any
          damage caused to the vehicle by negligence will be chargeable.
        </p>
        <h2>Liability</h2>
        <p>
          Cozy Cabz will not be held responsible for delays or disruptions
          caused by factors beyond control such as traffic, weather, or
          technical issues.
        </p>
        <p className="legal-footer">
          For clarification, contact us at <b>info@cozycabz.com</b>.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};

export default Terms;
