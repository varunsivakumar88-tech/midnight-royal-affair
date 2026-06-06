import { useEffect, useRef } from "react";
import petalUrl from "@/assets/petal.png";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Particle = {
  x: number; y: number; vx: number; vy: number; r: number;
  alpha: number; rot: number; vr: number; kind: "spark" | "petal";
};

export function ParticleField({ density = 50, petals = 10 }: { density?: number; petals?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const petalImg = new Image();
    petalImg.src = petalUrl;

    const particles: Particle[] = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15, vy: -Math.random() * 0.3 - 0.05,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        rot: 0, vr: 0, kind: "spark",
      });
    }
    for (let i = 0; i < petals; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.5 + 0.2,
        r: Math.random() * 18 + 14,
        alpha: Math.random() * 0.5 + 0.3,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.01,
        kind: "petal",
      });
    }

    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (p.kind === "spark") {
          if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
          if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          grad.addColorStop(0, `rgba(245,210,122,${p.alpha})`);
          grad.addColorStop(1, "rgba(245,210,122,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          if (p.y > h + 30) { p.y = -30; p.x = Math.random() * w; }
          if (!petalImg.complete) continue;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.drawImage(petalImg, -p.r, -p.r, p.r * 2, p.r * 2);
          ctx.restore();
        }
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [density, petals, reduced]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}