import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  FaFigma, FaReact, FaHtml5, FaJava, FaPython,
  FaCss3Alt, FaJs, FaAws, FaGitAlt, FaWindows, FaNodeJs
} from "react-icons/fa";
import {
  SiPostgresql, SiMysql, SiSpringboot
} from "react-icons/si";

// Grouped for recruiter clarity
const skillGroups = [
  {
    label: "Frontend Systems",
    skills: [
      { name: "React",       icon: <FaReact />,       color: "#61DAFB" },
      { name: "JavaScript",  icon: <FaJs />,          color: "#F7DF1E" },
      { name: "HTML5",       icon: <FaHtml5 />,       color: "#E34F26" },
      { name: "CSS3",        icon: <FaCss3Alt />,     color: "#1572B6" },
      { name: "Figma",       icon: <FaFigma />,       color: "#F24E1E" },
    ],
  },
  {
    label: "Backend & Logic",
    skills: [
      { name: "Python",      icon: <FaPython />,      color: "#3776AB" },
      { name: "Node.js",     icon: <FaNodeJs />,      color: "#68A063" },
      { name: "Java",        icon: <FaJava />,        color: "#F89820" },
      { name: "Spring Boot", icon: <SiSpringboot />,  color: "#6DB33F" },
    ],
  },
  {
    label: "Databases & Tools",
    skills: [
      { name: "PostgreSQL",  icon: <SiPostgresql />,  color: "#336791" },
      { name: "MySQL",       icon: <SiMysql />,       color: "#4479A1" },
      { name: "Git",         icon: <FaGitAlt />,      color: "#F05032" },
      { name: "AWS Basics",  icon: <FaAws />,         color: "#FF9900" },
      { name: "Windows/OS",  icon: <FaWindows />,     color: "#0078D7" },
    ],
  },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="animate">
      <h2 className="section-title">Skills</h2>

      <div className="skills-split-container">
        
        {/* LEFT COLUMN: Info Panel */}
        <div className="skills-info-panel">
          <div className="skills-sticky-content">
            <h3>Technical Foundation</h3>
            <p>
              I specialize in developing responsive web frontends and scalable, clean backends. Here is a breakdown of my engineering capabilities and the systems I use to build applications.
            </p>
            <div className="skills-summary-box">
              <span className="summary-title">Backend Focus</span>
              <p>Node.js, Java, Python (FastAPI/SpringBoot)</p>
              <div className="summary-status">
                <span className="dot active"></span> Continually Expanding Stack
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Skill Group Cards */}
        <div className="skills-groups-wrapper">
          {skillGroups.map((group, index) => (
            <div className="skill-group-card" key={index}>
              <h4>{group.label}</h4>
              <div className="skill-grid-custom">
                {group.skills.map((skill, i) => (
                  <div className="skill-tile" key={i}>
                    <span className="skill-tile-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <div className="skill-tile-info">
                      <h5>{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}