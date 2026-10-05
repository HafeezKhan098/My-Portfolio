"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-base-surface/60 p-6 transition-colors duration-300 hover:border-accent-dim hover:shadow-glow sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.name}
        </h3>
        <span className="shrink-0 rounded-full border border-accent-dim bg-accent/10 px-3 py-1 text-xs text-accent-soft">
          {project.status}
        </span>
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-base-raised px-2.5 py-1 font-mono text-[12px] text-ink-faint"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-4 border-t border-border-soft pt-5">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-soft"
          >
            View live
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <span className="text-sm text-ink-faint">Not live yet</span>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <GithubIcon size={15} />
            Source
          </a>
        )}
      </div>
    </motion.div>
  );
}
