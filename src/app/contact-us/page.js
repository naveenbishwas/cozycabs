"use client";
import React, { useState } from "react";
import "./contact.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);

  // Validation functions
  const validateFirstName = (value) => {
    if (!value.trim()) return "First name is required";
    if (value.trim().length < 2)
      return "First name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "First name can only contain letters";
    return "";
  };

  const validateLastName = (value) => {
    if (!value.trim()) return "Last name is required";
    if (value.trim().length < 2)
      return "Last name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "Last name can only contain letters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (value) => {
    if (!value.trim()) return "Phone number is required";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value.replace(/\s/g, "")))
      return "Phone number must be 10 digits";
    return "";
  };

  const validateMessage = (value) => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Validate on change if already touched
    if (touched[name]) {
      validateField(name, name === "phone" ? value.replace(/\D/g, "") : value);
    }
  };

  // Handle blur (when user leaves field)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
        error = validateFirstName(value);
        break;
      case "lastName":
        error = validateLastName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      setSending(true);

      try {
        const res = await fetch("/api/send-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        const data = await res.json();

        if (!data.success)
          throw new Error(data.error || "Failed sending email");

        alert("Thank you! Your message has been sent successfully.");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTouched({});
        setErrors({});
      } catch (err) {
        console.error("Error sending:", err);
        alert("Something went wrong. Please try again.");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <>
      <head>
        <title>
          Contact CozyCabz | Get in Touch for Bookings & Partnerships
        </title>
        <meta
          name="description"
          content="Have a question or need a ride? Contact CozyCabz for bookings, corporate travel solutions, or partnerships. Our team is here to assist you 24/7."
        />
      </head>

      <Header />
      {/* ---- Hero Section ---- */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — let's start a conversation.</p>
        </div>
      </section>

      {/* ---- Main Contact Section ---- */}
      <section className="contact-wrapper">
        <h2>Let's Start a Conversation</h2>

        <div className="contact-main">
          {/* ---- Left Column ---- */}
          <div className="contact-info">
            <ul>
              <li>
                <strong>Book your ride with ease</strong>
                <br />
                Request a personalized quote or schedule a call to discuss your
                travel requirements.
              </li>
              <li>
                <strong>Corporate & Event Travel</strong>
                <br />
                Learn how CozyCabz helps businesses manage large-scale travel
                efficiently.
              </li>
              <li>
                <strong>Partner with Us</strong>
                <br />
                Collaborate as a travel partner, affiliate, or driver network
                member.
              </li>
            </ul>
          </div>

          {/* ---- Right Column (Form) ---- */}
          <div className="contact-container">
            <div className="contact-form">
              <p className="note">Please note: all fields are required.</p>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.firstName && touched.firstName ? "error" : ""
                    }
                  />
                  {errors.firstName && touched.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName ? "error" : ""
                    }
                  />
                  {errors.lastName && touched.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "error" : ""}
                  />
                  {errors.email && touched.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (10 digits)"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength="10"
                    className={errors.phone && touched.phone ? "error" : ""}
                  />
                  {errors.phone && touched.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="input-wrapper">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && touched.message ? "error" : ""}
                />
                {errors.message && touched.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button type="button" onClick={handleSubmit} disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

            <style>{`
        .contact-container {
          max-width: 800px;
        }

        .contact-form {
          background: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .note {
          color: #666;
          font-size: 14px;
          margin-bottom: 25px;
          font-style: italic;
        }

        .form-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s ease;
          font-family: inherit;
          box-sizing: border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #d80117;
          box-shadow: 0 0 0 3px rgba(216, 1, 23, 0.1);
        }

        .contact-form input.error,
        .contact-form textarea.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 13px;
          margin-top: 2px;
          font-weight: 500;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
          margin-bottom: 10px;
        }

        .contact-form button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(90deg, #d40000, #a60000);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-form button:hover:not(:disabled) {
          background: linear-gradient(90deg, #e03434, #c00000);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 0, 0, 0.3);
        }

        .contact-form button:active:not(:disabled) {
          transform: translateY(0);
        }

        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .contact-container {
            padding: 15px;
            margin: 20px auto;
          }

          .contact-form {
            padding: 25px 20px;
          }

          .form-group {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 15px;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 12px 14px;
            font-size: 14px;
          }

          .error-message {
            font-size: 12px;
          }
        }
      `}</style>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Contact;
