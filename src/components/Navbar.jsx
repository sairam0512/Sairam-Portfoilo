import { useState } from "react";
import {
  FaGraduationCap, FaTools, FaLaptopCode, FaEnvelope, FaTrophy, FaBriefcase
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Brand — monospace tag style */}
        <span className="navbar-brand">
          <span>{"<"}</span>P.Sairam<span>{"/>"}</span>
        </span>

        {/* Hamburger with animated bars */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Full-screen slide-in menu */}
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <a href="#education" onClick={close}>
          <span className="nav-dot"></span>
          <FaGraduationCap className="nav-icon" /> Education
        </a>
        <a href="#skills" onClick={close}>
          <span className="nav-dot"></span>
          <FaTools className="nav-icon" /> Skills
        </a>
        <a href="#experience" onClick={close}>
          <span className="nav-dot"></span>
          <FaBriefcase className="nav-icon" /> Experience
        </a>
        <a href="#projects" onClick={close}>
          <span className="nav-dot"></span>
          <FaLaptopCode className="nav-icon" /> Projects
        </a>
        <a href="#achievements" onClick={close}>
          <span className="nav-dot"></span>
          <FaTrophy className="nav-icon" /> Achievements
        </a>
        <a href="#contact" onClick={close}>
          <span className="nav-dot"></span>
          <FaEnvelope className="nav-icon" /> Contact
        </a>
      </div>
    </>
  );
}