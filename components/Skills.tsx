import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container skills-layout">
        <div className="section-heading sticky-heading">
          <p className="section-number">TECHNICAL SKILLS</p>
          <h2>Working set.</h2>
          <p>The tools represented in my current résumé and selected projects.</p>
        </div>
        <div className="skill-list">
          {skills.map((group) => (
            <div className="skill-line" key={group.label}>
              <p>{group.label}</p>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
