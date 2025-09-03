"use client";
import { useEffect, useState } from "react";
import "./header.css";
import Image from "next/image";
import { useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const trackRef = useRef(null);
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    setQuery(""); // reset search field when reopened
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Searching for:", query);
      // 🔹 Replace this with your actual search logic
    }
  };

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="logo">
        <Image
          src="/cozy-logo.svg"
          width={100}
          height={50}
          unoptimized
          alt="logo"
        ></Image>
        CozyCabs
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Service</a>
        <a href="#">Blog</a>
      </nav>

      <span className="header-cta">
        {/* Search */}
        <form
          className={`search-form ${showSearch ? "active" : ""}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </form>

        <button className="search-icons" onClick={handleSearchToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <button className="contact-btn">Contact Us</button>
      </span>
    </header>
  );
}
