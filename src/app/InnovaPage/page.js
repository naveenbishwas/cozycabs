// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import SiteFooter from "../Components/Footer/page";
// import Header from "../Components/Header/page";
// import Image from "next/image";
// import "./Innova.css";

// const InnovaPage = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

//   // Counter Animation
//   function runCounter(el, to) {
//     const duration = 1400;
//     let startTs = null;
//     const step = (ts) => {
//       if (!startTs) startTs = ts;
//       const p = Math.min((ts - startTs) / duration, 1);
//       const eased = 1 - Math.pow(1 - p, 3);
//       const val = Math.floor(to * eased);
//       el.textContent = val + "+";
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }

//   const useAboutCountersObserver = () => {
//     const rootRef = useRef(null);
//     const fired = useRef(false);

//     useEffect(() => {
//       if (!rootRef.current) return;
//       const io = new IntersectionObserver(
//         (entries) => {
//           if (!fired.current && entries.some((e) => e.isIntersecting)) {
//             fired.current = true;
//             rootRef.current
//               .querySelectorAll("[data-counter-to]")
//               .forEach((node) => {
//                 const to =
//                   parseInt(node.getAttribute("data-counter-to"), 10) || 0;
//                 runCounter(node, to);
//               });
//           }
//         },
//         { threshold: 0.35 }
//       );
//       io.observe(rootRef.current);
//       return () => io.disconnect();
//     }, []);
//     return rootRef;
//   };

//   const aboutCountersRef = useAboutCountersObserver();

//   const specs = [
//     { icon: "👥", title: "Seating Capacity", detail: "7 + 1 Passengers" },
//     { icon: "⛽", title: "Fuel Type", detail: "Diesel & Petrol" },
//     { icon: "⚙️", title: "Transmission", detail: "Manual & Automatic" },
//     { icon: "⏱️", title: "Engine", detail: "2.4L & 2.7L" },
//   ];

//   const benefits = [
//     { icon: "✓", text: "Professional chauffeurs with local expertise" },
//     { icon: "✓", text: "Well-maintained & sanitized vehicles" },
//     { icon: "✓", text: "Flexible booking options (hourly/daily/monthly)" },
//     { icon: "✓", text: "24/7 customer support" },
//   ];

//   const faqs = [
//     {
//       q: "What services are included in the Corporate Program?",
//       a: "We cover everything from daily office commutes and airport transfers to outstation rentals, event transportation, and monthly packages. Each account also gets a dedicated manager and customized reporting.",
//     },
//     {
//       q: "Can we get consolidated monthly invoices?",
//       a: "Yes. We provide a single monthly invoice with complete trip details, usage summaries, and expense breakdowns to make your finance team's job easier.",
//     },
//     {
//       q: "Do you offer volume or long-term discounts?",
//       a: "Absolutely. Companies with high booking volumes or long-term partnerships benefit from tailored pricing plans and flexible payment terms.",
//     },
//     {
//       q: "How does our team manage and track bookings?",
//       a: "Bookings can be made via web, app, or WhatsApp. You'll also have an account manager for urgent changes, plus dashboards to track trips and expenses in real time.",
//     },
//     {
//       q: "Are vehicles and drivers reliable and certified?",
//       a: "All vehicles are regularly serviced and fully insured. Drivers go through background verification, corporate etiquette training, and follow strict safety and punctuality standards.",
//     },
//   ];

//   const carImages = [
//     "/innova-3.png",
//     "/innova-6.png",
//     "/innova-1.png",
//     "/innova-10.png",
//   ];

