import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPlay, FaCode } from "react-icons/fa";

import faceImg from "../assets/face.png";
import plagImg from "../assets/plag.png";

// Enhanced project data with impact + features
const projectsData = [
  {
    title: "Face Recognition System",
    image: faceImg,
    impact: "95%+ recognition accuracy",
    desc: "A real-time security system using OpenCV and deep learning to detect and recognize faces, automating attendance marking.",
    features: [
      "Real-time face detection via webcam stream",
      "TensorFlow model fine-tuned on custom dataset",
      "Attendance export to CSV / admin dashboard",
    ],
    tech: ["Flask", "OpenCV", "TensorFlow"],
    github: "https://github.com/sairam0512/face_recognition_system",
    demo: "https://iprashanthvanam.pythonanywhere.com/",
  },
  {
    title: "Plagiarism Analysis Application",
    image: plagImg,
    impact: "Cosine similarity engine",
    desc: "A tool that analyzes text similarity against web content using TF-IDF and semantic analysis to detect duplication.",
    features: [
      "TF-IDF + cosine similarity engine",
      "Google Search API integration for web comparison",
      "PDF report generation for submissions",
    ],
    tech: ["Python", "React", "Node.js"],
    github: "https://github.com/sairam0512/Plagiarism_AI_detection_app",
    demo: "https://plagiarismanalyser-d8a6d0f9f2deczhn.southindia-01.azurewebsites.net/",
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="animate">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid-deck">
        {projectsData.map((p, i) => (
          <div className="project-grid-card" key={i}>
            
            {/* Image at TOP */}
            <div className="project-card-image-wrapper">
              <img src={p.image} alt={p.title} />
              <div className="project-card-image-overlay">
                <span className="project-card-impact">🚀 {p.impact}</span>
              </div>
            </div>

            {/* Content at BOTTOM */}
            <div className="project-card-details">
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-desc">{p.desc}</p>
              
              <ul className="project-card-features">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>

              <div className="project-card-bottom">
                <div className="project-card-tech">
                  {p.tech.map((t, k) => (
                    <span key={k}>{t}</span>
                  ))}
                </div>
                
                <div className="project-card-actions">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn"
                    title="Live Demo"
                  >
                    <FaPlay />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn"
                    title="View Code"
                  >
                    <FaCode />
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}