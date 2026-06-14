import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

export default function Contact() {
  const ref = useScrollAnimation();
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "da598b70-c33f-411f-9573-a3511ca8cfe4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      e.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" ref={ref} className="animate">
      <h2 className="section-title">Contact</h2>

      <div className="contact-restructured-container">
        
        {/* --- TOP ROW: 3 Info Cards --- */}
        <div className="contact-info-cards-row">
          
          <div className="contact-info-card">
            <div className="contact-card-icon-circle">
              <FaEnvelope />
            </div>
            <h4>Email Me</h4>
            <p>psairam1022@gmail.com</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-card-icon-circle">
              <FaPhoneAlt />
            </div>
            <h4>Call Me</h4>
            <p>+91 9701278324</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-card-icon-circle">
              <FaMapMarkerAlt />
            </div>
            <h4>Location</h4>
            <p>TKR Clg, LB Nagar, Hyderabad</p>
          </div>

        </div>

        {/* --- BOTTOM ROW: Centered Form & Socials --- */}
        <div className="contact-bottom-form-wrapper">
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <h3>Send Message</h3>
            
            <div className="input-group">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-group">
              <input type="email" id="email" name="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-group">
              <textarea id="message" name="message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <input type="hidden" name="subject" value="New Portfolio Contact Message" />

            <button type="submit" className="send-btn">
              {result === "Sending...." ? "Sending..." : "Send"} <FaPaperPlane className="send-icon" />
            </button>

            {result && (
              <p style={{ marginTop: "15px", color: result.includes("Success") ? "#06b6d4" : "red", fontWeight: "bold", textAlign: "center" }}>
                {result}
              </p>
            )}
          </form>

          {/* Social Links below form */}
          <div className="contact-socials-row">
            <a href="https://github.com/sairam0512" target="_blank" rel="noopener noreferrer" className="social-circle"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/pb-sairam-reddy-6426b536a/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaLinkedinIn /></a>
            <a href="https://leetcode.com/u/Sairam_2210/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaCode /></a> 
          </div>

        </div>

      </div>

      <div className="footer-copyright">
        <p>Made with ❤️ by P.Sairam</p>
      </div>
    </section>
  );
}