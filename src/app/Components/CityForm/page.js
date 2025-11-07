// "use client";

// import React, { useState } from "react";
// import "./cityform.css";

// const CityForm = () => {
//   const [selectedService, setSelectedService] = useState("");
//   const [vehicleOptions, setVehicleOptions] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget).entries());
//     console.log("Contact form:", data);
//     alert("Thanks! Your message was captured in the console.");
//   }

//   function UserIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }
//   function MailIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }

//   function DocIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }
//   function MsgIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path d="M4 4h16v12H7l-3 3V4Z" fill="currentColor" />
//       </svg>
//     );
//   }
//   function FbIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M13 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"
//           fill="#fff"
//         />
//       </svg>
//     );
//   }
//   function TwIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M21 5.5c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A3.7 3.7 0 0 0 12 7.9a10.5 10.5 0 0 1-7.6-3.9A3.7 3.7 0 0 0 5 10c-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A7.4 7.4 0 0 1 3 18.6 10.4 10.4 0 0 0 8.7 20c6.6 0 10.3-5.5 10.3-10.3v-.5c.7-.5 1.3-1.1 1.8-1.7Z"
//           fill="#fff"
//         />
//       </svg>
//     );
//   }
//   function InIcon() {
//     return (
//       <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//         <path
//           d="M6.94 6.94A2.06 2.06 0 1 0 2.8 6.94a2.06 2.06 0 0 0 4.12 0ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.16 4.16 0 0 1 18 8.73c4.4 0 5.2 2.9 5.2 6.6V21H19v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21H10V9Z"
//           fill="#fff"
//         />
//       </svg>
//     );
//   }

//   function Feature({ image, title, text }) {
//     return (
//       <div className="why-card">
//         <div className="why-icon">
//           <Image
//             src={image}
//             width={0}
//             height={0}
//             unoptimized
//             alt={title}
//           ></Image>
//         </div>
//         <h3 className="why-card-title">{title}</h3>
//         <p className="why-card-text">{text}</p>
//       </div>
//     );
//   }

//   function DropdownIcon() {
//     return (
//       <svg
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 10l5 5 5-5"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     );
//   }

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     travellers: "",
//     date: "",
//   });

//   // Prevent past date
//   const today = new Date().toISOString().split("T")[0];

//   // Allow only letters for name
//   const handleNameChange = (e) => {
//     const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
//     setFormData({ ...formData, name: value });
//   };

//   // Allow only digits up to 15
//   const handlePhoneChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "").slice(0, 10);
//     setFormData({ ...formData, phone: value });
//   };

//   // Prevent negative travellers
//   const handleTravellerChange = (e) => {
//     const val = Math.max(1, Number(e.target.value));
//     setFormData({ ...formData, travellers: val });
//   };

//   const handleSubmitBookCar = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   const serviceToVehicles = {
//     Premium: [
//       "Toyota Fortuner",
//       "Toyota Innova Crysta",
//       "Toyota Innova Hycross",
//     ],
//     Luxury: [
//       "Audi A6",
//       "Audi Q7",
//       "BMW 5 Series",
//       "Mercedes GLS",
//       "Mercedes-Benz E Class",
//     ],
//     Economy: ["Honda City", "Maruti Ciaz", "Maruti Swift Dzire"],
//     "Bus & Coach": [
//       "45 Seater Volvo",
//       "Mercedes Sprinter",
//       "Toyota Commuter",
//       "Toyota Vellfire",
//       "Toyota Ventury (V Class)",
//     ],
//   };

//   const handleServiceChange = (e) => {
//     const service = e.target.value;
//     setSelectedService(service);
//     setVehicleOptions(serviceToVehicles[service] || []);
//   };

//   return (
//     <div>
//       <section className="bookcar-section" id="book-your-car">
//         <h2 className="bookcar-title">
//           Book Your <span className="red-black">Car</span>
//         </h2>

//         <form className="bookcar-form" onSubmit={handleSubmitBookCar}>
//           {/* Row 1 */}
//           <div className="form-row">
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleNameChange}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Enter Email Id"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//             />
//             <div className="phone-group" id="pincode">
//               <select>
//                 <option>+91</option>
//                 <option>+1</option>
//                 <option>+44</option>
//               </select>
//               <input
//                 type="tel"
//                 placeholder="Phone No"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="form-row">
//             <div className="select-wrapper">
//               <select>
//                 <option>Select Service Option</option>
//                 <option>Corporate Car Rental</option>
//                 <option>Employee Transport Solutions</option>
//                 <option>Global Car Rental</option>
//                 <option>Hotel Travel Desk</option>
//                 <option>Conference & Delegation</option>
//                 <option>Event Transportation</option>
//                 <option>Wedding Car Rental</option>
//                 <option>Travel Partners Program</option>
//                 <option>Chauffeured Car Rental</option>
//               </select>
//               <span className="dropdown-icon">
//                 <DropdownIcon />
//               </span>
//             </div>

