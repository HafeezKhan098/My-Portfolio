const lines = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "hafeez-ullah — aspiring computer scientist" },
  { prompt: "$", text: "status --current" },
  { prompt: ">", text: "learning::ai  building::projects" },
  { prompt: "$", text: "next()" },
  { prompt: ">", text: "preparing for undergraduate study in cs/ai" },
];

const nodes = [
  { cx: 40, cy: 36, r: 3, delay: 0 },
  { cx: 150, cy: 20, r: 2.5, delay: 0.6 },
  { cx: 230, cy: 70, r: 3.5, delay: 1.1 },
  { cx: 90, cy: 110, r: 2.5, delay: 1.6 },
  { cx: 200, cy: 140, r: 3, delay: 0.3 },
  { cx: 20, cy: 150, r: 2, delay: 1.9 },
];

const edges = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
  [3, 5],
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient node graph, sits behind the terminal card */}
      <svg
        aria-hidden="true"
        viewBox="0 0 250 170"
        className="absolute -right-8 -top-10 h-48 w-64 opacity-70 sm:-right-14 sm:-top-14 sm:h-56 sm:w-72"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#5E7CFF"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="#8B9CFF"
            className="animate-floaty motion-reduce:animate-none"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </svg>

      {/* Terminal card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-base-surface/90 shadow-glow backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-border/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="ml-3 font-mono text-xs text-ink-faint">
            hafeez@dev — zsh
          </span>
        </div>

        <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
          {lines.map((line, i) => (
            <div
              key={i}
              className="animate-fade-up flex gap-2"
              style={{ animationDelay: `${0.3 + i * 0.22}s` }}
            >
              <span
                className={
                  line.prompt === "$" ? "text-accent-soft" : "text-ink-faint"
                }
              >
                {line.prompt}
              </span>
              <span
                className={line.prompt === "$" ? "text-ink" : "text-ink-muted"}
              >
                {line.text}
                {i === lines.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-3.5 w-[7px] translate-y-[2px] animate-blink bg-accent-soft"
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
