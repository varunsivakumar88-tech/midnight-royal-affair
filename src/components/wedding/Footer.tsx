import { Monogram } from "./Monogram";
import { wedding } from "@/lib/wedding-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 py-20 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6">
        <Monogram size={140} glow={false} />
        <h3 className="mt-6 font-script text-3xl italic text-ivory">
          {wedding.couple.groom} <span className="text-gold-gradient not-italic">&</span> {wedding.couple.bride}
        </h3>
        <div className="my-6 h-px w-32 gold-divider" />
        <p className="font-serif-display text-ivory/70">
          With love, gratitude, and the blessings of our families —
          thank you for being part of our forever.
        </p>
        <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-ivory/35">
          ✦  {wedding.dateLabel}  ·  {wedding.cityLabel}  ✦
        </p>
      </div>
    </footer>
  );
}