"use client";

import React, { useState } from "react";
import SiteFooter from "../Components/Footer/page";
import Header from "../Components/Header/page";
import Image from "next/image";
import "./Innova.css";

const InnovaPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  function Feature({ image, title, text }) {
    return (
      <div className="why-card">
        <div className="why-icon">
          <Image
            src={image}
            width={0}
            height={0}
            unoptimized
            alt={title}
          ></Image>
        </div>
        <h3 className="why-card-title">{title}</h3>
        <p className="why-card-text">{text}</p>
      </div>
    );
  }

  const specs = [
    { icon: "👥", title: "Seating Capacity", detail: "7 + 1 Passengers" },
    { icon: "⛽", title: "Fuel Type", detail: "Diesel & Petrol" },
    { icon: "⚙️", title: "Transmission", detail: "Manual & Automatic" },
    { icon: "⏱️", title: "Engine", detail: "2.4L & 2.7L" },
  ];

  // const features = [
  //   { icon: "🚐", label: "8 Seats" },
  //   { icon: "🧳", label: "4 Bags" },
  //   { icon: "🚪", label: "4 Doors" },
  //   { icon: "⚙️", label: "Manual" },
  //   { icon: "❄️", label: "AC" },
  // ];

  const benefits = [
    { icon: "✓", text: "Professional chauffeurs with local expertise" },
    { icon: "✓", text: "Well-maintained & sanitized vehicles" },
    { icon: "✓", text: "Flexible booking options (hourly/daily/monthly)" },
    { icon: "✓", text: "24/7 customer support" },
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

  const carImages = ["/suzuki.jpg", "/suv.avif", "/sedan.jpg", "/luxury.png"];

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#f8f9fa",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff5f0 0%, #ffe8e0 100%)",
          borderRadius: "20px",
          padding: "60px 50px",
          margin: "30px auto",
          // maxWidth: "1400px",
          boxShadow: "0 10px 40px rgba(230, 57, 70, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(230, 57, 70, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div style={{ flex: 1, paddingRight: "40px", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "#e63946",
              color: "#fff",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Premium MPV Rental
          </div>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "15px",
              lineHeight: "1.2",
              color: "#1a1a1a",
            }}
          >
            Toyota Innova <span style={{ color: "#e63946" }}>Car Rental</span>
          </h1>
          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "25px",
              fontSize: "16px",
            }}
          >
            Experience premium comfort and reliability with India's most trusted
            MPV. Perfect for family trips, corporate travel, and special
            occasions.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            {["👥 7+1 Seater", "🛡️ Fully Insured", "⏰ 24/7 Available"].map(
              (f, i) => (
                <span
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e5e5",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  {f}
                </span>
              )
            )}
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="tel:+917387382383"
              style={{
                padding: "16px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                background: "#e63946",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(230, 57, 70, 0.3)",
                transition: "transform 0.2s",
              }}
            >
              📞 Call Now: 91+ 7387382383
            </a>
            <a
              href="#booking"
              style={{
                padding: "16px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                border: "2px solid #e63946",
                color: "#e63946",
                background: "#fff",
                transition: "all 0.2s",
              }}
            >
              Book Online →
            </a>
          </div>
        </div>

        <div style={{ flex: 1, textAlign: "right", zIndex: 1 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #fff 0%, #f9f9f9 100%)",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "#e5e5e5",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
              }}
            >
              <Image
                id="banner-img"
                src="luxury.png"
                width={0}
                height={0}
                unoptimized
                alt="banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
          padding: "35px",
          borderRadius: "20px",
          maxWidth: "1400px",
          margin: "40px auto",
          gap: "25px",
        }}
      >
        {specs.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              background: "#fff",
              padding: "30px 20px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s",
              cursor: "pointer",
              border: "1px solid #f0f0f0",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>
              {item.icon}
            </div>
            <h3
              style={{
                fontSize: "17px",
                margin: "10px 0",
                color: "#222",
                fontWeight: "600",
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section
        style={{
          // maxWidth: "1400px",
          margin: "50px auto",
          // background: "linear-gradient(135deg, #e63946 0%, #c02a34 100%)",
          background: "linear-gradient(135deg, #7c7c7c 0%, #202020 100%)",
          // borderRadius: "20px",
          padding: "50px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
          }}
        />
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Why Choose Our Service?
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            marginBottom: "40px",
            opacity: 0.9,
          }}
        >
          Experience the difference with our premium rental service
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                padding: "25px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  background: "#d93d3d",
                  color: "#ffffffff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {benefit.icon}
              </div>
              <p style={{ margin: 0, fontSize: "15px", fontWeight: "500" }}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section
        style={{
          // maxWidth: "1400px",
          margin: "50px auto",
          background: "#fff",
          // borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "30px",
            color: "#1a1a1a",
          }}
        >
          Toyota Innova Crysta{" "}
          <span style={{ color: "#e63946" }}>Rental Service</span> in Delhi
        </h1>

        <div style={{ display: "flex", gap: "20px", marginBottom: "35px" }}>
          <div
            style={{
              flex: 2,
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "450px",
                background: "linear-gradient(135deg, #e5e5e5 0%, #d0d0d0 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
              }}
            >
              <Image
                id="premium"
                src="premiuim.png"
                width={0}
                height={0}
                unoptimized
                alt="Images"
              />
            </div>
          </div>
          {/* <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {carImages.map((src, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "110px",
                    background:
                      "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Car ${i + 1}`}
                    width={150} // adjust based on your layout
                    height={90}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div> */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {carImages.map((src, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  width: "100%",
                  height: "180px", // set fixed height for uniform grid
                  position: "relative", // required for fill
                }}
              >
                <Image
                  src={src}
                  alt={`Car ${i + 1}`}
                  fill // 👈 this makes it fill the parent div
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {features.map((f, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(135deg, #f8f9fa 0%, #fff 100%)",
                  border: "1px solid #e5e5e5",
                  padding: "15px 25px",
                  borderRadius: "10px",
                  textAlign: "center",
                  minWidth: "90px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "28px",
                    marginBottom: "5px",
                  }}
                >
                  {f.icon}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  {f.label}
                </p>
              </div>
            ))}
          </div> */}

          {/* <div
            style={{
              background: "linear-gradient(135deg, #fff5f0 0%, #ffe8e0 100%)",
              padding: "15px 30px",
              borderRadius: "10px",
              border: "1px solid #ffe0d0",
            }}
          >
            <span style={{ color: "#f4b400", fontSize: "20px" }}>
              ⭐⭐⭐⭐⭐
            </span>
            <span
              style={{ marginLeft: "10px", fontWeight: "600", color: "#333" }}
            >
              5.0
            </span>
            <span
              style={{ marginLeft: "10px", color: "#666", fontSize: "14px" }}
            >
              16,895 reviews
            </span>
          </div> */}
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          // maxWidth: "1400px",
          margin: "50px auto",
          padding: "40px 100px",
          background: "#fff",
          borderRadius: "20px",
          lineHeight: "1.8",
          color: "#333",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{ fontSize: "2rem", marginBottom: "25px", color: "#1a1a1a" }}
        >
          Experience Unmatched Comfort with{" "}
          <span style={{ color: "#e63946" }}>Toyota Innova Crysta Rental</span>{" "}
          Service
        </h2>

        <p style={{ marginBottom: "20px", fontSize: "16px", color: "#444" }}>
          Delhi, a city that is a mixture of history, culture, and modernity,
          requires a comfortable travel solution. Whether you're planning to
          visit iconic landmarks like the Red Fort, India Gate, or Humayun's
          Tomb or exploring Delhi's busy markets and business hubs, renting an
          Innova car in Delhi offers the perfect combination of comfort,
          convenience, and efficiency.
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #fff 100%)",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "20px",
            borderLeft: "4px solid #e63946",
          }}
        >
          <p style={{ margin: 0, fontSize: "16px", color: "#444" }}>
            The Toyota Innova, famous for its spacious interiors, smooth ride
            quality, and luxurious, is a popular choice among travelers. With
            the capacity to comfortably accommodate up to seven passengers, it
            is ideal for families, corporate teams, and tourist groups.
          </p>
        </div>

        <p style={{ marginBottom: "20px", fontSize: "16px", color: "#444" }}>
          Rental services in Delhi provide well-maintained Innovas with
          professional chauffeurs who are adept at navigating the city's traffic
          and routes. Whether you need a car for airport transfers, city tours,
          or long-distance travel to nearby attractions like Agra or Jaipur,
          Innova car rentals cater to all your requirements.
        </p>

        <h3
          style={{
            fontSize: "1.6rem",
            marginTop: "35px",
            marginBottom: "15px",
            color: "#1a1a1a",
          }}
        >
          Innova Crysta: Options to Suit Every Journey
        </h3>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Traveling in Delhi becomes a breeze with the versatile Toyota lineup,
          which includes the Innova and Innova Crysta. Each vehicle caters to
          different travel needs, from local commutes to long journeys, ensuring
          that your experience is nothing short of exceptional.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <div className="why-wrap">
          <header className="why-head">
            <h2>What Makes Us the Best Choice</h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart. Here’s why thousands of customers trust us with their
              transportation needs.
            </p>
          </header>

          {/* Top row */}
          <div className="why-grid">
            <Feature
              image="/known.png"
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

          {/* Optional second row — uncomment if you want 3 more cards */}
          <div className="why-grid">
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
      <section
        id="booking"
        style={{
          // maxWidth: "1000px",
          margin: "50px auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "45px 100px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "#1a1a1a",
            }}
          >
            Book Your Toyota Innova
          </h2>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Fill in the details below and we'll get back to you with the best
            quote
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter pickup location"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Drop Location
              </label>
              <input
                type="text"
                placeholder="Enter drop location"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Pickup Date
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Pickup Time
              </label>
              <input
                type="time"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Return Date
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Return Time
              </label>
              <input
                type="time"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 9999999999"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "10px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "14px",
                border: "2px solid #e5e5e5",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "#fff",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Special Requirements
            </label>
            <textarea
              placeholder="Any special requirements or additional information..."
              style={{
                width: "100%",
                padding: "14px",
                border: "2px solid #e5e5e5",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none",
                resize: "none",
                height: "100px",
                backgroundColor: "#fff",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                background: "#e63946",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(230, 57, 70, 0.3)",
              }}
            >
              Get Instant Quote
            </button>
            <a
              href="tel:+919999999999"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                background: "#fff",
                border: "2px solid #e63946",
                color: "#e63946",
                textDecoration: "none",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📞 Call Now
            </a>
          </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          // maxWidth: "1000px",
          margin: "50px auto",
          padding: "45px 150px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "#1a1a1a",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Answers to the most common questions about our corporate
            transportation program.
          </p>
        </div>

        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  marginBottom: "15px",
                  border: "2px solid #f0f0f0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: open ? "#fff9f6" : "#fff",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    padding: "20px 25px",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#222",
                    textAlign: "left",
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    style={{
                      fontSize: "20px",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  ></span>
                </button>
                <div
                  style={{
                    maxHeight: open ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 25px 20px 25px",
                      margin: 0,
                      color: "#555",
                      lineHeight: "1.7",
                      fontSize: "15px",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default InnovaPage;
