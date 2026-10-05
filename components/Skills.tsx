import { skills } from "@/lib/data";

const groups = [
  ["Core development", skills.core],
  ["Build & ship", skills.build],
  ["AI & product", skills.ai],
] as const;

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head split-head">
          <div><p className="section-kicker">TOOLKIT</p><h2>Tools I use to turn ideas into products.</h2></div>
          <p>I care more about knowing when and why to use a tool than collecting a giant list of technologies.</p>
        </div>
        <div className="skills-grid">
          {groups.map(([title, items]) => (
            <div className="skill-group" key={title}>
              <h3>{title}</h3>
              <div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="learning-banner"><span>Currently deepening</span><strong>Data structures · software engineering · AI/ML · product thinking</strong></div>
      </div>
    </section>
  );
}
