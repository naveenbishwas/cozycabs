"use client";
import React from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
      d="M6 2h4l1 5-3 2a14 14 0 007 7l2-3 5 1v4c0 1-1 2-2 2A18 18 0 014 4C4 3 5 2 6 2z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
      d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"
      stroke="#fff"
      strokeWidth="2"
    />
    <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="2" />
  </svg>
);

const CarIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
      d="M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5v5h-2a2 2 0 01-4 0H9a2 2 0 01-4 0H3v-5z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="18" r="1.6" fill="#fff" />
    <circle cx="16" cy="18" r="1.6" fill="#fff" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
    <path
      d="M8 12l3 3 5-5"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
    <path
      d="M12 7v5l3 2"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function StepCard({ color, icon, step, title, text }) {
  return (
    <div className="step">
      <div className="badge" style={{ backgroundColor: color }}>
        <div className="badgeIcon">{icon}</div>
        <span className="badgeStep">Step {step}</span>
      </div>

      <div className="descCard">
        <h3 className="descTitle">{title}</h3>
        <p className="descText">{text}</p>
      </div>
    </div>
  );
}

const Howto = () => {
  return (
    <section className="howto">
      <div className="howtoWrap">
        <h2 className="howtoTitle">How to Book Your Ride</h2>
        <p className="howtoSubtitle">
          Simple, fast, and transparent—just follow these 5 steps.
        </p>

        <div className="connector" aria-hidden="true" />

        <div className="stepsGrid">
          <StepCard
            color="#2563EB"
            icon={<PhoneIcon />}
            step={1}
            title="Contact Our Team"
            text="Call us, WhatsApp, or register online to begin your cab booking."
          />
          <StepCard
            color="#16A34A"
            icon={<PinIcon />}
            step={2}
            title="Share Your Trip Details"
            text="Provide pickup point, drop location, travel date, time, and any special requests."
          />
          <StepCard
            color="#8B5CF6"
            icon={<CarIcon />}
            step={3}
            title="Select Your Car"
            text="Choose from hatchbacks, sedans, SUVs, or luxury cars, and get the fare instantly."
          />
          <StepCard
            color="#F97316"
            icon={<CheckIcon />}
            step={4}
            title="Get Confirmation"
            text="Receive booking confirmation with driver details and complete fare information."
          />
          <StepCard
            color="#EF4444"
            icon={<ClockIcon />}
            step={5}
            title="Wait for Arrival"
            text="Relax—your Cozy Cabz driver will arrive on time at the scheduled location."
          />
        </div>
      </div>
    </section>
  );
};

export default Howto;
