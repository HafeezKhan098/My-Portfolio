import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-head split-head">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2>Things I&apos;ve actually built.</h2>
          </div>
          <p>Real products, real interfaces and real deployment—not a collection of mockups.</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.name} className={`project-row ${project.featured ? "featured" : ""}`}>
              <a className="project-visual" href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                {project.previewUrl ? (
                  <div className="project-live-wrap" aria-hidden="true">
                    <iframe
                      className="project-live"
                      src={project.previewUrl}
                      title={`${project.name} live preview`}
                      loading="lazy"
                      tabIndex={-1}
                    />
                    <div className="project-live-shade" />
                  </div>
                ) : (
                  <div className="project-placeholder">
                    <span>{project.type}</span>
                    <strong>{project.name}</strong>
                    <small>View project ↗</small>
                  </div>
                )}
                <span className="project-index">{project.number}</span>
                <span className="project-view">Open project <ArrowUpRight size={15} /></span>
              </a>
              <div className="project-info">
                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-result"><span /> {project.result}</div>
                <div className="tag-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ExternalLink size={15} /></a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source <GithubIcon size={15} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a className="all-work" href={profileGithub()} target="_blank" rel="noreferrer">Explore all public work on GitHub <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}

function profileGithub() {
  return "https://github.com/hafeezkhan098";
}
