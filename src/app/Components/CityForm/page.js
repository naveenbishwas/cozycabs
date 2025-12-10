"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import "./cityform.css";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CityForm = () => {
  const formRef = useRef(null);
  const router = useRouter();

  const [selectedService, setSelectedService] = useState("");
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [sending, setSending] = useState(false);
  const [startDate, setStartDate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    travellers: "Number of Travellers",
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

  console.log("FORM DATA:", formData);

  const handleSubmitEmailJS = async (e) => {
    e.preventDefault();

    if (!formData.accepted) {
      alert("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error || "Failed sending email");

      // alert("Thanks! Your enquiry has been sent.");
      router.push("/ThankuPage");

      setFormData({
        name: "",
        email: "",
        phoneCode: "+91",
        phone: "",
        travellers: "No of Travellers",
        date: "",
        businessService: "",
        city: "",
        serviceType: "",
        vehicleType: "",
        message: "",
        accepted: false,
      });
      setVehicleOptions([]);
      setSelectedService("");
    } catch (err) {
      console.error("Error sending:", err);
      alert("Something went wrong. Please try again.");
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

  const cities = [
    "Agra",
    "Ahmedabad",
    "Aizawl",
    "Ajmer",
    "Aligarh",
    "Allahabad",
    "Amritsar",
    "Aurangabad",
    "Bangalore",
    "Bareilly",
    "Belgaum",
    "Bhopal",
    "Bhubaneswar",
    "Bilaspur",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Dibrugarh",
    "Dispur",
    "Durgapur",
    "Ernakulam",
    "Faridabad",
    "Firozabad",
    "Gandhinagar",
    "Gaya",
    "Ghaziabad",
    "Gorakhpur",
    "Gulbarga",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Hisar",
    "Hubli",
    "Hyderabad",
    "Imphal",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Kannur",
    "Kanpur",
    "Kochi",
    "Kolhapur",
    "Kolkata",
    "Kollam",
    "Kota",
    "Kozhikode",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mangalore",
    "Meerut",
    "Moradabad",
    "Mumbai",
    "Mysore",
    "Nanded",
    "Nashik",
    "Navi Mumbai",
    "Noida",
    "Patna",
    "Pondicherry",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Rourkela",
    "Salem",
    "Siliguri",
    "Solapur",
    "Srinagar",
    "Surat",
    "Thane",
    "Thiruvananthapuram",
    "Thrissur",
    "Tiruchirapalli",
    "Tirunelveli",
    "Tirupati",
    "Udaipur",
    "Ujjain",
    "Vadodara",
    "Varanasi",
    "Vasai-Virar",
    "Vellore",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
  ];

  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>

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
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);

                  setFormData((s) => ({
                    ...s,
                    date: date
                      ? date.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "",
                  }));
                }}
                placeholderText="Select Date"
                dateFormat="dd MMM yyyy"
                minDate={new Date()}
                showPopperArrow={false}
                calendarClassName="coxy-calendar"
                className="date-input"
              />

              {/* <div className="form-row" id="travel-input">
                <input
                  type="number"
                  placeholder="No. of Travellers"
                  name="travellers"
                  value={formData.travellers}
                  // onChange={handleTravellerChange}
                  // min="1"
                  required
                />
              </div> */}
              <div className="form-row travellers-select">
                <select
                  name="travellers"
                  value={formData.travellers}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      travellers: Number(e.target.value),
                    })
                  }
                  required
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} Traveller{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                <span className="dropdown-icon">
                  <DropdownIcon />
                </span>
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
              <div className="custom-dropdown">
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

                <span className="dropdown-icon">
                  <DropdownIcon />
                </span>
              </div>

              <div className="custom-dropdown">
                <select
                  name="city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, city: e.target.value }))
                  }
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <span className="dropdown-icon">
                  <DropdownIcon />
                </span>
              </div>
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
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="accepted_terms"
                  checked={formData.accepted}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, accepted: e.target.checked }))
                  }
                  required
                />

                <span className="checkmark"></span>

                <p>
                  By clicking <strong>“Send Enquiry”</strong>, you agree to our{" "}
                  <a href="/terms" target="_blank">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>
                  .
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
    </>
  );
};

export default CityForm;
