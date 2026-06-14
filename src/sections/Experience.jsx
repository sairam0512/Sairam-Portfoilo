import { experience } from "../data/experience";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="animate">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="timeline-wrapper">
          <div className="timeline-track"></div>
          
          {experience.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`timeline-item ${isLeft ? "left-item" : "right-item"}`}>
                
                {/* Centered Node Dot */}
                <div className="timeline-dot">
                  <FaBriefcase />
                </div>
                
                {/* Card Container */}
                <div className="exp-card">
                  <span className="exp-period">{e.period}</span>
                  <h3>{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}