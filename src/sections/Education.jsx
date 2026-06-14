import { education } from "../data/education";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="animate">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {education.map((e, i) => (
          <div className="edu-grid-card" key={i}>
            <div className="edu-badge">0{i + 1}</div>
            <div className="edu-icon-header">
              <FaGraduationCap />
            </div>
            <div className="edu-card-content">
              <span className="edu-year">{e.year}</span>
              <h3>{e.title}</h3>
              <p className="edu-place">{e.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}