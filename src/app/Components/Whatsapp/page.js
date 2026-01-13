"use client";
import React, { useEffect, useState } from "react";

const Whatsapp = () => {
  const [showBubble, setShowBubble] = useState(true);
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    // Hide typing bubble after 9s
    const bubbleTimer = setTimeout(() => setShowBubble(false), 9000);

    // Stop bounce after 12s
    const bounceTimer = setTimeout(() => setBounce(false), 12000);

    return () => {
      clearTimeout(bubbleTimer);
      clearTimeout(bounceTimer);
    };
  }, []);

  return (
    <>
      <div className="wa-container">
        {/* Bubble */}
        {showBubble && (
          <div className="wa-typing">
            <div className="bubble">
              Chat with us
              <span className="typing-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
      href="https://wa.me/9220994735?text=I%20want%20to%20book%20a%20cab%20for%20rental.%20Please%20share%20availability%20and%20price."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`wa-btn ${bounce ? "animate-bounce" : ""}`}
        >
          {/* WhatsApp SVG Icon */}
          <svg className="wa-icon" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M20.52 3.48A11.86 11.86 0 0 0 12 .5C6.21.5 1.3 4.84.25 10.01c-.5 2.23.13 4.6 1.96 6.43L.5 23.5l7.41-1.78a11.85 11.85 0 0 0 4.1.72c5.79 0 10.7-4.34 11.75-9.51.55-2.46.08-5.03-1.2-7.45zM12 21.5c-1.2 0-2.38-.2-3.48-.6l-.25-.1-4.44 1.07 1.07-4.33-.09-.26A8.5 8.5 0 1 1 20.5 12a8.39 8.39 0 0 1-8.5 9.5z"
            />
            <path
              fill="#fff"
              d="M17.2 14.1c-.3-.15-1.8-.89-2.07-.99-.27-.1-.46-.15-.66.15s-.76.99-.93 1.2c-.17.21-.33.24-.62.09-.3-.15-1.14-.42-2.17-1.34-.8-.7-1.34-1.56-1.5-1.86-.16-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.16.2-.28.3-.47.09-.19.04-.36-.02-.5-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5-.17 0-.36 0-.55 0-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.82 1.17 3.02.14.2 2.02 3.18 4.9 4.46 2.88 1.28 2.88.85 3.4.8.52-.05 1.69-.69 1.93-1.36.24-.66.24-1.22.17-1.36-.06-.14-.23-.19-.53-.33z"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
