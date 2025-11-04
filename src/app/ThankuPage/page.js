"use client";
import React from "react";
import Link from "next/link";
import "./thankyou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <h1 className="thankyou-title">🎉 Thank You!</h1>
        <p className="thankyou-message">
          Your submission has been received successfully. We’ll get back to you
          soon!
        </p>
        <Link href="/" className="thankyou-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
