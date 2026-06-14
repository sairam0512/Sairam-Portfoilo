import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

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

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-badge-card" key={index}>
            
            {/* Header with category and logo side-by-side */}
            <div className="badge-card-header">
              <span className="badge-card-category">
                <FaFolder className="meta-icon" /> {item.category}
              </span>
              <div
                className="badge-card-img-wrapper"
                style={{ backgroundColor: item.logoBg }}
              >
                <img src={item.image} alt={item.org} />
              </div>
            </div>

            {/* Content below */}
            <div className="badge-card-body">
              <h3>{item.title}</h3>
              <p className="badge-card-org">{item.org}</p>
            </div>

            {/* Footer with date and verification link */}
            <div className="badge-card-footer">
              <span className="badge-card-date">{item.date}</span>
              {item.verify && (
                <a
                  href={item.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge-card-verify"
                >
                  <FaExternalLinkAlt /> Verify
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}