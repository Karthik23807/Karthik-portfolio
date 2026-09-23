import { skills } from "../data/skills";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills reveal">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {items.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;