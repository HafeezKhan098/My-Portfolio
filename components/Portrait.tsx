"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

export function Portrait() {
  const [failed, setFailed] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!profile.photoUrl) return null;

  return (
    <div className="relative mx-auto w-full max-w-[260px] lg:mx-0">
      {/* soft accent glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl"
      />

      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-base-surface">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center font-display text-4xl font-semibold text-ink-faint">
            {initials}
          </div>
        ) : (
          <Image
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 1024px) 260px, 260px"
            className="object-cover"
            onError={() => setFailed(true)}
            priority={false}
          />
        )}
      </div>

      <p className="mt-4 text-center text-sm text-ink lg:text-left">
        {profile.name}
      </p>
      <p className="text-center text-[13px] text-ink-faint lg:text-left">
        {profile.location}
      </p>
    </div>
  );
}
