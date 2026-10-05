"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal that fails safe.
 *
 * The hidden state is applied by CSS only under `html.js`, which is set by an
 * inline script in the layout. If JS never runs, the content simply renders
 * visible. A fallback timer also forces visibility if the observer misfires,
 * so body text can never be stranded at low opacity.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const fallback = window.setTimeout(() => setVisible(true), 1500);

    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}
