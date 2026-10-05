import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-kicker">GET IN TOUCH</p>
            <h2>Have a project in mind?</h2>
            <p>If you need a website, have an early product idea, or want to discuss an AI feature, send me a message. I&apos;ll reply personally.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={profile.emailCompose} target="_blank" rel="noreferrer">
              <Mail size={17} />
              <span>{profile.email}</span>
              <ArrowUpRight size={17} />
            </a>
            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a>
              <a href={profile.emailCompose} target="_blank" rel="noreferrer">Open Gmail <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
