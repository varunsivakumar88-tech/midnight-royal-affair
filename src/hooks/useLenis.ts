import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.4,
        smoothWheel: true,
        lerp: 0.085,
      });
      lenisInstance = lenis;
      const loop = (t: number) => {
        lenis.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenisInstance?.destroy();
    };
  }, []);
}