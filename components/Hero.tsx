import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI · WEB · PRODUCT DEVELOPMENT</p>
          <h1>
            I build websites and
            <br />
            <span>digital products that solve real problems.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Hafeez, a Computer Science student and independent developer building modern websites and practical AI products from Pakistan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href={profile.emailCompose} target="_blank" rel="noreferrer">Email me</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={14} /> GitHub</a>
            <span className="hero-status"><i /> Open to selected projects</span>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <img src={profile.photoUrl} alt="Portrait of Hafeez Ullah" />
          </div>
          <div className="portrait-caption">
            <div><strong>Hafeez Ullah</strong><span>{profile.role}</span></div>
            <span className="portrait-year">2026</span>
          </div>
        </div>
      </div>
      <a href="#work" className="scroll-cue"><ArrowDown size={15} /> Selected work</a>
    </section>
  );
}
