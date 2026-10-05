export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-violet/10 blur-[140px]" />
    </div>
  );
}
