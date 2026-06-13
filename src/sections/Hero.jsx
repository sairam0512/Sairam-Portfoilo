import { useState, useEffect } from "react";
import profile from "../assets/profile.jpeg";

// Typing animation lines for the terminal
const TERMINAL_LINES = [
  { cmd: "whoami", output: "P.Sairam — Software Developer" },
  // { cmd: "skills --top", output: "React · Python · Flask · Django · SQL" },
  { cmd: "status", output: "Open to internships & entry-level roles" },
  { cmd: "location", output: "Hyderabad, India 🇮🇳" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  // Reveal terminal lines one by one
  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const handleDownloadCV = () => {
    const cvUrl = "/Sairamreddy_Resume.docs";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sairamreddy_Resume.docs";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section animate show">

      {/* LEFT — Photo */}
      <div className="hero-right">
        <div className="hero-img-wrapper">
          <img src={profile} alt="P.Sairam" />
        </div>
      </div>

      {/* RIGHT — Text */}
      <div className="hero-left">

        <p className="hero-tag">Software Developer · Fresher</p>

        <h1 className="hero-name">P.Sairam</h1>

        <p className="hero-role">Web Development · NodeJS · FastAPI · Java · SpringBoot</p>

        <p className="hero-desc">
          Entry-level Software Developer focused on building scalable web
          applications with React and Python. Passionate about backend systems,
          clean APIs, and real-world problem solving.
        </p>

        {/* Terminal Box — the developer identity element */}
        <div className="terminal-box">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              <span className="cmd">$ {line.cmd}</span>
              <br />
              <span className="output">{line.output}</span>
              {i < visibleLines - 1 && <br />}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <span className="cursor" />
          )}
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn-outline" onClick={handleContactScroll}>
            Contact Me
          </button>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/pb-sairam-reddy-6426b536a/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/sairam0512"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://leetcode.com/u/Sairam_2210/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <img src="/leetcode.svg" alt="LeetCode" />
          </a>
        </div>
      </div>
    </section>
  );
}