//             <input
//               type="date"
//               min={today}
//               value={formData.date}
//               onChange={(e) =>
//                 setFormData({ ...formData, date: e.target.value })
//               }
//               required
//             />

//             <div className="form-row" id="travel-input">
//               <input
//                 type="number"
//                 placeholder="No. of Travellers"
//                 value={formData.travellers}
//                 onChange={handleTravellerChange}
//                 min="1"
//                 required
//               />
//             </div>
//           </div>

//           {/* Row 3 */}

//           <div className="form-row">
//             {/* Service Type */}
//             <div className="select-wrapper">
//               <select
//                 onChange={handleServiceChange}
//                 value={selectedService}
//                 className="select-wrapper"
//               >
//                 <option value="">Select Service Type</option>
//                 <option value="Premium">Premium</option>
//                 <option value="Luxury">Luxury</option>
//                 <option value="Economy">Economy</option>
//                 <option value="Bus & Coach">Bus & Coach</option>
//               </select>
//               <span className="dropdown-icon">
//                 <DropdownIcon />
//               </span>
//             </div>

//             {/* Vehicle Type */}
//             <select disabled={!vehicleOptions.length}>
//               <option value="">
//                 {vehicleOptions.length
//                   ? "Select Vehicle Type"
//                   : "Select Service First"}
//               </option>
//               {vehicleOptions.map((vehicle, index) => (
//                 <option key={index} value={vehicle}>
//                   {vehicle}
//                 </option>
//               ))}
//             </select>

//             {/* City Input */}
//             <input type="text" placeholder="Enter City Name" required />
//           </div>

//           {/* Row 4 */}

//           <textarea
//             placeholder="Any specific requirement / itinerary"
//             rows="3"
//           ></textarea>

//           {/* Footer */}
//           <div className="form-footer">
//             <div className="terms">
//               <input type="checkbox" required />
//               <p>
//                 By clicking <strong>"Send Enquiry"</strong> button, you agree to
//                 our <a href="#">Terms & Conditions</a> and{" "}
//                 <a href="#">Privacy Policy</a>.
//               </p>
//             </div>
//             <div className="book-form-btn">
//               <button type="submit" className="submit-btn">
//                 Send Enquiry
//               </button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default CityForm;

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import "./cityform.css";

