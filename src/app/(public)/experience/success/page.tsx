"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { Check } from "lucide-react";

const colors = [
  ["#2A4E97", "#FFFFFF"],
  ["#1C1C24", "#1C1C24"],
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

export default function Page({ searchParams }: { searchParams: { firstName?: string } }) {
  for (var i = 0; i < 100; i++) {
    setTimeout(() => requestAnimationFrame(() => triggerConfetti(i)), 10 * i);
  }

  return (
    <Card className="bg-grayExperience sm:w-[500px]">
      <CardHeader>
        <CardDescription className="text-white">
          <div className="bg-blueExperience mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white">
            <Check size={24} />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-white">
        {searchParams.firstName ? <p>Merci {searchParams.firstName}!</p> : <p>Merci!</p>}
        <p>Le spectacle va commencer dans un instant, installez-vous confortablement...</p>
      </CardContent>
    </Card>
  );
}
