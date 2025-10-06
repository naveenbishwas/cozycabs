import React from "react";
import "./support.css";
import SiteFooter from "../Components/Footer/page";
import Header from "../Components/Header/page";

const Support = () => {
  return (
    <>
      <Header />
      <section className="info-page">
        <h1>Customer Support</h1>
        <p>
          Need help? Our dedicated support team is here round-the-clock to
          ensure your Cozy Cabz experience is smooth and stress-free.
        </p>

        <h2>Common Support Topics</h2>
        <ul>
          <li>🔹 Modify or cancel your booking</li>
          <li>🔹 Request refund or trip invoice</li>
          <li>🔹 Report a lost item</li>
          <li>🔹 Feedback about drivers or service</li>
        </ul>

        <div className="support-grid">
          <div className="support-box">
            <h3>📞 Quick Help</h3>
            <p>
              Call us anytime at <b>+91 7387382383</b>
            </p>
          </div>

          <div className="support-box">
            <h3>💬 Chat Assistance</h3>
            <p>
              WhatsApp us: <b>+91 7387382383</b>
            </p>
          </div>

          <div className="support-box">
            <h3>✉️ Email Support</h3>
            <p>support@cozycabz.com</p>
          </div>
        </div>

        <p className="info-footer">
          Cozy Cabz Support — Fast, Friendly, and Always Available.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};

export default Support;
