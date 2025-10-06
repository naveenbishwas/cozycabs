import React from "react";
import "./refund.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <section className="legal-page">
        <h1>Refund & Cancellation Policy</h1>
        <p>
          We strive for transparency and fairness in every booking. Our refund
          and cancellation terms depend on the timing and type of service
          requested.
        </p>
        <h2>Cancellation Terms</h2>
        <ul>
          <li>
            Cancellations made 24 hours before pickup are eligible for a full or
            partial refund.
          </li>
          <li>
            Cancellations made within 24 hours may incur administrative charges.
          </li>
          <li>No refunds for no-shows or post-dispatch cancellations.</li>
        </ul>
        <h2>Refund Processing</h2>
        <p>
          Refunds are issued using the same payment method within 7–10 business
          days, depending on the bank’s processing time.
        </p>
        <h2>Service Cancellations by Cozy Cabz</h2>
        <p>
          In rare cases of operational cancellations, we will issue a full
          refund or arrange an alternative vehicle of equal category.
        </p>
        <p className="legal-footer">
          Contact <b>bookings@cozycabz.com</b> for refund queries.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};

export default RefundPolicy;
