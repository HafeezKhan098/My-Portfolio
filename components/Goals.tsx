import { goals } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Goals() {
  return (
    <section id="goals" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="rounded-3xl border border-border bg-base-surface/40 px-6 py-14 sm:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {goals.heading}
              </h2>
            </Reveal>
            <div className="space-y-5">
              {goals.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
