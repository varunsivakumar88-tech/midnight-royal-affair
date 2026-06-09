import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { MandalaBackdrop } from "./MandalaBackdrop";
import { families } from "@/lib/wedding-data";

export function Family() {
  return (
    <section id="family" className="relative overflow-hidden py-32">
      <MandalaBackdrop className="left-1/2 top-10 -translate-x-1/2" size={900} opacity={0.04} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold-bright/80">
            ◆  Our Families  ◆
          </div>
          <h2 className="mt-4 font-serif-display text-5xl text-ivory sm:text-6xl">
            Two worlds, <span className="font-script italic text-gold-gradient">one home</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            With the love and blessings of those who raised us, we invite you to celebrate
            the joining of two families across continents, cultures and lifetimes.
          </p>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {families.map((f, i) => (
            <GlassCard key={f.side} delay={i * 0.15} className="p-10 text-center">
              <Heart className="mx-auto h-5 w-5 text-gold-bright" />
              <div className="mt-4 text-[10px] uppercase tracking-[0.45em] text-gold-bright/80">
                {f.side}
              </div>
              <h3 className="mt-5 font-serif-display text-2xl text-ivory sm:text-3xl">
                {f.parents}
              </h3>
              <div className="mx-auto my-6 h-px w-16 gold-divider" />
              <p className="font-script text-lg italic text-ivory/75">{f.note}</p>
              <div className="mt-6 text-xs uppercase tracking-[0.35em] text-ivory/45">
                Siblings
              </div>
              <ul className="mt-3 space-y-1 text-sm text-ivory/75">
                {f.siblings.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}