import { education } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Education" />
        </Reveal>

        <div className="mt-12 space-y-4">
          {education.map((entry) => (
            <Reveal key={entry.school}>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-base-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-lg border border-border-soft bg-base-raised p-2.5 text-accent-soft">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                      {entry.school}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      {entry.credential}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-6 pl-12 sm:pl-0 sm:text-right">
                  <div>
                    <p className="text-xs text-ink-faint">
                      Year
                    </p>
                    <p className="mt-1 font-mono text-sm text-ink">
                      {entry.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-faint">
                      Score
                    </p>
                    <p className="mt-1 font-mono text-sm text-ink">
                      {entry.score}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
