// "use client";
// import { useEffect, useState } from "react";
// import "./header.css";
// import Image from "next/image";
// import { useRef } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState("");
//   const trackRef = useRef(null);
//   const [pos, setPos] = useState(50);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSearchToggle = () => {
//     setShowSearch((prev) => !prev);
//     setQuery(""); // reset search field when reopened
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       console.log("Searching for:", query);
//       // 🔹 Replace this with your actual search logic
//     }
//   };

//   return (
//     <header className={scrolled ? "header scrolled" : "header"}>
//       <Link href="/">
//         <div className="logo">
//           <Image
//             src="/cozy-logo.svg"
//             width={100}
//             height={50}
//             unoptimized
//             alt="logo"
//           ></Image>
//           CozyCabz
//         </div>
//       </Link>
//       <nav>
//         {/* <a href="#">Home</a>
//         <a href="#">Pages</a>
//         <a href="#">Service</a>
//         <a href="#">Blog</a> */}
//         <ul className="nav-list">
//           <li>
//             <Link href="/">Home</Link>
//           </li>

//           <li
//             className="dropdown"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <span className="dropbtn">Services ▾</span>
//             {open && (
//               <ul className="dropdown-content">
//                 <li>
//                   <Link href="/web">Web Development</Link>
//                 </li>
//                 <li>
//                   <Link href="/design">UI/UX Design</Link>
//                 </li>
//                 <li>
//                   <Link href="/seo">SEO Services</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <span className="header-cta">
//         {/* Search */}
//         <form
//           className={`search-form ${showSearch ? "active" : ""}`}
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="search-input"
//           />
//         </form>

//         <button className="search-icons" onClick={handleSearchToggle}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>

//         <button className="contact-btn">Contact Us</button>
//       </span>
//     </header>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <Link href="/">
        <div className="logo">
          <Image
            src="/cozy-logo.svg"
            width={100}
            height={50}
            unoptimized
            alt="logo"
          />
          CozyCabz
        </div>
      </Link>

      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* Dropdown */}
          <li className="dropdown">
            <span className="dropbtn">Our Services ▾</span>
            <ul className="dropdown-content">
              <li>
                <Link href="/corporate">Corporate Car Rental</Link>
              </li>
              <li>
                <Link href="/TransportSolution">
                  Employee Transport Solutions
                </Link>
              </li>
              <li>
                <Link href="/global">Global Car Rental</Link>
              </li>
              <li>
                <Link href="/hotel">Hotel Travel Desk</Link>
              </li>
              <li>
                <Link href="/conference">Conference & Delegation</Link>
              </li>
              <li>
                <Link href="/event">Event Transportation</Link>
              </li>
              <li>
                <Link href="/wedding">Wedding Car Rental</Link>
              </li>
              <li>
                <Link href="/partners">Travel Partners Program</Link>
              </li>
              <li>
                <Link href="/chauffeur">Chauffeured Car Rental</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/fleet">Our Fleet</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-cta">
        <button className="contact-btn">
          <span>91+ 7387382383</span>
        </button>
      </div>
    </header>
  );
}
