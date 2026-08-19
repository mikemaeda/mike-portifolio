import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container skills-layout">
        <div className="section-heading sticky-heading">
          <p className="section-number">03 / TECHNICAL SKILLS</p>
          <h2>Languages, frameworks, and tools.</h2>
          <p>Technologies I use across software engineering, data, and AI projects.</p>
        </div>
        <div className="skill-console">
          <div className="console-bar"><span /><span /><span /><p>mike@alfred: ~/working-set</p></div>
          {skills.map((group, index) => (
            <div className="skill-line" key={group.label}>
              <p><span>0{index + 1}</span>{group.label}</p>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
          <p className="console-foot">Currently learning more about system design and performance testing.</p>
        </div>
      </div>
    </section>
  );
}
