import { ArrowUpRight, Check } from "lucide-react";
import { profile, services } from "@/lib/data";

export function About() {
  return (
    <>
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <p className="section-kicker">ABOUT</p>
            <h2>Early career.<br /><span>Serious about the work.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead-paragraph">I learn by building. Each project is an opportunity to solve a real problem, improve the interface and ship something people can actually use.</p>
            <p>I&apos;m currently studying Computer Science while developing websites, AI-assisted workflows and small products independently.</p>
            <p>My direction is software engineering and AI, with a particular interest in making complex technology feel simple and useful.</p>
            <div className="about-actions">
              <a href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a>
              <a href={profile.emailCompose} target="_blank" rel="noreferrer">Email me <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">WHAT I CAN HELP WITH</p>
            <h2>Clear work. Clear outcomes.</h2>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={service.title}>
                <span className="service-number">0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-check"><Check size={14} /> Practical, responsive, focused</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
