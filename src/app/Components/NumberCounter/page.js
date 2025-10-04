"use client";

import React, { useEffect, useRef } from "react";
import "./number.css";

const NumberCounter = () => {
  const useAboutCountersObserver = () => {
    const rootRef = useRef(null);
    const fired = useRef(false);

    // Counter Animation
    function runCounter(el, to) {
      const duration = 1400;
      let startTs = null;
      const step = (ts) => {
        if (!startTs) startTs = ts;
        const p = Math.min((ts - startTs) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(to * eased);
        el.textContent = val + "+";
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    useEffect(() => {
      if (!rootRef.current) return;
      const io = new IntersectionObserver(
        (entries) => {
          if (!fired.current && entries.some((e) => e.isIntersecting)) {
            fired.current = true;
            rootRef.current
              .querySelectorAll("[data-counter-to]")
              .forEach((node) => {
                const to =
                  parseInt(node.getAttribute("data-counter-to"), 10) || 0;
                runCounter(node, to);
              });
          }
        },
        { threshold: 0.35 }
      );
      io.observe(rootRef.current);
      return () => io.disconnect();
    }, []);
    return rootRef;
  };

  const aboutCountersRef = useAboutCountersObserver();

  return (
    <div>
      <section
        className="innova-number-stats"
        ref={aboutCountersRef}
        id="about"
      >
        <div className="innova-about-stats">
          <div className="innova-stat">
            <div className="innova-stat-num" data-counter-to="250">
              0+
            </div>
            <div className="innova-stat-label">Cities Covered Around India</div>
          </div>
          <div className="innova-stat">
            <div className="innova-stat-num" data-counter-to="1000">
              0+
            </div>
            <div className="innova-stat-label">Cabs Available Everyday</div>
          </div>
          <div className="innova-stat">
            <div className="innova-stat-num" data-counter-to="10">
              0+
            </div>
            <div className="innova-stat-label">
              Years of Experience in the Industry
            </div>
          </div>
          <div className="innova-stat">
            <div className="innova-stat-num" data-counter-to="5000">
              0+
            </div>
            <div className="innova-stat-label">Happy Customers</div>
          </div>
          <div className="innova-stat">
            <div className="innova-stat-num" data-counter-to="1200">
              0+
            </div>
            <div className="innova-stat-label">
              Vendor Covering the Entire Nation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NumberCounter;
