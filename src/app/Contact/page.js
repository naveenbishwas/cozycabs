// import React from "react";
// import "./contact.css";
// import Header from "../Components/Header/page";
// import SiteFooter from "../Components/Footer/page";

// const Contact = () => {
//   return (
//     <>
//       <Header />
//       <section className="info-page">
//         <h1>Contact Us</h1>
//         <p>
//           <strong>
//             Need booking assistance, partnership info, or support for an
//             existing trip? Our team is available 24/7
//           </strong>
//         </p>

//         <div className="contact-grid">
//           <div className="contact-box">
//             <h3>📞 Call Us</h3>
//             <p>+91 7387382383</p>
//             <p>Available 24/7 across India</p>
//           </div>

//           <div className="contact-box">
//             <h3>✉️ Email Us</h3>
//             <p>support@cozycabz.com</p>
//             <p>bookings@cozycabz.com</p>
//           </div>

//           <div className="contact-box">
//             <h3>📍 Our Office</h3>
//             <p>Cozy Cabz Pvt Ltd</p>
//             <p>New Delhi, India</p>
//           </div>
//         </div>

//         <h2>Send Us a Message</h2>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <input type="tel" placeholder="Phone Number" required />
//           <textarea placeholder="Your Message" rows="4"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//       <SiteFooter />
//     </>
//   );
// };

// export default Contact;

import React from "react";
import "./contact.css";
import Header from "../Components/Header/page";
import SiteFooter from "../Components/Footer/page";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="info-page">
        <h1>Contact Us</h1>
        <p>
          <strong>
            Need booking assistance, partnership info, or support for an
            existing trip? Our team is available 24/7
          </strong>
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>📞 Call Us</h3>
            <p>+91 7387382383</p>
            <p>Available 24/7 across India</p>
          </div>

          <div className="contact-box">
            <h3>✉️ Email Us</h3>
            <p>support@cozycabz.com</p>
            <p>bookings@cozycabz.com</p>
          </div>

          <div className="contact-box">
            <h3>📍 Our Office</h3>
            <p>Cozy Cabz Pvt Ltd</p>
            <p>New Delhi, India</p>
          </div>
        </div>

        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <SiteFooter />
    </>
  );
};

export default Contact;
