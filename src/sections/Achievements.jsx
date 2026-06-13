import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

// FIXED: removed duplicates, kept only 3 strong certs
const achievementsData = [
  {
    title: "Introduction to Generative AI Studio",
    org: "Google Cloud / Simplilearn",
    date: "September 30, 2025",
    category: "Artificial Intelligence",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    logoBg: "#ffffff",
    verify: "https://www.simplilearn.com/",
  },
  {
    title: "Edunet - SkillsBuild Orientation",
    org: "IBM SkillsBuild",
    date: "October 29, 2025",
    category: "Orientation / Upskilling",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoBg: "#ffffff",
    verify: "https://skills.yourlearning.ibm.com/certificate/PLAN-04138CD348A7",
  },
  {
    title: "Programming In Java (Elite)",
    org: "NPTEL - IIT Kharagpur",
    date: "Jul-Oct 2025",
    category: "Programming",
    image: "https://upload.wikimedia.org/wikipedia/en/4/47/IIT_Kharagpur_Logo.svg",
    logoBg: "#ffffff",
    verify: "https://nptel.ac.in/",
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    org: "Salesforce",
    date: "December 26, 2025",
    category: "AI & CRM",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    logoBg: "#ffffff",
    verify: "https://sforce.co/verifycerts",
  },
];

export default function Achievements() {
  const ref = useScrollAnimation();

  return (
    <section id="achievements" ref={ref} className="animate">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-container">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p className="achievement-org">{item.org}</p>

              <div className="achievement-meta">
                <span className="meta-date">{item.date}</span>
                <span className="meta-category">
                  <FaFolder className="meta-icon" />
                  {item.category}
                </span>
                {item.verify && (
                  <a
                    href={item.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-date"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <FaExternalLinkAlt className="meta-icon" />
                    Verify
                  </a>
                )}
              </div>
            </div>

            <div
              className="achievement-img-wrapper"
              style={{ backgroundColor: item.logoBg }}
            >
              <img src={item.image} alt={item.org} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}