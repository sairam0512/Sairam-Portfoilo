import useScrollAnimation from "../hooks/useScrollAnimation";

import {
  FaFigma, FaReact, FaBootstrap, FaHtml5, FaJava, FaPython,
  FaCss3Alt, FaJs, FaAws, FaGitAlt, FaWindows, FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiFlask,
  SiDjango, SiFastapi, SiSpringboot
} from "react-icons/si";

// Grouped for recruiter clarity
const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React",       icon: <FaReact />,       color: "#61DAFB" },
      { name: "JavaScript",  icon: <FaJs />,          color: "#F7DF1E" },
      { name: "HTML",        icon: <FaHtml5 />,       color: "#E34F26" },
      { name: "CSS",         icon: <FaCss3Alt />,     color: "#1572B6" },
      //{ name: "Tailwind",    icon: <SiTailwindcss />, color: "#06B6D4" },
      //{ name: "Bootstrap",   icon: <FaBootstrap />,   color: "#7952B3" },
      { name: "Figma",       icon: <FaFigma />,       color: "#F24E1E" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Python",      icon: <FaPython />,      color: "#3776AB" },
      // { name: "Flask",       icon: <SiFlask />,       color: "#aaaaaa" },
      //{ name: "FastAPI",     icon: <SiFastapi />,     color: "#009688" },
      //{ name: "Django",      icon: <SiDjango />,      color: "#44B78B" },
      { name: "Node.js",     icon: <FaNodeJs />,      color: "#68A063" },
      { name: "Java",        icon: <FaJava />,        color: "#F89820" },
      { name: "Spring Boot(Basics)", icon: <SiSpringboot />,  color: "#6DB33F" },
    ],
  },
  {
    label: "Database & Tools",
    skills: [
      { name: "PostgreSQL",  icon: <SiPostgresql />,  color: "#336791" },
      { name: "MySQL",       icon: <SiMysql />,       color: "#4479A1" },
      //{ name: "MongoDB",     icon: <SiMongodb />,     color: "#47A248" },
      { name: "Git",         icon: <FaGitAlt />,      color: "#F05032" },
      { name: "AWS(Basics)",         icon: <FaAws />,         color: "#FF9900" },
      { name: "MS Office",   icon: <FaWindows />,     color: "#0078D7" },
    ],
  },
];

// Flat list for mobile marquee
const allSkills = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="animate">
      <h2 className="section-title">Skills</h2>

      {/* Desktop: grouped grid */}
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-grid">
              {group.skills.map((skill, i) => (
                <div className="skill-chip" key={i}>
                  <span
                    className="skill-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <div className="skill-card" key={i}>
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}