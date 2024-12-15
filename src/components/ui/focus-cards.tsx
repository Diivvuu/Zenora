"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = {
  index: number;
  title: string;
  description: string;
  src: string;
  link?: string;
  color?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 w-[60%] md:h-[22rem] md:w-[100%] mx-auto transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className={cn(
            "object-cover absolute inset-0 transition-transform duration-300",
            hovered === index ? "scale-110" : "scale-100"
          )}
        />

        {/* Title Centered */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="tertiary-heading highlighted-text-light text-center text-white text-2xl md:text-3xl font-medium">
            {card.title}
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 z-30 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