const CityForm = () => {
  const formRef = useRef(null);

  const [selectedService, setSelectedService] = useState("");
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    travellers: 1,
    date: "",
    businessService: "",
    city: "",
    serviceType: "",
    vehicleType: "",
    message: "",
    accepted: false,
  });

  // Prevent past date
  const today = new Date().toISOString().split("T")[0];

  // Allow only letters for name
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData((s) => ({ ...s, name: value }));
  };

  // Allow only digits up to 10
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((s) => ({ ...s, phone: value }));
  };

  // Prevent negative travellers, minimum 1
  const handleTravellerChange = (e) => {
    const val = Math.max(1, Number(e.target.value || 1));
    setFormData((s) => ({ ...s, travellers: val }));
  };

  const serviceToVehicles = {
    Premium: [
      "Toyota Fortuner",
      "Toyota Innova Crysta",
      "Toyota Innova Hycross",
    ],
    Luxury: [
      "Audi A6",
      "Audi Q7",
      "BMW 5 Series",
      "Mercedes GLS",
      "Mercedes-Benz E Class",
    ],
    Economy: ["Honda City", "Maruti Ciaz", "Maruti Swift Dzire"],
    "Bus & Coach": [
      "45 Seater Volvo",
      "Mercedes Sprinter",
      "Toyota Commuter",
      "Toyota Vellfire",
      "Toyota Ventury (V Class)",
    ],
  };

  const handleServiceTypeChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
    setVehicleOptions(serviceToVehicles[service] || []);
    setFormData((s) => ({ ...s, serviceType: service, vehicleType: "" }));
  };

  const handleSubmitEmailJS = async (e) => {
    e.preventDefault();

    if (!formData.accepted) {
      alert("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    setSending(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS env vars missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
        );
      }

      // Send form DOM directly so all inputs with name="" are captured
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      alert("Thanks! Your enquiry has been sent.");
      setFormData({
        name: "",
        email: "",
        phoneCode: "+91",
        phone: "",
        travellers: 1,
        date: "",
        businessService: "",
        city: "",
        serviceType: "",
        vehicleType: "",
        message: "",
        accepted: false,
      });
      setSelectedService("");
      setVehicleOptions([]);
      formRef.current?.reset(); // also resets native form state
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sorry, something went wrong while sending. Please try again.");
    } finally {
      setSending(false);
    }
  };

  function DropdownIcon() {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div>
      <section className="bookcar-section" id="book-your-car">
        <h2 className="bookcar-title">
          Book Your <span className="red-black">Car</span>
        </h2>

        {/* IMPORTANT: attach ref for EmailJS sendForm */}
        <form
          className="bookcar-form"
          ref={formRef}
          onSubmit={handleSubmitEmailJS}
        >
          {/* Row 1 */}
          <div className="form-row">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="user_name"
              value={formData.name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Enter Email Id"
              name="user_email"
              value={formData.email}
              onChange={(e) =>
                setFormData((s) => ({ ...s, email: e.target.value }))
              }
              required
            />
            <div className="phone-group" id="pincode">
              <select
                name="phone_code"
                value={formData.phoneCode}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, phoneCode: e.target.value }))
                }
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone No"
                name="user_phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="select-wrapper">
              <select
                name="business_service"
                value={formData.businessService}
                onChange={(e) =>
                  setFormData((s) => ({
                    ...s,
                    businessService: e.target.value,
                  }))
                }
              >
                <option value="">Select Service Option</option>
                <option>Corporate Car Rental</option>
                <option>Employee Transport Solutions</option>
                <option>Global Car Rental</option>
                <option>Hotel Travel Desk</option>
                <option>Conference & Delegation</option>
                <option>Event Transportation</option>
                <option>Wedding Car Rental</option>
                <option>Travel Partners Program</option>
                <option>Chauffeured Car Rental</option>
              </select>
              <span className="dropdown-icon">
                <DropdownIcon />
              </span>
            </div>

            <input
              type="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={(e) =>
                setFormData((s) => ({ ...s, date: e.target.value }))
              }
              required
            />

            <div className="form-row" id="travel-input">
              <input
                type="number"
                placeholder="No. of Travellers"
                name="travellers"
                value={formData.travellers}
                onChange={handleTravellerChange}
                min="1"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            {/* Service Type */}
            <div className="select-wrapper">
              <select
                name="service_type"
                onChange={handleServiceTypeChange}
                value={selectedService}
                className="select-wrapper"
                required
              >
                <option value="">Select Service Type</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
                <option value="Economy">Economy</option>
                <option value="Bus & Coach">Bus & Coach</option>
              </select>
              <span className="dropdown-icon">
                <DropdownIcon />
              </span>
            </div>

            {/* Vehicle Type */}
            <select
              name="vehicle_type"
              value={formData.vehicleType}
              onChange={(e) =>
                setFormData((s) => ({ ...s, vehicleType: e.target.value }))
              }
              disabled={!vehicleOptions.length}
              required
            >
              <option value="">
                {vehicleOptions.length
                  ? "Select Vehicle Type"
                  : "Select Service First"}
              </option>
              {vehicleOptions.map((vehicle, index) => (
                <option key={index} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>

            {/* City Input */}
            <input
              type="text"
              name="city"
              placeholder="Enter City Name"
              value={formData.city}
              onChange={(e) =>
                setFormData((s) => ({ ...s, city: e.target.value }))
              }
              required
            />
          </div>

          {/* Row 4 */}
          <textarea
            placeholder="Any specific requirement / itinerary"
            rows="3"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData((s) => ({ ...s, message: e.target.value }))
            }
          ></textarea>

          {/* Footer */}
          <div className="form-footer">
            <label className="terms">
              <input
                type="checkbox"
                name="accepted_terms"
                checked={formData.accepted}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, accepted: e.target.checked }))
                }
                required
              />
              <p>
                By clicking <strong>"Send Enquiry"</strong> button, you agree to
                our <a href="#">Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
            </label>

            <div className="book-form-btn">
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CityForm;
