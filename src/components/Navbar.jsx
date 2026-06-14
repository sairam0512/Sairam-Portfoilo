import { useState, useEffect } from "react";
import {
  FaGraduationCap, FaTools, FaLaptopCode, FaEnvelope, FaTrophy, FaBriefcase
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Brand */}
          <span className="navbar-brand">
            <span>{"<"}</span>P.Sairam<span>{"/>"}</span>
          </span>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Hamburger (Mobile) */}
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
        </div>
      </nav>

      {/* Full-screen slide-in menu (Mobile Only) */}
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <a href="#education" onClick={close}>
          <FaGraduationCap className="nav-icon" /> Education
        </a>
        <a href="#skills" onClick={close}>
          <FaTools className="nav-icon" /> Skills
        </a>
        <a href="#experience" onClick={close}>
          <FaBriefcase className="nav-icon" /> Experience
        </a>
        <a href="#projects" onClick={close}>
          <FaLaptopCode className="nav-icon" /> Projects
        </a>
        <a href="#achievements" onClick={close}>
          <FaTrophy className="nav-icon" /> Achievements
        </a>
        <a href="#contact" onClick={close}>
          <FaEnvelope className="nav-icon" /> Contact
        </a>
      </div>
    </>
  );
}