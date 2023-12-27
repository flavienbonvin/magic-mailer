"use client";

import H1 from "@/components/typography/h1";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";

const colors = [
  ["#FF3E41", "#FF4D80"],
  ["#8F95D3", "#883955"],
];

const triggerConfetti = (value: number) => {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors[value % 2],
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors[value % 2],
  });
};

export default function Page() {
  for (var i = 0; i < 100; i++) {
    setTimeout(() => requestAnimationFrame(() => triggerConfetti(i)), 10 * i);
  }

  return (
    <div className="flex flex-col gap-12 text-center">
      <section className="flex justify-between">
        <PartyPopper size={64} strokeWidth={1.5} color={colors[0][1]} />
        <PartyPopper size={64} strokeWidth={1.5} color={colors[0][1]} />
        <PartyPopper size={64} strokeWidth={1.5} color={colors[0][1]} />
      </section>
      <section className="flex flex-col gap-2">
        <H1>Succès!</H1>
        <p>Les informations ont été sauvegardées!</p>
      </section>
    </div>
  );
}
