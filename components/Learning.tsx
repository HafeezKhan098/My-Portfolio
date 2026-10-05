import { learning } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Learning() {
  return (
    <section id="learning" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Currently learning"
            description="What I'm actively working through right now, in no particular order of difficulty."
          />
        </Reveal>

        <div className="relative mt-12 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent-dim via-border to-transparent"
          />
          <ul className="space-y-7">
            {learning.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="relative flex items-center gap-5 pl-0">
                  <span className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-accent/15" />
                    <span className="relative h-2 w-2 rounded-full bg-accent-soft" />
                  </span>
                  <span className="text-[15px] text-ink-muted">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