//   // Reusable Feature Card
//   function Feature({ image, title, text }) {
//     return (
//       <div className="feature-card">
//         <div className="feature-icon">
//           <Image src={image} width={50} height={50} unoptimized alt={title} />
//         </div>
//         <h3 className="feature-title">{title}</h3>
//         <p className="feature-text">{text}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="innova-page">
//       <Header />

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <div className="hero-badge">Premium MPV Rental</div>
//           <h1 className="hero-title">
//             Innova <span>Car Rental</span> in Delhi
//           </h1>
//           <p className="hero-subtitle">
//             Experience premium comfort and reliability with India's most trusted
//             MPV. Perfect for family trips, corporate travel, and special
//             occasions.
//           </p>
//           <div className="feature-tags">
//             {["👥 7+1 Seater", "🛡️ Fully Insured", "⏰ 24/7 Available"].map(
//               (f, i) => (
//                 <span key={i} className="feature-tag">
//                   {f}
//                 </span>
//               )
//             )}
//           </div>
//           <div className="cta-buttons">
//             <a href="tel:+917387382383" className="btn-primary">
//               📞 Call: 7387382383
//             </a>
//             <a href="#booking" className="btn-outline">
//               Book Online →
//             </a>
//           </div>
//         </div>
//         <div className="hero-image-div">
//           <div className="hero-image">
//             <Image
//               className="innova-img"
//               src="./innova-9.jpg"
//               width={500}
//               height={400}
//               alt="innova images"
//               unoptimized
//             />
//           </div>
//         </div>
//       </section>

//       {/* Number Counters */}
//       <section className="number-stats" ref={aboutCountersRef} id="about">
//         <div className="about-stats">
//           <div className="stat">
//             <div className="stat-num" data-counter-to="250">
//               0+
//             </div>
//             <div className="stat-label">Cities Covered Around India</div>
//           </div>
//           <div className="stat">
//             <div className="stat-num" data-counter-to="1000">
//               0+
//             </div>
//             <div className="stat-label">Cabs Available Everyday</div>
//           </div>
//           <div className="stat">
//             <div className="stat-num" data-counter-to="10">
//               0+
//             </div>
//             <div className="stat-label">
//               Years of Experience in the Industry
//             </div>
//           </div>
//           <div className="stat">
//             <div className="stat-num" data-counter-to="5000">
//               0+
//             </div>
//             <div className="stat-label">Happy Customers</div>
//           </div>
//           <div className="stat">
//             <div className="stat-num" data-counter-to="1200">
//               0+
//             </div>
//             <div className="stat-label">Vendor Covering the Entire Nation</div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="gallery-section">
//         <h1 className="section-title">
//           Toyota Innova Crysta <span>Rental Service</span> in Delhi
//         </h1>
//         <div className="gallery-content">
//           <div className="gallery-main">
//             <Image
//               src="./innova-5.jpg"
//               width={0}
//               height={0}
//               unoptimized
//               alt="car-images"
//             />
//           </div>
//           <div className="gallery-grid">
//             {carImages.map((icon, i) => (
//               <div key={i} className="gallery-thumb">
//                 <Image
//                   src={icon}
//                   alt={`car-${i}`}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   unoptimized
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section className="specs-grid">
//         {specs.map((item, index) => (
//           <div key={index} className="spec-card">
//             <div className="spec-icon">{item.icon}</div>
//             <h3 className="spec-title">{item.title}</h3>
//             <p className="spec-detail">{item.detail}</p>
//           </div>
//         ))}
//       </section>

//       {/* Content Section */}
//       <section className="content-section">
//         <h2 className="description-heading">
//           Experience Unmatched Comfort with{" "}
//           <span>Toyota Innova Crysta Rental</span> Service
//         </h2>
//         <p>
//           Delhi, a city that is a mixture of history, culture, and modernity,
//           requires a comfortable travel solution. Whether you're planning to
//           visit iconic landmarks like the Red Fort, India Gate, or Humayun's
//           Tomb or exploring Delhi's busy markets and business hubs, renting an
//           Innova car in Delhi offers the perfect combination of comfort,
//           convenience, and efficiency.
//         </p>
//         <div className="highlight-box">
//           <p>
//             The Toyota Innova, famous for its spacious interiors, smooth ride
//             quality, and luxurious, is a popular choice among travelers. With
//             the capacity to comfortably accommodate up to seven passengers, it
//             is ideal for families, corporate teams, and tourist groups..
//           </p>
//         </div>
//         <p>
//           Rental services in Delhi provide well-maintained Innovas with
//           professional chauffeurs who are adept at navigating the city's traffic
//           and routes. Whether you need a car for airport transfers, city tours,
//           or long-distance travel to nearby attractions like Agra or Jaipur,
//           Innova car rentals cater to all your requirements.
//         </p>
//         <h3>Innova Crysta: Options to Suit Every Journey</h3>
//         <p>
//           Traveling in Delhi becomes a breeze with the versatile Toyota lineup,
//           which includes the Innova and Innova Crysta. Each vehicle caters to
//           different travel needs, from local commutes to long journeys, ensuring
//           that your experience is nothing short of exceptional.
//         </p>
//       </section>

