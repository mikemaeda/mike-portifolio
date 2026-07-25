import { experience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading section-heading-light">
          <p className="section-number">02 / WHERE I’VE LEARNED</p>
          <h2>Built in classrooms,<br />labs, and production.</h2>
        </div>
        <div className="experience-list">
          {experience.map((job, index) => (
            <article className="experience-row" key={`${job.role}-${job.org}`}>
              <div className="experience-order">0{index + 1}</div>
              <div className="experience-meta">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
              <div className="experience-body">
                <p className="experience-context">{job.context}</p>
                <h3>{job.role}</h3>
                <p className="experience-org">{job.org}</p>
                <ul>{job.points.slice(0, 2).map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
