





// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

// export default function Contact() {
//   const ref = useScrollAnimation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent! (This is a demo)");
//   };

//   return (
//     <section id="contact" ref={ref} className="animate">
//       <h2 className="section-title">Contact</h2>

//       <div className="contact-container">
        
//         {/* --- LEFT SIDE: CONTACT FORM --- */}
//         <form className="contact-form" onSubmit={handleSubmit}>
          
//           {/* Name Input */}
//           <div className="input-group">
//             <input type="text" id="name" placeholder=" " required />
//             <label htmlFor="name">Name</label>
//           </div>

//           {/* Email Input */}
//           <div className="input-group">
//             <input type="email" id="email" placeholder=" " required />
//             <label htmlFor="email">Email</label>
//           </div>

//           {/* Message Input */}
//           <div className="input-group">
//             <textarea id="message" rows="5" placeholder=" " required></textarea>
//             <label htmlFor="message">Message</label>
//           </div>

//           {/* Send Button */}
//           <button type="submit" className="send-btn">
//             Send <FaPaperPlane className="send-icon" />
//           </button>
//         </form>

//         {/* --- RIGHT SIDE: INFO & SOCIALS --- */}
//         <div className="contact-info-wrapper">
          
//           {/* Contact Details List */}
//           <div className="contact-details">
//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaEnvelope />
//               </div>
//               <p>prashanthvanamnetha@gmail.com</p>
//             </div>

//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaPhoneAlt />
//               </div>
//               <p>+91 7036142499</p>
//             </div>

//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaMapMarkerAlt />
//               </div>
//               <p>LB Nagar, Hyderabad</p>
//             </div>
//           </div>

//           {/* Social Icons Row */}
//           <div className="social-links-row">
//              <a href="https://github.com/iprashanthvanam" target="_blank" rel="noopener noreferrer" className="social-circle"><FaGithub /></a>
//              <a href="https://www.linkedin.com/in/iprashanthvanam/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaLinkedinIn /></a>
//              <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaCode /></a> 
//           </div>

//         </div>
//       </div>

//       {/* Footer / Copyright */}
//       <div className="footer-copyright">
//         <p>Made with ❤️ by V Prashanth</p>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

export default function Contact() {
  const ref = useScrollAnimation();
  const [result, setResult] = useState(""); // To store status message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(e.target);

    // 1. ADD YOUR ACCESS KEY HERE
    // Replace 'YOUR_ACCESS_KEY_HERE' with the key you got from Web3Forms
    formData.append("access_key", "da598b70-c33f-411f-9573-a3511ca8cfe4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      e.target.reset(); // Clear the form
      // Optional: Clear success message after 5 seconds
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" ref={ref} className="animate">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        
        {/* --- LEFT SIDE: CONTACT FORM --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <div className="input-group">
            {/* Added 'name' attribute which is required for the API */}
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          {/* Message Input */}
          <div className="input-group">
            <textarea id="message" name="message" rows="5" placeholder=" " required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          {/* Hidden Input to redirect/configure (Optional, kept simple for now) */}
          <input type="hidden" name="subject" value="New Portfolio Contact Message" />

          {/* Send Button */}
          <button type="submit" className="send-btn">
            {result === "Sending...." ? "Sending..." : "Send"} <FaPaperPlane className="send-icon" />
          </button>

          {/* Success/Error Message Display */}
          {result && (
            <p style={{ marginTop: "15px", color: result.includes("Success") ? "#00f2fe" : "red", fontWeight: "bold", textAlign: "center" }}>
              {result}
            </p>
          )}
        </form>

        {/* --- RIGHT SIDE: INFO & SOCIALS --- */}
        <div className="contact-info-wrapper">
          
          {/* Contact Details List */}
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <p>psairam1022@gmail.com</p>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
              <p>+91 9701278324</p>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>
              <p>TKR Clg, LB Nagar, Hyderabad</p>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="social-links-row">
             <a href="https://github.com/sairam0512" target="_blank" rel="noopener noreferrer" className="social-circle"><FaGithub /></a>
             <a href="https://www.linkedin.com/in/pb-sairam-reddy-6426b536a/_blank" rel="noopener noreferrer" className="social-circle"><FaLinkedinIn /></a>
             <a href="https://leetcode.com/u/Sairam_2210/" target="_blank" rel="noopener noreferrer" className="social-circle"><FaCode /></a> 
          </div>

        </div>
      </div>

      {/* Footer / Copyright */}
      <div className="footer-copyright">
        <p>Made with ❤️ by P.Sairam</p>
      </div>
    </section>
  );
}