//       {/* Why Choose Us */}
//       <section className="why">
//         <div className="why-wrap">
//           <header className="why-head">
//             <h2>What Makes Us the Best Choice</h2>
//             <p>
//               Our commitment to excellence and customer satisfaction sets us
//               apart.
//             </p>
//           </header>
//           <div className="why-grid">
//             <Feature
//               image="./known.png"
//               title="Well Known for Quality Services"
//               text="Recognized across India for our commitment to excellence and premium service standards."
//             />
//             <Feature
//               image="/postive.png"
//               title="Earned Positive Reviews from All Clients"
//               text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
//             />
//             <Feature
//               image="/ntework.png"
//               title="The Largest Network of Drivers"
//               text="Extensive network of professional, verified drivers covering every major city in India."
//             />
//           </div>
//           <div className="why-grid">
//             <Feature
//               image="/safe.png"
//               title="Safe & Secure"
//               text="Background-verified partners and insured moves for complete peace of mind."
//             />
//             <Feature
//               image="/nationwide.png"
//               title="Nationwide Coverage"
//               text="Strong presence with on-ground support in metros and tier-2/3 cities."
//             />
//             <Feature
//               image="/transparent.png"
//               title="Transparent Pricing"
//               text="Clear quotes, no hidden charges—ever."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       <section id="booking" className="booking-section">
//         <div className="booking-header">
//           <h2>Book Your Toyota Innova</h2>
//           <p>
//             Fill in the details below and we'll get back with the best quote
//           </p>
//         </div>
//         <form className="booking-form">
//           <div className="form-grid">
//             <div>
//               <label>Pickup Location</label>
//               <input type="text" placeholder="Enter pickup location" />
//             </div>
//             <div>
//               <label>Drop Location</label>
//               <input type="text" placeholder="Enter drop location" />
//             </div>
//           </div>
//           <div className="form-grid">
//             <div>
//               <label>Pickup Date</label>
//               <input type="date" />
//             </div>
//             <div>
//               <label>Pickup Time</label>
//               <input type="time" />
//             </div>
//           </div>
//           <div className="form-grid">
//             <div>
//               <label>Return Date</label>
//               <input type="date" />
//             </div>
//             <div>
//               <label>Return Time</label>
//               <input type="time" />
//             </div>
//           </div>
//           <div className="form-grid">
//             <div>
//               <label>Full Name</label>
//               <input type="text" placeholder="Enter your full name" />
//             </div>
//             <div>
//               <label>Phone Number</label>
//               <input type="tel" placeholder="+91 9999999999" />
//             </div>
//           </div>
//           <div>
//             <label>Email Address</label>
//             <input type="email" placeholder="Enter your email" />
//           </div>
//           <div>
//             <label>Special Requirements</label>
//             <textarea placeholder="Any special requirements..." />
//           </div>
//           <div className="cta-buttons">
//             <button type="submit" className="btn-primary">
//               Get Instant Quote
//             </button>
//             <a href="tel:+919999999999" className="btn-outline">
//               📞 Call Now
//             </a>
//           </div>
//         </form>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <div className="faq-header">
//           <h2>Frequently Asked Questions</h2>
//           <p>Answers to the most common questions...</p>
//         </div>
//         <div>
//           {faqs.map((item, i) => {
//             const open = openIndex === i;
//             return (
//               <div key={i} className={`faq-item ${open ? "open" : ""}`}>
//                 <button onClick={() => toggle(i)} className="faq-question">
//                   <span>{item.q}</span>
//                   <svg
//                     className={`faq-icon ${open ? "rotated" : ""}`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     // class="size-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </button>
//                 <div className={`faq-answer ${open ? "show" : ""}`}>
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <SiteFooter />
//     </div>
//   );
// };

// export default InnovaPage;

"use client";

