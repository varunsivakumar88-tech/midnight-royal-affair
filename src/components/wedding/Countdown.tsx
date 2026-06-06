import { useEffect, useState } from "react";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown({ target }: { target: Date }) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {items.map(([label, val], i) => (
        <div key={label} className="flex items-center">
          <div className="glass-card flex w-[68px] flex-col items-center rounded-xl px-3 py-3 sm:w-[88px] sm:py-4">
            <span
              className="font-display text-2xl tabular-nums text-ivory sm:text-4xl"
              suppressHydrationWarning
            >
              {mounted ? String(val).padStart(2, "0") : "00"}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold-bright/70 sm:text-xs">
              {label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="mx-1 hidden text-gold/60 sm:inline">·</span>
          )}
        </div>
      ))}
    </div>
  );
}