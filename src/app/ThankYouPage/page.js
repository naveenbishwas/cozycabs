import React from "react";
import "./thankyou.css";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="page">
      {/* Background */}
      <div className="bg-image">
        <div className="bg-overlay"></div>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <div className="container">
          <div className="card-wrapper">
            {/* Decorative Curve */}
            <div className="curve"></div>

            {/* Card */}
            <div className="card">
              <h1 className="title">Thank You for Booking Your Ride!</h1>

              <p className="message">
                Your booking is confirmed! A smooth journey awaits you. Our team
                is finalizing the details and we will send you the driver and
                vehicle information shortly. Hope you have a great ride!
              </p>

              <div className="btn-wrap">
                <Link href="/">
                  <button className="download-btn">Back To Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