import React, { useEffect, useRef, useState } from "react";
import SiteFooter from "../Components/Footer/page";
import Header from "../Components/Header/page";
import Image from "next/image";
import "./Innova.css";

const InnovaPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

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

  const useAboutCountersObserver = () => {
    const rootRef = useRef(null);
    const fired = useRef(false);

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

  const specs = [
    { icon: "👥", title: "Seating Capacity", detail: "7 + 1 Passengers" },
    { icon: "⛽", title: "Fuel Type", detail: "Diesel & Petrol" },
    { icon: "⚙️", title: "Transmission", detail: "Manual & Automatic" },
    { icon: "⏱️", title: "Engine", detail: "2.4L & 2.7L" },
  ];

  const faqs = [
    {
      q: "What services are included in the Corporate Program?",
      a: "We cover everything from daily office commutes and airport transfers to outstation rentals, event transportation, and monthly packages. Each account also gets a dedicated manager and customized reporting.",
    },
    {
      q: "Can we get consolidated monthly invoices?",
      a: "Yes. We provide a single monthly invoice with complete trip details, usage summaries, and expense breakdowns to make your finance team's job easier.",
    },
    {
      q: "Do you offer volume or long-term discounts?",
      a: "Absolutely. Companies with high booking volumes or long-term partnerships benefit from tailored pricing plans and flexible payment terms.",
    },
    {
      q: "How does our team manage and track bookings?",
      a: "Bookings can be made via web, app, or WhatsApp. You'll also have an account manager for urgent changes, plus dashboards to track trips and expenses in real time.",
    },
    {
      q: "Are vehicles and drivers reliable and certified?",
      a: "All vehicles are regularly serviced and fully insured. Drivers go through background verification, corporate etiquette training, and follow strict safety and punctuality standards.",
    },
  ];

  const carImages = [
    "/innova-3.png",
    "/innova-6.png",
    "/innova-1.png",
    "/innova-10.png",
  ];

  // Reusable Feature Card
  function Feature({ image, title, text }) {
    return (
      <div className="innova-feature-card">
        <div className="innova-feature-icon">
          <Image src={image} width={50} height={50} unoptimized alt={title} />
        </div>
        <h3 className="innova-feature-title">{title}</h3>
        <p className="innova-feature-text">{text}</p>
      </div>
    );
  }

  return (
    <div className="innova-page">
      <Header />

      {/* Hero Section */}
      <section className="innova-hero-section">
        <div className="innova-hero-content">
          <div className="innova-hero-badge">Premium MPV Rental</div>
          <h1 className="innova-hero-title">
            Innova <span>Car Rental</span> in Delhi
          </h1>
          <p className="innova-hero-subtitle">
            Experience premium comfort and reliability with India's most trusted
            MPV. Perfect for family trips, corporate travel, and special
            occasions.
          </p>
          <div className="innova-feature-tags">
            {["👥 7+1 Seater", "🛡️ Fully Insured", "⏰ 24/7 Available"].map(
              (f, i) => (
                <span key={i} className="innova-feature-tag">
                  {f}
                </span>
              )
            )}
          </div>
          <div className="innova-cta-buttons">
            <a href="tel:+917387382383" className="innova-btn-primary">
              📞 Call: 7387382383
            </a>
            <a href="#booking" className="innova-btn-outline">
              Book Online →
            </a>
          </div>
        </div>
        <div className="innova-hero-image-div">
          <div className="innova-hero-image">
            <Image
              className="innova-img"
              src="./innova-9.jpg"
              width={500}
              height={400}
              alt="innova images"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Number Counters */}
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

      {/* Gallery Section */}
      <section className="innova-gallery-section">
        <h1 className="innova-section-title">
          Toyota Innova Crysta <span>Rental Service</span> in Delhi
        </h1>
        <div className="innova-gallery-content">
          <div className="innova-gallery-main">
            <Image
              src="./innova-5.jpg"
              width={0}
              height={0}
              unoptimized
              alt="car-images"
            />
          </div>
          <div className="innova-gallery-grid">
            {carImages.map((icon, i) => (
              <div key={i} className="innova-gallery-thumb">
                <Image
                  src={icon}
                  alt={`car-${i}`}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="innova-specs-grid">
        {specs.map((item, index) => (
          <div key={index} className="innova-spec-card">
            <div className="innova-spec-icon">{item.icon}</div>
            <h3 className="innova-spec-title">{item.title}</h3>
            <p className="innova-spec-detail">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Content Section */}
      <section className="innova-content-section">
        <h2 className="innova-description-heading">
          Experience Unmatched Comfort with{" "}
          <span>Toyota Innova Crysta Rental</span> Service
        </h2>
        <p>
          Delhi, a city that is a mixture of history, culture, and modernity,
          requires a comfortable travel solution. Whether you're planning to
          visit iconic landmarks like the Red Fort, India Gate, or Humayun's
          Tomb or exploring Delhi's busy markets and business hubs, renting an
          Innova car in Delhi offers the perfect combination of comfort,
          convenience, and efficiency.
        </p>
        <div className="innova-highlight-box">
          <p>
            The Toyota Innova, famous for its spacious interiors, smooth ride
            quality, and luxurious, is a popular choice among travelers. With
            the capacity to comfortably accommodate up to seven passengers, it
            is ideal for families, corporate teams, and tourist groups..
          </p>
        </div>
        <p>
          Rental services in Delhi provide well-maintained Innovas with
          professional chauffeurs who are adept at navigating the city's traffic
          and routes. Whether you need a car for airport transfers, city tours,
          or long-distance travel to nearby attractions like Agra or Jaipur,
          Innova car rentals cater to all your requirements.
        </p>
        <h3>Innova Crysta: Options to Suit Every Journey</h3>
        <p>
          Traveling in Delhi becomes a breeze with the versatile Toyota lineup,
          which includes the Innova and Innova Crysta. Each vehicle caters to
          different travel needs, from local commutes to long journeys, ensuring
          that your experience is nothing short of exceptional.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="innova-why">
        <div className="innova-why-wrap">
          <header className="innova-why-head">
            <h2>What Makes Us the Best Choice</h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart.
            </p>
          </header>
          <div className="innova-why-grid">
            <Feature
              image="./known.png"
              title="Well Known for Quality Services"
              text="Recognized across India for our commitment to excellence and premium service standards."
            />
            <Feature
              image="/postive.png"
              title="Earned Positive Reviews from All Clients"
              text="Consistent 5-star ratings and testimonials from thousands of satisfied customers."
            />
            <Feature
              image="/ntework.png"
              title="The Largest Network of Drivers"
              text="Extensive network of professional, verified drivers covering every major city in India."
            />
          </div>
          <div className="innova-why-grid">
            <Feature
              image="/safe.png"
              title="Safe & Secure"
              text="Background-verified partners and insured moves for complete peace of mind."
            />
            <Feature
              image="/nationwide.png"
              title="Nationwide Coverage"
              text="Strong presence with on-ground support in metros and tier-2/3 cities."
            />
            <Feature
              image="/transparent.png"
              title="Transparent Pricing"
              text="Clear quotes, no hidden charges—ever."
            />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="innova-booking-section">
        <div className="innova-booking-header">
          <h2>Book Your Toyota Innova</h2>
          <p>
            Fill in the details below and we'll get back with the best quote
          </p>
        </div>
        <form className="innova-booking-form">
          <div className="innova-form-grid">
            <div>
              <label>Pickup Location</label>
              <input type="text" placeholder="Enter pickup location" />
            </div>
            <div>
              <label>Drop Location</label>
              <input type="text" placeholder="Enter drop location" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Pickup Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Pickup Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Return Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Return Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="innova-form-grid">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 9999999999" />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Special Requirements</label>
              <textarea placeholder="Any special requirements..." />
            </div>
          </div>

          <div className="innova-cta-buttons">
            <button type="submit" className="innova-btn-primary">
              Get Instant Quote
            </button>
            <a href="tel:+919999999999" className="innova-btn-outline">
              📞 Call Now
            </a>
          </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="innova-faq-section">
        <div className="innova-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions...</p>
        </div>
        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`innova-faq-item ${open ? "open" : ""}`}>
                <button
                  onClick={() => toggle(i)}
                  className="innova-faq-question"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`innova-faq-icon ${open ? "rotated" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className={`innova-faq-answer ${open ? "show" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default InnovaPage;
