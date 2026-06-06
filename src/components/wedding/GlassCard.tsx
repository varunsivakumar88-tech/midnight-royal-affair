import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`glass-card group relative overflow-hidden rounded-2xl p-8 transition-shadow hover:shadow-[0_40px_100px_-30px_rgba(212,175,55,0.35)] ${className}`}
    >
      {/* corner ornaments */}
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-gold/60" />
      <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/60" />
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-bright/60 to-transparent" />
      {children}
    </motion.div>
  );
}