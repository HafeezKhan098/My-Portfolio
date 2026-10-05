import { experience, leadership } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Users } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <Reveal>
              <SectionHeading title="Experience" />
            </Reveal>

            <div className="mt-8 space-y-4">
              {experience.map((item) => (
                <Reveal key={item.role}>
                  <div className="rounded-2xl border border-border bg-base-surface/60 p-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg border border-border-soft bg-base-raised p-2 text-accent-soft">
                        <Briefcase size={16} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-ink-faint">
                          {item.org} · {item.period}
                        </p>
                        <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionHeading title="Leadership" />
            </Reveal>

            <div className="mt-8 space-y-4">
              {leadership.map((item) => (
                <Reveal key={item.role}>
                  <div className="rounded-2xl border border-border bg-base-surface/60 p-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg border border-border-soft bg-base-raised p-2 text-accent-soft">
                        <Users size={16} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-ink-faint">
                          {item.org}
                        </p>
                        <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
