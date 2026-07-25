import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container skills-layout">
        <div className="section-heading sticky-heading">
          <p className="section-number">03 / WORKING SET</p>
          <h2>Tools are useful.<br />Judgment matters more.</h2>
          <p>I reach for the stack that fits the problem, then test the seams where systems usually break.</p>
        </div>
        <div className="skill-console">
          <div className="console-bar"><span /><span /><span /><p>mike@alfred: ~/working-set</p></div>
          {skills.map((group, index) => (
            <div className="skill-line" key={group.label}>
              <p><span>0{index + 1}</span>{group.label}</p>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
          <p className="console-foot">Always learning: system design, performance testing, and the details that make software dependable.</p>
        </div>
      </div>
    </section>
  );
}
